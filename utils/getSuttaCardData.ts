import path from 'path';
import fs from 'fs/promises';
import { isISuttaCardDataArray } from '@/utils/typeguards';

export async function getSuttaCardData(filePathEnd: string): Promise<ISuttaCardData[] | undefined> {
  const sourcePath = path.join(process.cwd(), `public/data/suttaCardData/${filePathEnd}.json`);

  try {
    const rawData = await fs.readFile(sourcePath, 'utf8');
    const suttaCardData = JSON.parse(rawData);
    if (!isISuttaCardDataArray(suttaCardData)) {
      throw new Error(`Data structure in ${sourcePath} doesn't match ISuttaCardData interface`);
    }

    return suttaCardData;
  } catch (error) {
    console.error(`Failed to load sutta card data from ${sourcePath}:`, error);

    return undefined;
  }
}
