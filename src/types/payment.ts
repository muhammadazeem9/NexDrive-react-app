export type PaymentStatus = "Paid" | "Pending" | "Refunded" | "Failed";

export type PaymentMethod = "Card" | "Bank Transfer" | "Cash" | "PayPal";

export interface Payment {
  id: string;

  customer: {
    name: string;
    email: string;
    avatar: string;
  };

  bookingId: string;

  vehicle: string;

  amount: number;

  method: PaymentMethod;

  status: PaymentStatus;

  date: string;
}
