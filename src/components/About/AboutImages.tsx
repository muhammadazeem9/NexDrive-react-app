// const AboutImages = () => {
//   return (
//     <div className="relative mx-auto w-full max-w-2xl">
//       <div className="grid grid-cols-2 gap-3 md:gap-4">
//         {/* Top Left */}
//         <img
//           src="/images/about/about.jpg"
//           alt="About"
//           className="h-44 w-full rounded-2xl object-cover shadow-lg sm:h-56 md:h-64"
//         />

//         {/* Top Right */}
//         <img
//           src="/images/about/about1.jpg"
//           alt="About"
//           className="mt-6 h-52 w-full rounded-2xl object-cover shadow-lg sm:h-64 md:mt-8 md:h-80"
//         />

//         {/* Bottom Left */}
//         <img
//           src="/images/about/hero2.jpg"
//           alt="About"
//           className="-mt-8 h-32 w-3/4 rounded-2xl object-cover shadow-lg sm:h-40 md:-mt-12 md:h-48"
//         />

//         {/* Bottom Right */}
//         <img
//           src="/images/about/hero3.jpg"
//           alt="About"
//           className="-mt-10 h-40 w-full rounded-2xl object-cover shadow-lg sm:h-52 md:-mt-16 md:h-60"
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutImages;

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
