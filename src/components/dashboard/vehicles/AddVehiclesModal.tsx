import { useEffect, useState } from "react";
import { MdClose, MdCloudUpload } from "react-icons/md";

import type { Vehicle, VehicleStatusType } from "../../../types/vehicle";

interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (vehicle: Vehicle) => void;
  editingVehicle?: Vehicle | null;
  onUpdate: (vehicle: Vehicle) => void;
}

const AddVehicleModal = ({
  isOpen,
  onClose,
  onAdd,
  editingVehicle,
  onUpdate,
}: AddVehicleModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    pricePerDay: "",
    status: "Available" as VehicleStatusType,
    image: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingVehicle) {
      setFormData({
        name: editingVehicle.name,
        brand: editingVehicle.brand,
        category: editingVehicle.category,
        pricePerDay: String(editingVehicle.pricePerDay),
        status: editingVehicle.status,
        image: editingVehicle.image,
      });
    } else {
      setFormData({
        name: "",
        brand: "",
        category: "",
        pricePerDay: "",
        status: "Available",
        image: "",
      });
    }
  }, [editingVehicle, isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const vehicleData: Vehicle = {
      // Keep old ID when editing
      id: editingVehicle?.id ?? `VH-${Date.now()}`,

      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      image: formData.image,
      pricePerDay: Number(formData.pricePerDay),

      // Keep existing bookings when editing
      bookings: editingVehicle?.bookings ?? 0,

      status: formData.status,
    };

    if (editingVehicle) {
      // EDIT
      onUpdate(vehicleData);
    } else {
      // ADD
      onAdd(vehicleData);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      {/* Modal */}
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#07111f] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-white">
              {editingVehicle ? "Edit Vehicle" : "Add New Vehicle"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {editingVehicle
                ? "Update your vehicle information."
                : "Add a vehicle to your NexDrive inventory."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Vehicle name + Brand */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Vehicle Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. M4 Competition"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition outline-none placeholder:text-slate-600 focus:border-sky-400/50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Brand
              </label>

              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="e.g. BMW"
                required
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white transition outline-none placeholder:text-slate-600 focus:border-sky-400/50"
              />
            </div>
          </div>

          {/* Category + Price */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none focus:border-sky-400/50"
              >
                <option value="">Select category</option>
                <option value="Sports">Sports</option>
                <option value="Luxury">Luxury</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Electric">Electric</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Price Per Day
              </label>

              <div className="relative">
                <span className="absolute top-1/2 left-4 -translate-y-1/2 text-sm text-slate-500">
                  $
                </span>

                <input
                  type="number"
                  name="pricePerDay"
                  value={formData.pricePerDay}
                  onChange={handleChange}
                  placeholder="320"
                  min="0"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pr-4 pl-8 text-sm text-white transition outline-none placeholder:text-slate-600 focus:border-sky-400/50"
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#0b1627] px-4 py-3 text-sm text-slate-300 outline-none focus:border-sky-400/50"
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Vehicle Image URL
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-4">
              <MdCloudUpload size={24} className="shrink-0 text-sky-400" />

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/images/cars/bmw-m4.jpg"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            <p className="mt-2 text-xs text-slate-600">
              For now, enter an existing image path. We'll implement real image
              uploads with the backend later.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              {editingVehicle ? "Update Vehicle" : "Add Vehicle"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleModal;
