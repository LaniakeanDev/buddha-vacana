import SuttaTextBody from '@/app/components/SuttaTextBody';
import abhijjha from '@/public/glossary/abhijjha.json';
import bhagava from '@/public/glossary/bhagava.json';
import mahiccha from '@/public/glossary/mahiccha.json';

interface SuttaPageProps {
  suttaData: ISuttaData;
}

export default function SuttaPageContent({ suttaData }: SuttaPageProps) {
  const { identifier, plTitle, frTitle, description, body } = suttaData;
  return (
    <main className="pb-8">
      <div className="w-full flex flex-col items-center gap-4">
        <p className="font-bold">{identifier}</p>
        <h1 className="w-fit flex flex-col items-center">
          <p className="text-3xl">{plTitle}</p>
          <p className="text-xl">{frTitle}</p>
        </h1>
        <hr />
        <p className="max-w-lg text-justify">{description}</p>
        <hr />
      </div>
      <div className="p-4">
        <SuttaTextBody blocks={body} glossEntries={[abhijjha, bhagava, mahiccha]} />
      </div>
    </main>
  );
}
