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
  console.log('GlossaryModal:21');
  console.log({ glossId });
  console.log({ isOpen });
  console.log('GlossaryModal:24');
  const entry = entries.find((v) => v.id === glossId);
  if (entry && isIGlossEntryData(entry)) {
    return (
      <div
        className={`z-20 fixed bottom-0 left-0 w-full p-8 bg-(--bg-default) transition-all ease-out duration-1000 ${isOpen ? 'h-[30vh]' : 'h-0'} ${className}`}
      >
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => closeModal({ isOpen: false, word: undefined, glossId: undefined })}
        >
          <p>x</p>
        </button>
        <p>{sourceWord} :</p>
        <GlossaryEntry entry={entry} />
      </div>
    );
  } else if (entry && !isIGlossEntryData(entry)) {
    return <p>Entrée du glossaire indisponible</p>;
  }
}
