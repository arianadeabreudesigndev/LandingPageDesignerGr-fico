'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { fadeInUp } from '../animations/fadeInUp';

export default function Promo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section id="promo" className="bg-white text-white overflow-hidden relative">
      {/* Versão para mobile: fundo retangular (sem clip-path) */}
      <div className="absolute inset-0 bg-secondary block md:hidden" />

      {/* Versão para telas médias/grandes: com clip-path */}
      <div
        className="absolute inset-0 bg-secondary hidden md:block"
        style={{
          clipPath: 'polygon(0% 0%, 100% 20%, 100% 90%, 0% 100%)'
        }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
            className="md:-ml-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-4xl font-bold text-white mb-2"
            >
              26% OFF em landing pages
            </motion.h2>

            <motion.h3
              variants={fadeInUp}
              className="text-xl text-primary mb-5"
            >
              Oferta válida até o fim de fevereiro
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="text-white mb-4 max-w-lg"
            >
              Aproveite 26% de desconto na criação de landing pages personalizadas, desenvolvidas sob medida com design estratégico e estrutura pensada para conversão.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-white mb-6 max-w-lg"
            >
              Ideal para lançamentos, produtos, serviços, negócios locais, e-commerce e projetos digitais.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a href="#contato" className="inline-block">
                <Button
                  variant="primary"
                  className="uppercase flex items-center gap-2 px-8 py-3 text-base"
                >
                  ORÇAMENTO
                  <motion.img
                    src="/images/seta.svg"
                    alt="Seta"
                    className="w-7 h-7"
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center items-center ml-auto"
          >
            <img
              src="/images/LandpageExemplo.png"
              alt="Exemplo de landing page"
              className="w-full max-w-5xl h-auto object-contain"
            />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}