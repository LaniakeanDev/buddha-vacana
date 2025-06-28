'use client';

import { useState } from 'react';
import GlossaryModal from './GlossaryModal';
import SuttaTranslatedBlock from './SuttaTranslatedBlock';

interface SuttaTextBodyProps {
  blocks: ISuttaBlock[];
  glossEntries: IGlossEntryData[];
}

export default function SuttaTextBody({ blocks, glossEntries }: SuttaTextBodyProps) {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    word: string | undefined;
    glossId: string | undefined;
  }>({
    isOpen: false,
    word: undefined,
    glossId: undefined,
  });
  return (
    <div>
      {blocks.map((block, idx) => {
        return (
          <div key={`sutta-body-${String(idx + 1)}`} className="flex flex-col gap-2 lg:flex-row lg:gap-8 p-2">
            {/* <p className="lg:flex-100 text-justify indent-4">{block.fr}</p> */}
            <SuttaTranslatedBlock
              className="lg:flex-100 text-justify indent-4"
              openModal={setModalState}
              text={block.fr}
            />
            <p className="lg:flex-95">{block.pl}</p>
          </div>
        );
      })}
      <GlossaryModal
        sourceWord={modalState.word}
        glossId={modalState.glossId}
        isOpen={modalState.isOpen}
        entries={glossEntries}
        closeModal={setModalState}
      />
    </div>
  );
}
