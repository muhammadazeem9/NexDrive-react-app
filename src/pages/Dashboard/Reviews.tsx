import { useMemo, useState } from "react";
import {
  MdCheck,
  MdClose,
  MdDelete,
  MdMoreHoriz,
  MdSearch,
  MdStar,
  MdVisibility,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";
import ReviewStatus from "../../components/dashboard/reviews/ReviewStatus";
import { reviews } from "../../data/review";

const Reviews = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredReviews = useMemo(() => {
    return reviews.filter((review) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        review.customer.name.toLowerCase().includes(searchValue) ||
        review.vehicle.toLowerCase().includes(searchValue) ||
        review.comment.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || review.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) /
    reviews.length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-sky-400">Management</p>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Reviews
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Monitor customer feedback and manage reviews.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-2 gap-4 xl:grid-cols-4">
          {/* Total */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">Total Reviews</p>

              <MdStar size={20} className="text-yellow-400" />
            </div>

            <p className="mt-3 text-2xl font-bold text-white">
              {reviews.length}
            </p>
          </div>

          {/* Average */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">Average Rating</p>

              <MdStar size={20} className="text-yellow-400" />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <p className="text-2xl font-bold text-white">
                {averageRating.toFixed(1)}
              </p>

              <div className="flex text-yellow-400">
                <MdStar size={16} />
              </div>
            </div>
          </div>

          {/* Published */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Published</p>

            <p className="mt-3 text-2xl font-bold text-emerald-400">
              {reviews.filter((review) => review.status === "Published").length}
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Awaiting Moderation</p>

            <p className="mt-3 text-2xl font-bold text-yellow-400">
              {reviews.filter((review) => review.status === "Pending").length}
            </p>
          </div>
        </section>

        {/* Search + Filter */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
              <MdSearch size={20} className="text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search customer, vehicle or review..."
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none sm:w-48"
            >
              <option value="All">All Reviews</option>

              <option value="Published">Published</option>

              <option value="Pending">Pending</option>

              <option value="Hidden">Hidden</option>
            </select>
          </div>
        </section>

        {/* Reviews */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="font-semibold text-white">Customer Reviews</h2>

            <p className="mt-1 text-xs text-slate-500">
              Review and moderate customer feedback
            </p>
          </div>

          <div className="divide-y divide-white/5">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 transition hover:bg-white/[0.02]"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  {/* Review content */}
                  <div className="flex min-w-0 gap-4">
                    <img
                      src={review.customer.avatar}
                      alt={review.customer.name}
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-sm font-semibold text-white">
                          {review.customer.name}
                        </h3>

                        <ReviewStatus status={review.status} />
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-xs text-sky-400">
                          {review.vehicle}
                        </span>

                        <span className="text-slate-700">•</span>

                        <span className="text-xs text-slate-600">
                          {review.date}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="mt-3 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <MdStar
                            key={star}
                            size={18}
                            className={
                              star <= review.rating
                                ? "text-yellow-400"
                                : "text-slate-700"
                            }
                          />
                        ))}

                        <span className="ml-2 text-xs text-slate-500">
                          {review.rating}/5
                        </span>
                      </div>

                      {/* Comment */}
                      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                        {review.comment}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-2">
                    {review.status === "Pending" && (
                      <>
                        <button
                          title="Approve"
                          className="rounded-lg border border-emerald-400/10 p-2 text-emerald-400 transition hover:bg-emerald-400/10"
                        >
                          <MdCheck size={18} />
                        </button>

                        <button
                          title="Reject"
                          className="rounded-lg border border-red-400/10 p-2 text-red-400 transition hover:bg-red-400/10"
                        >
                          <MdClose size={18} />
                        </button>
                      </>
                    )}

                    <button
                      title="View"
                      className="rounded-lg border border-white/10 p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                    >
                      <MdVisibility size={18} />
                    </button>

                    <button
                      title="More"
                      className="rounded-lg border border-white/10 p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                    >
                      <MdMoreHoriz size={18} />
                    </button>

                    <button
                      title="Delete"
                      className="rounded-lg border border-red-400/10 p-2 text-slate-600 transition hover:bg-red-400/10 hover:text-red-400"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredReviews.length === 0 && (
            <div className="flex min-h-40 items-center justify-center">
              <p className="text-sm text-slate-500">No reviews found.</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-white/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredReviews.length} of {reviews.length} reviews
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

export default Reviews;
