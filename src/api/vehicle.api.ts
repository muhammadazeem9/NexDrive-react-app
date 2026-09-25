import api from "./axios";
import type {
  SingleVehicleResponse,
  VehicleResponse,
} from "../types/backend/vehicle";

export type VehicleFilters = {
  search?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sort?: "price_asc" | "price_desc" | "rating" | "newest";
};

export const getVehicles = async (filters?: VehicleFilters) => {
  const response = await api.get<VehicleResponse>("/vehicles", {
    params: filters,
  });

  return response.data;
};

export const getVehicleById = async (id: string) => {
  const response = await api.get<SingleVehicleResponse>(`/vehicles/${id}`);

  return response.data.vehicle;
};
