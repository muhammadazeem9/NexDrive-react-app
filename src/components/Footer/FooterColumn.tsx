type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold">{title}</h3>

      {children}
    </div>
  );
};

export default FooterColumn;
