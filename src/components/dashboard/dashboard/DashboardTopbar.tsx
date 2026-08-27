import {
  FaBars,
  FaSearch,
  FaBell,
  FaChevronDown,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useTheme } from "../../../context/ThemeContext";

interface DashboardTopbarProps {
  onMenuClick: () => void;
}

const DashboardTopbar = ({ onMenuClick }: DashboardTopbarProps) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="flex h-20 items-center justify-between border-b border-[var(--border)] bg-[var(--background)] px-4 transition-colors duration-300 sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)] lg:hidden"
        >
          <FaBars size={22} />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-[var(--foreground)] sm:text-xl">
            Dashboard
          </h2>

          <p className="hidden text-xs text-[var(--muted)] sm:block">
            Welcome back, Admin
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
        <button className="relative rounded-xl p-2.5 text-[var(--muted)] transition hover:bg-[var(--card)] hover:text-[var(--foreground)]">
          <FaBell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-sky-400" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-[var(--card)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-400">
            A
          </div>

          <FaChevronDown
            size={16}
            className="hidden text-[var(--muted)] sm:block"
          />
        </button>

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
