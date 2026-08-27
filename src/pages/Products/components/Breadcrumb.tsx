import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-[var(--muted)]">
      <Link to="/" className="transition-colors hover:text-blue-500">
        Home
      </Link>

      <FiChevronRight className="text-[var(--muted)]" />

      <span className="font-medium text-[var(--foreground)]">Products</span>
    </div>
  );
};

export default Breadcrumb;
