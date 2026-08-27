import { FiSearch } from "react-icons/fi";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className="relative w-full">
      <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-[var(--muted)]" />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] py-3 pr-4 pl-11 text-[var(--foreground)] transition-colors duration-300 outline-none placeholder:text-[var(--muted)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      />
    </div>
  );
};

export default SearchInput;
