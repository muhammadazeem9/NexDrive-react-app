import {
  MdDashboard,
  MdDirectionsCar,
  MdCalendarMonth,
  MdPeople,
  MdCreditCard,
  MdStar,
  MdBarChart,
  MdSettings,
  MdLogout,
  MdClose,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../api/auth.api";
import { useAuth } from "../../../context/AuthContext";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  {
    label: "Vehicles",
    icon: MdDirectionsCar,
    path: "/dashboard/vehicles",
  },
  {
    label: "Bookings",
    icon: MdCalendarMonth,
    path: "/dashboard/bookings",
  },
  {
    label: "Customers",
    icon: MdPeople,
    path: "/dashboard/customers",
  },
];

const managementLinks = [
  {
    label: "Payments",
    icon: MdCreditCard,
    path: "/dashboard/payments",
  },
  {
    label: "Reviews",
    icon: MdStar,
    path: "/dashboard/reviews",
  },
  {
    label: "Analytics",
    icon: MdBarChart,
    path: "/dashboard/analytics",
  },
];

const DashboardSidebar = ({ isOpen, onClose }: DashboardSidebarProps) => {
  const navigate = useNavigate();

  const { user, setUser } = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-72 flex-col border-r border-[var(--border)] bg-[var(--background)] px-5 py-6 transition-all duration-300 lg:static lg:z-auto lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              NEX<span className="text-sky-400">DRIVE</span>
            </h1>

            <p className="mt-1 text-xs text-[var(--muted)]">Admin Dashboard</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)] lg:hidden"
          >
            <MdClose size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex-1 space-y-8">
          {/* Main */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-[var(--muted)] uppercase">
              Main
            </p>

            {/* Dashboard */}
            <NavLink
              to="/dashboard"
              end
              onClick={onClose}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-500/10 text-sky-400"
                    : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                }`
              }
            >
              <MdDashboard size={19} />
              <span>Dashboard</span>
            </NavLink>

            {/* Main Links */}
            <div className="space-y-1">
              {mainLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-sky-500/10 text-sky-400"
                          : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                      }`
                    }
                  >
                    <Icon size={19} />
                    <span>{link.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Management */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-[var(--muted)] uppercase">
              Management
            </p>

            <div className="space-y-1">
              {managementLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-sky-500/10 text-sky-400"
                          : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                      }`
                    }
                  >
                    <Icon size={19} />
                    <span>{link.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* System */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold tracking-wider text-[var(--muted)] uppercase">
              System
            </p>

            <div className="space-y-1">
              <NavLink
                to="/dashboard/settings"
                onClick={onClose}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-sky-500/10 text-sky-400"
                      : "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]"
                  }`
                }
              >
                <MdSettings size={19} />
                <span>Settings</span>
              </NavLink>
            </div>
          </div>
        </nav>

        {/* User */}
        <div className="border-t border-[var(--border)] pt-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/10 font-semibold text-sky-400">
              {user?.name?.charAt(0).toUpperCase() || "A"}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[var(--foreground)]">
                {user?.name || "Admin User"}
              </p>

              <p className="text-xs text-[var(--muted)] capitalize">
                {user?.role === "admin"
                  ? "Administrator"
                  : user?.role || "User"}
              </p>
            </div>
          </div>

          <button
            type="button"
            disabled={loggingOut}
            onClick={async () => {
              try {
                setLoggingOut(true);

                await logoutUser();

                // Clear frontend auth state
                setUser(null);

                // Redirect to login
                navigate("/auth", { replace: true });
              } catch (error) {
                console.error("Logout failed:", error);

                // Even if the server request fails,
                // remove the local auth state.
                setUser(null);

                navigate("/auth", { replace: true });
              } finally {
                setLoggingOut(false);
              }
            }}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <MdLogout size={19} />

            <span>{loggingOut ? "Logging out..." : "Logout"}</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
