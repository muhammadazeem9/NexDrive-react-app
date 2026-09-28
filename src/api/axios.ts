import axios, { AxiosError } from "axios";
import type { InternalAxiosRequestConfig } from "axios";

interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

interface FailedRequest {
  resolve: () => void;
  reject: (error: unknown) => void;
}

const api = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("API URL:", import.meta.env.API_URL);

let isRefreshing = false;

let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown = null): void => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableRequestConfig;

    if (
      error.response?.status !== 401 ||
      originalRequest._retry ||
      originalRequest.url?.includes("/auth/refresh")
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    // If another request is already refreshing,
    // wait until refresh is completed.
    if (isRefreshing) {
      return new Promise<void>((resolve, reject) => {
        failedQueue.push({
          resolve,
          reject,
        });
      }).then(() => {
        return api(originalRequest);
      });
    }

    isRefreshing = true;

    try {
      await api.post("/auth/refresh");

      // Tell waiting requests that refresh succeeded
      processQueue();

      // Retry original request
      return api(originalRequest);
    } catch (refreshError) {
      // Tell waiting requests that refresh failed
      processQueue(refreshError);

      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default api;
