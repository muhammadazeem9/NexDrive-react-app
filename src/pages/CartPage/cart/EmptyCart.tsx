import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--background)] px-4 text-[var(--foreground)] transition-colors duration-300">
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--card)] text-[var(--muted)] shadow-sm">
        <FiShoppingCart size={40} />
      </div>

      {/* Heading */}
      <h2 className="mt-5 text-3xl font-bold">Your cart is empty</h2>

      {/* Description */}
      <p className="mt-2 text-[var(--muted)]">
        Add products to start shopping.
      </p>

      {/* Button */}
      <Link
        to="/products"
        className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
