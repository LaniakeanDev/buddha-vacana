'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import SunIcon from '@/public/assets/svg/sun.svg';
import MoonIcon from '@/public/assets/svg/moon.svg';
// import ThemedIcon from './ThemedIcon';

export default function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-circle">
        <div className="w-[24px] h-[24px] xs:!w-[28px] xs:!h-[28px]"></div> {/* Placeholder */}
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`btn btn-ghost btn-circle cursor-pointer ${className}`}
      aria-label="Toggle theme"
    >
      <SunIcon alt="icone passer en mode clair" className="show-on-dark w-[24px] h-[24px] xs:!w-[28px] xs:!h-[28px]" />
      <MoonIcon
        alt="icone passer en mode sombre"
        className="hide-on-dark w-[24px] h-[24px] xs:!w-[28px] xs:!h-[28px]"
      />
      {/* <ThemedIcon
        src="icons/moon.svg"
        darkSrc="icons/sun.svg"
        alt="theme toggle icon"
        width={28}
        height={28}
      /> */}
    </button>
  );
}
