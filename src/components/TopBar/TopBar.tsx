import { BiWorld } from "react-icons/bi";
import Container from "../Container/Container";

function TopBar() {
  return (
    <div className="min-h-10 bg-gradient-to-r from-[#06152d] via-[#08295a] to-[#0759d8] text-white">
      <Container>
        <div className="flex flex-col items-center justify-center gap-2 py-2 text-xs sm:flex-row sm:justify-between sm:text-sm">
          <p className="text-center sm:text-left">
            Need help?{" "}
            <a href="tel:+94707650485" className="hover:text-gray-200">
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
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
