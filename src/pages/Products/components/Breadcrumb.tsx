import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>

      <FiChevronRight />

      <span className="font-medium text-gray-800">Products</span>
    </div>
  );
};

export default Breadcrumb;
