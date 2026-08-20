// interface type for statcards of dshboard
export interface StatCardData {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: "revenue" | "bookings" | "vehicles" | "customers";
  positive: boolean;
}

// interface type for revenuedata of dashboard
export interface RevenueData {
  month: string;
  revenue: number;
  bookings: number;
}

// interface type for popularVehicle of dashboard
export interface PopularVehicle {
  id: number;
  name: string;
  image: string;
  bookings: number;
  rating: number;
  pricePerDay: number;
}

// interface type for recentbooking of dashboard
export interface RecentBooking {
  id: string;
  customer: {
    name: string;
    avatar: string;
  };
  vehicle: string;
  date: string;
  amount: number;
  status: "Confirmed" | "Pending" | "Completed" | "Cancelled";
}