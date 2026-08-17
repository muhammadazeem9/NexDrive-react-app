import Container from "../Container/Container";
import SaleCard from "./SaleCard";
import { saleItems } from "./saleData";

const SaleSection = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10">
          <p className="font-semibold text-blue-600 uppercase">Promotions</p>

          <h2 className="text-4xl font-bold">Special Offers Just For You</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {saleItems.map((item) => (
            <SaleCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SaleSection;
