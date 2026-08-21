import type { BookingStatus as Status } from "../../../types/booking";

interface BookingStatusProps {
  status: Status;
}

const BookingStatus = ({ status }: BookingStatusProps) => {
  const styles: Record<Status, string> = {
    Confirmed: "bg-emerald-400/10 text-emerald-400",
    Pending: "bg-yellow-400/10 text-yellow-400",
    Completed: "bg-sky-400/10 text-sky-400",
    Cancelled: "bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default BookingStatus;
