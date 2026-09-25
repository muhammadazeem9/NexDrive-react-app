import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHeart,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaShieldAlt,
  FaTools,
  FaTruck,
} from "react-icons/fa";

import ProductSection from "../../components/ProductSection/ProductSection";
import { useCart } from "../../context/CartContext";

import { getVehicleById } from "../../api/vehicle.api";
import { carImage } from "../Products/utils/carImage";

import type { Vehicle } from "../../types/backend/vehicle";
import { useAuth } from "../../context/AuthContext";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, loading: authLoading } = useAuth();

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // ================= FETCH VEHICLE =================

  useEffect(() => {
    const fetchVehicle = async () => {
      if (!id) {
        setError("Vehicle ID is missing.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const vehicle = await getVehicleById(id);

        if (!vehicle) {
          setError("Vehicle not found.");
          setProduct(null);
          return;
        }

        setProduct(vehicle);
      } catch (err) {
        console.error("Failed to fetch vehicle:", err);
        setError("Failed to load vehicle.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicle();
  }, [id]);

  // book now button
  const handleBookNow = () => {
    if (!product) return;

    // User is authenticated
    if (user) {
      navigate(`/booking/${product._id}`);
      return;
    }

    // User is not authenticated.
    // Remember which vehicle they wanted to book.
    sessionStorage.setItem("bookingVehicleId", product._id);

    navigate("/auth");
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />

          <p className="mt-4 text-[var(--muted)]">Loading vehicle...</p>
        </div>
      </main>
    );
  }

  // ================= ERROR =================

  if (error || !product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[var(--background)] px-4 text-[var(--foreground)]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Vehicle Not Found</h1>

          <p className="mt-3 text-[var(--muted)]">
            {error || "The vehicle you're looking for doesn't exist."}
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Vehicles
          </button>
        </div>
      </main>
    );
  }

  // ================= IMAGE =================

  const vehicleImage = carImage(product.brand, product.model);

  const galleryImages = [vehicleImage];

  const selectedImage = galleryImages[selectedImageIndex] || vehicleImage;

  // quantity controller
  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* ================= BREADCRUMB ================= */}

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <Link to="/" className="transition hover:text-blue-500">
            Home
          </Link>

          <FaArrowRight className="text-[10px]" />

          <Link to="/products" className="transition hover:text-blue-500">
            Vehicles
          </Link>

          <FaArrowRight className="text-[10px]" />

          <span className="truncate text-[var(--foreground)]">
            {product.name}
          </span>
        </div>
      </div>

      {/* ================= VEHICLE DETAILS ================= */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* ================= IMAGE GALLERY ================= */}

          <div>
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">
              {/* Premium Badge */}

              <div className="absolute top-5 left-5 z-20 rounded-full border border-blue-400/30 bg-[#071a30]/90 px-4 py-2 text-xs font-semibold tracking-wider text-blue-400 uppercase backdrop-blur">
                Premium Vehicle
              </div>

              {/* Wishlist */}

              <button
                type="button"
                onClick={() => setIsFavorite((current) => !current)}
                aria-label="Add to wishlist"
                className={`absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition ${
                  isFavorite
                    ? "border-red-500/30 bg-red-500/20 text-red-500"
                    : "border-white/10 bg-black/40 text-white hover:bg-blue-600"
                }`}
              >
                <FaHeart />
              </button>

              {/* Main Image */}

              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={selectedImage}
                  alt={`${product.brand} ${product.model}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://placehold.co/1200x900/0f172a/3b82f6?text=Vehicle+Image";
                  }}
                />

                {/* Gradient */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Image Counter */}

                <div className="absolute right-5 bottom-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-gray-200 backdrop-blur">
                  {selectedImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* ================= THUMBNAILS ================= */}

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {galleryImages.map((image, index) => {
                const isActive = selectedImageIndex === index;

                return (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    aria-label={`View image ${index + 1}`}
                    className={`group relative h-20 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-24 sm:w-28 ${
                      isActive
                        ? "border-blue-500 shadow-lg shadow-blue-500/20"
                        : "border-[var(--border)] hover:border-blue-400/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className={`h-full w-full object-cover transition duration-300 ${
                        isActive
                          ? "scale-105"
                          : "opacity-60 group-hover:scale-105 group-hover:opacity-100"
                      }`}
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://placehold.co/400x300/0f172a/3b82f6?text=Vehicle";
                      }}
                    />

                    {isActive && (
                      <div className="pointer-events-none absolute inset-0 bg-blue-500/10" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ================= FEATURES ================= */}

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center">
                <FaShieldAlt className="mx-auto text-xl text-blue-500" />

                <p className="mt-2 text-xs font-medium text-[var(--muted)]">
                  Quality Assured
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center">
                <FaTruck className="mx-auto text-xl text-blue-500" />

                <p className="mt-2 text-xs font-medium text-[var(--muted)]">
                  Easy Booking
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center">
                <FaTools className="mx-auto text-xl text-blue-500" />

                <p className="mt-2 text-xs font-medium text-[var(--muted)]">
                  Expert Service
                </p>
              </div>
            </div>
          </div>

          {/* ================= VEHICLE CONTENT ================= */}

          <div className="flex flex-col justify-center">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-500 uppercase">
                {product.brand}
              </span>

              <span className="h-px w-10 bg-blue-500/50" />
            </div>

            <h1 className="text-3xl leading-tight font-bold text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-3 text-[var(--muted)]">
              Model:{" "}
              <span className="font-medium text-[var(--foreground)]">
                {product.model}
              </span>
            </p>

            <p className="mt-2 text-[var(--muted)]">
              Year:{" "}
              <span className="font-medium text-[var(--foreground)]">
                {product.year}
              </span>
            </p>

            <div className="my-6 h-px bg-[var(--border)]" />

            {/* PRICE */}

            <div>
              <p className="text-sm tracking-wider text-[var(--muted)] uppercase">
                Rental Price
              </p>

              <p className="mt-1 text-4xl font-bold text-blue-500">
                ${product.pricePerDay.toLocaleString()}
                <span className="ml-2 text-lg font-medium text-[var(--muted)]">
                  / day
                </span>
              </p>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
              Rent the{" "}
              <span className="text-[var(--foreground)]">{product.name}</span>{" "}
              from {product.brand}. This {product.year} {product.model} offers a
              premium driving experience with reliable performance and comfort.
            </p>

            {/* QUANTITY */}

            <div className="mt-7">
              <p className="mb-3 text-sm font-medium text-[var(--muted)]">
                Rental Days
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex h-14 w-fit items-center overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    aria-label="Decrease rental days"
                    className="flex h-full w-12 items-center justify-center text-[var(--muted)] transition hover:bg-blue-600 hover:text-white"
                  >
                    <FaMinus className="text-xs" />
                  </button>

                  <span className="flex w-16 justify-center font-semibold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label="Increase rental days"
                    className="flex h-full w-12 items-center justify-center text-[var(--muted)] transition hover:bg-blue-600 hover:text-white"
                  >
                    <FaPlus className="text-xs" />
                  </button>
                </div>

                {/* BUY NOW */}
                <button
                  type="button"
                  onClick={handleBookNow}
                  disabled={authLoading}
                  className="flex h-14 flex-1 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {authLoading
                    ? "Checking account..."
                    : user
                      ? "Book Now"
                      : "Login to Book Now"}

                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* BENEFITS */}

            <div className="mt-7 space-y-3 border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />

                <span className="text-sm text-[var(--muted)]">
                  Premium vehicle quality
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />

                <span className="text-sm text-[var(--muted)]">
                  Flexible rental duration
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />

                <span className="text-sm text-[var(--muted)]">
                  Professional customer support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VEHICLE INFORMATION ================= */}

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8">
          <div className="mb-7">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-500 uppercase">
              Vehicle Information
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard label="Vehicle" value={product.name} />

            <InfoCard label="Brand" value={product.brand} />

            <InfoCard label="Model" value={product.model} />

            <InfoCard label="Year" value={product.year.toString()} />

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Price Per Day</p>

              <p className="mt-2 font-semibold text-blue-500">
                ${product.pricePerDay.toLocaleString()}
              </p>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Availability</p>

              <p className="mt-2 flex items-center gap-2 font-semibold text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductSection />
    </main>
  );
};

const InfoCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
      <p className="text-sm text-[var(--muted)]">{label}</p>

      <p className="mt-2 font-semibold text-[var(--foreground)]">{value}</p>
    </div>
  );
};

export default ProductDetailsPage;
