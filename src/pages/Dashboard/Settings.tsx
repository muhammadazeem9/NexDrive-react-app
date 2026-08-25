import { useState } from "react";
import {
  MdLock,
  MdNotifications,
  MdPerson,
  MdSecurity,
  MdBusiness,
  MdSave,
} from "react-icons/md";

import DashboardLayout from "../../layouts/DashboardLayout";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    bookings: true,
    reviews: true,
    payments: true,
    marketing: true,
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section>
          <p className="text-sm font-medium text-sky-400">System</p>

          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Settings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your account and dashboard preferences.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_1fr]">
          {/* Settings Navigation */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-2">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeTab === "profile"
                  ? "bg-sky-500/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <MdPerson size={19} />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("company")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeTab === "company"
                  ? "bg-sky-500/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <MdBusiness size={19} />
              Company
            </button>

            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeTab === "notifications"
                  ? "bg-sky-500/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <MdNotifications size={19} />
              Notifications
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                activeTab === "security"
                  ? "bg-sky-500/10 text-sky-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <MdSecurity size={19} />
              Security
            </button>
          </aside>

          {/* Content */}
          <main className="min-w-0">
            {/* Profile */}
            {activeTab === "profile" && (
              <section className="rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="border-b border-white/10 px-6 py-5">
                  <h2 className="font-semibold text-white">
                    Profile Information
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Update your administrator account information.
                  </p>
                </div>

                <div className="space-y-6 p-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/10 text-xl font-bold text-sky-400">
                      A
                    </div>

                    <div>
                      <button className="rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white">
                        Change Avatar
                      </button>

                      <p className="mt-2 text-xs text-slate-600">
                        JPG, PNG or WEBP. Max 2MB.
                      </p>
                    </div>
                  </div>

                  {/* Fields */}
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Full Name
                      </label>

                      <input
                        type="text"
                        defaultValue="Admin User"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white transition outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Email Address
                      </label>

                      <input
                        type="email"
                        defaultValue="admin@nexdrive.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white transition outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        defaultValue="+92 300 1234567"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white transition outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Role
                      </label>

                      <input
                        type="text"
                        value="Administrator"
                        disabled
                        className="w-full cursor-not-allowed rounded-xl border border-white/10 bg-white/[0.01] px-4 py-3 text-sm text-slate-600 outline-none"
                      />
                    </div>
                  </div>

                  {/* Save */}
                  <div className="flex justify-end border-t border-white/10 pt-5">
                    <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                      <MdSave size={18} />
                      Save Changes
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "company" && (
              <section className="rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="border-b border-white/10 px-6 py-5">
                  <h2 className="font-semibold text-white">
                    Company Information
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Manage your rental business information.
                  </p>
                </div>

                <div className="space-y-6 p-6">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Company Name
                      </label>

                      <input
                        type="text"
                        defaultValue="NexDrive"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Business Email
                      </label>

                      <input
                        type="email"
                        defaultValue="info@nexdrive.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Phone
                      </label>

                      <input
                        type="text"
                        defaultValue="+92 300 1234567"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Website
                      </label>

                      <input
                        type="text"
                        defaultValue="nexdrive.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-400">
                      Business Address
                    </label>

                    <textarea
                      rows={4}
                      defaultValue="Lahore, Punjab, Pakistan"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                    />
                  </div>

                  <div className="flex justify-end border-t border-white/10 pt-5">
                    <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                      <MdSave size={18} />
                      Save Changes
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "notifications" && (
              <section className="rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="border-b border-white/10 px-6 py-5">
                  <h2 className="font-semibold text-white">Notifications</h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Control which notifications you receive.
                  </p>
                </div>

                <div className="divide-y divide-white/5">
                  {/* Booking */}
                  <div className="flex items-center justify-between gap-5 p-6">
                    <div>
                      <p className="text-sm font-medium text-white">
                        New Bookings
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Get notified whenever a new booking is created.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setNotifications((prev) => ({
                          ...prev,
                          bookings: !prev.bookings,
                        }))
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        notifications.bookings ? "bg-sky-500" : "bg-slate-700"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          notifications.bookings ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Payments */}
                  <div className="flex items-center justify-between gap-5 p-6">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Payment Updates
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Receive alerts about successful or failed payments.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setNotifications((prev) => ({
                          ...prev,
                          payments: !prev.payments,
                        }))
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        notifications.payments ? "bg-sky-500" : "bg-slate-700"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          notifications.payments ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Reviews */}
                  <div className="flex items-center justify-between gap-5 p-6">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Customer Reviews
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Get notified when customers submit reviews.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setNotifications((prev) => ({
                          ...prev,
                          reviews: !prev.reviews,
                        }))
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        notifications.reviews ? "bg-sky-500" : "bg-slate-700"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          notifications.reviews ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between gap-5 p-6">
                    <div>
                      <p className="text-sm font-medium text-white">
                        Marketing Updates
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Receive product and promotional updates.
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        setNotifications((prev) => ({
                          ...prev,
                          marketing: !prev.marketing,
                        }))
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        notifications.marketing ? "bg-sky-500" : "bg-slate-700"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                          notifications.marketing ? "left-6" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                {/* Password */}
                <section className="rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="border-b border-white/10 px-6 py-5">
                    <h2 className="font-semibold text-white">
                      Change Password
                    </h2>

                    <p className="mt-1 text-xs text-slate-500">
                      Update your administrator password.
                    </p>
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Current Password
                      </label>

                      <input
                        type="password"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        New Password
                      </label>

                      <input
                        type="password"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-slate-400">
                        Confirm New Password
                      </label>

                      <input
                        type="password"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none focus:border-sky-400/50"
                      />
                    </div>

                    <div className="flex justify-end border-t border-white/10 pt-5">
                      <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-400">
                        <MdLock size={18} />
                        Update Password
                      </button>
                    </div>
                  </div>
                </section>

                {/* 2FA */}
                <section className="rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="flex items-center justify-between gap-5 p-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <MdSecurity size={20} className="text-sky-400" />

                        <h2 className="font-semibold text-white">
                          Two-Factor Authentication
                        </h2>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        Add an additional layer of security to your
                        administrator account.
                      </p>
                    </div>

                    <button className="rounded-xl border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-medium text-sky-400 transition hover:bg-sky-400/20">
                      Enable
                    </button>
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
