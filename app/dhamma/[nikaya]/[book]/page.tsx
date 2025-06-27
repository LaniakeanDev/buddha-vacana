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
      <div>
        <h1>
          <p>{plTitle}</p>
          <p>{frTitle}</p>
        </h1>
        <p>{description}</p>
        <div>
          {body.map((paragraph, idx) => (
            <div key={`${suttaId}-p${String(idx + 1)}`}>
              <p>{paragraph.fr}</p>
              <p>{paragraph.pl}</p>
            </div>
          ))}
        </div>
      </div>
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
