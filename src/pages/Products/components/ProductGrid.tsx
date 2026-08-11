import { Products } from "../../../data/Products";
import { filterProducts } from "../utils/filterProducts";
import ProductCard from "../../../components/ProductSection/ProductCard";
import EmptyState from "./EmptyState";

type Props = {
  search: string;
  category: string[];
  brand: string[];
  price: number[];
  rating: number | null;
  sort: string;
};

const ProductGrid = ({
  search,
  category,
  brand,
  price,
  rating,
  sort,
}: Props) => {
  const filteredProducts = filterProducts(Products, {
    search,
    category,
    brand,
    price,
    rating,
    sort,
  });

  if (filteredProducts.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
