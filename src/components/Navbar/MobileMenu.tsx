import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import navLinks from "./Navlinks";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <IoClose size={28} />
        </button>
      </div>

      <ul className="flex flex-col gap-6 px-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              onClick={onClose}
              className="text-lg hover:text-blue-600"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
