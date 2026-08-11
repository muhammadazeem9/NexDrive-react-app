import { BiWorld } from "react-icons/bi";
import Container from "../Container/Container";

function TopBar() {
  return (
    <div className="h-14 pt-3 bg-linear-to-r from-sky-500 to-indigo-500 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 py-2 text-sm md:flex-row md:gap-0">
          <p className="text-center md:text-left">
            Talk to the experts! Call +94 70 765 0485
          </p>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <button className="flex items-center gap-1 transition hover:text-gray-200">
              <BiWorld className="text-lg" />
              <span>Island Wide Delivery Available</span>
            </button>

            <button className="transition hover:text-gray-200">
              Help Center
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopBar;
