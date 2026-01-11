import { isIGlossEntryBodyParagsSection } from '@/utils/typeguards';

interface GlossaryEntryProps {
  entry: IGlossEntryData;
}

export default function GlossaryEntry({ entry }: GlossaryEntryProps) {
  const renderBody = () => {
    const body = entry.content.body;
    return (
      <>
        {body.map((item, bodyIdx) => {
          if (isIGlossEntryBodyParagsSection(item)) {
            return (
              <div key={`block${String(bodyIdx)}`}>
                {item.parags.map((parag, paragIdx) => (
                  <p key={`${String(bodyIdx)}parag${String(paragIdx)}`}>{parag}</p>
                ))}
              </div>
            );
          } else {
            return (
              <div key={`block${String(bodyIdx)}`}>
                <h4>{item.quote.source}</h4>
                {item.quote.parags.map((parag, paragIdx) => (
                  <div key={`${String(bodyIdx)}parag${String(paragIdx)}`}>
                    <p>{parag.pl}</p>
                    <p>{parag.fr}</p>
                  </div>
                ))}
              </div>
            );
          }
        })}
      </>
    );
  };
  return (
    <>
      <p>{entry?.content.translation}</p>
      {renderBody()}
    </>
  );
}
