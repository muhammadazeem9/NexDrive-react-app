import { Link, useNavigate } from "react-router-dom";

interface Props {
  subtotal: number;
}
const OrderSummary = ({ subtotal }: Props) => {
  const shipping = subtotal > 100 ? 0 : 10;
  const navigate = useNavigate();

  const total = subtotal + shipping;

  return (
    <div
      className="
      bg-white
      border
      rounded-2xl
      p-6
      h-fit
      sticky
      top-5
    "
    >
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

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

        <div
          className="
          flex
          justify-between
          text-xl
          font-bold
        "
        >
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Link to="/checkout">
          <button
            onClick={() => navigate("checkout")}
            className="
              w-full
              mt-5
              bg-black
              text-white
              rounded-xl
              py-3
              hover:bg-gray-800
              transition
            "
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
