import { useParams, Link } from "react-router-dom";
import {
  MdArrowBack,
  MdCalendarMonth,
  MdDirectionsCar,
  MdCheckCircle,
  MdEmail,
  MdLocationOn,
  MdPhone,
  MdPerson,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";
import BookingStatus from "../../components/dashboard/booking/BookingStatus";
import { bookings } from "../../data/bookings";

const BookingDetails = () => {
  const { bookingId } = useParams();

  const booking = bookings.find((item) => item.id === bookingId);

  if (!booking) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Booking Not Found</h1>

            <p className="mt-2 text-sm text-slate-500">
              The booking you're looking for doesn't exist.
            </p>

            <Link
              to="/dashboard/bookings"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-400"
            >
              <MdArrowBack size={17} />
              Back to Bookings
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard/bookings"
              className="rounded-xl border border-white/10 p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <MdArrowBack size={19} />
            </Link>

            <div>
              <p className="text-sm text-slate-500">Booking Details</p>

              <h1 className="mt-1 text-2xl font-bold text-white">
                {booking.id}
              </h1>
            </div>
          </div>

          <BookingStatus status={booking.status} />
        </section>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 xl:col-span-2">
            {/* Customer */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-sky-400/10 p-2 text-sky-400">
                  <MdPerson size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Customer Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Customer associated with this booking
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <img
                  src={booking.customer.avatar}
                  alt={booking.customer.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {booking.customer.name}
                  </h3>

                  <div className="mt-2 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:gap-5">
                    <span className="flex items-center gap-2">
                      <MdEmail size={15} />
                      {booking.customer.email}
                    </span>

                    <span className="flex items-center gap-2">
                      <MdPhone size={15} />
                      +92 300 1234567
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Vehicle */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-sky-400/10 p-2 text-sky-400">
                  <MdDirectionsCar size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-white">
                    Vehicle Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Vehicle reserved for this booking
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:flex-row">
                <img
                  src={booking.vehicle.image}
                  alt={booking.vehicle.name}
                  className="h-44 w-full rounded-xl object-cover sm:h-32 sm:w-52"
                />

                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-xl font-semibold text-white">
                    {booking.vehicle.name}
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Premium vehicle rental
                  </p>
                </div>
              </div>
            </section>

            {/* Rental Period */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-sky-400/10 p-2 text-sky-400">
                  <MdCalendarMonth size={18} />
                </div>

                <div>
                  <h2 className="font-semibold text-white">Rental Period</h2>

                  <p className="text-xs text-slate-500">
                    Booking pickup and return information
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-xs text-slate-600">Pickup Date</p>

                  <p className="mt-2 font-medium text-white">
                    {booking.pickupDate}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <MdLocationOn size={14} />
                    NexDrive Pickup Center
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-xs text-slate-600">Return Date</p>

                  <p className="mt-2 font-medium text-white">
                    {booking.returnDate}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <MdLocationOn size={14} />
                    NexDrive Return Center
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Booking Status */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-semibold text-white">Booking Status</h2>

              <div className="mt-5 flex items-center gap-3">
                <div className="rounded-full bg-emerald-400/10 p-2 text-emerald-400">
                  <MdCheckCircle size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    {booking.status}
                  </p>

                  <p className="text-xs text-slate-500">
                    Current booking status
                  </p>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-semibold text-white">Payment Summary</h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Rental</span>

                  <span className="text-slate-300">
                    ${booking.amount.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Insurance</span>

                  <span className="text-slate-300">$80</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Service Fee</span>

                  <span className="text-slate-300">$40</span>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white">Total</span>

                    <span className="text-xl font-bold text-sky-400">
                      ${(booking.amount + 80 + 40).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Actions */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-semibold text-white">Actions</h2>

              <div className="mt-4 space-y-2">
                <button className="w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                  Confirm Booking
                </button>

                <button className="w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white">
                  Edit Booking
                </button>

                <button className="w-full rounded-xl border border-red-400/10 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-400/10">
                  Cancel Booking
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookingDetails;
