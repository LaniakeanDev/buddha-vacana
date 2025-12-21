import SuttaTextBody from '@/app/components/SuttaTextBody';
import { isIGlossEntryData } from '@/utils/typeguards';
import fs from 'fs/promises';

interface SuttaPageProps {
  suttaData: ISuttaData;
}

export default async function SuttaPageContent({ suttaData }: SuttaPageProps) {
  const { identifier, plTitle, frTitle, description, keywords, body } = suttaData;
  let glossEntries: IGlossEntryData[] = [];
  for (const keyword of keywords) {
    const filePath = `public/glossary/${keyword}.json`;
    const data = await fs.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    if (isIGlossEntryData(parsedData)) glossEntries.push(parsedData);
  }
  return (
    <main className="pt-16 pb-8">
      <div className="w-full flex flex-col items-center gap-4">
        <p className="font-bold">{identifier}</p>
        <h1 className="w-fit flex flex-col items-center">
          <p className="text-3xl">{plTitle}</p>
          <p className="text-xl">{frTitle}</p>
        </h1>
        <hr />
        <p className="max-w-lg text-justify">{description}</p>
        <hr />
      </div>
      <div className="p-4">
        <SuttaTextBody blocks={body} glossEntries={glossEntries} />
      </div>
    </main>
  );
}
