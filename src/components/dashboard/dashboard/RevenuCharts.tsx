import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import type { RevenueItem } from "../../../api/admin/admin.api";

interface RevenueChartProps {
  data: RevenueItem[];
  loading: boolean;
}

const RevenueChart = ({ data, loading }: RevenueChartProps) => {
  const chartData = data.map((item) => ({
    date: new Date(item._id).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    revenue: item.revenue,
    bookings: item.bookings,
  }));

  if (loading) {
    return (
      <div className="mt-6 flex h-[300px] w-full items-center justify-center">
        <p className="text-sm text-[var(--muted)]">Loading revenue...</p>
      </div>
    );
  }

  if (!chartData.length) {
    return (
      <div className="mt-6 flex h-[300px] w-full items-center justify-center">
        <p className="text-sm text-[var(--muted)]">
          No revenue data available.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 10,
            left: -15,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.35} />

              <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="var(--border)"
            strokeOpacity={0.7}
            vertical={false}
          />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "var(--muted)",
              fontSize: 12,
            }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "var(--muted)",
              fontSize: 12,
            }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              color: "var(--card-foreground)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
            }}
            labelStyle={{
              color: "var(--muted)",
              marginBottom: "4px",
            }}
            itemStyle={{
              color: "var(--card-foreground)",
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
  );
};

export default RevenueChart;
