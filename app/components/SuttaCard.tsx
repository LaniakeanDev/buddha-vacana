import CardContent from './CardContent';

export default function SuttaCard({
  plTitle,
  frTitle,
  description,
  identifier,
  translator,
  readingTime,
  // themes,
  // similes,
  // tags
}: ISuttaData) {
  return (
    <div>
      <div className="center">
        <p>{identifier}</p>
      </div>
      <CardContent plTitle={plTitle} frTitle={frTitle} description={description} />
      <div className="w-full flex flex-row justify-between">
        <p>{translator}</p>
        <p>{readingTime}</p>
      </div>
    </div>
  );
}
