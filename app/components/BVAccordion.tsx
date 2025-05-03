'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface BVAccordionProps {
  title: string;
  children: React.ReactNode;
  level?: number;
}

export default function BVAccordion({ title, children, level = 0 }: BVAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const levelStyles = [
    { padding: 'pl-4', border: 'border-gray-200', bg: 'bg-gray-50' },
    { padding: 'pl-6', border: 'border-gray-300', bg: 'bg-gray-100' },
    { padding: 'pl-8', border: 'border-gray-400', bg: 'bg-gray-200' },
    { padding: 'pl-10', border: 'border-gray-500', bg: 'bg-gray-300' },
    { padding: 'pl-12', border: 'border-gray-600', bg: 'bg-gray-400' },
  ];

  const currentLevel = Math.min(level, 4);
  const { padding, border, bg } = levelStyles[currentLevel];

  const toggleAccordion = useCallback(() => {
    const newState = !isExpanded;
    setIsExpanded(newState);
  }, [isExpanded]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    if (isExpanded) {
      content.style.display = 'block';
      const scrollHeight = content.scrollHeight;
      setMaxHeight(`${scrollHeight}px`);

      const timer = setTimeout(() => {
        setMaxHeight('none');
      }, 300);

      return () => clearTimeout(timer);
    } else {
      const scrollHeight = content.scrollHeight;
      setMaxHeight(`${scrollHeight}px`);

      // ⚡ Instead of immediate reflow, delay it slightly
      const timer = setTimeout(() => {
        setMaxHeight('0px');
      }, 20); // <-- small timeout makes smooth collapse

      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  return (
    <div className={`border-l-2 ${border} ${currentLevel > 0 ? 'ml-2' : ''}`}>
      <div className={`${currentLevel > 0 ? 'mt-1' : 'mb-2'}`}>
        <button
          className={`w-full ${currentLevel === 0 ? 'p-4' : 'py-3 pr-3'} text-left font-medium ${
            bg
          } hover:bg-opacity-80 transition-all duration-200 rounded ${padding}`}
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
        >
          <div className="flex justify-between items-center">
            <span>{title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        <div
          ref={contentRef}
          style={{
            overflow: 'hidden',
            transition: 'max-height 0.3s ease',
            maxHeight: maxHeight,
          }}
        >
          <div className={`${currentLevel === 0 ? 'p-4' : 'pb-2'} ${padding}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
