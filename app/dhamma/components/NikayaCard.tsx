export default function NikayaCard({ titlePl, titleFr, description, count, short }: NikayaCardData) {
  return (
    <div className="rounded-xl card relative pt-6 pb-4 px-6 sm:!px-8 w-[90vw] max-w-xl min-h-[310px] cursor-pointer">
      <div className="absolute bottom-2 left-0 w-12 h-10 grid place-items-center bg-(--emphasis) rounded-tr-md rounded-br-md">
        <p className="font-bold !text-white">{short}</p>
      </div>
      <div className="w-full grid place-items-center mb-4">
        <h3>
          <p className="text-xl sm:!text-2xl text-center !text-(--card-title)">
            <span>{titlePl}</span>
          </p>
          <p className="text-lg sm:!text-xl text-center">{titleFr}</p>
        </h3>
      </div>
      <p className="text-sm sm:!text-base mb-12">{description}</p>
      <p className="absolute bottom-4 right-4 text-xs">{`${count} pages`}</p>
    </div>
  );
}
