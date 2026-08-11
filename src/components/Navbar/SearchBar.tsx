import { FiSearch } from "react-icons/fi";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="relative hidden md:block w-48 lg:w-72 xl:w-96">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>
  );
};

export default SearchBar;
