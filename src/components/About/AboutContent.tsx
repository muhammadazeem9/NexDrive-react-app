import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "../Container/SectionTitle";
import { features } from "./AboutData";
import { useNavigate } from "react-router-dom";

const AboutContent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SectionTitle subtitle="About Us" title="High Performance Muscle Cars" />

      <p className="mb-8 leading-8 text-[var(--muted)] transition-colors duration-300">
        We provide premium quality muscle cars, genuine spare parts, and
        professional maintenance services with years of experience in the
        automotive industry.
      </p>

      <div className="mb-8 space-y-4">
        {features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-[var(--foreground)] transition-colors duration-300"
          >
            <FaCheckCircle className="shrink-0 text-blue-600" />

            <span>{item}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => navigate("/about")}
        className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Read More
      </button>
    </div>
  );
};

export default AboutContent;
