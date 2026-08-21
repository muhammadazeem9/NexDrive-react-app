import { useMemo, useState } from "react";
import {
  MdCalendarMonth,
  MdVisibility,
  MdMoreHoriz,
  MdAdd,
  MdSearch,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";
import BookingStatus from "../../components/dashboard/booking/BookingStatus";
import { bookings } from "../../data/bookings";
import { Link } from "react-router-dom";

const Bookings = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        booking.id.toLowerCase().includes(searchValue) ||
        booking.customer.name.toLowerCase().includes(searchValue) ||
        booking.vehicle.name.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || booking.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-sky-400">Management</p>

            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Bookings
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage and track all vehicle bookings.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400">
            <MdAdd size={18} />
            New Booking
          </button>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Total Bookings</p>

            <p className="mt-2 text-2xl font-bold text-white">1,284</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Confirmed</p>

            <p className="mt-2 text-2xl font-bold text-emerald-400">842</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Pending</p>

            <p className="mt-2 text-2xl font-bold text-yellow-400">126</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Completed</p>

            <p className="mt-2 text-2xl font-bold text-sky-400">316</p>
          </div>
        </section>

        {/* Filters */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* Search */}
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
              <MdSearch size={18} className="shrink-0 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search booking, customer or vehicle..."
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none focus:border-sky-400/50 lg:w-48"
            >
              <option value="All">All Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            {/* Date */}
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <MdCalendarMonth size={17} />
              Date
            </button>
          </div>
        </section>

        {/* Bookings Table */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Booking
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Rental Period
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    {/* Booking */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-white">
                        {booking.id}
                      </p>

                      <p className="mt-1 text-xs text-slate-600">Booking</p>
                    </td>

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

                          <p className="mt-1 text-xs text-slate-600">
                            {booking.customer.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Vehicle */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={booking.vehicle.image}
                          alt={booking.vehicle.name}
                          className="h-10 w-14 rounded-lg object-cover"
                        />

                        <span className="text-sm text-slate-300">
                          {booking.vehicle.name}
                        </span>
                      </div>
                    </td>

                    {/* Rental Period */}
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-slate-300">{booking.pickupDate}</p>

                        <p className="mt-1 text-xs text-slate-600">
                          to {booking.returnDate}
                        </p>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-white">
                        ${booking.amount.toLocaleString()}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <BookingStatus status={booking.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <Link
                          to={`/dashboard/bookings/${booking.id}`}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                          title="View booking"
                        >
                          <MdVisibility size={17} />
                        </Link>

                        <button
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                          title="More"
                        >
                          <MdMoreHoriz size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredBookings.length === 0 && (
            <div className="flex min-h-40 items-center justify-center">
              <p className="text-sm text-slate-500">No bookings found.</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-white/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredBookings.length} of {bookings.length} bookings
            </p>

            <div className="flex gap-2">
              <button
                disabled
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-600"
              >
                Previous
              </button>

              <button className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                2
              </button>

              <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Bookings;
