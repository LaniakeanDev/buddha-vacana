// npx tsc -p tsconfig.scripts.json
// node dist/scripts/scripts/generateSuttaCardData.js

import fs from 'fs/promises';
import { readdirSync, statSync } from 'fs';
import path from 'path';
import { isISuttaData } from '../utils/typeguards';

interface SuttaMetadata {
  identifier: string;
  plTitle: string;
  frTitle: string;
  description: string;
  nikaya: TNikayaEnum;
  readingTime: number;
  id: string;
  keywords: string[];
}

async function generateCardData(): Promise<void> {
  const dataDir = path.join(process.cwd(), 'public/_data/sutta');
  const nikayas: TNikayaEnum[] = ['dn', 'mn', 'sn', 'an', 'kn'];

  try {
    for (const nikaya of nikayas) {
      const nikayaPath = path.join(dataDir, nikaya);
      if (nikaya === 'dn' || nikaya === 'mn') {
        const dataToBeWritten = await extractSuttaCardMetadataFromFolder(nikayaPath, nikaya);
        if (dataToBeWritten.length) {
          const outputFile =
            nikaya === 'dn'
              ? path.join(process.cwd(), 'public/_data/suttaCardData/dn.json')
              : path.join(process.cwd(), 'public/_data/suttaCardData/mn.json');
          await fs.writeFile(
            outputFile,
            JSON.stringify(dataToBeWritten, null, 2), // pretty print
            'utf8',
          );
        }
      }
      if (nikaya === 'sn' || nikaya === 'an') {
        const numberOfSubNikayas = nikaya === 'sn' ? 56 : 12;
        for (let subNikayaNumber = 1; subNikayaNumber <= numberOfSubNikayas; subNikayaNumber++) {
          const dataToBeWritten = await extractSuttaCardMetadataFromFolder(
            path.join(nikayaPath, String(subNikayaNumber)),
            nikaya,
          );
          if (dataToBeWritten.length) {
            const outPutPath = nikaya === 'sn' ? 'public/_data/suttaCardData/sn' : 'public/_data/suttaCardData/an';
            await fs.writeFile(
              path.join(process.cwd(), outPutPath, `/${subNikayaNumber}.json`),
              JSON.stringify(dataToBeWritten, null, 2), // pretty print
              'utf8',
            );
          }
        }
      }
      if (nikaya === 'kn') {
        // figure out which subNikayas are in the folder structure
        const subNikayas = readdirSync(nikayaPath).filter((file) => {
          const fullPath = path.join(nikayaPath, file);
          return statSync(fullPath).isDirectory();
        });
        for (const subNikaya of subNikayas) {
          const dataToBeWritten = await extractSuttaCardMetadataFromFolder(
            path.join(nikayaPath, String(subNikaya)),
            nikaya,
          );
          if (dataToBeWritten.length) {
            const outPutPath = 'public/_data/suttaCardData/kn';
            await fs.writeFile(
              path.join(process.cwd(), outPutPath, `/${String(subNikaya)}.json`),
              JSON.stringify(dataToBeWritten, null, 2), // pretty print
              'utf8',
            );
          }
        }
      }
    }
  } catch (error) {
    console.error('Error generating card data:', error);
    process.exit(1);
  }
}

generateCardData();

async function extractSuttaCardMetadataFromFolder(folderPath: string, nikaya: string): Promise<SuttaMetadata[]> {
  let readingTime = 1;
  const files = await fs.readdir(folderPath); // array of file names
  const extractedSuttaCardMetadata: SuttaMetadata[] = [];
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const content = await fs.readFile(filePath, 'utf8');
    const suttaData = JSON.parse(content);
    if (!isISuttaData(suttaData)) {
      console.error('Error while reading file "', filePath, '": data structure doesn\'t match ISuttaData Interface');
    }
    const { body, ...metadata } = suttaData; // Extract metadata (without the body)
    // generate keywords list
    suttaData.keywords = generateKeywords(body);
    await fs.writeFile(filePath, JSON.stringify(suttaData, null, 2));
    // calculate reading time
    let aggregateString = '';
    for (const block of body) {
      aggregateString += block.fr;
    }
    readingTime = Math.floor(aggregateString.length / 1000);

    // build the identifier
    // const identifier = `${NIKAYA_SHORT_MAP[nikaya]} ${}`;

    extractedSuttaCardMetadata.push({
      ...metadata,
      nikaya,
      id: file.replace('.json', ''),
      readingTime,
    });
  }
  return extractedSuttaCardMetadata;
}

function generateKeywords(body: ISuttaBlock[]): string[] {
  let keywords: string[] = [];
  body.map((block) => {
    const segments = block.fr.split(/(\[[^\|]+\|[^\]]+\]|\s+)/).filter(Boolean);
    segments.map((segment) => {
      const match = segment.match(/^\[([^\|]+)\|([^\]]+)\]$/);
      if (match && !keywords.includes(match[1])) {
        keywords.push(match[1]);
      }
    });
  });
  return keywords;
}
