import SubNikayaSuttaList from '../../components/subnikaya-sutta-list';

export default function AnguttaraNipataPage({ params }: ISubNikayaPage): React.ReactElement {
  const { book } = params;
  return <SubNikayaSuttaList nikaya="an" book={book} />;
}
