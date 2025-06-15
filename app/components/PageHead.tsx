import BVPageTitle from './BVPageTitle';

interface PageHeadProps {
  plTitle: string;
  frTitle: string;
  pageDescription: string[];
}

export default function PageHead({ plTitle, frTitle, pageDescription }: PageHeadProps) {
  return (
    <div className="w-full grid place-items-center">
      <div className="w-[90vw] max-w-3xl mb-16">
        <BVPageTitle plTitle={plTitle} frTitle={frTitle} />
        {pageDescription.map((paragraph, idx) => (
          <p className="xs:text-justify mb-4 indent-4" key={`parag-${String(idx)}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
