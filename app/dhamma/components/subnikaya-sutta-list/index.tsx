import SuttaCard from '@/app/components/SuttaCard';
import { getSuttaCardData } from '@/utils/getSuttaCardData';
import { isISuttaCardDataArray } from '@/utils/typeguards';

interface SubNikayaSuttaListProps {
  nikaya: 'an' | 'sn' | 'kn';
  book: OneToTwelve | OneToFiftySix | TknBooks;
}

export default async function SubNikayaSuttaList({ nikaya, book }: SubNikayaSuttaListProps) {
  const suttaCardData = await getSuttaCardData(`${nikaya}/${book}`);
  return (
    <div className="card-list-container">
      {isISuttaCardDataArray(suttaCardData) &&
        suttaCardData.map((item) => (
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
  );
}
