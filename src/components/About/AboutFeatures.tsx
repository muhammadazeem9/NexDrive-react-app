import qualityFeatures from "./AboutData";

const AboutFeatures = () => {
  return (
    <section className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-6 py-6 shadow-lg transition-colors duration-300">
      <div className="grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {qualityFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-center gap-4 px-4 py-5 sm:px-6 lg:py-2"
            >
              <Icon className="shrink-0 text-3xl text-blue-500" />

              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm leading-5 text-[var(--muted)]">
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
