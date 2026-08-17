// import { FiTrash2 } from "react-icons/fi";
// import { useCart } from "../../../context/CartContext";
// import type { Product } from "../../../data/Products";
// import QuantitySelector from "./QuantitySelector";

// interface Props {
//   item: Product;
// }

// const CartItem = ({ item }: Props) => {
//   const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

//   return (
//     <div
//       className="
//         bg-white
//         border
//         rounded-2xl
//         p-4
//         sm:p-5
//         shadow-sm
//         hover:shadow-md
//         transition
//       "
//     >
//       <div
//         className="
//         flex
//         flex-col
//         sm:flex-row
//         gap-4
//         sm:gap-5
//       "
//       >
//         {/* Product Image */}
//         <img
//           src={item.image}
//           alt={item.title}
//           className="
//             w-full
//             h-48
//             sm:w-28
//             sm:h-28
//             rounded-xl
//             object-cover
//           "
//         />

//         <div className="flex-1 min-w-0">
//           <h2
//             className="
//               text-lg
//               sm:text-xl
//               font-semibold
//               truncate
//             "
//           >
//             {item.title}
//           </h2>

//           <div
//             className="
//               flex
//               flex-col
//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//               gap-4
//               mt-5
//             "
//           >
//             {/* Price + Quantity */}
//             <div>
//               <p
//                 className="
//                 text-xl
//                 sm:text-2xl
//                 font-bold
//               "
//               >
//                 ${(item.price * item.quantity).toFixed(2)}
//               </p>

//               <p
//                 className="
//                 text-sm
//                 text-gray-500
//                 mt-1
//               "
//               >
//                 ${item.price} each
//               </p>

//               <div className="mt-3">
//                 <QuantitySelector
//                   quantity={item.quantity}
//                   onIncrease={() => increaseQuantity(item.id)}
//                   onDecrease={() => decreaseQuantity(item.id)}
//                 />
//               </div>
//             </div>

//             {/* Remove Button */}
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="
//                 flex
//                 items-center
//                 justify-center
//                 gap-2
//                 rounded-xl
//                 bg-red-50
//                 text-red-600
//                 px-4
//                 py-2
//                 w-full
//                 sm:w-auto
//                 hover:bg-red-100
//                 transition
//               "
//             >
//               <FiTrash2 size={18} />
//               <span>Remove</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;

// new code
import { FiTrash2 } from "react-icons/fi";

import {
  useCart,
  type CartItem as CartItemType,
} from "../../../context/CartContext";

import QuantitySelector from "./QuantitySelector";

interface Props {
  item: CartItemType;
}

const CartItem = ({ item }: Props) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="rounded-2xl border p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full rounded-xl object-cover sm:h-28 sm:w-28"
        />

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold sm:text-xl">
            {item.title}
          </h2>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Price + Quantity */}
            <div>
              <p className="text-xl font-bold sm:text-2xl">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <p className="mt-1 text-sm text-gray-500">${item.price} each</p>

              <div className="mt-3">
                <QuantitySelector
                  quantity={item.quantity}
                  onIncrease={() => increaseQuantity(item.id)}
                  onDecrease={() => decreaseQuantity(item.id)}
                />
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100 sm:w-auto"
            >
              <FiTrash2 size={18} />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
