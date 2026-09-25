import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

type FilterProps = {
  brand: string[];
  setBrand: React.Dispatch<React.SetStateAction<string[]>>;

  price: number[];
  setPrice: React.Dispatch<React.SetStateAction<number[]>>;

  rating: number | null;
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
};

const FilterSidebar = ({
  brand,
  setBrand,
  price,
  setPrice,
  rating,
  setRating,
}: FilterProps) => {
  const handleResetFilters = () => {
    setBrand([]);
    setPrice([]);
    setRating(null);
  };

  return (
    <aside className="sticky top-24 rounded-xl border border-[var(--border)] p-6 text-[var(--foreground)] shadow-sm transition-colors duration-300">
      <h2 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        Filters
      </h2>

      <BrandFilter value={brand} onChange={setBrand} />

      <PriceFilter value={price} onChange={setPrice} />

      <RatingFilter value={rating} onChange={setRating} />

      <button
        type="button"
        onClick={handleResetFilters}
        className="mt-8 w-full rounded-lg bg-red-500 py-3 text-white transition hover:bg-red-600"
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
