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
    <div className="flex w-fit items-center overflow-hidden rounded-xl border">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 disabled:opacity-40"
      >
        <FiMinus size={16} />
      </button>

      <span className="w-12 text-center font-semibold">{quantity}</span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className="flex h-10 w-10 items-center justify-center hover:bg-gray-100 disabled:opacity-40"
      >
        <FiPlus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
