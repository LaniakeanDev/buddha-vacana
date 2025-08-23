import PageHead from '@/app/components/PageHead';
import SuttaCard from '@/app/components/SuttaCard';
import { nikayaPresentationData } from '@/app/dhamma/content';

interface FlatNikayaPageContentProps {
  data: ISuttaCardData[];
  nikaya: TNikayaEnum;
}

export default function FlatNikayaPageContent({ data, nikaya }: FlatNikayaPageContentProps) {
  const presentationData = nikayaPresentationData.find((item) => item.id === nikaya)!;
  return (
    <main className="pb-32">
      <PageHead
        plTitle={presentationData.plTitle}
        frTitle={presentationData.frTitle}
        pageDescription={[presentationData.description]}
      />
      <div className="card-list-container">
        {data.map((item) => (
          <SuttaCard
            plTitle={item.plTitle}
            frTitle={item.frTitle}
            description={item.description}
            identifier={item.identifier}
            translator={item.translator}
            readingTime={item.readingTime}
            key={`sutta-card-${item.identifier}`}
          />
        ))}
      </div>
    </main>
  );
}
