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
      // Check if segment matches format [word|keyword]
      const match = segment.match(/^\[([^\|]+)\|([^\]]+)\]$/);
      if (match) {
        const word = match[1];
        const glossId = match[2];
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
