import type { StatCardData } from "../types/dashboard";
import type { RevenueData } from "../types/dashboard";
import type { PopularVehicle } from "../types/dashboard";
import type { RecentBooking } from "../types/dashboard";

// data for dashboard stat
export const dashboardStats: StatCardData[] = [
  {
    title: "Total Revenue",
    value: "$24,580",
    change: "+12.5%",
    description: "vs last month",
    icon: "revenue",
    positive: true,
  },
  {
    title: "Total Bookings",
    value: "1,284",
    change: "+8.2%",
    description: "vs last month",
    icon: "bookings",
    positive: true,
  },
  {
    title: "Available Vehicles",
    value: "56",
    change: "+4",
    description: "this month",
    icon: "vehicles",
    positive: true,
  },
  {
    title: "Total Customers",
    value: "842",
    change: "+15.4%",
    description: "vs last month",
    icon: "customers",
    positive: true,
  },
];  

// data for revenue section
export const revenueData: RevenueData[] = [
  {
    month: "Jan",
    revenue: 8200,
    bookings: 82,
  },
  {
    month: "Feb",
    revenue: 10500,
    bookings: 96,
  },
  {
    month: "Mar",
    revenue: 12800,
    bookings: 114,
  },
  {
    month: "Apr",
    revenue: 11200,
    bookings: 101,
  },
  {
    month: "May",
    revenue: 16400,
    bookings: 142,
  },
  {
    month: "Jun",
    revenue: 18700,
    bookings: 158,
  },
  {
    month: "Jul",
    revenue: 21300,
    bookings: 176,
  },
  {
    month: "Aug",
    revenue: 24580,
    bookings: 201,
  },
];

// data for popular vehicles
export const popularVehicles: PopularVehicle[] = [
  {
    id: 1,
    name: "BMW M4 Competition",
    image: "/images/hero/hero1.jpg",
    bookings: 48,
    rating: 4.9,
    pricePerDay: 320,
  },
  {
    id: 2,
    name: "Mercedes AMG GT",
    image: "/images/hero/hero2.jpg",
    bookings: 42,
    rating: 4.8,
    pricePerDay: 350,
  },
  {
    id: 3,
    name: "Audi R8",
    image: "/images/hero/hero3.jpg",
    bookings: 37,
    rating: 4.9,
    pricePerDay: 400,
  },
];

// data for recent book 
export const recentBookings: RecentBooking[] = [
  {
    id: "BK-1001",
    customer: {
      name: "Ali Khan",
      avatar: "/images/users/user-1.jpg",
    },
    vehicle: "BMW M4 Competition",
    date: "Aug 20, 2026",
    amount: 320,
    status: "Confirmed",
  },
  {
    id: "BK-1002",
    customer: {
      name: "Ahmed Raza",
      avatar: "/images/users/user-2.jpg",
    },
    vehicle: "Audi R8",
    date: "Aug 19, 2026",
    amount: 400,
    status: "Pending",
  },
  {
    id: "BK-1003",
    customer: {
      name: "Sara Ahmed",
      avatar: "/images/users/user-3.jpg",
    },
    vehicle: "Mercedes AMG GT",
    date: "Aug 18, 2026",
    amount: 350,
    status: "Completed",
  },
  {
    id: "BK-1004",
    customer: {
      name: "Usman Ali",
      avatar: "/images/users/user-4.jpg",
    },
    vehicle: "BMW M4 Competition",
    date: "Aug 17, 2026",
    amount: 320,
    status: "Cancelled",
  },
];
