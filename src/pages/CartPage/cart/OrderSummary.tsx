import { Link, useNavigate } from "react-router-dom";

interface Props {
  subtotal: number;
}
const OrderSummary = ({ subtotal }: Props) => {
  const shipping = subtotal > 100 ? 0 : 10;
  const navigate = useNavigate();

  const total = subtotal + shipping;

  return (
    <div className="sticky top-5 h-fit rounded-2xl border p-6">
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Link to="/checkout">
          <button
            onClick={() => navigate("checkout")}
            className="mt-5 w-full rounded-xl bg-black py-3 text-white transition hover:bg-gray-800"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
