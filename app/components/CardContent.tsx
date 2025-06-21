interface CardContentProps {
  plTitle: string;
  frTitle: string;
  description: string;
  className?: string;
}

export default function CardContent({ plTitle, frTitle, description, className }: CardContentProps) {
  return (
    <>
      <div className={`w-full grid place-items-center mb-12 ${className}`}>
        <h3>
          <p className="text-xl sm:!text-2xl text-center !text-(--card-title) mb-2">
            <span>{plTitle}</span>
          </p>
          <p className="text-lg sm:!text-xl text-center">{frTitle}</p>
        </h3>
      </div>
      <p className="text-sm sm:!text-base mb-12 md:text-justify">{description}</p>
    </>
  );
}
