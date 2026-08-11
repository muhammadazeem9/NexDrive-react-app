import { useCart } from "../../../context/CartContext";
import CartItem from "./CartItem";

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <div className="space-y-5">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
