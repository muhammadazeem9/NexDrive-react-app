import { FaArrowRight } from "react-icons/fa";
import type { SaleItem } from "./saleData";
import { Link } from "react-router-dom";

type SaleCardProps = {
  item: SaleItem;
};

const SaleCard = ({ item }: SaleCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img
        src={item.image}
        alt={item.title}
        className="h-80 w-full object-cover duration-500 group-hover:scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}

      <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
        <p className="text-sm tracking-widest uppercase">{item.title}</p>

        <h2 className="mt-3 text-3xl font-bold">{item.subtitle}</h2>

        <Link to={item.link}>
          <button className="mt-8 flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 hover:bg-blue-700">
            {item.buttonText}
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SaleCard;
