import type { Booking } from "../types/booking";

export const bookings: Booking[] = [
  {
    id: "BK-1001",
    customer: {
      name: "Ali Khan",
      email: "ali@example.com",
      avatar: "/images/users/user-1.jpg",
    },
    vehicle: {
      name: "BMW M4 Competition",
      image: "/images/cars/bmw-m4.jpg",
    },
    pickupDate: "Aug 20, 2026",
    returnDate: "Aug 23, 2026",
    amount: 960,
    status: "Confirmed",
  },

  {
    id: "BK-1002",
    customer: {
      name: "Ahmed Raza",
      email: "ahmed@example.com",
      avatar: "/images/users/user-2.jpg",
    },
    vehicle: {
      name: "Audi R8",
      image: "/images/cars/audi-r8.jpg",
    },
    pickupDate: "Aug 21, 2026",
    returnDate: "Aug 24, 2026",
    amount: 1200,
    status: "Pending",
  },

  {
    id: "BK-1003",
    customer: {
      name: "Sara Ahmed",
      email: "sara@example.com",
      avatar: "/images/users/user-3.jpg",
    },
    vehicle: {
      name: "Mercedes AMG GT",
      image: "/images/cars/mercedes-amg.jpg",
    },
    pickupDate: "Aug 15, 2026",
    returnDate: "Aug 18, 2026",
    amount: 1050,
    status: "Completed",
  },

  {
    id: "BK-1004",
    customer: {
      name: "Usman Ali",
      email: "usman@example.com",
      avatar: "/images/users/user-4.jpg",
    },
    vehicle: {
      name: "Porsche 911",
      image: "/images/cars/porsche-911.jpg",
    },
    pickupDate: "Aug 12, 2026",
    returnDate: "Aug 15, 2026",
    amount: 1350,
    status: "Cancelled",
  },
];
