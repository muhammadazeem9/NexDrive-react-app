import { FaArrowLeft, FaCheckCircle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    <main className="min-h-screen bg-[var(--background)] py-10 text-[var(--foreground)] transition-colors duration-300 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-blue-500"
          >
            <FaArrowLeft className="text-xs" />
            Back to Cart
          </Link>

          <p className="text-sm font-medium tracking-wider text-blue-500 uppercase">
            Secure Checkout
          </p>

          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Checkout</h1>

          <p className="mt-2 text-sm text-[var(--muted)]">
            Complete your details to place your order.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors duration-300 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-500">Step 1</p>

                  <h2 className="mt-1 text-xl font-semibold">
                    Shipping Information
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10">
                  <FaCheckCircle className="text-blue-500" />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+94 70 765 0485"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Delivery Address
                  </label>

                  <input
                    type="text"
                    placeholder="Street address"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="Colombo"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--muted)]">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    placeholder="00100"
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Continue */}
              <button
                type="button"
                className="mt-8 flex w-full items-center justify-center rounded-lg bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Continue to Payment
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--muted)]">
                <FaLock className="text-blue-500" />
                Your information is securely protected
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit lg:sticky lg:top-24">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-colors duration-300 sm:p-6">
              <p className="text-sm font-medium tracking-wider text-blue-500 uppercase">
                Your Order
              </p>

              <h2 className="mt-1 text-xl font-semibold">Order Summary</h2>

              {/* Products */}
              <div className="mt-6 space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-[var(--foreground)]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-[var(--muted)]">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-[var(--foreground)]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-[var(--border)]" />

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-[var(--muted)]">
                  <span>Subtotal</span>

                  <span className="text-[var(--foreground)]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-[var(--muted)]">
                  <span>Shipping</span>

                  <span className="text-[var(--foreground)]">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="my-5 h-px bg-[var(--border)]" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Total</span>

                <span className="text-2xl font-bold text-blue-500">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Shipping Note */}
              <div className="mt-5 rounded-lg border border-blue-500/10 bg-blue-500/5 p-3">
                <p className="text-xs leading-5 text-[var(--muted)]">
                  Free shipping is available on orders over $100.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
