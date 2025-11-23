interface BVPageTitleProps {
  plTitle: string;
  frTitle: string;
}

export default function BVPageTitle({ plTitle, frTitle }: BVPageTitleProps) {
  return (
    <h1 className="font-semibold text-center !text-(--page-title) mb-8">
      <p className="text-2xl md:!text-4xl">{plTitle}</p>
      <p className="text-xl md:!text-3xl">{frTitle}</p>
    </h1>
  );
}
