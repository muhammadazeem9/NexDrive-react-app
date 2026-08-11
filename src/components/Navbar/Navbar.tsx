import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";

import Container from "../Container/Container";
import SearchBar from "./SearchBar";
import navLinks from "./Navlinks";
import MobileMenu from "./MobileMenu";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav className="bg-white shadow-sm">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold text-blue-700">NexDrive</h1>
          </Link>

          <ul className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-blue-600 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <SearchBar value={search} onChange={setSearch} />

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FiShoppingCart size={22} className="cursor-pointer" />

              {totalItems > 0 && (
                <span
                  className="
                    absolute
                    -top-3
                    -right-3
                    bg-red-500
                    text-white
                    text-xs
                    w-5
                    h-5
                    rounded-full
                    flex
                    items-center
                    justify-center
                  "
                >
                  {totalItems}
                </span>
              )}
            </Link>

            {/* <FiUser size={22} className="cursor-pointer" /> */}

            <Link
              to="/auth"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <FiUser size={22} />
            </Link>

            <button className="lg:hidden" onClick={() => setIsOpen(true)}>
              <FiMenu size={28} />
            </button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Container>
    </nav>
  );
};

export default Navbar;
