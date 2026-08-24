import { Link, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCalendarMonth,
  MdDirectionsCar,
  MdPayments,
  MdCheckCircle,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";
import CustomerStatus from "../../components/dashboard/booking/CustomerStatus";
import { customers } from "../../data//customers";
import { bookings } from "../../data/bookings";

const CustomerDetails = () => {
  const { customerId } = useParams();

  const customer = customers.find((item) => item.id === customerId);

  if (!customer) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">
              Customer Not Found
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              The customer you're looking for doesn't exist.
            </p>

            <Link
              to="/dashboard/customers"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              <MdArrowBack size={18} />
              Back to Customers
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // In the future this will come from the backend
  const customerBookings = bookings.filter(
    (booking) => booking.customer.email === customer.email,
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard/customers"
              className="rounded-xl border border-white/10 p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <MdArrowBack size={20} />
            </Link>

            <div>
              <p className="text-sm text-slate-500">Customer Details</p>

              <h1 className="mt-1 text-2xl font-bold text-white">
                {customer.name}
              </h1>
            </div>
          </div>

          <CustomerStatus status={customer.status} />
        </section>

        {/* Profile + Stats */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Profile */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 xl:col-span-1">
            <div className="flex flex-col items-center text-center">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="h-24 w-24 rounded-full object-cover ring-4 ring-sky-400/10"
              />

              <h2 className="mt-4 text-xl font-semibold text-white">
                {customer.name}
              </h2>

              <p className="mt-1 text-xs text-slate-600">{customer.id}</p>

              <div className="mt-6 w-full space-y-3 text-left">
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdEmail size={18} className="text-sky-400" />

                  <div>
                    <p className="text-[11px] text-slate-600">Email</p>

                    <p className="text-sm text-slate-300">{customer.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdPhone size={18} className="text-sky-400" />

                  <div>
                    <p className="text-[11px] text-slate-600">Phone</p>

                    <p className="text-sm text-slate-300">{customer.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdLocationOn size={18} className="text-sky-400" />

                  <div>
                    <p className="text-[11px] text-slate-600">Location</p>

                    <p className="text-sm text-slate-300">
                      {customer.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdCalendarMonth size={18} className="text-sky-400" />

                  <div>
                    <p className="text-[11px] text-slate-600">Joined</p>

                    <p className="text-sm text-slate-300">
                      {customer.joinedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-sky-400/10 p-3">
                  <MdCalendarMonth size={22} className="text-sky-400" />
                </div>

                <span className="text-xs text-slate-600">Activity</span>
              </div>

              <p className="mt-6 text-3xl font-bold text-white">
                {customer.totalBookings}
              </p>

              <p className="mt-1 text-sm text-slate-500">Total Bookings</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-emerald-400/10 p-3">
                  <MdPayments size={22} className="text-emerald-400" />
                </div>

                <span className="text-xs text-slate-600">Revenue</span>
              </div>

              <p className="mt-6 text-3xl font-bold text-white">
                ${customer.totalSpent.toLocaleString()}
              </p>

              <p className="mt-1 text-sm text-slate-500">Total Spent</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-purple-400/10 p-3">
                  <MdDirectionsCar size={22} className="text-purple-400" />
                </div>

                <span className="text-xs text-slate-600">Rental</span>
              </div>

              <p className="mt-6 text-3xl font-bold text-white">
                {customer.totalBookings}
              </p>

              <p className="mt-1 text-sm text-slate-500">Vehicles Rented</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-yellow-400/10 p-3">
                  <MdCheckCircle size={22} className="text-yellow-400" />
                </div>

                <span className="text-xs text-slate-600">Account</span>
              </div>

              <p className="mt-6 text-2xl font-bold text-emerald-400">
                {customer.status}
              </p>

              <p className="mt-1 text-sm text-slate-500">Customer Status</p>
            </div>
          </div>
        </div>

        {/* Booking History */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="font-semibold text-white">Booking History</h2>

            <p className="mt-1 text-xs text-slate-500">
              Previous and current vehicle bookings
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Booking
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Pickup
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Return
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {customerBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-white/5 hover:bg-white/[0.02]"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {booking.id}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={booking.vehicle.image}
                          alt={booking.vehicle.name}
                          className="h-9 w-14 rounded-lg object-cover"
                        />

                        <span className="text-sm text-slate-300">
                          {booking.vehicle.name}
                        </span>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-400">
                      {booking.pickupDate}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-400">
                      {booking.returnDate}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-white">
                      ${booking.amount.toLocaleString()}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          booking.status === "Confirmed"
                            ? "bg-emerald-400/10 text-emerald-400"
                            : booking.status === "Completed"
                              ? "bg-sky-400/10 text-sky-400"
                              : booking.status === "Pending"
                                ? "bg-yellow-400/10 text-yellow-400"
                                : "bg-red-400/10 text-red-400"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {customerBookings.length === 0 && (
            <div className="flex min-h-32 items-center justify-center">
              <p className="text-sm text-slate-500">
                No booking history found.
              </p>
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDetails;
