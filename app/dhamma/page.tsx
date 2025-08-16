import PageHead from '../components/PageHead';
import NikayaCard from './components/NikayaCard';
import { getNikayaNaviPresentationData, dhammaPresentation } from './content';

export default function Dhamma() {
  const naviPresentationData = getNikayaNaviPresentationData();
  return (
    <main className="pb-32">
      <PageHead plTitle="Dhamma" frTitle="L'Enseignement" pageDescription={dhammaPresentation} />
      <ul className="card-list-container">
        {naviPresentationData.map((card) => (
          <NikayaCard
            plTitle={card.plTitle}
            frTitle={card.frTitle}
            description={card.description}
            count={card.count}
            identifier={card.identifier}
            href={`dhamma/${card.href}`}
            key={card.href}
          />
        ))}
      </ul>
    </main>
  );
}
