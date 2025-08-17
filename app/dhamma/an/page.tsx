import NikayaCard from '../components/NikayaCard';
import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap, subnikayaPresentationMap } from '../content';

export default function AnguttaraPage() {
  const subnikayaPresentation = subnikayaPresentationMap.an;
  const renderSubnikayaCards = () => {
    return Object.values(subnikayaPresentation).map((item, idx) => (
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
    <PageWrapper data={nikayaPresentationMap.an}>
      <ul className="card-list-container">{renderSubnikayaCards()}</ul>
    </PageWrapper>
  );
}
