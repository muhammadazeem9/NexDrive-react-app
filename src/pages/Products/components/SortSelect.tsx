type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SortSelect = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] transition-colors duration-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
    >
      <option
        value="newest"
        className="bg-[var(--card)] text-[var(--foreground)]"
      >
        Newest
      </option>

      <option
        value="price-low"
        className="bg-[var(--card)] text-[var(--foreground)]"
      >
        Price: Low to High
      </option>

      <option
        value="price-high"
        className="bg-[var(--card)] text-[var(--foreground)]"
      >
        Price: High to Low
      </option>

      <option
        value="rating"
        className="bg-[var(--card)] text-[var(--foreground)]"
      >
        Highest Rated
      </option>
    </select>
  );
};

export default SortSelect;
