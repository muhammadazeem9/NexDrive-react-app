import { brands } from "../data/brands";

type Props = {
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
};

const BrandFilter = ({ value, onChange }: Props) => {
  const handleChange = (brand: string) => {
    onChange((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  return (
    <div className="border-b py-6">
      <h3 className="text-lg font-semibold mb-4">Brands</h3>

      <div className="space-y-3">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={value.includes(brand)}
              onChange={() => handleChange(brand)}
            />

            <span>{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
