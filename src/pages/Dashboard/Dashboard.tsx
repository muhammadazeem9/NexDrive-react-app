import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/dashboard/StatCard";
import { dashboardStats, popularVehicles } from "../../data/dashboard";
import RevenueChart from "../../components/dashboard/dashboard/RevenuCharts";
import PopularVehicleCard from "../../components/dashboard/dashboard/PopularVehicleCard";
import RecentBookings from "../../components/dashboard/dashboard/RecentBooking";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-sky-500">Overview</p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Welcome back, Admin
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
            Here's what's happening with your NexDrive business today.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.title} data={stat} />
          ))}
        </section>

        {/* Revenue + Popular Vehicles */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {/* Revenue Overview */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-colors duration-300 xl:col-span-2">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold text-[var(--card-foreground)]">
                  Revenue Overview
                </h2>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Track your revenue performance.
                </p>
              </div>

              {/* Period buttons */}
              <div className="flex rounded-lg border border-[var(--border)] bg-[var(--background)] p-1">
                <button
                  type="button"
                  className="rounded-md bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-500"
                >
                  1Y
                </button>

                <button
                  type="button"
                  className="rounded-md px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
                >
                  30D
                </button>

                <button
                  type="button"
                  className="rounded-md px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
                >
                  7D
                </button>
              </div>
            </div>

            <RevenueChart />
          </div>

          {/* Popular Vehicles */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[var(--card-foreground)]">
                  Popular Vehicles
                </h2>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Your most booked vehicles.
                </p>
              </div>

              <button
                type="button"
                className="text-xs font-medium text-sky-500 transition hover:text-sky-400"
              >
                View all
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {popularVehicles.map((vehicle) => (
                <PopularVehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Bookings */}
        <RecentBookings />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
