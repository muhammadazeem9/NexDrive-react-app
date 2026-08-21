import { useEffect, useMemo, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiMoreHorizontal,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";

import DashboardLayout from "../../layouts/DashboardLayout";
import AddVehicleModal from "../../components/dashboard/vehicles/AddVehiclesModal";
import VehicleStatus from "../../components/dashboard/vehicles/VehicleStatus";
import { vehicles } from "../../data/vehicles";
import type { Vehicle } from "../../types/vehicle";

const Vehicles = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [vehicleList, setVehicleList] = useState<Vehicle[]>(() => {
    const savedVehicles = localStorage.getItem("vehicles");

    return savedVehicles ? JSON.parse(savedVehicles) : vehicles;
  });

  useEffect(() => {
    localStorage.setItem("vehicles", JSON.stringify(vehicleList));
  }, [vehicleList]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  const filteredVehicles = useMemo(() => {
    return vehicleList.filter((vehicle) => {
      const matchesSearch =
        vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || vehicle.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [vehicleList, search, statusFilter]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-sky-400">Management</p>

            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Vehicles
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your vehicle inventory.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            <FiPlus size={18} />
            Add Vehicle
          </button>
        </section>

        {/* Filters */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex flex-col gap-3 md:flex-row">
            {/* Search */}
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
              <FiSearch size={18} className="shrink-0 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vehicles..."
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            {/* Status */}
            <div className="relative">
              <FiMoreHorizontal
                size={17}
                className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-slate-500"
              />

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-[#0b1627] py-3 pr-10 pl-10 text-sm text-slate-300 outline-none md:w-48"
              >
                <option value="All">All Status</option>
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>
        </section>

        {/* Table */}
        <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Vehicle
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Price
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Bookings
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredVehicles.map((vehicle) => (
                  <tr
                    key={vehicle.id}
                    className="border-b border-white/5 transition hover:bg-white/[0.02]"
                  >
                    {/* Vehicle */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="h-14 w-20 rounded-lg object-cover"
                        />

                        <div>
                          <p className="font-medium text-white">
                            {vehicle.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {vehicle.brand} · {vehicle.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {vehicle.category}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-white">
                        ${vehicle.pricePerDay}
                      </span>

                      <span className="text-xs text-slate-600">/day</span>
                    </td>

                    {/* Bookings */}
                    <td className="px-6 py-4 text-sm text-slate-400">
                      {vehicle.bookings}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <VehicleStatus status={vehicle.status} />
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-1">
                        <button
                          onClick={() => {
                            setEditingVehicle(vehicle);
                            setIsModalOpen(true);
                          }}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                        >
                          <FiEdit size={16} />
                        </button>

                        <button
                          onClick={() =>
                            setVehicleList((currentVehicles) =>
                              currentVehicles.filter(
                                (item) => item.id !== vehicle.id,
                              ),
                            )
                          }
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-400/10 hover:text-red-400"
                        >
                          <FiTrash2 size={16} />
                        </button>

                        <button className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white">
                          <FiMoreHorizontal size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredVehicles.length === 0 && (
            <div className="flex min-h-40 items-center justify-center">
              <p className="text-sm text-slate-500">No vehicles found.</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/5 px-6 py-4">
            <p className="text-xs text-slate-500">
              Showing {filteredVehicles.length} of {vehicles.length} vehicles
            </p>

            <div className="flex gap-2">
              <button
                disabled
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-600"
              >
                Previous
              </button>

              <button className="rounded-lg bg-sky-500 px-3 py-1.5 text-xs font-medium text-white">
                1
              </button>

              <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                2
              </button>

              <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-400 hover:text-white">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>

      <AddVehicleModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingVehicle(null);
        }}
        onAdd={(newVehicle) => {
          setVehicleList((prev) => [newVehicle, ...prev]);
        }}
        editingVehicle={editingVehicle}
        onUpdate={(updatedVehicle) => {
          setVehicleList((currentVehicles) =>
            currentVehicles.map((vehicle) =>
              vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle,
            ),
          );

          setIsModalOpen(false);
          setEditingVehicle(null);
        }}
      />
    </DashboardLayout>
  );
};

export default Vehicles;
