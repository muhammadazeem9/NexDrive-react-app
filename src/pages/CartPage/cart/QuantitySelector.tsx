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
    <div className="flex w-fit items-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Decrease */}
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-10 w-10 items-center justify-center text-[var(--muted)] transition hover:bg-blue-500/10 hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiMinus size={16} />
      </button>

      {/* Quantity */}
      <span className="flex h-10 w-12 items-center justify-center border-x border-[var(--border)] font-semibold text-[var(--foreground)]">
        {quantity}
      </span>

      {/* Increase */}
      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-10 w-10 items-center justify-center text-[var(--muted)] transition hover:bg-blue-500/10 hover:text-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiPlus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;
