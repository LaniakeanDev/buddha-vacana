import CardContent from '@/app/components/CardContent';
import Link from 'next/link';

type NikayaCardProps = INikayaPresentationData;

export default function NikayaCard({ plTitle, frTitle, description, count, short, id }: NikayaCardProps) {
  return (
    // <div className="card min-h-[310px]">
    <Link href={`dhamma/${id}`} className="card min-h-[310px]">
      {/* <div className="card rounded-xl relative cursor-pointer pt-6 pb-4 px-6 sm:!px-8 w-[90vw] max-w-xl min-h-[310px]"> */}
      <div className="absolute bottom-2 left-0 w-12 h-10 grid place-items-center bg-(--emphasis) rounded-tr-md rounded-br-md">
        <p className="font-bold !text-white">{short}</p>
      </div>
      <CardContent plTitle={plTitle} frTitle={frTitle} description={description} />
      <p className="absolute bottom-4 right-4 text-xs">{`${count} pages`}</p>
    </Link>
  );
}
