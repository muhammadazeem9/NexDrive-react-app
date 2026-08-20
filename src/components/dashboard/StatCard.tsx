import type { StatCardData } from "../../types/dashboard";
import { FaArrowUpRightFromSquare, FaCalendarDays } from "react-icons/fa6";
import { BsCarFront } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { LuCircleDollarSign } from "react-icons/lu";

interface StatCardProps {
  data: StatCardData;
}

const icons = {
  revenue: LuCircleDollarSign,
  bookings: FaCalendarDays,
  vehicles: BsCarFront,
  customers: FaUsers,
};

const StatCard = ({ data }: StatCardProps) => {
  const Icon = icons[data.icon];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl transition duration-300 group-hover:bg-sky-400/20" />

      {/* Top */}
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {data.title}
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {data.value}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
          <Icon size={21} />
        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-5 flex items-center gap-2">
        <span
          className={`
            inline-flex items-center gap-1
            rounded-full px-2 py-1
            text-xs font-semibold
            ${
              data.positive
                ? "bg-emerald-400/10 text-emerald-400"
                : "bg-red-400/10 text-red-400"
            }
          `}
        >
          <FaArrowUpRightFromSquare size={13} />

          {data.change}
        </span>

        <span className="text-xs text-slate-500">
          {data.description}
        </span>
      </div>
    </div>
  );
};

export default StatCard;