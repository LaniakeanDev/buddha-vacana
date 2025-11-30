import PageHead from '@/app/components/PageHead';

interface PageWrapperProps {
  data: INikayaPresentationData;
  children: React.ReactElement<React.HTMLAttributes<HTMLDivElement>>;
  className?: string;
}

export default function PageWrapper({ data, children, className }: PageWrapperProps) {
  return (
    <main className={`pt-16 pb-32 ${className}`}>
      <PageHead plTitle={data.plTitle} frTitle={data.frTitle} pageDescription={[data.description]} />
      {children}
    </main>
  );
}
