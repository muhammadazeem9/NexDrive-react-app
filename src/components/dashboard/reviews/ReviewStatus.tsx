import type { ReviewStatus as Status } from "../../../types/review";

interface ReviewStatusProps {
  status: Status;
}

const ReviewStatus = ({ status }: ReviewStatusProps) => {
  const styles: Record<Status, string> = {
    Published: "bg-emerald-400/10 text-emerald-400",
    Pending: "bg-yellow-400/10 text-yellow-400",
    Hidden: "bg-red-400/10 text-red-400",
  };
  //   console.log("ReviewStatus", status, styles[status]);
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default ReviewStatus;
