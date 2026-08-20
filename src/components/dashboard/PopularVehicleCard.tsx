import { BsArrowUpRight } from "react-icons/bs";
import { BiStar } from "react-icons/bi";

import type { PopularVehicle } from "../../types/dashboard";

interface PopularVehicleCardProps {
  vehicle: PopularVehicle;
}

const PopularVehicleCard = ({
  vehicle,
}: PopularVehicleCardProps) => {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-sky-400/20 hover:bg-white/[0.04]">
      {/* Image */}
      <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-slate-900">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-sm font-semibold text-white">
            {vehicle.name}
          </h3>

          <button className="shrink-0 rounded-lg p-1 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400">
            <BsArrowUpRight size={16} />
          </button>
        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <BiStar
            size={13}
            className="fill-current text-yellow-400"
          />

          <span className="text-xs font-medium text-slate-300">
            {vehicle.rating}
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {vehicle.bookings} bookings
          </span>

          <span className="text-xs font-semibold text-sky-400">
            ${vehicle.pricePerDay}/day
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularVehicleCard;