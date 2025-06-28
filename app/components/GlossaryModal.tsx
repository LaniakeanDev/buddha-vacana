'use client';

import { isIGlossEntryData } from '@/utils/typeguards';
import GlossaryEntry from './GlossaryEntry';

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
  const entry = entries.find((v) => v.id === glossId);
  if (entry && isIGlossEntryData(entry)) {
    return (
      <div
        className={`z-20 fixed bottom-0 left-0 w-full bg-(--bg-default) transition-[height] ease-out duration-1000 border-4 border-white overflow-y-auto ${isOpen ? 'h-[40vh]' : 'h-0'} ${className}`}
      >
        <div className="w-full h-10 bg-amber-500 grid place-items-center">
          <p className="!text-black">— {sourceWord} —</p>
        </div>
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => closeModal({ isOpen: false, word: undefined, glossId: undefined })}
        >
          <p>x</p>
        </button>
        <div className="p-8">
          <GlossaryEntry entry={entry} />
        </div>
      </div>
    );
  } else if (entry && !isIGlossEntryData(entry)) {
    return <p>Entrée du glossaire indisponible</p>;
  }
}
