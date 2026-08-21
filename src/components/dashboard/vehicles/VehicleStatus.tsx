import type { VehicleStatusType } from "../../../types/vehicle";

interface VehicleStatusProps {
  status: VehicleStatusType;
}

const VehicleStatus = ({ status }: VehicleStatusProps) => {
  const styles: Record<VehicleStatusType, string> = {
    Available: "bg-emerald-400/10 text-emerald-400",
    Booked: "bg-sky-400/10 text-sky-400",
    Maintenance: "bg-yellow-400/10 text-yellow-400",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default VehicleStatus;
