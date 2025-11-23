import NikayaCard from '../components/NikayaCard';
import PageWrapper from '../components/PageWrapper';
import { nikayaPresentationMap, ANPresentationMap } from '../content';
import BreadCrumbs from '@/app/components/breadcrumbs';

export default function AnguttaraPage() {
  const renderSubnikayaCards = () => {
    return Object.values(ANPresentationMap).map((item, idx) => (
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
    <>
      <BreadCrumbs basket="Dhamma" nikaya="an" />
      <PageWrapper data={nikayaPresentationMap.an}>
        <ul className="card-list-container">{renderSubnikayaCards()}</ul>
      </PageWrapper>
    </>
  );
}
