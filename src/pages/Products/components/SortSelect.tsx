type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SortSelect = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        rounded-lg
        border
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    >
      <option value="newest">Newest</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="rating">Highest Rated</option>
    </select>
  );
};

export default SortSelect;
