'use client';

import { useState } from 'react';
import Link from 'next/link';
import Container from '../ui/Container';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1E1E1E] text-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-11 w-auto"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-md hover:bg-gray-700 transition"
            aria-label="Abrir menu"
          >
            <img
              src="/images/menuHamburguer.svg"
              alt="Abrir menu"
              className="w-6 h-6"
            />
          </button>

          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </div>
      </Container>
    </header>
  );
}