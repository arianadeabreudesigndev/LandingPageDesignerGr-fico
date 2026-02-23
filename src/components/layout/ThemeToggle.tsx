'use client';

import { useEffect, useState } from 'react';
import Button from '../ui/Button';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Button variant="outline" size="sm" onClick={toggle} className="flex items-center gap-2">
      {/* Ícone de sol/lua (autoral) */}
      <span className="w-5 h-5 inline-block" aria-hidden="true" />
      {dark ? 'Claro' : 'Escuro'}
    </Button>
  );
}