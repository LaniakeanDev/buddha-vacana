export default function NikayaCard({ titlePl, titleFr, description, count, short }: NikayaCardData) {
  return (
    <div className="rounded-lg bg-(--card) relative pt-6 pb-4 px-4 max-w-xl">
      <div className="absolute top-0 left-0 w-12 h-10 grid place-items-center bg-(--emphasis) rounded-br-md rounded-tl-md">
        <p className="font-bold">{short}</p>
      </div>
      <div className="w-full grid place-items-center mb-4">
        <h3>
          <p className="text-2xl text-center">{titlePl}</p>
          <p className="text-xl text-center">{titleFr}</p>
        </h3>
      </div>
      <p className="mb-8">{description}</p>
      <p className="absolute bottom-4 right-4 text-xs">{`${count} pages`}</p>
    </div>
  );
}
