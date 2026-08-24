import type { Payment } from "../types/payment";

export const payments: Payment[] = [
  {
    id: "TXN-10001",
    customer: {
      name: "Ali Khan",
      email: "ali@example.com",
      avatar: "/images/users/user-1.jpg",
    },
    bookingId: "BK-1001",
    vehicle: "BMW M4 Competition",
    amount: 960,
    method: "Card",
    status: "Paid",
    date: "Aug 20, 2026",
  },

  {
    id: "TXN-10002",
    customer: {
      name: "Ahmed Raza",
      email: "ahmed@example.com",
      avatar: "/images/users/user-2.jpg",
    },
    bookingId: "BK-1002",
    vehicle: "Audi R8",
    amount: 1200,
    method: "Bank Transfer",
    status: "Pending",
    date: "Aug 21, 2026",
  },

  {
    id: "TXN-10003",
    customer: {
      name: "Sara Ahmed",
      email: "sara@example.com",
      avatar: "/images/users/user-3.jpg",
    },
    bookingId: "BK-1003",
    vehicle: "Mercedes AMG GT",
    amount: 1050,
    method: "Card",
    status: "Paid",
    date: "Aug 18, 2026",
  },

  {
    id: "TXN-10004",
    customer: {
      name: "Usman Ali",
      email: "usman@example.com",
      avatar: "/images/users/user-4.jpg",
    },
    bookingId: "BK-1004",
    vehicle: "Porsche 911",
    amount: 1350,
    method: "PayPal",
    status: "Refunded",
    date: "Aug 15, 2026",
  },

  {
    id: "TXN-10005",
    customer: {
      name: "Hassan Malik",
      email: "hassan@example.com",
      avatar: "/images/users/user-5.jpg",
    },
    bookingId: "BK-1005",
    vehicle: "Range Rover Sport",
    amount: 840,
    method: "Cash",
    status: "Paid",
    date: "Aug 14, 2026",
  },
];
