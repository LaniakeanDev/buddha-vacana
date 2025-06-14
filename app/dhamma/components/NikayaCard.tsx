export default function NikayaCard({ titlePl, titleFr, description, count, short }: NikayaCardData) {
  return (
    <div className="rounded-xl card relative pt-6 pb-4 px-8 max-w-xl min-h-[310px] cursor-pointer">
      <div className="absolute top-8 left-0 w-12 h-10 grid place-items-center bg-(--emphasis) rounded-tr-md rounded-br-md">
        <p className="font-bold">{short}</p>
      </div>
      <div className="w-full grid place-items-center mb-4">
        <h3>
          <p className="text-2xl text-center !text-(--gold)">{titlePl}</p>
          <p className="text-xl text-center">{titleFr}</p>
        </h3>
      </div>
      <p className="mb-12">{description}</p>
      <p className="absolute bottom-4 right-4 text-xs">{`${count} pages`}</p>
    </div>
  );
}
