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
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
          <span className="ml-2 text-lg text-gray-500 font-normal">
            ({cartItems.length})
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartList />
          </div>

          <OrderSummary subtotal={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
