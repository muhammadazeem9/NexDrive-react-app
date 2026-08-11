import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div
      className="
      min-h-[70vh]
      flex
      flex-col
      items-center
      justify-center
    "
    >
      <FiShoppingCart size={70} className="text-gray-300" />

      <h2
        className="
        text-3xl
        font-bold
        mt-5
      "
      >
        Your cart is empty
      </h2>

      <p className="text-gray-500 mt-2">Add products to start shopping.</p>

      <Link
        to="/products"
        className="
          mt-6
          px-6
          py-3
          rounded-xl
          bg-black
          text-white
        "
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
