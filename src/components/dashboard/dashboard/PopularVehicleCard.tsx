import { BsArrowUpRight } from "react-icons/bs";
import { BiStar } from "react-icons/bi";

import type { PopularVehicle } from "../../../types/dashboard";

interface PopularVehicleCardProps {
  vehicle: PopularVehicle;
}

const PopularVehicleCard = ({ vehicle }: PopularVehicleCardProps) => {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:shadow-md">
      {/* Image */}
      <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-900">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">
        {/* Title + Arrow */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-[var(--foreground)]">
            {vehicle.name}
          </h3>

          <button
            type="button"
            className="shrink-0 rounded-lg p-1 text-[var(--muted)] transition hover:bg-sky-500/10 hover:text-sky-500"
          >
            <BsArrowUpRight size={16} />
          </button>
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <BiStar size={13} className="fill-current text-yellow-400" />

          <span className="text-xs font-medium text-[var(--muted)]">
            {vehicle.rating}
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-[var(--muted)]">
            {vehicle.bookings} bookings
          </span>

          <span className="text-xs font-semibold text-sky-500">
            ${vehicle.pricePerDay}/day
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularVehicleCard;
