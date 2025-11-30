import NikayaCard from '../components/NikayaCard';
import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap, KNPresentationMap } from '../content';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

export default function KhuddakaPage() {
  const renderSubnikayaCards = () => {
    return Object.values(KNPresentationMap).map((item) => (
      <NikayaCard
        plTitle={item.plTitle}
        frTitle={item.frTitle}
        description={item.description}
        count={item.count}
        identifier={item.identifier}
        href={`kn/${item.identifier.toLowerCase()}`}
        key={item.identifier}
      />
    ));
  };
  return (
    <>
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="kn" />
      </DhammaHeader>
      <PageWrapper data={nikayaPresentationMap.kn}>
        <ul className="card-list-container">{renderSubnikayaCards()}</ul>
      </PageWrapper>
    </>
  );
}
