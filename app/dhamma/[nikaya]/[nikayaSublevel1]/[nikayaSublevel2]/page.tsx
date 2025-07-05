import { isISuttaData } from '@/utils/typeguards';
import { getSuttaData } from '@/utils/helpers';
import SuttaPageContent from '@/app/dhamma/components/SuttaPageContent';

interface DeepSuttaPageProps {
  params: {
    nikaya: NikayaEnum;
    nikayaSublevel1: string; // book or suttaId
    nikayaSublevel2: string; // suttaId
  };
}

export default async function DeepSuttaPage({ params }: DeepSuttaPageProps) {
  const { nikaya, nikayaSublevel1, nikayaSublevel2 } = await params;
  const suttaData = getSuttaData(nikaya, nikayaSublevel1, nikayaSublevel2);
  if (suttaData && isISuttaData(suttaData)) {
    return <SuttaPageContent suttaData={suttaData} />;
  }
  return <p>Soutta non trouvé</p>;
}
