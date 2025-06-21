import CardContent from '@/app/components/CardContent';
import CardIdentifier from '@/app/components/CardIdentifier';
import Link from 'next/link';

type NikayaCardProps = INikayaPresentationData;

export default function NikayaCard({ plTitle, frTitle, description, count, short, id }: NikayaCardProps) {
  return (
    <Link href={`dhamma/${id}`} className="card min-h-[310px]">
      <CardIdentifier content={short} className="!w-12" />
      <CardContent plTitle={plTitle} frTitle={frTitle} description={description} className="mt-4" />
      <p className="absolute bottom-4 right-4 text-xs">{`${count} pages`}</p>
    </Link>
  );
}
