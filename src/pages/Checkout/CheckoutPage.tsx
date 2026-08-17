// import { useCart } from "../../context/CartContext";

// const CheckoutPage = () => {
//   const { cartItems } = useCart();

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );

//   const shipping = subtotal > 100 ? 0 : 10;
//   const total = subtotal + shipping;

//   return (
//     <div className="min-h-screen px-4 py-10">
//       <div className="mx-auto max-w-6xl">
//         <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* Checkout Form */}
//           <div className="rounded-2xl p-6 shadow-sm lg:col-span-2">
//             <h2 className="mb-6 text-xl font-semibold">Shipping Information</h2>

//             <div className="grid gap-4 md:grid-cols-2">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
//               />

//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black md:col-span-2"
//               />

//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black md:col-span-2"
//               />

//               <input
//                 type="text"
//                 placeholder="City"
//                 className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
//               />

//               <input
//                 type="text"
//                 placeholder="Postal Code"
//                 className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
//               />
//             </div>

//             <button className="mt-8 w-full rounded-xl bg-black py-4 font-medium text-white transition hover:bg-gray-800">
//               Continue to Payment
//             </button>
//           </div>

//           {/* Order Summary */}
//           <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
//             <h2 className="mb-6 text-xl font-semibold text-gray-900">
//               Order Summary
//             </h2>

//             <div className="space-y-4">
//               {cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between text-sm"
//                 >
//                   <div>
//                     <p className="font-medium text-gray-900">{item.title}</p>
//                     <p className="text-gray-500">Qty: {item.quantity}</p>
//                   </div>

//                   <p className="font-medium">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="my-6 border-t" />

//             <div className="space-y-3 text-gray-700">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
//               </div>

//               <div className="flex justify-between text-lg font-bold text-black">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

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
    <main className="min-h-screen bg-[#050d16] py-10 text-white sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/cart"
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-blue-500"
          >
            <FaArrowLeft className="text-xs" />
            Back to Cart
          </Link>

          <p className="text-sm font-medium tracking-wider text-blue-500 uppercase">
            Secure Checkout
          </p>

          <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Checkout</h1>

          <p className="mt-2 text-sm text-gray-500">
            Complete your details to place your order.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-[#0d1722] p-5 sm:p-7">
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
                  <label className="mb-2 block text-sm text-gray-400">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-gray-400">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+94 70 765 0485"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-gray-400">
                    Delivery Address
                  </label>

                  <input
                    type="text"
                    placeholder="Street address"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="Colombo"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Postal Code
                  </label>

                  <input
                    type="text"
                    placeholder="00100"
                    className="w-full rounded-lg border border-white/10 bg-[#09131e] px-4 py-3 text-white transition outline-none placeholder:text-gray-600 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Continue */}
              <button className="mt-8 flex w-full items-center justify-center rounded-lg bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700">
                Continue to Payment
              </button>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <FaLock className="text-blue-500" />
                Your information is securely protected
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="h-fit lg:sticky lg:top-24">
            <div className="rounded-xl border border-white/10 bg-[#0d1722] p-5 sm:p-6">
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
                      <p className="truncate text-sm font-medium text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-semibold text-gray-300">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-gray-200">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>

                  <span className="text-gray-200">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="my-5 h-px bg-white/10" />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Total</span>

                <span className="text-2xl font-bold text-blue-500">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Shipping note */}
              <div className="mt-5 rounded-lg border border-blue-500/10 bg-blue-500/5 p-3">
                <p className="text-xs leading-5 text-gray-400">
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
