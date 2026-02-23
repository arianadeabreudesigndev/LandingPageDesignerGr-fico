'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import Section from '../ui/Section';
import Container from '../ui/Container';
import ServiceCard from '../services/ServiceCard';
import ServiceModal from '../services/ServiceModal';
import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/stagger';
import { Service } from '@/types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const activeServices = services.filter(s => s.active);

  return (
    <Section id="servicos">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 uppercase">
          Serviços disponíveis
        </h2>
        <h3 className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
          O que eu posso criar para você
        </h3>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {activeServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </motion.div>

        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      </Container>
    </Section>
  );
}