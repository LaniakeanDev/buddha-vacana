import PageWrapper from '../../components/PageWrapper';
import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';
import { SNPresentationMap } from '../../content';
import BreadCrumbs from '@/app/components/breadcrumbs';
import DhammaHeader from '@/app/components/header';

interface SNParams {
  params: Promise<{
    book: OneToFiftySix;
  }>;
}

export default async function IndividualSamyuttaPage({ params }: SNParams) {
  const { book } = await params;
  const presentationData = SNPresentationMap[book];
  return (
    <>
      <DhammaHeader>
        <BreadCrumbs basket="Dhamma" nikaya="sn" book={book} />
      </DhammaHeader>
      <PageWrapper data={presentationData}>
        <SubNikayaSuttaList nikaya="sn" book={book} />
      </PageWrapper>
    </>
  );
}
