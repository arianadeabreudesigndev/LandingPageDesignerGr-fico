'use client';

import { Service } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Button from '../ui/Button';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="bg-[#1E1E1E] text-white rounded-lg max-w-lg w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
                {/* Ícone de fechar - tenho que fazer*/}
                <img src="/images/fechar.svg" alt="Fechar" className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-300 mb-4">{service.fullDescription}</p>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">O que inclui:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {service.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <a href="#contato" className="block w-full">
              <Button variant="primary" className="w-full">
                Solicitar orçamento
              </Button>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}