export type PaymentMethod = "Cash" | "Card" | "Bank Transfer" | "PayPal";

export type PaymentStatus = "Pending" | "Paid" | "Refunded" | "Failed";

export interface PaymentUser {
  _id: string;
  name: string;
  email: string;
}

export interface PaymentVehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
}

export interface PaymentBooking {
  _id: string;
  vehicle: PaymentVehicle;
  totalDays: number;
  totalPrice: number;
  startDate: string;
  endDate: string;
}

export interface Payment {
  _id: string;
  booking: PaymentBooking;
  user: PaymentUser;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GetPaymentsResponse {
  success: boolean;
  message: string;
  payments: Payment[];
  pagination: PaymentPagination;
}

export interface GetPaymentsParams {
  search?: string;
  status?: PaymentStatus | "All";
  method?: PaymentMethod | "All";
  page?: number;
  limit?: number;
}

export interface CreatePaymentPayload {
  bookingId: string;
  method: PaymentMethod;
  transactionId?: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  message: string;
  payment: Payment;
}
