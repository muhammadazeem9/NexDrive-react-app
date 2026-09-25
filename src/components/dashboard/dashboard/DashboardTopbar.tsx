import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaChevronDown,
  FaMoon,
  FaSun,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { useTheme } from "../../../context/ThemeContext";
import { useAuth } from "../../../context/AuthContext";
import { logoutUser } from "../../../api/auth.api";

interface DashboardTopbarProps {
  onMenuClick: () => void;
}

const DashboardTopbar = ({ onMenuClick }: DashboardTopbarProps) => {
  const { darkMode, toggleTheme } = useTheme();
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const userName = user?.name || "Admin User";

  const userRole =
    user?.role === "admin" ? "Administrator" : user?.role || "User";

  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await logoutUser();

      setUser(null);

      navigate("/auth", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout failed:", error);

      // Clear frontend state even if
      // backend logout request fails.
      setUser(null);

      navigate("/auth", {
        replace: true,
      });
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <header className="flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-4 transition-colors duration-300 sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="rounded-xl p-2 text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)] lg:hidden"
        >
          <FaBars size={22} />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
            Dashboard
          </h2>

          <p className="hidden text-xs text-[var(--muted)] sm:block">
            Welcome back, {userName}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-2 md:flex">
          <FaSearch size={17} className="text-[var(--muted)]" />

          <input
            type="text"
            placeholder="Search..."
            className="w-32 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] lg:w-44"
          />
        </div>

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-xl p-2.5 text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)]"
        >
          <FaBell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-sky-400" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setProfileOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-[var(--card)]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-400">
              {userInitial}
            </div>

            <FaChevronDown
              size={16}
              className={`hidden text-[var(--muted)] transition-transform sm:block ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div className="absolute top-12 right-0 z-50 w-64 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">
              {/* User Info */}
              <div className="border-b border-[var(--border)] p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 font-semibold text-sky-400">
                    {userInitial}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[var(--foreground)]">
                      {userName}
                    </p>

                    <p className="text-xs text-[var(--muted)] capitalize">
                      {userRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile */}
              <div className="p-2">
                <button
                  type="button"
                  onClick={() => {
                    setProfileOpen(false);
                    navigate("/dashboard/settings");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                >
                  <FaUser size={15} />
                  Profile Settings
                </button>

                {/* Logout */}
                <button
                  type="button"
                  disabled={loggingOut}
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <FaSignOutAlt size={15} />

                  {loggingOut ? "Logging out..." : "Logout"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition hover:text-[var(--primary)]"
        >
          {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;
