export type BookingStatus =
  "Confirmed" | "Pending" | "Active" | "Completed" | "Cancelled";

export interface Booking {
  id: string;

  customer: {
    name: string;
    email: string;
    avatar: string;
  };

  vehicle: {
    name: string;
    image: string;
  };

  pickupDate: string;
  returnDate: string;

  amount: number;

  status: BookingStatus;
}
