import type { Review } from "../types/review";

export const reviews: Review[] = [
  {
    id: "REV-001",
    customer: {
      name: "Ali Khan",
      avatar: "/images/users/user-1.jpg",
    },
    vehicle: "BMW M4 Competition",
    rating: 5,
    comment:
      "Amazing car and excellent rental experience. The vehicle was clean and delivered on time.",
    date: "Aug 21, 2026",
    status: "Published",
  },
  {
    id: "REV-002",
    customer: {
      name: "Sara Ahmed",
      avatar: "/images/users/user-3.jpg",
    },
    vehicle: "Mercedes AMG GT",
    rating: 4,
    comment:
      "Great vehicle and smooth booking process. Customer support was also very helpful.",
    date: "Aug 19, 2026",
    status: "Published",
  },
  {
    id: "REV-003",
    customer: {
      name: "Ahmed Raza",
      avatar: "/images/users/user-2.jpg",
    },
    vehicle: "Audi R8",
    rating: 5,
    comment:
      "One of the best rental experiences I have had. Highly recommended.",
    date: "Aug 18, 2026",
    status: "Pending",
  },
  {
    id: "REV-004",
    customer: {
      name: "Usman Ali",
      avatar: "/images/users/user-4.jpg",
    },
    vehicle: "Porsche 911",
    rating: 3,
    comment: "The car was good, but pickup took longer than expected.",
    date: "Aug 16, 2026",
    status: "Pending",
  },
  {
    id: "REV-005",
    customer: {
      name: "Hassan Malik",
      avatar: "/images/users/user-5.jpg",
    },
    vehicle: "Range Rover Sport",
    rating: 2,
    comment: "The vehicle was not as clean as expected when I received it.",
    date: "Aug 14, 2026",
    status: "Hidden",
  },
];
