import api from "./axios";

export interface CreateBookingData {
  vehicle: string;
  startDate: string;
  endDate: string;
}

export interface Booking {
  _id: string;
  user: string;
  vehicle: string;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBookingResponse {
  message: string;
  booking: Booking;
}

export const createBooking = async (
  data: CreateBookingData,
): Promise<CreateBookingResponse> => {
  const response = await api.post("/bookings", data);

  return response.data;
};

export const getMyBookings = async () => {
  const response = await api.get("/bookings/my-bookings");

  return response.data;
};

export const cancelBooking = async (bookingId: string) => {
  const response = await api.patch(`/bookings/${bookingId}/cancel-booking`);
  return response.data;
};
