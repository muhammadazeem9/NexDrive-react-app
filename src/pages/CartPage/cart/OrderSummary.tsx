import { Link } from "react-router-dom";

interface Props {
  subtotal: number;
}

const OrderSummary = ({ subtotal }: Props) => {
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="sticky top-5 h-fit rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-[var(--foreground)] transition-colors duration-300">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-[var(--muted)]">Subtotal</span>

          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-[var(--muted)]">Shipping</span>

          <span
            className={
              shipping === 0 ? "font-medium text-green-500" : "font-medium"
            }
          >
            {shipping === 0 ? "Free" : `$${shipping}`}
          </span>
        </div>

        {/* Divider */}
        <hr className="border-[var(--border)]" />

        {/* Total */}
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-blue-500">${total.toFixed(2)}</span>
        </div>

        {/* Checkout */}
        <Link
          to="/checkout"
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
