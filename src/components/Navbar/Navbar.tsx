import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
    <nav className="border-b border-white/10 bg-[#050d18] text-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="group">
            <h1 className="text-2xl font-bold tracking-tight text-white transition">
              Nex<span className="text-blue-500">Drive</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive
                        ? "text-blue-500"
                        : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      {isActive && (
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search */}
            <SearchBar value={search} onChange={setSearch} />

            {/* Cart */}
            <Link
              to="/cart"
              className="group relative rounded-full p-2 transition hover:bg-white/10"
            >
              <FiShoppingCart
                size={20}
                className="text-gray-300 transition group-hover:text-blue-500"
              />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User */}
            <Link
              to="/auth"
              className="group rounded-full p-2 transition hover:bg-white/10"
            >
              <FiUser
                size={20}
                className="text-gray-300 transition group-hover:text-blue-500"
              />
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
              aria-label="Open menu"
            >
              <FiMenu size={25} className="text-gray-200" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Container>
    </nav>
  );
};

export default Navbar;
