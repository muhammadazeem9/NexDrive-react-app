import { useState } from "react";
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

import { Products } from "../../data/Products";
import ProductRating from "../../components/ProductSection/ProductRating";
import ProductSection from "../../components/ProductSection/ProductSection";
import { useCart } from "../../context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = Products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Product not found
  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[var(--background)] px-4 text-[var(--foreground)]">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Product Not Found</h1>

          <p className="mt-3 text-[var(--muted)]">
            The product you're looking for doesn't exist.
          </p>

          <button
            type="button"
            onClick={() => navigate("/products")}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // Gallery images
  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const selectedImage = galleryImages[selectedImageIndex] || product.image;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

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
            Products
          </Link>

          <FaArrowRight className="text-[10px]" />

          <span className="truncate text-[var(--foreground)]">
            {product.title}
          </span>
        </div>
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* ================= IMAGE GALLERY ================= */}
          <div>
            {/* Main image */}
            <div className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">
              {/* Premium badge */}
              <div className="absolute top-5 left-5 z-20 rounded-full border border-blue-400/30 bg-[#071a30]/90 px-4 py-2 text-xs font-semibold tracking-wider text-blue-400 uppercase backdrop-blur">
                Premium Collection
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

              {/* Main image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Gradient - intentionally dark */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Image counter */}
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
                      alt={`${product.title} view ${index + 1}`}
                      className={`h-full w-full object-cover transition duration-300 ${
                        isActive
                          ? "scale-105"
                          : "opacity-60 group-hover:scale-105 group-hover:opacity-100"
                      }`}
                    />

                    {isActive && (
                      <div className="pointer-events-none absolute inset-0 bg-blue-500/10" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ================= FEATURE CARDS ================= */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center transition-colors duration-300">
                <FaShieldAlt className="mx-auto text-xl text-blue-500" />

                <p className="mt-2 text-xs font-medium text-[var(--muted)]">
                  Quality Assured
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center transition-colors duration-300">
                <FaTruck className="mx-auto text-xl text-blue-500" />

                <p className="mt-2 text-xs font-medium text-[var(--muted)]">
                  Islandwide Delivery
                </p>
              </div>

              <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center transition-colors duration-300">
                <FaTools className="mx-auto text-xl text-blue-500" />

                <p className="mt-2 text-xs font-medium text-[var(--muted)]">
                  Expert Service
                </p>
              </div>
            </div>
          </div>

          {/* ================= PRODUCT CONTENT ================= */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <div className="mb-3 flex items-center gap-3">
              <span className="text-sm font-semibold tracking-[0.2em] text-blue-500 uppercase">
                {product.category}
              </span>

              <span className="h-px w-10 bg-blue-500/50" />
            </div>

            {/* Title */}
            <h1 className="text-3xl leading-tight font-bold text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            {/* Brand */}
            <p className="mt-3 text-[var(--muted)]">
              Brand:{" "}
              <span className="font-medium text-[var(--foreground)]">
                {product.brand}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-4">
              <ProductRating rating={product.rating} />

              <span className="text-sm text-[var(--muted)]">
                {product.rating} / 5
              </span>
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-[var(--border)]" />

            {/* Price */}
            <div>
              <p className="text-sm tracking-wider text-[var(--muted)] uppercase">
                Price
              </p>

              <p className="mt-1 text-4xl font-bold text-blue-500">
                ${product.price.toLocaleString()}
              </p>
            </div>

            {/* Description */}
            <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
              Experience premium performance and exceptional quality with the{" "}
              <span className="text-[var(--foreground)]">{product.title}</span>.
              Built for enthusiasts who expect style, performance, and
              reliability.
            </p>

            {/* ================= QUANTITY + CART ================= */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              {/* Quantity */}
              <div className="flex h-14 w-fit items-center overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                  className="flex h-full w-12 items-center justify-center text-[var(--muted)] transition hover:bg-blue-600 hover:text-white"
                >
                  <FaMinus className="text-xs" />
                </button>

                <span className="flex w-12 justify-center font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                  className="flex h-full w-12 items-center justify-center text-[var(--muted)] transition hover:bg-blue-600 hover:text-white"
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex h-14 flex-1 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                <FaShoppingCart />
                Add To Cart
              </button>
            </div>

            {/* ================= BUY NOW ================= */}
            <button
              type="button"
              onClick={() => {
                handleAddToCart();
                navigate("/cart");
              }}
              className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-blue-500/50 bg-transparent font-semibold text-blue-500 transition hover:bg-blue-600 hover:text-white"
            >
              Buy Now
              <FaArrowRight className="text-sm" />
            </button>

            {/* ================= BENEFITS ================= */}
            <div className="mt-7 space-y-3 border-t border-[var(--border)] pt-6">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />

                <span className="text-sm text-[var(--muted)]">
                  Premium quality guaranteed
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-500" />

                <span className="text-sm text-[var(--muted)]">
                  Genuine automotive product
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

      {/* ================= PRODUCT INFORMATION ================= */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-colors duration-300 sm:p-8">
          <div className="mb-7">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-500 uppercase">
              Product Information
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Product</p>

              <p className="mt-2 font-semibold text-[var(--foreground)]">
                {product.title}
              </p>
            </div>

            {/* Brand */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Brand</p>

              <p className="mt-2 font-semibold text-[var(--foreground)]">
                {product.brand}
              </p>
            </div>

            {/* Category */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Category</p>

              <p className="mt-2 font-semibold text-[var(--foreground)]">
                {product.category}
              </p>
            </div>

            {/* Rating */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Rating</p>

              <div className="mt-2">
                <ProductRating rating={product.rating} />
              </div>
            </div>

            {/* Price */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Price</p>

              <p className="mt-2 font-semibold text-blue-500">
                ${product.price.toLocaleString()}
              </p>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="text-sm text-[var(--muted)]">Availability</p>

              <p className="mt-2 flex items-center gap-2 font-semibold text-green-500">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                In Stock
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <ProductSection />
    </main>
  );
};

export default ProductDetailsPage;
