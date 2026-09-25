import api from "../axios";
import type { DashboardResponse, PopularVehicle } from "../../types/dashboard";

export const getDashboardStats = async (): Promise<DashboardResponse> => {
  const response = await api.get("/admin/dashboard");

  return response.data;
};

export interface RevenueItem {
  _id: string;
  revenue: number;
  bookings: number;
}

export interface RevenueResponse {
  success: boolean;
  period: "7D" | "30D" | "1Y";
  revenue: RevenueItem[];
}

export const getRevenueData = async (
  period: "7D" | "30D" | "1Y",
): Promise<RevenueResponse> => {
  const response = await api.get("/admin/revenue", {
    params: { period },
  });

  return response.data;
};

export const getPopularVehicles = async (): Promise<PopularVehicle[]> => {
  const response = await api.get("/admin/popular-vehicles");

  return response.data.vehicles;
};
