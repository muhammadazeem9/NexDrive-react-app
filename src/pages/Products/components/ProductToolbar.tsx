import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";

type Props = {
  search: string;
  onChange: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

const ProductToolbar = ({ search, onChange, sort, setSort }: Props) => {
  return (
    <div
      className="
      mb-8
      flex
      flex-col
      gap-2
      md:flex-row
      md:items-center
      md:justify-between
    "
    >
      <SearchInput value={search} onChange={onChange} />

      <SortSelect value={sort} onChange={setSort} />
    </div>
  );
};

export default ProductToolbar;
