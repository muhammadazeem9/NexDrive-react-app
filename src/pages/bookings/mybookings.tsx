import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiLoader,
  FiX,
} from "react-icons/fi";
import { getMyBookings, cancelBooking } from "../../api/booking.api";
import { carImage } from "../Products/utils/carImage";

interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  pricePerDay: number;
  image?: string;
}

interface Booking {
  _id: string;
  startDate: string;
  endDate: string;
  status: "pending" | "confirmed" | "active" | "completed" | "cancelled";
  totalDays: number;
  totalPrice: number;
  vehicle: Vehicle;
  createdAt: string;
}

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);

        const response = await getMyBookings();

        setBookings(response.bookings || []);
      } catch (error: any) {
        setError(
          error.response?.data?.message || "Unable to load your bookings.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusClass = (status: Booking["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 text-green-500";

      case "active":
        return "bg-blue-500/10 text-blue-500";

      case "completed":
        return "bg-purple-500/10 text-purple-500";

      case "cancelled":
        return "bg-red-500/10 text-red-500";

      default:
        return "bg-yellow-500/10 text-yellow-500";
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (!confirmed) return;

    try {
      setCancellingId(bookingId);

      await cancelBooking(bookingId);

      // Update the booking status immediately
      setBookings((prevBookings) =>
        prevBookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: "cancelled" }
            : booking,
        ),
      );
    } catch (error: any) {
      alert(error.response?.data?.message || "Unable to cancel this booking.");
    } finally {
      setCancellingId(null);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <div className="flex items-center gap-3 text-[var(--muted)]">
          <FiLoader className="animate-spin" />
          <span>Loading bookings...</span>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-5 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] py-10 text-[var(--foreground)] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium tracking-wider text-blue-500 uppercase">
            Dashboard
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">My Bookings</h1>

          <p className="mt-2 text-sm text-[var(--muted)]">
            View and manage your vehicle rentals.
          </p>
        </div>

        {/* Empty State */}
        {bookings.length === 0 && (
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-16 text-center">
            <FiCalendar className="mx-auto text-4xl text-[var(--muted)]" />

            <h2 className="mt-4 text-xl font-semibold">No bookings yet</h2>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Your vehicle bookings will appear here.
            </p>
          </div>
        )}

        {/* Bookings */}
        <div className="space-y-5">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]"
            >
              <div className="grid md:grid-cols-[240px_1fr]">
                {/* Vehicle Image */}
                {booking.vehicle?.image ? (
                  <img
                    src={carImage(booking.vehicle.brand, booking.vehicle.model)}
                    alt={booking.vehicle.name}
                    className="h-full min-h-52 w-full object-cover"
                  />
                ) : (
                  <div className="flex min-h-52 items-center justify-center bg-[var(--background)] text-sm text-[var(--muted)]">
                    No image
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row">
                    <div>
                      <p className="text-sm text-blue-500">
                        {booking.vehicle?.brand}
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        {booking.vehicle?.name}
                      </h2>

                      <p className="mt-1 text-sm text-[var(--muted)]">
                        {booking.vehicle?.model}
                      </p>
                    </div>

                    <span
                      className={`h-fit rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClass(
                        booking.status,
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  {/* Booking Info */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="flex items-center gap-3">
                      <FiCalendar className="text-blue-500" />

                      <div>
                        <p className="text-xs text-[var(--muted)]">
                          Rental Period
                        </p>

                        <p className="text-sm font-medium">
                          {formatDate(booking.startDate)}
                        </p>

                        <p className="text-sm font-medium">
                          {formatDate(booking.endDate)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiClock className="text-blue-500" />

                      <div>
                        <p className="text-xs text-[var(--muted)]">Duration</p>

                        <p className="text-sm font-semibold">
                          {booking.totalDays}{" "}
                          {booking.totalDays === 1 ? "day" : "days"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <FiDollarSign className="text-blue-500" />

                      <div>
                        <p className="text-xs text-[var(--muted)]">
                          Total Price
                        </p>

                        <p className="text-lg font-bold">
                          ${booking.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 flex flex-col gap-4 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-[var(--muted)]">
                      Booked on {formatDate(booking.createdAt)}
                    </p>

                    {/* Cancel Button */}
                    {(booking.status === "pending" ||
                      booking.status === "confirmed") && (
                      <button
                        type="button"
                        onClick={() => handleCancelBooking(booking._id)}
                        disabled={cancellingId === booking._id}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-red-500/30 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {cancellingId === booking._id ? (
                          <>
                            <FiLoader className="animate-spin" />
                            Cancelling...
                          </>
                        ) : (
                          <>
                            <FiX />
                            Cancel Booking
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyBookings;
