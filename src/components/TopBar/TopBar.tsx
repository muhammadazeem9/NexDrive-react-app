import { BiWorld } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useState } from "react";
import Container from "../Container/Container";

function TopBar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-10 bg-gradient-to-r from-[#06152d] via-[#08295a] to-[#0759d8] text-white">
      <Container>
        <div className="flex flex-col items-center justify-center gap-2 py-2 text-xs sm:flex-row sm:justify-between sm:text-sm">
          <p className="text-center sm:text-left">
            Need help?{" "}
            <a
              href="tel:+94707650485"
              className="transition hover:text-gray-200"
            >
              +94 70 765 0485
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <button className="flex items-center gap-1 whitespace-nowrap transition hover:text-gray-200">
              <BiWorld className="text-lg" />
              <span>Islandwide Delivery</span>
            </button>

            <button className="whitespace-nowrap transition hover:text-gray-200">
              Support Center
            </button>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setDark((prev) => !prev)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {dark ? (
                <MdLightMode className="text-lg" />
              ) : (
                <MdDarkMode className="text-lg" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
