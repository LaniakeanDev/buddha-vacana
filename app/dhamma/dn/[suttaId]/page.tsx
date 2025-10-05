import { getSuttaData } from '@/utils/helpers';
import { isISuttaData } from '@/utils/typeguards';
import Link from 'next/link';
import SuttaPageContent from '../../components/SuttaPageContent';
import GraciousFail from '@/app/components/GraciousFail';

interface DighaSuttaPageProps {
  params: {
    suttaId: string;
  };
}

export default async function DighaSuttaPage({ params }: DighaSuttaPageProps) {
  const { suttaId } = await params;
  const id = Number(suttaId);
  if (!Number.isInteger(id) || id < 1 || id > 34) {
    return <GraciousFail message="La ressource que vous demandez n'existe pas" />;
  }
  try {
    const suttaData = getSuttaData('dn', id);
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
            <Link href="/dhamma">Dhamma</Link> {' > '} <Link href="/dhamma/dn">DN</Link>
            {' > '} DN {String(suttaId)}
          </p>
          <SuttaPageContent suttaData={suttaData} />
        </>
      );
    }
  } catch (error) {
    console.error(`Failed to load sutta data from DN ${suttaId}:`, error);
    return <GraciousFail message="Soutta non trouvé" />;
  }
}
