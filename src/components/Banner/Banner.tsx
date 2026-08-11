const Banner = () => {
  return (
    <section className="group relative overflow-hidden rounded-2xl">
      <div className="relative h-[420px] sm:h-[500px] md:h-[580px] lg:h-[650px]">
        {/* Background Image */}
        <img
          src="/images/banner/banner-1.jpg"
          alt="Premium Car Showroom"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />
              Premium Collection
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Drive Beyond
              <span className="block text-blue-400">Ordinary.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/75 sm:text-base md:text-lg md:leading-7">
              Discover a curated collection of luxury, performance, and timeless
              automotive excellence.
            </p>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-6 left-5 right-5 h-px bg-gradient-to-r from-white/40 via-white/10 to-transparent sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-16 lg:right-16" />
      </div>
    </section>
  );
};

export default Banner;
