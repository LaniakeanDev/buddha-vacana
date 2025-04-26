import BVNewSuttaCard from './BVNewSuttaCard';

const newSuttaCardData: UINewSuttaCard = {
  paliTitle: 'Abhisamaya',
  frTitle: 'La réalisation',
  suttaRef: 'SN 24.6',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
  date: new Date('2025-04-13'),
  timeLength: 5,
};
console.log(new Date('2025-04-13').getDay());
const newSuttaCardsData: UINewSuttaCard[] = [newSuttaCardData, newSuttaCardData, newSuttaCardData, newSuttaCardData];

export default function BVNewSuttaCards() {
  return (
    <div className="flex flex-row gap-10 flex-wrap w-[1000px] m-auto">
      {newSuttaCardsData.map((card, idx) => (
        <BVNewSuttaCard
          key={`suttacard-${String(idx)}`}
          paliTitle={card.paliTitle}
          frTitle={card.frTitle}
          suttaRef={card.suttaRef}
          description={card.description}
          date={card.date}
          timeLength={card.timeLength}
        />
      ))}
    </div>
  );
}
