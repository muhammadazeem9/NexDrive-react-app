import { FiSearch } from "react-icons/fi";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="relative hidden w-48 md:block lg:w-72 xl:w-96">
      <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500" />

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-gray-300 py-2 pr-4 pl-10 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
