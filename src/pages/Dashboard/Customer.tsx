import { useMemo, useState } from "react";
import { FiEye, FiMoreHorizontal, FiSearch, FiUsers } from "react-icons/fi";

import DashboardLayout from "../../layouts/DashboardLayout";
import CustomerStatus from "../../components/dashboard/booking/CustomerStatus";
import { customers } from "../../data/customers";
import { Link } from "react-router-dom";

const Customers = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        customer.name.toLowerCase().includes(searchValue) ||
        customer.email.toLowerCase().includes(searchValue) ||
        customer.id.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || customer.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-sky-400">Management</p>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Customers
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your customers and their rental activity.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">Total Customers</p>

              <FiUsers size={18} className="text-sky-400" />
            </div>

            <p className="mt-3 text-2xl font-bold text-white">842</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Active Customers</p>

            <p className="mt-3 text-2xl font-bold text-emerald-400">768</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">New This Month</p>

            <p className="mt-3 text-2xl font-bold text-sky-400">64</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Avg. Spending</p>

            <p className="mt-3 text-2xl font-bold text-white">$1,842</p>
          </div>
        </section>

        {/* Filters */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
              <FiSearch size={18} className="shrink-0 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search customers..."
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none focus:border-sky-400/50 sm:w-48"
            >
              <option value="All">All Customers</option>

              <option value="Active">Active</option>

              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </section>

        {/* Customers Table */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Contact
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Location
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Bookings
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Total Spent
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
                {filteredCustomers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    {/* Customer */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={customer.avatar}
                          alt={customer.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                          <p className="text-sm font-semibold text-white">
                            {customer.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
                            {customer.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-slate-300">
                          {customer.email}
                        </p>

                        <p className="mt-1 text-xs text-slate-600">
                          {customer.phone}
                        </p>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {customer.location}
                    </td>

                    {/* Bookings */}
                    <td className="px-6 py-4 text-sm text-slate-300">
                      {customer.totalBookings}
                    </td>

                    {/* Total */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-white">
                        ${customer.totalSpent.toLocaleString()}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <CustomerStatus status={customer.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <Link
                          to={`/dashboard/customers/${customer.id}`}
                          title="View customer"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                        >
                          <FiEye size={17} />
                        </Link>

                        <button
                          title="More"
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                        >
                          <FiMoreHorizontal size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredCustomers.length === 0 && (
            <div className="flex min-h-40 items-center justify-center">
              <p className="text-sm text-slate-500">No customers found.</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-white/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {filteredCustomers.length} of {customers.length} customers
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

export default Customers;
