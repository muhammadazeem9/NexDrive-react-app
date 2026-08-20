import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import { dashboardStats } from "../../data/dashboard";
import { popularVehicles } from "../../data/dashboard";
import RevenueChart from "../../components/dashboard/RevenuCharts";
import PopularVehicleCard from "../../components/dashboard/PopularVehicleCard";
import RecentBookings from "../../components/dashboard/RecentBooking";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-sky-400">Overview</p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Welcome back, Admin
          </h1>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Here's what's happening with your NexDrive business today.
          </p>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.title} data={stat} />
          ))}
        </section>

        {/* Temporary overview */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 xl:col-span-2">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Revenue Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Track your revenue performance.
                </p>
              </div>

              <div className="flex rounded-lg border border-white/10 bg-white/[0.02] p-1">
                <button className="rounded-md bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-400">
                  1Y
                </button>

                <button className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:text-white">
                  30D
                </button>

                <button className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-500 transition hover:text-white">
                  7D
                </button>
              </div>
            </div>

            <RevenueChart />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Popular Vehicles
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your most booked vehicles.
                </p>
              </div>

              <button className="text-xs font-medium text-sky-400 transition hover:text-sky-300">
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
        <RecentBookings />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
