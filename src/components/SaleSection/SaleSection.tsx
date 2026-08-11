import Container from "../Container/Container";
import SaleCard from "./SaleCard";
import { saleItems } from "./saleData";

const SaleSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10">
          <p className="text-blue-600 font-semibold uppercase">Promotions</p>

          <h2 className="text-4xl font-bold">Year End Sale</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {saleItems.map((item) => (
            <SaleCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SaleSection;
