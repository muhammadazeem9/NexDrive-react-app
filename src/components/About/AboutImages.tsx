const AboutImages = () => {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-1">
        <img
          src="/images/about/about.jpg"
          alt="About"
          className="aspect-square w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
        />

        <img
          src="/images/about/about1.jpg"
          alt="About"
          className="aspect-square w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
        />

        <img
          src="/images/about/hero2.jpg"
          alt="About"
          className="aspect-[1.5/1] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
        />

        <img
          src="/images/about/hero3.jpg"
          alt="About"
          className="aspect-[1.5/1] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutImages;
