// import { useCart } from "../../context/CartContext";
// import CartList from "./cart/CartList";
// import OrderSummary from "./cart/OrderSummary";
// import EmptyCart from "./cart/EmptyCart";

// const CartPage = () => {
//   const { cartItems } = useCart();

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );

//   if (cartItems.length === 0) {
//     return <EmptyCart />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 bg-linear-to-b ">
//       <div className="mx-auto max-w-7xl bg-blue-500 px-5">
//         <h1 className="mb-8 text-4xl font-bold">
//           Shopping Cart
//           <span className="ml-2 text-lg font-normal text-gray-500">
//             ({cartItems.length})
//           </span>
//         </h1>

//         <div className="grid gap-8 lg:grid-cols-3">
//           <div className="lg:col-span-2">
//             <CartList />
//           </div>

//           <OrderSummary subtotal={subtotal} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

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
    <main className="min-h-screen bg-[#050d16] py-10 text-white sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium tracking-wider text-blue-500 uppercase">
            Your Cart
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Shopping Cart
            <span className="ml-2 text-lg font-normal text-gray-500">
              ({cartItems.length})
            </span>
          </h1>
        </div>

        {/* Cart */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1722]">
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
