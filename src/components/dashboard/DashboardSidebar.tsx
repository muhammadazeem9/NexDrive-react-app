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

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainLinks = [
  {
    label: "Dashboard",
    icon: MdDashboard,
  },
  {
    label: "Vehicles",
    icon: MdDirectionsCar,
  },
  {
    label: "Bookings",
    icon: MdCalendarMonth,
  },
  {
    label: "Customers",
    icon: MdPeople,
  },
];

const managementLinks = [
  {
    label: "Payments",
    icon: MdCreditCard,
  },
  {
    label: "Reviews",
    icon: MdStar,
  },
  {
    label: "Analytics",
    icon: MdBarChart,
  },
];

const DashboardSidebar = ({
  isOpen,
  onClose,
}: DashboardSidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72
          flex-col border-r border-white/10
          bg-[#07111f] px-5 py-6
          transition-transform duration-300
          lg:static lg:z-auto lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              NEX<span className="text-sky-400">DRIVE</span>
            </h1>

            <p className="mt-1 text-xs text-slate-500">
              Admin Dashboard
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white lg:hidden"
          >
            <MdClose size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex-1 space-y-8">
          {/* Main */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Main
            </p>

            <div className="space-y-1">
              {mainLinks.map((link, index) => {
                const Icon = link.icon;

                return (
                  <button
                    key={link.label}
                    className={`
                      flex w-full items-center gap-3 rounded-xl
                      px-3 py-3 text-sm font-medium transition
                      ${
                        index === 0
                          ? "bg-sky-500/10 text-sky-400"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={19} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Management */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Management
            </p>

            <div className="space-y-1">
              {managementLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <button
                    key={link.label}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    <Icon size={19} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* System */}
          <div>
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              System
            </p>

            <button
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <MdSettings size={19} />
              <span>Settings</span>
            </button>
          </div>
        </nav>

        {/* User */}
        <div className="border-t border-white/10 pt-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 font-semibold text-sky-400">
              A
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Admin User
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>
          </div>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10">
            <MdLogout size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;