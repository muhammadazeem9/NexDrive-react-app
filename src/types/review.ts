export type ReviewStatus = "Published" | "Pending" | "Hidden";

export interface Review {
  id: string;
  customer: {
    name: string;
    avatar: string;
  };
  vehicle: string;
  rating: number;
  comment: string;
  date: string;
  status: ReviewStatus;
}
