export type VehicleStatusType = "Available" | "Booked" | "Maintenance";

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  pricePerDay: number;
  bookings: number;
  status: VehicleStatusType;
}
