'use client';

import { useState } from 'react';
import { Service } from '@/types';
import { motion } from 'framer-motion';
import { fadeInUp } from '../animations/fadeInUp';

const iconMap: Record<string, string> = {
  logotipo: 'logotipo-icon.png',
  convites: 'convite-icon.svg',
  'landing-pages': 'lanpage-icon.svg',
  'posts-stories': 'posts-icon.svg',
  etiquetas: 'etiqueta-icon.svg',
  menus: 'menu-icon.svg',
  catalogos: 'catalogo-icon.png',
  'cartoes-visita': 'cartaoVisita-icon.svg',
  'documentos-timbrados': 'docTimbrado-icon.svg',
  'manual-marca': 'manualMarca-icon.svg',
  panfletos: 'panfleto.icon.svg',
  'capas-youtube-twitch': 'capaTwitchYoutube-icon.svg',
  'destaques-instagram': 'destaquesInstagram-icon.svg',
  'identidade-marca': 'identidadeMarca-icon.svg',
  redesign: 'redesign-icon.svg',
};

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const [imgError, setImgError] = useState(false);
  const iconFile = iconMap[service.id];

  return (
    <motion.button
      variants={fadeInUp}
      onClick={onClick}
      className="bg-[#1E1E1E] text-white rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-700 h-full flex flex-col"
    >
      <div className="flex justify-center mb-3">
        {!imgError && iconFile ? (
          <img
            src={`/images/${iconFile}`}
            alt={service.title}
            className="w-14 h-14 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-14 h-14 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 text-xs">
            {service.title.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-base font-semibold mb-1 uppercase">{service.title}</h3>
      {service.shortDescription && (
        <p className="text-gray-300 text-xs line-clamp-2">{service.shortDescription}</p>
      )}
    </motion.button>
  );
}