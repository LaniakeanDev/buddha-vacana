import BVPageTitle from '@/app/components/BVPageTitle';
import SuttaCard from '@/app/components/SuttaCard';
import { nikayaPresentationData, dighaSuttaData } from '@/app/dhamma/content';

export default function Digha() {
  const presentationData = nikayaPresentationData.find((item) => item.id === 'digha')!;
  return (
    <main>
      <BVPageTitle plTitle={presentationData.plTitle} frTitle={presentationData.frTitle} />
      <p>{presentationData.description}</p>
      <div className="card-list-container">
        {dighaSuttaData.map((item) => (
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
