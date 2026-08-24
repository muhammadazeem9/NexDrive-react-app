import { useMemo, useState } from "react";
import {
  MdAccountBalance,
  MdCalendarMonth,
  MdCreditCard,
  MdDownload,
  MdMoreHoriz,
  MdPayments,
  MdSearch,
  MdVisibility,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";
import PaymentStatus from "../../components/dashboard/payments/PaymentStatus";
import { payments } from "../../data/payment";

const Payments = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [methodFilter, setMethodFilter] = useState("All");

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        payment.id.toLowerCase().includes(searchValue) ||
        payment.bookingId.toLowerCase().includes(searchValue) ||
        payment.customer.name.toLowerCase().includes(searchValue) ||
        payment.vehicle.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || payment.status === statusFilter;

      const matchesMethod =
        methodFilter === "All" || payment.method === methodFilter;

      return matchesSearch && matchesStatus && matchesMethod;
    });
  }, [search, statusFilter, methodFilter]);

  const totalRevenue = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((total, payment) => total + payment.amount, 0);

  const pendingAmount = payments
    .filter((payment) => payment.status === "Pending")
    .reduce((total, payment) => total + payment.amount, 0);

  const refundedAmount = payments
    .filter((payment) => payment.status === "Refunded")
    .reduce((total, payment) => total + payment.amount, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-sky-400">Finance</p>

            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Payments
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track transactions, revenue and payment activity.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
            <MdDownload size={18} />
            Export
          </button>
        </section>

        {/* Revenue cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Total Revenue */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-sky-400/10 p-3">
                <MdPayments size={22} className="text-sky-400" />
              </div>

              <span className="text-xs text-emerald-400">+12.5%</span>
            </div>

            <p className="mt-5 text-xs text-slate-500">Total Revenue</p>

            <p className="mt-2 text-2xl font-bold text-white">
              ${totalRevenue.toLocaleString()}
            </p>
          </div>

          {/* Paid */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-emerald-400/10 p-3">
                <MdCreditCard size={22} className="text-emerald-400" />
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-500">Successful Payments</p>

            <p className="mt-2 text-2xl font-bold text-white">
              {payments.filter((payment) => payment.status === "Paid").length}
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-yellow-400/10 p-3">
                <MdAccountBalance size={22} className="text-yellow-400" />
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-500">Pending Amount</p>

            <p className="mt-2 text-2xl font-bold text-white">
              ${pendingAmount.toLocaleString()}
            </p>
          </div>

          {/* Refunded */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-purple-400/10 p-3">
                <MdPayments size={22} className="text-purple-400" />
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-500">Refunded Amount</p>

            <p className="mt-2 text-2xl font-bold text-white">
              ${refundedAmount.toLocaleString()}
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 xl:flex-row">
            {/* Search */}
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
              <MdSearch size={20} className="shrink-0 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search transaction, booking, customer..."
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none focus:border-sky-400/50 xl:w-48"
            >
              <option value="All">All Status</option>

              <option value="Paid">Paid</option>

              <option value="Pending">Pending</option>

              <option value="Refunded">Refunded</option>

              <option value="Failed">Failed</option>
            </select>

            {/* Method */}
            <select
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none focus:border-sky-400/50 xl:w-48"
            >
              <option value="All">All Methods</option>

              <option value="Card">Card</option>

              <option value="Bank Transfer">Bank Transfer</option>

              <option value="Cash">Cash</option>

              <option value="PayPal">PayPal</option>
            </select>

            {/* Date */}
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <MdCalendarMonth size={18} />
              Date
            </button>
          </div>
        </section>

        {/* Transactions */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="font-semibold text-white">Transactions</h2>

            <p className="mt-1 text-xs text-slate-500">
              Complete payment transaction history
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Transaction
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Booking
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Method
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Date
                  </th>

                  <th className="px-6 py-4 text-left text-xs tracking-wider text-slate-500 uppercase">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs tracking-wider text-slate-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPayments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    {/* Transaction */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-white">
                        {payment.id}
                      </p>

                      <p className="mt-1 text-xs text-slate-600">Transaction</p>
                    </td>

                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={payment.customer.avatar}
                          alt={payment.customer.name}
                          className="h-9 w-9 rounded-full object-cover"
                        />

                        <div>
                          <p className="text-sm font-medium text-white">
                            {payment.customer.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
                            {payment.customer.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Booking */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-sky-400">
                          {payment.bookingId}
                        </p>

                        <p className="mt-1 text-xs text-slate-600">
                          {payment.vehicle}
                        </p>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-white">
                        ${payment.amount.toLocaleString()}
                      </span>
                    </td>

                    {/* Method */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-400">
                        {payment.method}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-400">
                        {payment.date}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <PaymentStatus status={payment.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <button
                          title="View transaction"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                        >
                          <MdVisibility size={18} />
                        </button>

                        <button
                          title="More"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                        >
                          <MdMoreHoriz size={19} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredPayments.length === 0 && (
            <div className="flex min-h-40 items-center justify-center">
              <p className="text-sm text-slate-500">No transactions found.</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-white/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredPayments.length} of {payments.length}{" "}
              transactions
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

export default Payments;
