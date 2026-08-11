type SectionTitleProps = {
  subtitle: string;
  title: string;
};

const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="mt-6">
      <p className="text-blue-600 font-semibold uppercase tracking-wider">
        {subtitle}
      </p>

      <h2 className="text-4xl font-bold mt-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
