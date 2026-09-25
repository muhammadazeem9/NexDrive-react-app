export interface StatCardData {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: "revenue" | "bookings" | "vehicles" | "customers";
  positive: boolean;
}

export interface RevenueData {
  month: string;
  revenue: number;
  bookings: number;
}

export interface PopularVehicle {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  bookings: number;
  pricePerDay: number;
}

export interface RecentBooking {
  id: string;
  customer: {
    name: string;
    avatar: string;
  };
  vehicle: string;
  date: string;
  amount: number;
  status: "Confirmed" | "Pending" | "Active" | "Completed" | "Cancelled";
}

// Backend dashboard response

export interface DashboardStats {
  totalVehicles: number;
  totalBookings: number;
  totalCustomers: number;
  totalRevenue: number;
  pendingBookings: number;
  confirmedBookings: number;
  activeBookings: number;
  completedBookings: number;
  cancelledBookings: number;
}

export interface DashboardUser {
  _id: string;
  name: string;
  email: string;
}

export interface DashboardVehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
}

export interface DashboardBooking {
  _id: string;
  user: DashboardUser;
  vehicle: DashboardVehicle;
  startDate: string;
  endDate: string;
  status: "pending" | "confirmed" | "active" | "completed" | "cancelled";
  totalDays: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardResponse {
  success: boolean;
  stats: DashboardStats;
  recentBookings: DashboardBooking[];
}
