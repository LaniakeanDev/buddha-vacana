interface BVPageTitleProps {
  plTitle: string;
  frTitle: string;
}

export default function BVPageTitle({ plTitle, frTitle }: BVPageTitleProps) {
  return (
    <h1 className="font-semibold text-center !text-(--page-title) mt-4 mb-8">
      <p className="text-4xl md:!text-6xl">{plTitle}</p>
      <p className="text-3xl md:!text-5xl">{frTitle}</p>
    </h1>
  );
}
