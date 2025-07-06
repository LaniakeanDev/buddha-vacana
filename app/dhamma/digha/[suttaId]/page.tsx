import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../components/SuttaPageContent';

interface DighaSuttaPageProps {
  params: {
    suttaId: number;
  };
}

export default async function DighaSuttaPage({ params }: DighaSuttaPageProps) {
  const { suttaId } = await params;
  if (!Number.isInteger(suttaId) || suttaId < 1 || suttaId > 34) {
    return <p>La ressource que vous demandez n'existe pas</p>;
  }
  try {
    const suttaData = getSuttaData('digha', String(suttaId), undefined);
    if (!suttaData) {
      throw new Error(`File containing data for DN ${suttaId} unavailable`);
    }
    if (!isISuttaData(suttaData)) {
      throw new Error(`Data structure in DN ${suttaId} doesn't match ISuttaCardData interface`);
    }
    if (suttaData && isISuttaData(suttaData)) {
      return (
        <>
          <p className="breadcrumbs">
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/digha">DN</Link>
            {' > '} DN {String(suttaId)}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from DN ${suttaId}:`, error);
    return <p>Soutta non trouvé</p>;
  }
}
