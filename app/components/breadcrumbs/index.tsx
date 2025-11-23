import Link from 'next/link';

interface BreadCrumbsProps {
  basket: TBasket;
  nikaya?: TNikayaEnum;
  book?: OneToTwelve | OneToFiftySix | TknBooks;
  suttaId?: string;
}

export default function BreadCrumbs({ basket, nikaya, book, suttaId }: BreadCrumbsProps) {
  const breadcrumbsClassName = 'bg-[#d9d9d9]/20 px-4 py-2 rounded-xl w-fit';
  if (!nikaya) {
    return (
      <p className={breadcrumbsClassName}>
        <Link href={`/${basket.toLowerCase()}`}>{basket}</Link>
      </p>
    );
  }
  if (nikaya && basket == 'Dhamma') {
    switch (nikaya) {
      case 'dn':
      case 'mn':
        return (
          <p className={breadcrumbsClassName}>
            <Link href="/dhamma">Dhamma</Link> {' > '}
            <Link href={`/dhamma/${nikaya}`}>{nikaya.toUpperCase()}</Link>
            {suttaId && (
              <>
                {' > '} {suttaId}
              </>
            )}
          </p>
        );
      case 'sn':
      case 'an':
        return (
          <p className={breadcrumbsClassName}>
            <Link href="/dhamma">Dhamma</Link> {' > '}
            <Link href={`/dhamma/${nikaya}`}>{nikaya.toUpperCase()}</Link>
            {book && (
              <>
                {' > '} <Link href={`/dhamma/${nikaya}/${book}`}>{book}</Link>
              </>
            )}
            {suttaId && (
              <>
                {' > '} {suttaId}
              </>
            )}
          </p>
        );
      case 'kn':
        return (
          <p className={breadcrumbsClassName}>
            <Link href="/dhamma">Dhamma</Link> {' > '}
            <Link href={`/dhamma/kn`}>KN</Link>
            {book && (
              <>
                {' > '}{' '}
                <Link href={`/dhamma/kn/${book}`}>{String(book).charAt(0).toUpperCase() + String(book).slice(1)}</Link>
              </>
            )}
            {/* {' > '}
            <Link href={`/dhamma/kn/${book}`}>{String(book).charAt(0).toUpperCase() + String(book).slice(1)}</Link> */}
            {suttaId && (
              <>
                {' > '} {suttaId}
              </>
            )}
          </p>
        );
    }
  }
}
