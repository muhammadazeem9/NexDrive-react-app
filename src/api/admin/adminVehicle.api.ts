import api from "../axios";

export interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface vehiclePayload {
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
}

export const getAdminVehicles = async (): Promise<Vehicle[]> => {
  const response = await api.get("/vehicles");

  return response.data.vehicles;
};

export const getAdminVehicleById = async (id: string): Promise<Vehicle> => {
  const response = await api.get(`/vehicles/${id}`);

  return response.data.vehicle;
};

export const createVehicle = async (data: vehiclePayload): Promise<Vehicle> => {
  const response = await api.post("/vehicles", data);

  return response.data.vehicle;
};

export const updateVehicle = async (
  id: string,
  data: vehiclePayload,
): Promise<Vehicle> => {
  const response = await api.put(`/vehicles/${id}`, data);

  return response.data.updateVehicle;
};

export const deleteVehicle = async (id: string) => {
  const response = await api.delete(`/vehicles/${id}`);

  return response.data;
};
