import PageHead from '../components/PageHead';
import NikayaCard from './components/NikayaCard';
import { getNikayaNaviPresentationData, dhammaPresentation } from './content';
import DhammaHeader from '@/app/components/header';
import BreadCrumbs from '@/app/components/breadcrumbs';

export default function Dhamma() {
  const naviPresentationData = getNikayaNaviPresentationData();
  return (
    <>
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" />
      </DhammaHeader>
      <main className="pt-16 pb-32">
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
    </>
  );
}
