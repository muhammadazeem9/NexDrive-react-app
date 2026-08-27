import { useCart } from "../../context/CartContext";
import CartList from "./cart/CartList";
import OrderSummary from "./cart/OrderSummary";
import EmptyCart from "./cart/EmptyCart";

const CartPage = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="min-h-screen bg-[var(--background)] py-10 text-[var(--foreground)] transition-colors duration-300 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium tracking-wider text-blue-500 uppercase">
            Your Cart
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Shopping Cart
            <span className="ml-2 text-lg font-normal text-[var(--muted)]">
              ({cartItems.length})
            </span>
          </h1>
        </div>

        {/* Cart */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-colors duration-300">
              <CartList />
            </div>
          </div>

          {/* Summary */}
          <div>
            <OrderSummary subtotal={subtotal} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
