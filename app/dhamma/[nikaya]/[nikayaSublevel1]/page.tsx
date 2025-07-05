import { isISuttaData } from '@/utils/typeguards';
import SuttaPageContent from '../../components/SuttaPageContent';
import { getSuttaData } from '@/utils/helpers';

interface ShallowSuttaPageProps {
  params: {
    nikaya: NikayaEnum;
    nikayaSublevel1: string; // suttaId
  };
}

export default async function ShallowSuttaPage({ params }: ShallowSuttaPageProps) {
  const { nikaya, nikayaSublevel1 } = await params;
  const suttaData = getSuttaData(nikaya, nikayaSublevel1, undefined);
  if (suttaData && isISuttaData(suttaData)) {
    return <SuttaPageContent suttaData={suttaData} />;
  }
  return <p>Soutta non trouvé</p>;
}
