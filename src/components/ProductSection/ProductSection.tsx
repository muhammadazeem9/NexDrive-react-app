import Container from "../Container/Container";
import SectionTitle from "../Container/SectionTitle";

import ProductCard from "./ProductCard";
import { Products } from "../../data/Products";

const ProductSection = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle subtitle="Products" title="Featured Products" />

        <div
          className="mt-6
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
        "
        >
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
