import api from "../axios";

// =========================
// Types
// =========================

export type BookingStatus =
  "pending" | "confirmed" | "active" | "completed" | "cancelled";

export interface BookingUser {
  _id: string;
  name: string;
  email: string;
}

export interface BookingVehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
}

export interface AdminBooking {
  _id: string;

  user: BookingUser;

  vehicle: BookingVehicle;

  startDate: string;
  endDate: string;

  status: BookingStatus;

  totalDays: number;
  totalPrice: number;

  createdAt: string;
  updatedAt: string;
}

// =========================
// Get all bookings
// =========================

export const getAdminBookings = async (): Promise<AdminBooking[]> => {
  const response = await api.get("/bookings/all-bookings");

  return response.data.bookings;
};

// =========================
// Get booking by ID
// =========================

export const getAdminBookingById = async (
  id: string,
): Promise<AdminBooking> => {
  const response = await api.get(`/bookings/${id}`);

  return response.data.booking;
};

// =========================
// Update booking status
// =========================

export const updateBookingStatus = async (
  id: string,
  status: BookingStatus,
): Promise<AdminBooking> => {
  const response = await api.patch(`/bookings/${id}/status`, {
    status,
  });

  return response.data.booking;
};
