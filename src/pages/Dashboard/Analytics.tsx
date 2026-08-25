import {
  MdCalendarMonth,
  MdDirectionsCar,
  MdPeople,
  MdPayments,
} from "react-icons/md";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import DashboardLayout from "../../layouts/DashboardLayout";
import AnalyticsCard from "../../components/dashboard/analytics/AnalyticsCard";
import {
  analyticsData,
  vehicleRevenueData,
  bookingStatusData,
} from "../../data/analytics/analytics";
import { useState } from "react";

const Analytics = () => {
  const [period, setPeriod] = useState<keyof typeof analyticsData>("This Year");
  const currentData = analyticsData[period];
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-sky-400">Insights</p>

            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Analytics
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Monitor your rental business performance.
            </p>
          </div>

          <select
            value={period}
            onChange={(e) =>
              setPeriod(e.target.value as keyof typeof analyticsData)
            }
            className="rounded-xl border border-white/10 bg-[#0b1627] px-4 py-2.5 text-sm text-slate-300 outline-none focus:border-sky-400/50"
          >
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>
        </section>

        {/* KPI Cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <AnalyticsCard
            title="Total Revenue"
            value="$124,850"
            change="+18.2%"
            icon={MdPayments}
            iconClass="bg-sky-400/10 text-sky-400"
          />

          <AnalyticsCard
            title="Total Bookings"
            value="584"
            change="+12.5%"
            icon={MdCalendarMonth}
            iconClass="bg-purple-400/10 text-purple-400"
          />

          <AnalyticsCard
            title="Total Customers"
            value="842"
            change="+8.4%"
            icon={MdPeople}
            iconClass="bg-emerald-400/10 text-emerald-400"
          />

          <AnalyticsCard
            title="Fleet Utilization"
            value="78.6%"
            change="+5.8%"
            icon={MdDirectionsCar}
            iconClass="bg-yellow-400/10 text-yellow-400"
          />
        </section>

        {/* Revenue Chart */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-white">Revenue Overview</h2>

              <p className="mt-1 text-xs text-slate-500">
                Monthly revenue performance
              </p>
            </div>

            <select
              className="rounded-lg border border-white/10 bg-[#0b1627] px-3 py-2 text-xs text-slate-400 outline-none"
              defaultValue="2026"
            >
              <option value="2026">2026</option>

              <option value="2025">2025</option>
            </select>
          </div>

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={currentData.revenue}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.3} />

                    <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="rgba(255,255,255,0.06)"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  tick={{
                    fill: "#64748b",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "#64748b",
                    fontSize: 12,
                  }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0b1627",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                  formatter={(value) => [
                    `$${Number(value).toLocaleString()}`,
                    "Revenue",
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#38bdf8"
                  strokeWidth={2}
                  fill="url(#revenueGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Booking Trends */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="font-semibold text-white">Booking Trends</h2>

              <p className="mt-1 text-xs text-slate-500">
                Monthly booking activity
              </p>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={currentData.bookings}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -20,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="month"
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    cursor={{
                      fill: "rgba(255,255,255,0.03)",
                    }}
                    contentStyle={{
                      backgroundColor: "#0b1627",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                    }}
                    labelStyle={{
                      color: "#94a3b8",
                    }}
                  />

                  <Bar
                    dataKey="bookings"
                    fill="#38bdf8"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={38}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Vehicle Revenue */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="mb-6">
              <h2 className="font-semibold text-white">Revenue by Vehicle</h2>

              <p className="mt-1 text-xs text-slate-500">
                Top performing vehicles
              </p>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={vehicleRevenueData}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: 20,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid
                    stroke="rgba(255,255,255,0.06)"
                    horizontal={false}
                  />

                  <XAxis
                    type="number"
                    tick={{
                      fill: "#64748b",
                      fontSize: 12,
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />

                  <YAxis
                    type="category"
                    dataKey="vehicle"
                    width={90}
                    tick={{
                      fill: "#94a3b8",
                      fontSize: 11,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Tooltip
                    cursor={{
                      fill: "rgba(255,255,255,0.03)",
                    }}
                    contentStyle={{
                      backgroundColor: "#0b1627",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                    }}
                    formatter={(value) => [
                      `$${Number(value).toLocaleString()}`,
                      "Revenue",
                    ]}
                  />

                  <Bar
                    dataKey="revenue"
                    fill="#38bdf8"
                    radius={[0, 6, 6, 0]}
                    maxBarSize={22}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>
        {/* Booking Status */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="mb-6">
            <h2 className="font-semibold text-white">Booking Status</h2>

            <p className="mt-1 text-xs text-slate-500">
              Current booking distribution
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            {/* Chart */}
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bookingStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={75}
                    outerRadius={105}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {bookingStatusData.map((entry) => {
                      const colors: Record<string, string> = {
                        Completed: "#34d399",
                        Confirmed: "#38bdf8",
                        Pending: "#facc15",
                        Cancelled: "#f87171",
                      };

                      return (
                        <Cell key={entry.name} fill={colors[entry.name]} />
                      );
                    })}
                  </Pie>

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0b1627",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="space-y-4">
              {bookingStatusData.map((item) => {
                const colors: Record<string, string> = {
                  Completed: "bg-emerald-400",
                  Confirmed: "bg-sky-400",
                  Pending: "bg-yellow-400",
                  Cancelled: "bg-red-400",
                };

                return (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${colors[item.name]}`}
                      />

                      <span className="text-sm text-slate-400">
                        {item.name}
                      </span>
                    </div>

                    <span className="text-sm font-semibold text-white">
                      {item.value}%
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
