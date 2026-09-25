// import { Products } from "../../../data/Products";
// import { filterProducts } from "../utils/filterProducts";
// import ProductCard from "../../../components/ProductSection/ProductCard";
// import EmptyState from "./EmptyState";

// type Props = {
//   search: string;
//   category: string[];
//   brand: string[];
//   price: number[];
//   rating: number | null;
//   sort: string;
// };

// const ProductGrid = ({
//   search,
//   category,
//   brand,
//   price,
//   rating,
//   sort,
// }: Props) => {
//   const filteredProducts = filterProducts(Products, {
//     search,
//     category,
//     brand,
//     price,
//     rating,
//     sort,
//   });

//   if (filteredProducts.length === 0) {
//     return <EmptyState />;
//   }

//   return (
//     <div className="mx-auto w-full max-w-7xl px-4">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductGrid;

import { useEffect, useState } from "react";
import { getVehicles } from "../../../api/vehicle.api";
import ProductCard from "../../../components/ProductSection/ProductCard";
import EmptyState from "./EmptyState";
import type { Vehicle } from "../../../types/backend/vehicle";

type Props = {
  search: string;
  brand: string[];
  price: number[];
  rating: number | null;
  sort: string;
};

const ProductGrid = ({ search, brand, price, rating, sort }: Props) => {
  const [products, setProducts] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);

        const data = await getVehicles({
          search: search || undefined,

          brand: brand.length > 0 ? brand.join(",") : undefined,

          minPrice: price.length > 0 ? price[0] : undefined,

          maxPrice: price.length > 1 ? price[1] : undefined,

          minRating: rating ?? undefined,

          sort:
            sort === "price-low"
              ? "price_asc"
              : sort === "price-high"
                ? "price_desc"
                : sort === "rating"
                  ? "rating"
                  : "newest",
        });
        console.log("RATING FROM FRONTEND:", rating);

        setProducts(data.vehicles);
      } catch (error) {
        console.error("Failed to fetch vehicles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [search, brand, price, rating, sort]);

  if (loading) {
    return <div>Loading vehicles...</div>;
  }

  if (products.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
