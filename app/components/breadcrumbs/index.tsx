import Link from 'next/link';

interface BreadCrumbsProps {
  basket: TBasket;
  nikaya: TNikayaEnum;
  book?: OneToTwelve | OneToFiftySix | TknBooks;
  suttaId?: string;
}

export default function BreadCrumbs({ basket, nikaya, book, suttaId }: BreadCrumbsProps) {
  if (basket == 'Dhamma') {
    switch (nikaya) {
      case 'dn':
      case 'mn':
        return (
          <p className="breadcrumbs">
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
          <p className="breadcrumbs">
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
          <p className="breadcrumbs">
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
