import fs from 'fs/promises';
import { readdirSync, statSync } from 'fs';
import path from 'path';
import { isISuttaData } from './typeguards';
import { NikayaEnum } from '@/types/nikaya-enum';
// import { NIKAYA_SHORT_MAP } from './helpers';

interface SuttaMetadata {
  shortRef: string;
  plTitle: string;
  frTitle: string;
  description: string;
  nikaya: string;
  readingTime: number;
  id: string;
}

async function generateCardData(): Promise<void> {
  const dataDir = path.join(process.cwd(), 'public/data/sutta');
  const nikayas: NikayaEnum[] = ['digha', 'majjhima', 'samyutta', 'anguttara', 'khuddaka'];

  try {
    for (const nikaya of nikayas) {
      const nikayaPath = path.join(dataDir, nikaya);
      if (nikaya === 'digha' || nikaya === 'majjhima') {
        const dataToBeWritten = extractSuttaCardMetadataFromFolder(nikayaPath, nikaya);
        const outputFile =
          nikaya === 'digha'
            ? path.join(process.cwd(), 'public/data/suttaCardData/dn.json')
            : path.join(process.cwd(), 'public/data/suttaCardData/mn.json');
        await fs.writeFile(
          outputFile,
          JSON.stringify(dataToBeWritten, null, 2), // pretty print
          'utf8',
        );
      }
      if (nikaya === 'samyutta' || nikaya === 'anguttara') {
        const numberOfSubNikayas = nikaya === 'samyutta' ? 56 : 12;
        for (let subNikayaNumber = 1; subNikayaNumber <= numberOfSubNikayas; subNikayaNumber++) {
          const dataToBeWritten = extractSuttaCardMetadataFromFolder(
            path.join(nikayaPath, String(subNikayaNumber)),
            nikaya,
          );
          const outPutPath = nikaya === 'samyutta' ? 'public/data/suttaCardData/sn' : 'public/data/suttaCardData/an';
          await fs.writeFile(
            path.join(process.cwd(), outPutPath, `/${subNikayaNumber}.json`),
            JSON.stringify(dataToBeWritten, null, 2), // pretty print
            'utf8',
          );
        }
      }
      if (nikaya === 'khuddaka') {
        // figure out which subNikayas are in the folder structure
        const subNikayas = readdirSync(nikayaPath).filter((file) => {
          const fullPath = path.join(nikayaPath, file);
          return statSync(fullPath).isDirectory();
        });
        for (const subNikaya of subNikayas) {
          console.log(subNikaya);
          // to be finisehd later
        }
      }
    }
  } catch (error) {
    console.error('Error generating card data:', error);
    process.exit(1);
  }
}

generateCardData();

async function extractSuttaCardMetadataFromFolder(folderPath: string, nikaya: NikayaEnum): Promise<SuttaMetadata[]> {
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
