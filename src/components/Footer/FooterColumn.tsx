type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5">{title}</h3>

      {children}
    </div>
  );
};

export default FooterColumn;
