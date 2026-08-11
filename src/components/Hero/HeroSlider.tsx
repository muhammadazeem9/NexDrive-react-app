import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { heroSlides } from "./herodata";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-[450px] object-contain rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
