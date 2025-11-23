import SuttaCard from '@/app/components/SuttaCard';
import { isIDisplaySuttaCardDataArray } from '@/utils/typeguards';
import { nikayaPresentationMap } from '../content';
import PageWrapper from '../components/PageWrapper';
import { getSuttaCardData } from '@/utils/getSuttaCardData';
import BreadCrumbs from '@/app/components/breadcrumbs';

export default async function DighaPage() {
  const suttaCardData = await getSuttaCardData('dn');
  const presentationData = nikayaPresentationMap.dn;
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="dn" />
      <PageWrapper data={presentationData}>
        <div className="card-list-container">
          {isIDisplaySuttaCardDataArray(suttaCardData) &&
            suttaCardData.map((item) => (
              <SuttaCard
                plTitle={item.plTitle}
                frTitle={item.frTitle}
                description={item.description}
                identifier={`DN ${item.id}`}
                id={item.id}
                translator={item.translator}
                readingTime={item.readingTime}
                key={`sutta-card-${item.identifier}`}
              />
            ))}
        </div>
      </PageWrapper>
    </>
  );
}
