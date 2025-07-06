// import path from 'path';
// import fs from 'fs/promises';
import SuttaCard from '@/app/components/SuttaCard';
import { isISuttaCardDataArray } from '@/utils/typeguards';
import { nikayaPresentationMap } from '../content';
import PageWrapper from '../components/PageWrapper';
import { getSuttaCardData } from '@/utils/getSuttaCardData';

export default async function MajjhimaPage() {
  // const sourcePath = path.join(process.cwd(), `public/data/suttaCarData/mn.json`);
  // const rawData = await fs.readFile(sourcePath, 'utf8');
  // const suttaCardData = JSON.parse(rawData);
  // if (!isISuttaCardDataArray(suttaCardData)) {
  //   console.error('Error while reading file "', sourcePath, '": data structure doesn\'t match ISuttaData Interface');
  // }
  const suttaCardData = getSuttaCardData('mn');
  const presentationData = nikayaPresentationMap.majjhima;
  return (
    <PageWrapper data={presentationData}>
      <div className="card-list-container">
        {isISuttaCardDataArray(suttaCardData) &&
          suttaCardData.map((item) => (
            <SuttaCard
              plTitle={item.plTitle}
              frTitle={item.frTitle}
              description={item.description}
              identifier={item.identifier}
              translator={item.translator}
              readingTime={item.readingTime}
              key={`sutta-card-${item.identifier}`}
            />
          ))}
      </div>
    </PageWrapper>
  );
}
