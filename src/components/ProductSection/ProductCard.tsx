import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ProductRating from "./ProductRating";
import type { Product } from "../../data/Products";
import { useCart } from "../../context/CartContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div
      className="
      bg-white
      rounded-xl
      shadow-md
      overflow-hidden
      hover:shadow-xl
      transition-all
      duration-300
      group
    "
    >
      <Link to={`/products/${product.id}`}>
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="
          h-60
          w-full
          object-cover
          group-hover:scale-105
          duration-500
        "
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold">{product.title}</h3>

          <div className="my-3">
            <ProductRating rating={product.rating} />
          </div>

          <p className="text-blue-600 text-2xl font-bold">
            ${product.price.toLocaleString()}
          </p>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="
          mt-5
          w-full
          bg-blue-600
          text-white
          py-3
          rounded-lg
          flex
          items-center
          justify-center
          gap-2
          hover:bg-blue-700
          transition
        "
      >
        <FaShoppingCart />
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
