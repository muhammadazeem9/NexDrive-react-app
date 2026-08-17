type SectionTitleProps = {
  subtitle: string;
  title: string;
};

const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="mt-6">
      <p className="font-semibold tracking-wider text-blue-600 uppercase">
        {subtitle}
      </p>

      <h2 className="mt-2 text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionTitle;
