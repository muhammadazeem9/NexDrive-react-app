import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  FiUser,
  FiMenu,
  FiLogOut,
  FiChevronDown,
  FiCalendar,
} from "react-icons/fi";

import Container from "../Container/Container";
import SearchBar from "./SearchBar";
import navLinks from "./Navlinks";
import MobileMenu from "./MobileMenu";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const userName = user?.name || "User";

  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      setProfileOpen(false);

      await logout();

      navigate("/", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout failed:", error);

      navigate("/", {
        replace: true,
      });
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <nav className="border-b border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="group shrink-0">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
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
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
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

            {/* My Bookings */}
            {user && (
              <li>
                <NavLink
                  to="/mybookings"
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive
                        ? "text-blue-500"
                        : "text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      My Bookings
                      {isActive && (
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            )}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <SearchBar value={search} onChange={setSearch} />

            {/* Logged-in User */}
            {user ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-[var(--card)]"
                >
                  {/* Avatar */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 text-sm font-semibold text-blue-500">
                    {userInitial}
                  </div>

                  {/* Name */}
                  <span className="hidden max-w-28 truncate text-sm font-medium text-[var(--foreground)] md:block">
                    {userName}
                  </span>

                  <FiChevronDown
                    size={16}
                    className={`hidden text-[var(--muted)] transition-transform md:block ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* User Dropdown */}
                {profileOpen && (
                  <div className="absolute top-12 right-0 z-50 w-60 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl">
                    {/* User Info */}
                    <div className="border-b border-[var(--border)] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-500">
                          {userInitial}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[var(--foreground)]">
                            {userName}
                          </p>

                          <p className="text-xs text-[var(--muted)]">
                            Customer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      {/* My Bookings */}
                      <button
                        type="button"
                        onClick={() => {
                          setProfileOpen(false);
                          navigate("/mybookings");
                        }}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--foreground)]"
                      >
                        <FiCalendar size={17} />
                        My Bookings
                      </button>

                      {/* Logout */}
                      <button
                        type="button"
                        disabled={loggingOut}
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <FiLogOut size={17} />

                        {loggingOut ? "Logging out..." : "Logout"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Guest Login */
              <Link
                to="/auth"
                className="flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-500"
              >
                <FiUser size={18} />

                <span className="hidden sm:block">Login</span>
              </Link>
            )}

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="rounded-lg p-2 transition hover:bg-slate-200 lg:hidden dark:hover:bg-white/10"
              aria-label="Open menu"
            >
              <FiMenu size={25} className="text-[var(--foreground)]" />
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
