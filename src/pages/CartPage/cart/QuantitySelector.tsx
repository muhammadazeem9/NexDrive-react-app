import { FiMinus, FiPlus } from "react-icons/fi";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 1,
  max = 99,
}: QuantitySelectorProps) => {
  return (
    <div
      className="
      flex
      items-center
      border
      rounded-xl
      overflow-hidden
      w-fit
      bg-white
    "
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="
          w-10
          h-10
          flex
          items-center
          justify-center
          hover:bg-gray-100
          disabled:opacity-40
        "
      >
        <FiMinus size={16} />
      </button>

      <span
        className="
        w-12
        text-center
        font-semibold
      "
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="
          w-10
          h-10
          flex
          items-center
          justify-center
          hover:bg-gray-100
          disabled:opacity-40
        "
      >
        <FiPlus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
