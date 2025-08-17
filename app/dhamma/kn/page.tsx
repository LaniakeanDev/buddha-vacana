import NikayaCard from '../components/NikayaCard';
import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap, KNPresentationMap } from '../content';

export default function KhuddakaPage() {
  const renderSubnikayaCards = () => {
    return Object.values(KNPresentationMap).map((item, idx) => (
      <NikayaCard
        plTitle={item.plTitle}
        frTitle={item.frTitle}
        description={item.description}
        count={item.count}
        identifier={item.identifier}
        href={`an/${String(idx + 1)}`}
        key={item.identifier}
      />
    ));
  };
  return (
    <PageWrapper data={nikayaPresentationMap.kn}>
      <ul className="card-list-container">{renderSubnikayaCards()}</ul>
    </PageWrapper>
  );
}
