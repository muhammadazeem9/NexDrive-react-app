import type { IconType } from "react-icons";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: string;
  icon: IconType;
  iconClass: string;
}

const AnalyticsCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconClass,
}: AnalyticsCardProps) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center justify-between">
        <div className={`rounded-xl p-3 ${iconClass}`}>
          <Icon size={22} />
        </div>

        <span className="text-xs font-medium text-emerald-400">{change}</span>
      </div>

      <p className="mt-5 text-xs text-slate-500">{title}</p>

      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

export default AnalyticsCard;
