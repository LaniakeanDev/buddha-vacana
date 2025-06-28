'use client';

import { isIGlossEntryData } from '@/utils/typeguards';
import GlossaryEntry from './GlossaryEntry';
import { useState } from 'react';

interface GlossaryModalProps {
  sourceWord?: string;
  glossId?: string;
  className?: string;
  isOpen: boolean;
  entries: IGlossEntryData[];
  closeModal: React.Dispatch<
    React.SetStateAction<{
      isOpen: boolean;
      word: string | undefined;
      glossId: string | undefined;
    }>
  >;
}

export default function GlossaryModal({
  sourceWord = '',
  glossId = '',
  className = '',
  isOpen,
  entries,
  closeModal,
}: GlossaryModalProps) {
  const [isTall, setIsTall] = useState(false);
  const dynamicHeight = () => {
    if (isOpen) {
      return isTall ? 'h-[70vh] border-4' : 'h-[40vh] border-4';
    }
    return 'h-0 border-0';
  };
  const entry = entries.find((v) => v.id === glossId);
  if (entry && isIGlossEntryData(entry)) {
    return (
      <div
        className={`z-20 fixed bottom-0 left-0 w-full bg-(--bg-default) transition-[height] ease-out duration-300 border-amber-500 box-border ${dynamicHeight()} ${className}`}
      >
        <div className="w-full h-10 bg-amber-500 grid place-items-center">
          <p className="!text-black font-bold">— {sourceWord} —</p>
        </div>
        <div className="absolute top-0 right-0 flex flex-row gap-2 items-center">
          <button className="w-8 h-8 cursor-pointer" onClick={() => setIsTall(true)}>
            <p className="!text-black text-[18px] hover:text-white">□</p>
          </button>
          <button className="w-8 h-8 cursor-pointer">
            <p className="!text-black text-[18px] hover:text-white" onClick={() => setIsTall(false)}>
              ▭
            </p>
          </button>
          <button
            // alt="Fermer"
            className="w-8 h-8 cursor-pointer"
            onClick={() => closeModal({ isOpen: false, word: sourceWord, glossId: glossId })}
          >
            <p className="!text-black text-lg hover:text-white">✕</p>
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          <GlossaryEntry entry={entry} />
        </div>
      </div>
    );
  } else if (entry && !isIGlossEntryData(entry)) {
    return <p>Entrée du glossaire indisponible</p>;
  }
}
