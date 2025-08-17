import CardContent from '@/app/components/CardContent';
import CardIdentifier from '@/app/components/CardIdentifier';
import Link from 'next/link';

type NikayaCardProps = INikayaNaviPresentationData;

export default function NikayaCard({ plTitle, frTitle, description, count, identifier, href }: NikayaCardProps) {
  return (
    <Link href={href} className="card min-h-[310px]">
      <li>
        <CardIdentifier content={identifier} className="!w-12" />
        <CardContent plTitle={plTitle} frTitle={frTitle} description={description} className="mt-4" />
        <p className="absolute bottom-4 right-4 text-xs">{`${count} pages`}</p>
      </li>
    </Link>
  );
}
