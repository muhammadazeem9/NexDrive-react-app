// import { useState } from "react";
// import Container from "../../components/Container/Container";
// import Breadcrumb from "./components/Breadcrumb";
// import FilterSidebar from "./components/FilterSidebar";
// import ProductGrid from "./components/ProductGrid";
// import ProductToolbar from "./components/ProductToolbar";

// const ProductsPage = () => {
//   const [search, setSearch] = useState("");

//   const [category, setCategory] = useState<string[]>([]);
//   const [brand, setBrand] = useState<string[]>([]);
//   const [price, setPrice] = useState<number[]>([]);
//   const [rating, setRating] = useState<number | null>(null);
//   const [sort, setSort] = useState("newest");

//   return (
//     <section className="py-12">
//       <Container>
//         <Breadcrumb />

//         <div className="mt-10 grid gap-8 lg:grid-cols-4">
//           {/* Sidebar */}
//           <aside className="lg:col-span-1">
//             <FilterSidebar
//               category={category}
//               setCategory={setCategory}
//               brand={brand}
//               setBrand={setBrand}
//               price={price}
//               setPrice={setPrice}
//               rating={rating}
//               setRating={setRating}
//             />
//           </aside>

//           {/* Products */}
//           <main className="lg:col-span-3">
//             <ProductToolbar
//               search={search}
//               onChange={setSearch}
//               sort={sort}
//               setSort={setSort}
//             />

//             <ProductGrid
//               search={search}
//               category={category}
//               brand={brand}
//               price={price}
//               rating={rating}
//               sort={sort}
//             />
//           </main>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ProductsPage;

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
    <main className="min-h-screen bg-[#050d16] py-10 text-white sm:py-14">
      <Container>
        {/* Header */}
        <div>
          <Breadcrumb />

          <div className="mt-6">
            <p className="text-sm font-medium tracking-wider text-blue-500 uppercase">
              Our Collection
            </p>

            <h1 className="mt-1 text-3xl font-bold sm:text-4xl">
              All Products
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Explore our premium collection of vehicles, genuine automotive
              parts, and accessories.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-4">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-white/10 bg-[#0d1722] p-5">
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
            </div>
          </aside>

          {/* Products */}
          <main className="min-w-0 lg:col-span-3">
            {/* Toolbar */}
            <div className="mb-5 rounded-xl border border-white/10 bg-[#0d1722] p-4">
              <ProductToolbar
                search={search}
                onChange={setSearch}
                sort={sort}
                setSort={setSort}
              />
            </div>

            {/* Grid */}
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
    </main>
  );
};

export default ProductsPage;
