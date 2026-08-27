// import { Link } from "react-router-dom";
// import { IoClose } from "react-icons/io5";
// import navLinks from "./Navlinks";

// type MobileMenuProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 z-50 h-screen w-72 transform bg-gradient-to-r from-[#06152d] via-[#08295a] to-[#0c4292] text-white shadow-lg transition-transform duration-300 ${
//         isOpen ? "translate-x-0" : "translate-x-full"
//       }`}
//     >
//       <div className="flex justify-end p-4">
//         <button onClick={onClose}>
//           <IoClose size={28} />
//         </button>
//       </div>

//       <ul className="flex flex-col gap-6 px-6">
//         {navLinks.map((link) => (
//           <li key={link.name}>
//             <Link
//               to={link.path}
//               onClick={onClose}
//               className="text-lg hover:text-blue-600"
//             >
//               {link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MobileMenu;

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
      className={`fixed top-0 right-0 z-50 h-screen w-72 transform bg-[var(--background)] text-[var(--foreground)] shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} `}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
        <span className="text-lg font-semibold">Menu</span>

        <button
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-[var(--foreground)] transition hover:bg-[var(--card)] hover:text-blue-500"
          aria-label="Close menu"
        >
          <IoClose size={28} />
        </button>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col gap-2 px-4 py-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              onClick={onClose}
              className="block rounded-lg px-3 py-3 text-lg font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--card)] hover:text-blue-500"
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
