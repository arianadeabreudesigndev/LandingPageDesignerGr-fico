'use client';

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
  const iconName = iconMap[service.id] || `${service.id}-icon.svg`; 
  const iconPath = `/images/${iconName}`;

  return (
    <motion.button
      variants={fadeInUp}
      onClick={onClick}
      className="bg-[#1E1E1E] text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center border border-gray-700"
    >
      <div className="flex justify-center mb-4">
        <img src={iconPath} alt={service.title} className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mb-2 uppercase">{service.title}</h3>
      {service.shortDescription && (
        <p className="text-gray-300 text-sm">{service.shortDescription}</p>
      )}
    </motion.button>
  );
}