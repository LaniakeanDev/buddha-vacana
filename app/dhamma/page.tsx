import PageHead from '../components/PageHead';
import NikayaCard from './components/NikayaCard';
import { nikayaPresentationData, dhammaPresentation } from './content';

export default function Dhamma() {
  return (
    <main className="pb-32">
      <PageHead plTitle="Dhamma" frTitle="L'Enseignement" pageDescription={dhammaPresentation} />
      <div className="card-list-container">
        {nikayaPresentationData.map((card) => (
          <NikayaCard
            plTitle={card.plTitle}
            frTitle={card.frTitle}
            description={card.description}
            count={card.count}
            short={card.short}
            key={card.id}
            id={card.id}
          />
        ))}
      </div>
    </main>
  );
}
