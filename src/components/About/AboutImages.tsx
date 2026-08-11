const AboutImages = () => {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {/* Top Left */}
        <img
          src="/images/about/about.jpg"
          alt="About"
          className="w-full h-44 sm:h-56 md:h-64 object-cover rounded-2xl shadow-lg"
        />

        {/* Top Right */}
        <img
          src="/images/about/about1.jpg"
          alt="About"
          className="w-full h-52 sm:h-64 md:h-80 object-cover rounded-2xl shadow-lg mt-6 md:mt-8"
        />

        {/* Bottom Left */}
        <img
          src="/images/about/hero2.jpg"
          alt="About"
          className="-mt-8 md:-mt-12 w-3/4 h-32 sm:h-40 md:h-48 object-cover rounded-2xl shadow-lg"
        />

        {/* Bottom Right */}
        <img
          src="/images/about/hero3.jpg"
          alt="About"
          className="-mt-10 md:-mt-16 w-full h-40 sm:h-52 md:h-60 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutImages;
