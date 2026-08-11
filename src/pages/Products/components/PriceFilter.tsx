import { priceRange } from "../data/PriceRange";

type Props = {
  value: number[];
  onChange: React.Dispatch<React.SetStateAction<number[]>>;
};

const PriceFilter = ({ value, onChange }: Props) => {
  return (
    <div className="border-b py-6">
      <h3 className="text-lg font-semibold mb-4">Price Range</h3>

      <div className="space-y-3">
        {priceRange.map((price) => (
          <label
            key={price.label}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name="price"
              checked={value[0] === price.min && value[1] === price.max}
              onChange={() => onChange([price.min, price.max])}
            />

            <span>{price.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
