import { FiTrash2 } from "react-icons/fi";

import {
  useCart,
  type CartItem as CartItemType,
} from "../../../context/CartContext";

import QuantitySelector from "./QuantitySelector";

interface Props {
  item: CartItemType;
}

const CartItem = ({ item }: Props) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm transition-colors duration-300 hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full rounded-xl object-cover sm:h-28 sm:w-28"
        />

        <div className="min-w-0 flex-1">
          {/* Product Title */}
          <h2 className="truncate text-lg font-semibold text-[var(--foreground)] sm:text-xl">
            {item.title}
          </h2>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Price + Quantity */}
            <div>
              {/* Total Price */}
              <p className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              {/* Unit Price */}
              <p className="mt-1 text-sm text-[var(--muted)]">
                ${item.price} each
              </p>

              {/* Quantity */}
              <div className="mt-3">
                <QuantitySelector
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                />
              </div>
            </div>

            {/* Remove Button */}
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white sm:w-auto"
            >
              <FiTrash2 size={18} />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
