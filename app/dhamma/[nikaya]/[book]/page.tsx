// 'use client';

import { readFileSync } from 'fs';
import path from 'path';
import { isISuttaData } from '@/utils/typeguards';

interface SuttaPageProps {
  params: {
    nikaya: NikayaEnum;
    book: string;
    suttaId?: string;
  };
}

export default async function SuttaPage({ params }: SuttaPageProps) {
  const { nikaya, book, suttaId } = await params;
  const suttaData = getSuttaData(nikaya, book, suttaId);
  if (suttaData && isISuttaData(suttaData)) {
    const { plTitle, frTitle, description, body } = suttaData;
    console.log({ suttaData });
    return (
      <main className="py-8">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="w-fit flex flex-col items-center">
            <p className="text-3xl">{plTitle}</p>
            <p className="text-xl">{frTitle}</p>
          </h1>
          <hr />
          <p className="max-w-lg text-justify">{description}</p>
          <hr />
        </div>
        <div className="p-4">
          {body.map((paragraph, idx) => (
            <div key={`${suttaId}-p${String(idx + 1)}`} className="flex flex-col gap-2 lg:flex-row lg:gap-8 p-2">
              <p className="lg:flex-1 text-justify">{paragraph.fr}</p>
              <p className="lg:flex-1">{paragraph.pl}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  return <p>Soutta non trouvé</p>;
}

function getSuttaData(nikaya: string, level1: string, level2: string | undefined): ISuttaData | null {
  const suttaPath = level2
    ? path.join(
        // Safely combines path segments (handles OS-specific slashes)
        process.cwd(), // Returns the current working directory (project root).
        '/public/data',
        nikaya,
        level1, // level1 is a book
        `${level2}.json`, // level 2 is a suttaId
      )
    : path.join(
        process.cwd(),
        '/public/data',
        nikaya,
        `${level1}.json`, // level 1 is a suttaId
      );

  try {
    const suttaFileContents = readFileSync(suttaPath, 'utf8');
    console.log({ suttaFileContents });
    return JSON.parse(suttaFileContents);
  } catch (error) {
    // console.log({error});
    return null;
  }
}
