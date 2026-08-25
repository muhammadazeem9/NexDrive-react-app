import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { heroSlides } from "./herodata";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop
      className="hero-swiper w-full"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#07111f] via-[#0b1b30] to-[#06152d]">
            {/* Background Glow */}
            <div className="absolute top-1/2 -right-20 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl sm:h-96 sm:w-96" />

            {/* Content Wrapper */}
            <div className="relative z-10 flex min-h-[520px] flex-col justify-between px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-12 lg:py-0">
              {/* Text Content */}
              <div className="relative z-20 w-full max-w-xl lg:w-[48%]">
                {/* Label */}
                <p className="mb-3 text-[10px] font-semibold tracking-[0.25em] text-blue-400 uppercase sm:text-xs">
                  Premium Performance
                </p>

                {/* Heading */}
                <h1 className="text-3xl leading-[1.1] font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Built for <span className="text-blue-500">Speed.</span>
                  <br />
                  Driven by Passion.
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-md text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base">
                  High performance muscle cars crafted for power, precision and
                  pure automotive performance.
                </p>

                {/* CTA */}
                <Link to="/products">
                  <button className="mt-6 cursor-pointer rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:bg-blue-500 hover:shadow-blue-500/30 sm:mt-7 sm:px-6">
                    Explore Collection
                    <span className="ml-2">→</span>
                  </button>
                </Link>
              </div>

              {/* Car Image */}
              <div className="relative flex h-[200px] w-full items-center justify-center sm:h-[250px] md:h-[280px] lg:absolute lg:right-0 lg:bottom-0 lg:h-full lg:w-[55%] lg:justify-end">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="relative z-10 h-auto w-[75%] max-w-[380px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] sm:w-[65%] md:w-[60%] lg:mr-4 lg:w-[75%] lg:max-w-[520px]"
                />
              </div>
            </div>

            {/* Bottom Gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
