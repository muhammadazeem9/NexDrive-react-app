import { FaArrowRight } from "react-icons/fa";
import type { SaleItem } from "./saleData";
import { Link } from "react-router-dom";

type SaleCardProps = {
  item: SaleItem;
};

const SaleCard = ({ item }: SaleCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
        <p className="text-sm tracking-widest uppercase">{item.title}</p>

        <h2 className="mt-3 text-3xl font-bold">{item.subtitle}</h2>

        <Link
          to={item.link}
          className="mt-8 flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          {item.buttonText}
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default SaleCard;
