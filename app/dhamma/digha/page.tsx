import path from 'path';
import fs from 'fs/promises';
import PageHead from '@/app/components/PageHead';
import SuttaCard from '@/app/components/SuttaCard';
import { isISuttaCardDataArray } from '@/utils/typeguards';
import { nikayaPresentationMap } from '../content';

export default async function DighaPage() {
  const sourcePath = path.join(process.cwd(), `public/data/suttaCarData/dn.json`);
  const rawData = await fs.readFile(sourcePath, 'utf8');
  const suttaCardData = JSON.parse(rawData);
  if (!isISuttaCardDataArray(suttaCardData)) {
    console.error('Error while reading file "', sourcePath, '": data structure doesn\'t match ISuttaData Interface');
  }
  const presentationData = nikayaPresentationMap.digha;
  return (
    <main className="pb-32">
      <PageHead
        plTitle={presentationData.plTitle}
        frTitle={presentationData.frTitle}
        pageDescription={[presentationData.description]}
      />
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
    </main>
  );
}
