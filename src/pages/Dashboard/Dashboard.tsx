import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/dashboard/StatCard";
import RevenueChart from "../../components/dashboard/dashboard/RevenuCharts";
import PopularVehicleCard from "../../components/dashboard/dashboard/PopularVehicleCard";
import RecentBookings from "../../components/dashboard/dashboard/RecentBooking";

import { useState, useEffect } from "react";
import {
  getDashboardStats,
  getRevenueData,
  getPopularVehicles,
} from "../../api/admin/admin.api";
import type { RevenueItem } from "../../api/admin/admin.api";
import type { PopularVehicle } from "../../types/dashboard";
import { dashboardStats } from "../../data/dashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // for dashboard statas
  const [dashboard, setDashboard] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // for revenue data
  const [revenuePeriod, setRevenuePeriod] = useState<"7D" | "30D" | "1Y">("1Y");
  const [revenueData, setRevenueData] = useState<RevenueItem[]>([]);
  const [revenueLoading, setRevenueLoading] = useState(false);

  // for popular vehicles data
  const [popularVehicles, setPopularVehicles] = useState<PopularVehicle[]>([]);
  const [popularVehiclesLoading, setPopularVehiclesLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setLoading(true);

        const data = await getDashboardStats();

        setDashboard(data);
      } catch (error: any) {
        setError(error.response?.data?.message || "Unable to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  // revenue data fetch
  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        setRevenueLoading(true);

        const data = await getRevenueData(revenuePeriod);

        setRevenueData(data.revenue);
      } catch (error) {
        console.error("Unable to load revenue", error);
      } finally {
        setRevenueLoading(false);
      }
    };

    fetchRevenue();
  }, [revenuePeriod]);

  // popular vehicle fetch
  useEffect(() => {
    const fetchPopularVehicles = async () => {
      try {
        setPopularVehiclesLoading(true);

        const vehicles = await getPopularVehicles();

        setPopularVehicles(vehicles);
      } catch (error) {
        console.error("Unable to load popular vehicles", error);
      } finally {
        setPopularVehiclesLoading(false);
      }
    };

    fetchPopularVehicles();
  }, []);

  const recentBookingData =
    dashboard?.recentBookings.map((booking: any) => ({
      id: booking._id,
      customer: {
        name: booking.user.name,
        avatar: "/images/users/default-user.jpg",
      },
      vehicle: `${booking.vehicle.brand} ${booking.vehicle.model}`,
      date: new Date(booking.startDate).toLocaleDateString(),
      amount: booking.totalPrice,
      status: booking.status.charAt(0).toUpperCase() + booking.status.slice(1),
    })) ?? [];

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-sm text-[var(--muted)]">Loading dashboard...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </DashboardLayout>
    );
  }

  const stats = dashboard?.stats;

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
          {dashboardStats.map((stat, index) => {
            const values = [
              `$ ${(stats?.totalRevenue ?? 0).toLocaleString()}`,
              stats?.totalBookings ?? 0,
              stats?.totalVehicles ?? 0,
              stats?.totalCustomers ?? 0,
            ];

            return (
              <StatCard
                key={stat.title}
                data={{
                  ...stat,
                  value: values[index],
                }}
              />
            );
          })}
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

              <div className="flex rounded-lg border border-[var(--border)] bg-[var(--background)] p-1">
                {(["1Y", "30D", "7D"] as const).map((period) => (
                  <button
                    key={period}
                    type="button"
                    onClick={() => setRevenuePeriod(period)}
                    className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                      revenuePeriod === period
                        ? "bg-sky-500/10 text-sky-500"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            <RevenueChart data={revenueData} loading={revenueLoading} />
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

              <Link to={"/dashboard/vehicles"}>
                <button
                  type="button"
                  className="text-xs font-medium text-sky-500 transition hover:text-sky-400"
                >
                  View all
                </button>
              </Link>
            </div>

            <div className="mt-6 space-y-3">
              {popularVehiclesLoading ? (
                <p className="py-8 text-center text-sm text-[var(--muted)]">
                  Loading popular vehicles...
                </p>
              ) : popularVehicles.length === 0 ? (
                <p className="py-8 text-center text-sm text-[var(--muted)]">
                  No booking data available.
                </p>
              ) : (
                popularVehicles.map((vehicle) => (
                  <PopularVehicleCard key={vehicle.id} vehicle={vehicle} />
                ))
              )}
            </div>
          </div>
        </section>

        {/* Recent Bookings */}
        <RecentBookings bookings={recentBookingData} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
