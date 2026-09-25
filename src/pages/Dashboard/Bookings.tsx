import { useEffect, useMemo, useState } from "react";

import { FiSearch, FiEye, FiMoreHorizontal } from "react-icons/fi";

import DashboardLayout from "../../layouts/DashboardLayout";

import {
  getAdminBookings,
  updateBookingStatus,
  type AdminBooking,
  type BookingStatus,
} from "../../api/admin/adminBooking.api";

const Bookings = () => {
  const [bookings, setBookings] = useState<AdminBooking[]>([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState<"all" | BookingStatus>(
    "all",
  );

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // =========================
  // Fetch bookings
  // =========================

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAdminBookings();

      setBookings(data);
    } catch (error: any) {
      setError(error.response?.data?.message || "Unable to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // =========================
  // Search + filter
  // =========================

  const filteredBookings = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    return bookings.filter((booking) => {
      const matchesSearch =
        !searchValue ||
        booking.user?.name?.toLowerCase().includes(searchValue) ||
        booking.user?.email?.toLowerCase().includes(searchValue) ||
        booking.vehicle?.name?.toLowerCase().includes(searchValue) ||
        booking.vehicle?.brand?.toLowerCase().includes(searchValue) ||
        booking.vehicle?.model?.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "all" || booking.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [bookings, search, statusFilter]);

  // =========================
  // Pagination
  // =========================

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const paginatedBookings = filteredBookings.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // =========================
  // Update status
  // =========================

  const handleStatusChange = async (id: string, status: BookingStatus) => {
    try {
      setUpdatingId(id);

      const updatedBooking = await updateBookingStatus(id, status);

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking._id === id ? updatedBooking : booking,
        ),
      );
    } catch (error: any) {
      alert(error.response?.data?.message || "Unable to update booking status");
    } finally {
      setUpdatingId(null);
    }
  };

  // =========================
  // Status styles
  // =========================

  const getStatusClass = (status: BookingStatus) => {
    switch (status) {
      case "pending":
        return "border-yellow-400/20 bg-yellow-400/10 text-yellow-400";

      case "confirmed":
        return "border-blue-400/20 bg-blue-400/10 text-blue-400";

      case "active":
        return "border-sky-400/20 bg-sky-400/10 text-sky-400";

      case "completed":
        return "border-green-400/20 bg-green-400/10 text-green-400";

      case "cancelled":
        return "border-red-400/20 bg-red-400/10 text-red-400";

      default:
        return "border-white/10 bg-white/5 text-slate-400";
    }
  };

  // =========================
  // Available next statuses
  // =========================

  const getNextStatuses = (status: BookingStatus): BookingStatus[] => {
    switch (status) {
      case "pending":
        return ["confirmed", "cancelled"];

      case "confirmed":
        return ["active", "cancelled"];

      case "active":
        return ["completed"];

      default:
        return [];
    }
  };

  // =========================
  // Statistics
  // =========================

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "pending",
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "confirmed",
  ).length;

  const activeBookings = bookings.filter(
    (booking) => booking.status === "active",
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "completed",
  ).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* =========================
            Header
        ========================= */}

        <section>
          <p className="text-sm font-medium text-sky-400">Management</p>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Bookings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage customer vehicle bookings.
          </p>
        </section>

        {/* =========================
            Error
        ========================= */}

        {error && (
          <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* =========================
            Statistics
        ========================= */}

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {/* Total */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">Total Bookings</p>

            <p className="mt-2 text-2xl font-bold text-white">
              {totalBookings}
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.03] p-5">
            <p className="text-sm text-slate-500">Pending</p>

            <p className="mt-2 text-2xl font-bold text-yellow-400">
              {pendingBookings}
            </p>
          </div>

          {/* Confirmed */}
          <div className="rounded-2xl border border-blue-400/10 bg-blue-400/[0.03] p-5">
            <p className="text-sm text-slate-500">Confirmed</p>

            <p className="mt-2 text-2xl font-bold text-blue-400">
              {confirmedBookings}
            </p>
          </div>

          {/* Active */}
          <div className="rounded-2xl border border-sky-400/10 bg-sky-400/[0.03] p-5">
            <p className="text-sm text-slate-500">Active</p>

            <p className="mt-2 text-2xl font-bold text-sky-400">
              {activeBookings}
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.03] p-5">
            <p className="text-sm text-slate-500">Completed</p>

            <p className="mt-2 text-2xl font-bold text-green-400">
              {completedBookings}
            </p>
          </div>
        </section>

        {/* =========================
            Search + Filter
        ========================= */}

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
              <FiSearch size={18} className="shrink-0 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search customer or vehicle..."
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | BookingStatus)
              }
              className="rounded-xl border border-white/10 bg-[#07111f] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
            >
              <option value="all">All Statuses</option>

              <option value="pending">Pending</option>

              <option value="confirmed">Confirmed</option>

              <option value="active">Active</option>

              <option value="completed">Completed</option>

              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </section>

        {/* =========================
            Table
        ========================= */}

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Dates
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Days
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Total
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* Loading */}
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-sm text-slate-500"
                    >
                      Loading bookings...
                    </td>
                  </tr>
                ) : filteredBookings.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-12 text-center text-sm text-slate-500"
                    >
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  paginatedBookings.map((booking) => {
                    const nextStatuses = getNextStatuses(booking.status);

                    return (
                      <tr
                        key={booking._id}
                        className="border-b border-white/5 transition hover:bg-white/[0.02]"
                      >
                        {/* Customer */}
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-white">
                              {booking.user?.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {booking.user?.email}
                            </p>
                          </div>
                        </td>

                        {/* Vehicle */}
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-white">
                              {booking.vehicle?.name}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {booking.vehicle?.brand} {booking.vehicle?.model}
                            </p>
                          </div>
                        </td>

                        {/* Dates */}
                        <td className="px-6 py-4">
                          <p className="text-sm text-slate-300">
                            {new Date(booking.startDate).toLocaleDateString()}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            to {new Date(booking.endDate).toLocaleDateString()}
                          </p>
                        </td>

                        {/* Days */}
                        <td className="px-6 py-4 text-sm text-slate-400">
                          {booking.totalDays}
                        </td>

                        {/* Total */}
                        <td className="px-6 py-4">
                          <span className="font-semibold text-white">
                            ${booking.totalPrice.toFixed(2)}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize ${getStatusClass(
                              booking.status,
                            )}`}
                          >
                            {booking.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4">
                          <div className="flex justify-end gap-2">
                            {/* Status action */}
                            {nextStatuses.length > 0 && (
                              <select
                                value=""
                                disabled={updatingId === booking._id}
                                onChange={(e) => {
                                  const value = e.target.value as BookingStatus;

                                  if (value) {
                                    handleStatusChange(booking._id, value);
                                  }
                                }}
                                className="rounded-lg border border-white/10 bg-[#07111f] px-2 py-2 text-xs text-slate-300 outline-none focus:border-sky-400/50 disabled:opacity-50"
                              >
                                <option value="">
                                  {updatingId === booking._id
                                    ? "Updating..."
                                    : "Change"}
                                </option>

                                {nextStatuses.map((nextStatus) => (
                                  <option key={nextStatus} value={nextStatus}>
                                    {nextStatus.charAt(0).toUpperCase() +
                                      nextStatus.slice(1)}
                                  </option>
                                ))}
                              </select>
                            )}

                            {/* View */}
                            <button
                              type="button"
                              className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                              title="View booking"
                            >
                              <FiEye size={16} />
                            </button>

                            {/* More */}
                            <button
                              type="button"
                              className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                            >
                              <FiMoreHorizontal size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* =========================
              Footer
          ========================= */}

          <div className="flex flex-col gap-4 border-t border-[var(--border)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Results */}
            <p className="text-sm text-[var(--muted)]">
              Showing{" "}
              <span className="font-medium text-[var(--foreground)]">
                {filteredBookings.length === 0 ? 0 : startIndex + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium text-[var(--foreground)]">
                {Math.min(endIndex, filteredBookings.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[var(--foreground)]">
                {filteredBookings.length}
              </span>{" "}
              bookings
            </p>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(page - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--background)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`h-9 min-w-9 rounded-lg px-3 text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-sky-500 text-white"
                        : "text-[var(--foreground)] hover:bg-[var(--background)]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.min(page + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--background)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Bookings;
