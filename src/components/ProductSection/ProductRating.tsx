import { FaStar } from "react-icons/fa";

type ProductRatingProps = {
  rating: number;
};

const ProductRating = ({ rating }: ProductRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar
          key={index}
          size={14}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default ProductRating;
