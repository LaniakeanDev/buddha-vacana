'use client';

interface SuttaGlossWordProps {
  word: string;
  onClick: () => void;
}

export default function SuttaGlossWord({ word, onClick }: SuttaGlossWordProps) {
  return (
    <span className="sutta-gloss-word cursor-pointer" onClick={() => onClick()}>
      {word}
    </span>
  );
}
