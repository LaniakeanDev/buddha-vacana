import SuttaCard from '@/app/components/SuttaCard';
import { isIDisplaySuttaCardDataArray } from '@/utils/typeguards';
import { nikayaPresentationMap } from '../content';
import PageWrapper from '../components/PageWrapper';
import { getSuttaCardData } from '@/utils/getSuttaCardData';
import BreadCrumbs from '@/app/components/breadcrumbs';

export default async function MajjhimaPage() {
  const suttaCardData = await getSuttaCardData('mn');
  const presentationData = nikayaPresentationMap.mn;
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="mn" />
      <PageWrapper data={presentationData}>
        <div className="card-list-container">
          {isIDisplaySuttaCardDataArray(suttaCardData) &&
            suttaCardData.map((item) => (
              <SuttaCard
                plTitle={item.plTitle}
                frTitle={item.frTitle}
                description={item.description}
                identifier={`MN ${item.id}`}
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
