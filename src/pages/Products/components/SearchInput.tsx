import { FiSearch } from "react-icons/fi";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className="relative w-full">
      <FiSearch
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
      "
      />

      <input
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
        w-full
        rounded-lg
        border
        py-3
        pl-11
        pr-4
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
      />
    </div>
  );
};

export default SearchInput;
