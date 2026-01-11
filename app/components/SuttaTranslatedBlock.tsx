'use client';

import SuttaGlossWord from './SuttaGlossWord';

interface SuttaTranslatedBlockProps {
  text: string;
  openModal: React.Dispatch<React.SetStateAction<IModalState>>;
  modalState: IModalState;
  className: string;
}

export default function SuttaTranslatedBlock({ text, openModal, modalState, className }: SuttaTranslatedBlockProps) {
  // Parse the text and identify interactive words
  const parseText = () => {
    // Split text while preserving whitespace
    const segments = text.split(/(\[[^\|]+\|[^\]]+\]|\s+)/).filter(Boolean);

    return segments.map((segment, index) => {
      // Check if segment matches format [keyword|word]
      const match = segment.match(/^\[([^\|]+)\|([^\]]+)\]$/);
      if (match) {
        const glossId = match[1];
        const word = match[2];
        const nextModalState = () => {
          let nextState = true;
          if (modalState.word === word) {
            nextState = !modalState.isOpen;
          }
          return nextState;
        };
        return (
          <SuttaGlossWord
            key={index}
            word={word}
            onClick={() => openModal({ isOpen: nextModalState(), word: word, glossId: glossId })}
          />
        );
      }
      // Return regular text segments
      return segment;
    });
  };
  return <p className={className}>{parseText()}</p>;
}
