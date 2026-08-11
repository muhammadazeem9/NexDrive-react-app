import { useCart } from "../../context/CartContext";

const CheckoutPage = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Shipping Information
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black md:col-span-2"
              />

              <input
                type="text"
                placeholder="Address"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black md:col-span-2"
              />

              <input
                type="text"
                placeholder="City"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />

              <input
                type="text"
                placeholder="Postal Code"
                className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <button className="mt-8 w-full rounded-xl bg-black py-4 font-medium text-white transition hover:bg-gray-800">
              Continue to Payment
            </button>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-gray-500">Qty: {item.quantity}</p>
                  </div>

                  <p className="font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-6 border-t" />

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>

              <div className="flex justify-between text-lg font-bold text-black">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
