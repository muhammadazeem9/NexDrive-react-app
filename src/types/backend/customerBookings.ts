export interface CustomerBookingVehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
}

export interface CustomerBooking {
  _id: string;
  startDate: string;
  endDate: string;
  status: "pending" | "confirmed" | "active" | "completed" | "cancelled";
  totalDays: number;
  totalPrice: number;
  vehicle: CustomerBookingVehicle;
}
