import type { PaymentStatus as Status } from "../../../types/payment";

interface PaymentStatusProps {
  status: Status;
}

const PaymentStatus = ({ status }: PaymentStatusProps) => {
  const styles: Record<Status, string> = {
    Paid: "bg-emerald-400/10 text-emerald-400",
    Pending: "bg-yellow-400/10 text-yellow-400",
    Refunded: "bg-purple-400/10 text-purple-400",
    Failed: "bg-red-400/10 text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default PaymentStatus;
