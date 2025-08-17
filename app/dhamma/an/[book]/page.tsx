import PageWrapper from '../../components/PageWrapper';
import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';
import { subnikayaPresentationMap } from '../../content';

interface ANParams {
  params: {
    book: OneToTwelve;
  };
}

export default async function AnguttaraNipataPage({ params }: ANParams) {
  const { book } = await params;
  const presentationData = subnikayaPresentationMap.an[book];
  return (
    <PageWrapper data={presentationData}>
      <SubNikayaSuttaList nikaya="an" book={book} />
    </PageWrapper>
  );
}
