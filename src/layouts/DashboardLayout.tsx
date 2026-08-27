import { useState } from "react";
import DashboardTopbar from "../components/dashboard/dashboard/DashboardTopbar";
import DashboardSidebar from "../components/dashboard/dashboard/DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <DashboardSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <DashboardTopbar onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-x-hidden bg-[var(--background)] p-4 transition-colors duration-300 sm:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
