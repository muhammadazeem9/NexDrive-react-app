import { recentBookings } from "../../../data/dashboard";
import BookingStatus from "./BookingStatus";
import { BsArrowUpRight } from "react-icons/bs";

const RecentBookings = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)]">
            Recent Bookings
          </h2>

          <p className="mt-1 text-sm text-[var(--muted)]">
            Latest vehicle bookings.
          </p>
        </div>

        <button className="text-xs font-medium text-sky-500 transition hover:text-sky-400">
          View all
        </button>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-y border-[var(--border)] text-left">
              <th className="px-6 py-4 text-xs font-medium tracking-wider text-[var(--muted)] uppercase">
                Customer
              </th>

              <th className="px-6 py-4 text-xs font-medium tracking-wider text-[var(--muted)] uppercase">
                Vehicle
              </th>

              <th className="px-6 py-4 text-xs font-medium tracking-wider text-[var(--muted)] uppercase">
                Date
              </th>

              <th className="px-6 py-4 text-xs font-medium tracking-wider text-[var(--muted)] uppercase">
                Amount
              </th>

              <th className="px-6 py-4 text-xs font-medium tracking-wider text-[var(--muted)] uppercase">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-medium tracking-wider text-[var(--muted)] uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {recentBookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b border-[var(--border)] transition-colors hover:bg-sky-500/[0.03]"
              >
                {/* Customer */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={booking.customer.avatar}
                      alt={booking.customer.name}
                      className="h-9 w-9 rounded-full object-cover ring-1 ring-[var(--border)]"
                    />

                    <div>
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        {booking.customer.name}
                      </p>

                      <p className="text-xs text-[var(--muted)]">
                        {booking.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Vehicle */}
                <td className="px-6 py-4">
                  <span className="text-sm text-[var(--foreground)]/80">
                    {booking.vehicle}
                  </span>
                </td>

                {/* Date */}
                <td className="px-6 py-4">
                  <span className="text-sm text-[var(--muted)]">
                    {booking.date}
                  </span>
                </td>

                {/* Amount */}
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    ${booking.amount}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <BookingStatus status={booking.status} />
                </td>

                {/* Action */}
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-sky-500/10 hover:text-sky-500"
                  >
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
            className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-sm transition hover:border-sky-400/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={booking.customer.avatar}
                  alt={booking.customer.name}
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--border)]"
                />

                <div>
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    {booking.customer.name}
                  </p>

                  <p className="text-xs text-[var(--muted)]">{booking.id}</p>
                </div>
              </div>

              <BookingStatus status={booking.status} />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-[var(--muted)]">Vehicle</p>

                <p className="mt-1 text-sm text-[var(--foreground)]/80">
                  {booking.vehicle}
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--muted)]">Date</p>

                <p className="mt-1 text-sm text-[var(--foreground)]/80">
                  {booking.date}
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--muted)]">Amount</p>

                <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
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
