// import path from 'path';
// import fs from 'fs/promises';
import SuttaCard from '@/app/components/SuttaCard';
import { isIDisplaySuttaCardDataArray } from '@/utils/typeguards';
import { nikayaPresentationMap } from '../content';
import PageWrapper from '../components/PageWrapper';
import { getSuttaCardData } from '@/utils/getSuttaCardData';

export default async function MajjhimaPage() {
  // const sourcePath = path.join(process.cwd(), `public/_data/suttaCardData/mn.json`);
  // const rawData = await fs.readFile(sourcePath, 'utf8');
  // const suttaCardData = JSON.parse(rawData);
  // if (!isIDisplaySuttaCardDataArray(suttaCardData)) {
  //   console.error('Error while reading file "', sourcePath, '": data structure doesn\'t match ISuttaData Interface');
  // }
  const suttaCardData = await getSuttaCardData('mn');
  const presentationData = nikayaPresentationMap.mn;
  return (
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
  );
}
