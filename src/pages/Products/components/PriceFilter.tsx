import { priceRange } from "../data/PriceRange";

type Props = {
  value: number[];
  onChange: React.Dispatch<React.SetStateAction<number[]>>;
};

const PriceFilter = ({ value, onChange }: Props) => {
  return (
    <div className="border-b py-6">
      <h3 className="mb-4 text-lg font-semibold">Price Range</h3>

      <div className="space-y-3">
        {priceRange.map((price) => (
          <label
            key={price.label}
            className="flex cursor-pointer items-center gap-3"
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
