export type Vehicle = {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  rating: number;
};

export type VehicleResponse = {
  success: boolean;
  count: number;
  vehicles: Vehicle[];
  totalPages: number;
  totalVehicles: number;
  currentPage: number;
  itemsPerPage: number;
};

export type SingleVehicleResponse = {
  success: boolean;
  vehicle: Vehicle;
};
