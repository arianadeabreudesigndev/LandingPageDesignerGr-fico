'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-2xl text-gray-800 hover:text-primary"
              aria-label="Fechar menu"
            >
              ✕
            </button>
            <nav className="mt-12 flex flex-col space-y-4">
              <a href="#hero" onClick={onClose} className="text-lg text-gray-800 hover:text-primary">
                Início
              </a>
              <a href="#agenda" onClick={onClose} className="text-lg text-gray-800 hover:text-primary">
                Agenda
              </a>
              <a href="#promo" onClick={onClose} className="text-lg text-gray-800 hover:text-primary">
                Promoção
              </a>
              <a href="#servicos" onClick={onClose} className="text-lg text-gray-800 hover:text-primary">
                Serviços
              </a>
              <a href="#contato" onClick={onClose} className="text-lg text-gray-800 hover:text-primary">
                Contato
              </a>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}