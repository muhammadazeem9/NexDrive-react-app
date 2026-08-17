import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <FiShoppingCart size={70} className="text-gray-300" />

      <h2 className="mt-5 text-3xl font-bold">Your cart is empty</h2>

      <p className="mt-2 text-gray-500">Add products to start shopping.</p>

      <Link
        to="/products"
        className="mt-6 rounded-xl bg-black px-6 py-3 text-white"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
