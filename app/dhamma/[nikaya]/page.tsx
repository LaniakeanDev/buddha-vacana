import path from 'path';
import fs from 'fs/promises';
import { NIKAYA_SHORT_MAP } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import FlatNikayaPageContent from '../components/FlatNikayaPageContent';
import NestedNikayaPageContent from '../components/NestedNikayaPageContent';

interface NikayaPageProps {
  params: {
    nikaya: NikayaEnum;
  };
}

export default async function NikayaPage({ params }: NikayaPageProps) {
  const { nikaya } = params;
  if (nikaya === 'digha' || nikaya === 'majjhima') {
    const sourcePath = path.join(process.cwd(), `public/data/suttaCarData/${NIKAYA_SHORT_MAP[nikaya]}.json`);
    const rawData = await fs.readFile(sourcePath, 'utf8');
    const suttaCardData = JSON.parse(rawData);
    if (!isISuttaData(suttaCardData)) {
      console.error('Error while reading file "', sourcePath, '": data structure doesn\'t match ISuttaData Interface');
    }
    return <FlatNikayaPageContent data={suttaCardData} nikaya={nikaya} />;
  }
  if (nikaya === 'samyutta' || nikaya === 'anguttara') {
    return <NestedNikayaPageContent data={true} nikaya={nikaya} />;
  }
}
