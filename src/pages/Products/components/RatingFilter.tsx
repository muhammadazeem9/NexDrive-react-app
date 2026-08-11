import { FaStar } from "react-icons/fa";

const ratings = [5, 4, 3];

type Props = {
  value: number | null;
  onChange: React.Dispatch<React.SetStateAction<number | null>>;
};

const RatingFilter = ({ value, onChange }: Props) => {
  return (
    <div className="py-6">
      <h3 className="text-lg font-semibold mb-4">Rating</h3>

      <div className="space-y-3">
        {ratings.map((rating) => (
          <label
            key={rating}
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              type="radio"
              name="rating"
              checked={value === rating}
              onChange={() => onChange(rating)}
            />

            <div className="flex text-yellow-400">
              {Array.from({ length: rating }).map((_, index) => (
                <FaStar key={index} size={15} />
              ))}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
