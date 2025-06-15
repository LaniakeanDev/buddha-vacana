interface CardContentProps {
  plTitle: string;
  frTitle: string;
  description: string;
}

export default function CardContent({ plTitle, frTitle, description }: CardContentProps) {
  return (
    <>
      <div className="w-full grid place-items-center mb-4">
        <h3>
          <p className="text-xl sm:!text-2xl text-center !text-(--card-title)">
            <span>{plTitle}</span>
          </p>
          <p className="text-lg sm:!text-xl text-center">{frTitle}</p>
        </h3>
      </div>
      <p className="text-sm sm:!text-base mb-12">{description}</p>
    </>
  );
}
