'use client';

interface SuttaGlossWordProps {
  word: string;
  // glossId: string;
  onClick: () => void;
}

export default function SuttaGlossWord({ word, /* glossId, */ onClick }: SuttaGlossWordProps) {
  console.log('SuttaGlossWord:10');
  console.log({ word });
  return (
    <span className="sutta-gloss-word cursor-pointer" onClick={() => onClick()}>
      {word}
    </span>
  );
}
