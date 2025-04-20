interface BVSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function BVSection({ children, className = '', title }: BVSectionProps) {
  return (
    <section className={`p-20 ${className}`}>
      {title && <h2 className="font-bold text-[40px]">{title}</h2>}
      {children}
    </section>
  );
}
