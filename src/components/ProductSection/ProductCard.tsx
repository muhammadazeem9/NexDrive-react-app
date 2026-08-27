import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ProductRating from "./ProductRating";
import type { Product } from "../../data/Products";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-500/10"
    >
      {/* Image */}
      <div className="relative aspect-[1.35/1] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-blue-600"
          aria-label="Add to wishlist"
        >
          <FaHeart className="text-sm" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pt-3 pb-4">
        <h3 className="truncate text-base font-semibold text-[var(--foreground)] transition-colors group-hover:text-blue-400">
          {product.title}
        </h3>

        <div className="mt-2">
          <ProductRating rating={product.rating} />
        </div>

        <p className="mt-2 text-lg font-bold text-blue-500">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
