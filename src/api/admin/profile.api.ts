import api from "../axios";

export interface AdminProfile {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: "user" | "admin";
  avatar?: string;
}

export interface UpdateProfilePayload {
  name: string;
  email: string;
  phone?: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const getMyProfile = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

export const updateProfile = async (data: UpdateProfilePayload) => {
  const response = await api.put("/auth/profile", data);

  return response.data;
};

export const changePassword = async (data: ChangePasswordPayload) => {
  const response = await api.put("/auth/password", data);

  return response.data;
};
