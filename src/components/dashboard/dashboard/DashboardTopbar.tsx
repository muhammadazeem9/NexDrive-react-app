import { FaBars, FaSearch, FaBell, FaChevronDown } from "react-icons/fa";

interface DashboardTopbarProps {
  onMenuClick: () => void;
}

const DashboardTopbar = ({
  onMenuClick,
}: DashboardTopbarProps) => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#07111f] px-4 sm:px-6 lg:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
        >
          <FaBars size={22} />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-white sm:text-xl">
            Dashboard
          </h2>

          <p className="hidden text-xs text-slate-500 sm:block">
            Welcome back, Admin
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 md:flex">
          <FaSearch size={17} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="w-32 bg-transparent text-sm text-white outline-none placeholder:text-slate-600 lg:w-44"
          />
        </div>

        {/* Notification */}
        <button className="relative rounded-xl p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white">
          <FaBell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-sky-400" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-white/5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-400">
            A
          </div>

          <FaChevronDown
            size={16}
            className="hidden text-slate-500 sm:block"
          />
        </button>
      </div>
    </header>
  );
};

export default DashboardTopbar;