import CardContent from './CardContent';
import CardIdentifier from './CardIdentifier';

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
    <div className="card">
      <CardIdentifier content={identifier} className="!w-16" />
      <CardContent plTitle={plTitle} frTitle={frTitle} description={description} />
      <div className="w-full flex flex-row justify-between">
        <p>{translator}</p>
        <p>{readingTime}</p>
      </div>
    </div>
  );
}
