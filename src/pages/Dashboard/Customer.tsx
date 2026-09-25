import { useEffect, useState } from "react";
import { FiEye, FiMoreHorizontal, FiSearch, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";
import { getCustomers } from "../../api/admin/customer.api";
import type { Customer } from "../../types/backend/customer";

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  const [total, setTotal] = useState(0);

  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getCustomers(page, limit, search);

        setCustomers(data.customers);
        setTotal(data.pagination.total);
        setTotalPages(data.pagination.totalPages);
      } catch (error) {
        console.error(error);

        setError("Unable to load customers.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [page, limit, debouncedSearch]);

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

            <p className="mt-3 text-2xl font-bold text-white">{total}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Current Page</p>

            <p className="mt-3 text-2xl font-bold text-emerald-400">
              {customers.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Page</p>

            <p className="mt-3 text-2xl font-bold text-sky-400">
              {page} / {totalPages}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs text-slate-500">Customer Role</p>

            <p className="mt-3 text-2xl font-bold text-white">User</p>
          </div>
        </section>

        {/* Filters */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
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
          </div>
        </section>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Table */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Joined
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-sm text-slate-500"
                    >
                      Loading customers...
                    </td>
                  </tr>
                ) : customers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-sm text-slate-500"
                    >
                      No customers found.
                    </td>
                  </tr>
                ) : (
                  customers.map((customer) => (
                    <tr
                      key={customer._id}
                      className="border-b border-white/5 transition hover:bg-white/[0.02]"
                    >
                      {/* Customer */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-400">
                            {customer.name.charAt(0).toUpperCase()}
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-white">
                              {customer.name}
                            </p>

                            <p className="mt-1 max-w-[180px] truncate text-xs text-slate-600">
                              {customer._id}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-6 py-4">
                        <p className="text-sm text-slate-300">
                          {customer.email}
                        </p>
                      </td>

                      {/* Role */}
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-400">
                          {customer.role}
                        </span>
                      </td>

                      {/* Created */}
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {new Date(customer.createdAt).toLocaleDateString()}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-1">
                          <Link
                            to={`/dashboard/customers/${customer._id}`}
                            title="View customer"
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                          >
                            <FiEye size={17} />
                          </Link>

                          <button
                            type="button"
                            title="More"
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                          >
                            <FiMoreHorizontal size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-white/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Showing {customers.length} of {total} customers
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={page === 1 || loading}
                onClick={() => setPage((current) => current - 1)}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:text-slate-700"
              >
                Previous
              </button>

              <span className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white">
                {page}
              </span>

              <button
                type="button"
                disabled={page >= totalPages || loading}
                onClick={() => setPage((current) => current + 1)}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:text-slate-700"
              >
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
