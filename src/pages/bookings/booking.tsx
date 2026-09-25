import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiCalendar, FiCheck, FiClock } from "react-icons/fi";
import { createBooking } from "../../api/booking.api";

import api from "../../api/axios";

interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  pricePerDay: number;
  image?: string;
}

const BookingPage = () => {
  const navigate = useNavigate();
  const { vehicleId } = useParams<{ vehicleId: string }>();

  const [vehicle, setVehicle] = useState<Vehicle | null>(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");

  // Fetch selected vehicle
  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        setLoading(true);

        const response = await api.get(`/vehicles/${vehicleId}`);

        setVehicle(response.data.vehicle || response.data);
      } catch (error: any) {
        setError(error.response?.data?.message || "Unable to load vehicle.");
      } finally {
        setLoading(false);
      }
    };

    if (vehicleId) {
      fetchVehicle();
    }
  }, [vehicleId]);

  // Calculate booking days
  const totalDays =
    startDate && endDate
      ? Math.ceil(
          (new Date(endDate).getTime() - new Date(startDate).getTime()) /
            (1000 * 60 * 60 * 24),
        )
      : 0;

  const totalPrice =
    vehicle && totalDays > 0 ? totalDays * vehicle.pricePerDay : 0;

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)]">
        <p className="text-[var(--muted)]">Loading vehicle...</p>
      </main>
    );
  }

  if (error || !vehicle) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-5 text-center">
          <p className="text-red-500">{error || "Vehicle not found."}</p>
        </div>
      </main>
    );
  }

  const handleBooking = async () => {
    if (!vehicleId || !startDate || !endDate) {
      return;
    }

    setBookingError("");

    try {
      setBookingLoading(true);

      const response = await createBooking({
        vehicle: vehicleId,
        startDate,
        endDate,
      });

      console.log("Booking successful:", response);
      navigate("/mybookings");
    } catch (error: any) {
      setBookingError(
        error.response?.data?.message || "Unable to create booking.",
      );
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)] py-10 text-[var(--foreground)] sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium tracking-wider text-blue-500 uppercase">
            Booking
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Complete Your Booking
          </h1>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Select your rental dates and review your booking.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Vehicle */}
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] lg:col-span-2">
            {vehicle.image && (
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="h-72 w-full object-cover"
              />
            )}

            <div className="p-6">
              <p className="text-sm text-blue-500">{vehicle.brand}</p>

              <h2 className="mt-1 text-2xl font-bold">{vehicle.name}</h2>

              <p className="mt-1 text-sm text-[var(--muted)]">
                {vehicle.model}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <FiClock className="text-blue-500" />

                <div>
                  <p className="text-xs text-[var(--muted)]">Rental Rate</p>

                  <p className="font-semibold">${vehicle.pricePerDay} / day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
            <h2 className="text-xl font-bold">Booking Details</h2>

            {/* Start Date */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">
                Start Date
              </label>

              <div className="relative">
                <FiCalendar className="absolute top-1/2 left-4 -translate-y-1/2 text-[var(--muted)]" />

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pr-4 pl-11 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* End Date */}
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium">End Date</label>

              <div className="relative">
                <FiCalendar className="absolute top-1/2 left-4 -translate-y-1/2 text-[var(--muted)]" />

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || new Date().toISOString().split("T")[0]}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pr-4 pl-11 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Price */}
            <div className="my-6 border-t border-[var(--border)] pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--muted)]">Price per day</span>

                <span>${vehicle.pricePerDay}</span>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-[var(--muted)]">Total days</span>

                <span>{totalDays > 0 ? totalDays : "--"}</span>
              </div>

              <div className="mt-5 flex justify-between border-t border-[var(--border)] pt-5">
                <span className="font-semibold">Total</span>

                <span className="text-xl font-bold text-blue-500">
                  ${totalPrice}
                </span>
              </div>
            </div>

            {/* check error */}
            {bookingError && (
              <div className="mb-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                {bookingError}
              </div>
            )}

            {/* Confirm */}
            <button
              type="button"
              onClick={handleBooking}
              disabled={
                !startDate || !endDate || totalDays <= 0 || bookingLoading
              }
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <FiCheck />
              {bookingLoading ? "Creating Booking" : "Confirm Booking"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
