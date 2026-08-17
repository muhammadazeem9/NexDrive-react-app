import { categories } from "../data/Categories";

type CategoryFilterProps = {
  value: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
  const handleChange = (category: string) => {
    // console.log("selected", category);
    if (value.includes(category)) {
      onChange(value.filter((item) => item !== category));
    } else {
      onChange([...value, category]);
    }
  };

  return (
    <div className="border-b pb-6">
      <h3 className="mb-4 text-lg font-semibold">Categories</h3>

      <div className="space-y-3">
        {categories.map((category) => (
          <label
            key={category}
            className="flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={value.includes(category)}
              onChange={() => handleChange(category)}
            />

            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
