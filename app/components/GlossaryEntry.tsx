interface GlossaryEntryProps {
  entry?: IGlossEntryData;
}

export default function GlossaryEntry({ entry }: GlossaryEntryProps) {
  return <p>{entry?.content || 'GlossaryEntry:10'}</p>;
}
