import NikayaCard from '../components/NikayaCard';
import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap, SNPresentationMap } from '../content';
import BreadCrumbs from '@/app/components/breadcrumbs';

export default function SamyuttaPage() {
  const renderSubnikayaCards = () => {
    return Object.values(SNPresentationMap).map((item, idx) => (
      <NikayaCard
        plTitle={item.plTitle}
        frTitle={item.frTitle}
        description={item.description}
        count={item.count}
        identifier={item.identifier}
        href={`sn/${String(idx + 1)}`}
        key={item.identifier}
      />
    ));
  };
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="sn" />
      <PageWrapper data={nikayaPresentationMap.sn}>
        <ul className="card-list-container">{renderSubnikayaCards()}</ul>
      </PageWrapper>
    </>
  );
}
