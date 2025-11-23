import PageWrapper from '../../components/PageWrapper';
import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';
import { ANPresentationMap } from '../../content';
import BreadCrumbs from '@/app/components/breadcrumbs';

interface ANParams {
  params: Promise<{
    book: OneToTwelve;
  }>;
}

export default async function AnguttaraNipataPage({ params }: ANParams) {
  const { book } = await params;
  const presentationData = ANPresentationMap[book];
  return (
    <>
      <BreadCrumbs basket="Dhamma" nikaya="an" book={book} />
      <PageWrapper data={presentationData}>
        <SubNikayaSuttaList nikaya="an" book={book} />
      </PageWrapper>
    </>
  );
}
