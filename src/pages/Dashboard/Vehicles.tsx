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

import {
  getAdminVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  type Vehicle,
  type vehiclePayload,
} from "../../api/admin/adminVehicle.api";

const Vehicles = () => {
  const [search, setSearch] = useState("");

  const [vehicleList, setVehicleList] = useState<Vehicle[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // =========================
  // Fetch vehicles
  // =========================
  const fetchVehicles = async () => {
    try {
      setLoading(true);
      setError("");

      const vehicles = await getAdminVehicles();

      setVehicleList(vehicles);
    } catch (error: any) {
      setError(error.response?.data?.message || "Unable to load vehicles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // =========================
  // Search
  // =========================
  const filteredVehicles = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    if (!searchValue) {
      return vehicleList;
    }

    return vehicleList.filter(
      (vehicle) =>
        vehicle.name.toLowerCase().includes(searchValue) ||
        vehicle.brand.toLowerCase().includes(searchValue) ||
        vehicle.model.toLowerCase().includes(searchValue),
    );
  }, [vehicleList, search]);

  // =========================
  // Pagination
  // =========================
  const totalPages = Math.ceil(filteredVehicles.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const paginatedVehicles = filteredVehicles.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // =========================
  // Add vehicle
  // =========================
  const handleAddVehicle = async (vehicleData: vehiclePayload) => {
    const newVehicle = await createVehicle(vehicleData);

    setVehicleList((prev) => [newVehicle, ...prev]);
  };

  // =========================
  // Update vehicle
  // =========================
  const handleUpdateVehicle = async (
    id: string,
    vehicleData: vehiclePayload,
  ) => {
    const updatedVehicle = await updateVehicle(id, vehicleData);

    setVehicleList((currentVehicles) =>
      currentVehicles.map((vehicle) =>
        vehicle._id === id ? updatedVehicle : vehicle,
      ),
    );

    setEditingVehicle(null);
  };

  // =========================
  // Delete vehicle
  // =========================
  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this vehicle?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteVehicle(id);

      setVehicleList((currentVehicles) =>
        currentVehicles.filter((vehicle) => vehicle._id !== id),
      );
    } catch (error: any) {
      alert(error.response?.data?.message || "Unable to delete vehicle");
    }
  };

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
            type="button"
            onClick={() => {
              setEditingVehicle(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            <FiPlus size={18} />
            Add Vehicle
          </button>
        </section>

        {/* Error */}
        {error && (
          <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Search */}
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4">
            <FiSearch size={18} className="shrink-0 text-slate-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vehicles..."
              className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600"
            />
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
                    Model
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Year
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Price
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {/* Loading */}
                {loading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-sm text-slate-500"
                    >
                      Loading vehicles...
                    </td>
                  </tr>
                ) : filteredVehicles.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-sm text-slate-500"
                    >
                      No vehicles found.
                    </td>
                  </tr>
                ) : (
                  paginatedVehicles.map((vehicle) => (
                    <tr
                      key={vehicle._id}
                      className="border-b border-white/5 transition hover:bg-white/[0.02]"
                    >
                      {/* Vehicle */}
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-white">
                            {vehicle.name}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            {vehicle.brand} · {vehicle._id}
                          </p>
                        </div>
                      </td>

                      {/* Model */}
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {vehicle.model}
                      </td>

                      {/* Year */}
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {vehicle.year}
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-semibold text-white">
                          ${vehicle.pricePerDay}
                        </span>

                        <span className="text-xs text-slate-600">/day</span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-1">
                          {/* Edit */}
                          <button
                            type="button"
                            onClick={() => {
                              setEditingVehicle(vehicle);

                              setIsModalOpen(true);
                            }}
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-400"
                          >
                            <FiEdit size={16} />
                          </button>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => handleDelete(vehicle._id)}
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-red-400/10 hover:text-red-400"
                          >
                            <FiTrash2 size={16} />
                          </button>

                          {/* More */}
                          <button
                            type="button"
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
                          >
                            <FiMoreHorizontal size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 border-t border-[var(--border)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Results */}
            <p className="text-sm text-[var(--muted)]">
              Showing{" "}
              <span className="font-medium text-[var(--foreground)]">
                {filteredVehicles.length === 0 ? 0 : startIndex + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium text-[var(--foreground)]">
                {Math.min(endIndex, filteredVehicles.length)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-[var(--foreground)]">
                {filteredVehicles.length}
              </span>{" "}
              vehicles
            </p>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                {/* Previous */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.max(page - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--background)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {/* Page numbers */}
                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, index) => index + 1,
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`h-9 min-w-9 rounded-lg px-3 text-sm font-medium transition ${
                      currentPage === page
                        ? "bg-sky-500 text-white"
                        : "text-[var(--foreground)] hover:bg-[var(--background)]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage((page) => Math.min(page + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--background)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Add / Edit Modal */}
      <AddVehicleModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingVehicle(null);
        }}
        editingVehicle={editingVehicle}
        onAdd={handleAddVehicle}
        onUpdate={handleUpdateVehicle}
      />
    </DashboardLayout>
  );
};

export default Vehicles;
