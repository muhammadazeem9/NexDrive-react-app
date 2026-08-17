import qualityFeatures from "./AboutData";

const AboutFeatures = () => {
  return (
    <section className="mt-12 rounded-2xl border border-gray-800 bg-[#101923] px-6 py-6 shadow-lg">
      <div className="grid grid-cols-1 divide-y divide-gray-700 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {qualityFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-center gap-4 px-4 py-5 sm:px-6 lg:py-2"
            >
              <Icon className="shrink-0 text-3xl text-blue-500" />

              <div>
                <h3 className="font-semibold text-white">{feature.title}</h3>

                <p className="mt-1 text-sm leading-5 text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutFeatures;
