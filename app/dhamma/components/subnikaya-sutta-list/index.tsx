interface SubNikayaSuttaListProps {
  nikaya: 'an' | 'sn' | 'kn';
  book: number;
}

export default function SubNikayaSuttaList({ nikaya, book }: SubNikayaSuttaListProps) {
  return (
    <p>
      {nikaya} {book}
    </p>
  );
}
