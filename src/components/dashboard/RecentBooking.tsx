import { recentBookings } from "../../data/dashboard";
import BookingStatus from "./BookingStatus";
import { BsArrowUpRight } from "react-icons/bs";

const RecentBookings = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Recent Bookings
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest vehicle bookings.
          </p>
        </div>

        <button className="text-xs font-medium text-sky-400 transition hover:text-sky-300">
          View all
        </button>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-y border-white/5 text-left">
              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Customer
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Vehicle
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Date
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Amount
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {recentBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-white/5 transition hover:bg-white/[0.02]"
              >
                {/* Customer */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.customer.avatar}
                      alt={booking.customer.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        {booking.customer.name}
                      </p>

                      <p className="text-xs text-slate-600">
                        {booking.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Vehicle */}
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-300">
                    {booking.vehicle}
                  </span>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-400">
                    {booking.date}
                  </span>
                </td>

                {/* Amount */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-white">
                    ${booking.amount}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <BookingStatus status={booking.status} />
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <button className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400">
                    <BsArrowUpRight size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 p-4 md:hidden">
        {recentBookings.map((booking) => (
          <div
            key={booking.id}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={booking.customer.avatar}
                  alt={booking.customer.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-medium text-white">
                    {booking.customer.name}
                  </p>

                  <p className="text-xs text-slate-600">
                    {booking.id}
                  </p>
                </div>
              </div>

              <BookingStatus status={booking.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-slate-600">
                  Vehicle
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {booking.vehicle}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-600">
                  Date
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  {booking.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-600">
                  Amount
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  ${booking.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;