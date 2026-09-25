import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdEmail,
  MdCalendarMonth,
  MdCheckCircle,
  MdPerson,
  MdDirectionsCar,
  MdPayments,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";
import {
  getCustomerById,
  getCustomerBookings,
} from "../../api/admin/customer.api";

import type { Customer } from "../../types/backend/customer";
import type { CustomerBooking } from "../../types/backend/customerBookings";

const CustomerDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [bookings, setBookings] = useState<CustomerBooking[]>([]);

  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(true);

  const [error, setError] = useState("");
  const [bookingError, setBookingError] = useState("");

  useEffect(() => {
    const fetchCustomerData = async () => {
      if (!id) {
        setError("Customer ID is missing.");
        setLoading(false);
        setBookingLoading(false);
        return;
      }

      try {
        setLoading(true);
        setBookingLoading(true);

        setError("");
        setBookingError("");

        const [customerData, bookingData] = await Promise.all([
          getCustomerById(id),
          getCustomerBookings(id),
        ]);

        setCustomer(customerData);
        setBookings(bookingData.bookings || []);
      } catch (error) {
        console.error(error);

        setError("Unable to load customer.");

        setBookingError("Unable to load booking history.");
      } finally {
        setLoading(false);
        setBookingLoading(false);
      }
    };

    fetchCustomerData();
  }, [id]);

  /*
   * Loading state
   */
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-sky-400" />

            <p className="mt-4 text-sm text-slate-500">Loading customer...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  /*
   * Error state
   */
  if (error || !customer) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400/10">
              <MdPerson size={28} className="text-red-400" />
            </div>

            <h1 className="mt-5 text-2xl font-bold text-white">
              Customer Not Found
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              {error || "The customer you're looking for doesn't exist."}
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

  const joinedDate = new Date(customer.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US").format(price);
  };

  const getStatusClasses = (status: CustomerBooking["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-400/10 text-blue-400";

      case "active":
        return "bg-emerald-400/10 text-emerald-400";

      case "completed":
        return "bg-purple-400/10 text-purple-400";

      case "cancelled":
        return "bg-red-400/10 text-red-400";

      case "pending":
      default:
        return "bg-yellow-400/10 text-yellow-400";
    }
  };

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

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
            <MdCheckCircle size={15} />
            Active Account
          </span>
        </section>

        {/* Profile + Stats */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Profile */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 xl:col-span-1">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-400/10 text-3xl font-bold text-sky-400 ring-4 ring-sky-400/10">
                {customer.name.charAt(0).toUpperCase()}
              </div>

              <h2 className="mt-4 text-xl font-semibold text-white">
                {customer.name}
              </h2>

              <p className="mt-1 text-xs text-slate-600">{customer._id}</p>

              <div className="mt-6 w-full space-y-3 text-left">
                {/* Email */}
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdEmail size={18} className="text-sky-400" />

                  <div className="min-w-0">
                    <p className="text-[11px] text-slate-600">Email</p>

                    <p className="truncate text-sm text-slate-300">
                      {customer.email}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdPerson size={18} className="text-sky-400" />

                  <div>
                    <p className="text-[11px] text-slate-600">Role</p>

                    <p className="text-sm text-slate-300 capitalize">
                      {customer.role}
                    </p>
                  </div>
                </div>

                {/* Joined */}
                <div className="flex items-center gap-3 rounded-xl bg-white/[0.02] p-3">
                  <MdCalendarMonth size={18} className="text-sky-400" />

                  <div>
                    <p className="text-[11px] text-slate-600">Joined</p>

                    <p className="text-sm text-slate-300">{joinedDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-2">
            {/* Account Status */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-emerald-400/10 p-3">
                  <MdCheckCircle size={22} className="text-emerald-400" />
                </div>

                <span className="text-xs text-slate-600">Account</span>
              </div>

              <p className="mt-6 text-2xl font-bold text-emerald-400">Active</p>

              <p className="mt-1 text-sm text-slate-500">Customer Status</p>
            </div>

            {/* Role */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-sky-400/10 p-3">
                  <MdPerson size={22} className="text-sky-400" />
                </div>

                <span className="text-xs text-slate-600">Account</span>
              </div>

              <p className="mt-6 text-2xl font-bold text-white capitalize">
                {customer.role}
              </p>

              <p className="mt-1 text-sm text-slate-500">User Role</p>
            </div>

            {/* Joined */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-purple-400/10 p-3">
                  <MdCalendarMonth size={22} className="text-purple-400" />
                </div>

                <span className="text-xs text-slate-600">Account</span>
              </div>

              <p className="mt-6 text-xl font-bold text-white">
                {new Date(customer.createdAt).toLocaleDateString()}
              </p>

              <p className="mt-1 text-sm text-slate-500">Registration Date</p>
            </div>

            {/* Customer ID */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-yellow-400/10 p-3">
                  <MdPerson size={22} className="text-yellow-400" />
                </div>

                <span className="text-xs text-slate-600">Identity</span>
              </div>

              <p className="mt-6 truncate text-sm font-semibold text-white">
                {customer._id}
              </p>

              <p className="mt-1 text-sm text-slate-500">Customer ID</p>
            </div>
          </div>
        </div>

        {/* Booking History */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="flex flex-col gap-2 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-white">Booking History</h2>

              <p className="mt-1 text-xs text-slate-500">
                Vehicle bookings for this customer
              </p>
            </div>

            {!bookingLoading && !bookingError && (
              <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-400">
                {bookings.length}{" "}
                {bookings.length === 1 ? "Booking" : "Bookings"}
              </span>
            )}
          </div>

          {/* Booking Loading */}
          {bookingLoading && (
            <div className="flex min-h-40 items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-sky-400" />

                <p className="mt-3 text-sm text-slate-500">
                  Loading bookings...
                </p>
              </div>
            </div>
          )}

          {/* Booking Error */}
          {!bookingLoading && bookingError && (
            <div className="flex min-h-40 items-center justify-center px-6">
              <p className="text-sm text-red-400">{bookingError}</p>
            </div>
          )}

          {/* Empty */}
          {!bookingLoading && !bookingError && bookings.length === 0 && (
            <div className="flex min-h-40 items-center justify-center px-6">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03]">
                  <MdCalendarMonth size={22} className="text-slate-600" />
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  No bookings found.
                </p>

                <p className="mt-1 text-xs text-slate-700">
                  This customer has not made any bookings yet.
                </p>
              </div>
            </div>
          )}

          {/* Bookings */}
          {!bookingLoading && !bookingError && bookings.length > 0 && (
            <div className="divide-y divide-white/5">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="p-5 transition hover:bg-white/[0.02]"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Vehicle */}
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10">
                        <MdDirectionsCar size={24} className="text-sky-400" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate font-semibold text-white">
                          {booking.vehicle?.name || "Vehicle"}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {booking.vehicle?.brand} {booking.vehicle?.model}{" "}
                          {booking.vehicle?.year}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-700">
                          ID: {booking._id}
                        </p>
                      </div>
                    </div>

                    {/* Dates */}
                    <div>
                      <p className="text-[11px] text-slate-600">
                        Rental Period
                      </p>

                      <div className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                        <MdCalendarMonth size={17} className="text-slate-500" />

                        <span>{formatDate(booking.startDate)}</span>

                        <span className="text-slate-700">→</span>

                        <span>{formatDate(booking.endDate)}</span>
                      </div>

                      <p className="mt-1 text-xs text-slate-600">
                        {booking.totalDays}{" "}
                        {booking.totalDays === 1 ? "day" : "days"}
                      </p>
                    </div>

                    {/* Price */}
                    <div>
                      <p className="text-[11px] text-slate-600">Total Amount</p>

                      <div className="mt-1 flex items-center gap-2">
                        <MdPayments size={17} className="text-emerald-400" />

                        <span className="font-semibold text-white">
                          {formatPrice(booking.totalPrice)}
                        </span>
                      </div>
                    </div>

                    {/* Status */}
                    <span
                      className={`w-fit rounded-full px-3 py-1.5 text-xs font-medium capitalize ${getStatusClasses(
                        booking.status,
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDetails;
