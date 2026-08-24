import type { CustomerStatus as Status } from "../../../types/customer";

interface CustomerStatusProps {
  status: Status;
}

const CustomerStatus = ({ status }: CustomerStatusProps) => {
  const styles: Record<Status, string> = {
    Active: "bg-emerald-400/10 text-emerald-400",
    Inactive: "bg-slate-400/10 text-slate-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default CustomerStatus;
