import { useEffect, useState } from "react";
import { MdClose, MdCloudUpload } from "react-icons/md";

import type {
  Vehicle,
  vehiclePayload,
} from "../../../api/admin/adminVehicle.api";

interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;

  onAdd: (vehicle: vehiclePayload) => Promise<void>;

  editingVehicle?: Vehicle | null;

  onUpdate: (id: string, vehicle: vehiclePayload) => Promise<void>;
}

interface FormData {
  name: string;
  brand: string;
  model: string;
  year: string;
  pricePerDay: string;
}

const emptyForm: FormData = {
  name: "",
  brand: "",
  model: "",
  year: "",
  pricePerDay: "",
};

const AddVehicleModal = ({
  isOpen,
  onClose,
  onAdd,
  editingVehicle,
  onUpdate,
}: AddVehicleModalProps) => {
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const [error, setError] = useState("");

  const [submitting, setSubmitting] = useState(false);

  // =========================
  // Fill form when editing
  // =========================
  useEffect(() => {
    if (editingVehicle) {
      setFormData({
        name: editingVehicle.name,
        brand: editingVehicle.brand,
        model: editingVehicle.model,
        year: String(editingVehicle.year),
        pricePerDay: String(editingVehicle.pricePerDay),
      });
    } else {
      setFormData(emptyForm);
    }

    setError("");
  }, [editingVehicle, isOpen]);

  if (!isOpen) {
    return null;
  }

  // =========================
  // Input change
  // =========================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitting) {
      return;
    }

    const year = Number(formData.year);
    const pricePerDay = Number(formData.pricePerDay);

    // =========================
    // Validation
    // =========================
    if (!formData.name.trim()) {
      setError("Vehicle name is required.");
      return;
    }

    if (!formData.brand.trim()) {
      setError("Brand is required.");
      return;
    }

    if (!formData.model.trim()) {
      setError("Model is required.");
      return;
    }

    if (!formData.year || Number.isNaN(year) || year < 1900) {
      setError("Please enter a valid vehicle year.");
      return;
    }

    if (
      formData.pricePerDay === "" ||
      Number.isNaN(pricePerDay) ||
      pricePerDay < 0
    ) {
      setError("Please enter a valid price per day.");
      return;
    }

    const vehicleData: vehiclePayload = {
      name: formData.name.trim(),
      brand: formData.brand.trim(),
      model: formData.model.trim(),
      year,
      pricePerDay,
    };

    // =========================
    // API request
    // =========================
    try {
      setSubmitting(true);
      setError("");

      if (editingVehicle) {
        await onUpdate(editingVehicle._id, vehicleData);
      } else {
        await onAdd(vehicleData);
      }

      onClose();
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
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
            disabled={submitting}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
          {/* Error */}
          {error && (
            <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Vehicle Name + Brand */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Name */}
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
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50 disabled:opacity-50"
              />
            </div>

            {/* Brand */}
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
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Model + Year */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Model */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Model
              </label>

              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="e.g. M4"
                required
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50 disabled:opacity-50"
              />
            </div>

            {/* Year */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Year
              </label>

              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="2026"
                min="1900"
                required
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Price */}
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
                step="0.01"
                required
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pr-4 pl-8 text-sm text-white outline-none placeholder:text-slate-600 focus:border-sky-400/50 disabled:opacity-50"
              />
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Vehicle Image
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-4">
              <MdCloudUpload size={24} className="shrink-0 text-sky-400" />

              <div>
                <p className="text-sm text-slate-400">
                  Image upload coming soon
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  Your current backend does not have an image field yet.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={submitting}
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting
                ? editingVehicle
                  ? "Updating..."
                  : "Adding..."
                : editingVehicle
                  ? "Update Vehicle"
                  : "Add Vehicle"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVehicleModal;
