import { useParams } from "react-router-dom";
import { Products } from "../../data/Products";
import ProductRating from "../../components/ProductSection/ProductRating";
import ProductSection from "../../components/ProductSection/ProductSection";
import { useCart } from "../../context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = Products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-8">
        <div className="grid md:grid-cols-2 gap-10">
          <img src={product.image} alt={product.title} className="rounded-lg" />

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <p className="mt-3 text-gray-500">Brand: {product.brand}</p>

            <p>Category: {product.category}</p>

            <p className="mt-5 text-2xl font-bold">${product.price}</p>

            <div className="mt-4">
              <ProductRating rating={product.rating} />
            </div>
            <button
              onClick={() => addToCart(product)}
              className="
            mt-6
            bg-blue-600
            text-white
            px-5
            py-3
            rounded-lg
          "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <ProductSection />
    </>
  );
};

export default ProductDetailsPage;
