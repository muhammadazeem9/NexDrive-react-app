import { useState } from "react";
import Container from "../../components/Container/Container";
import Breadcrumb from "./components/Breadcrumb";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import ProductToolbar from "./components/ProductToolbar";

const ProductsPage = () => {
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState<string[]>([]);
  const [brand, setBrand] = useState<string[]>([]);
  const [price, setPrice] = useState<number[]>([]);
  const [rating, setRating] = useState<number | null>(null);
  const [sort, setSort] = useState("newest");

  return (
    <section className="py-12">
      <Container>
        <Breadcrumb />

        <div className="mt-10 grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              price={price}
              setPrice={setPrice}
              rating={rating}
              setRating={setRating}
            />
          </aside>

          {/* Products */}
          <main className="lg:col-span-3">
            <ProductToolbar
              search={search}
              onChange={setSearch}
              sort={sort}
              setSort={setSort}
            />

            <ProductGrid
              search={search}
              category={category}
              brand={brand}
              price={price}
              rating={rating}
              sort={sort}
            />
          </main>
        </div>
      </Container>
    </section>
  );
};

export default ProductsPage;
