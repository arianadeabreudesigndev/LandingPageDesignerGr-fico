'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { fadeInUp } from '../animations/fadeInUp';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#1E1E1E] py-16 md:py-24 overflow-hidden"
    >
      <Container className="relative z-10">
        {/* Grid: coluna da imagem com largura fixa para não comprimir, coluna do texto flexível */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(auto,600px)] items-center gap-0">
          {/* Texto - com margem negativa à direita para invadir a imagem */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.2 } }
            }}
            className="relative z-20 md:-mr-20 max-md:text-center md:pr-4 lg:pr-0"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-2xl font-semibold text-white mb-2 uppercase"
            >
              SEJA PARA VENDER OU CELEBRAR
            </motion.h2>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-primary uppercase"
            >
              CRIAR ALGO IMPOSSÍVEL<br />
              DE IGNORAR
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-base text-white"
            >
              Do convite à sua presença online, tudo com<br />
              qualidade que impressiona de verdade.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex gap-4 max-md:justify-center"
            >
              <a href="#contato">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex items-center gap-2 md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-3 lg:text-base whitespace-nowrap"
                >
                  CRIAR ORÇAMENTO
                  <img
                    src="/images/seta.svg"
                    alt="Seta"
                    className="w-5 h-5"
                  />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Imagem - com largura mínima garantida e sem compressão */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-end mt-10 md:mt-0 -ml-10 max-md:ml-0 md:ml-4 lg:ml-0"
          >
            <img
              src="/images/bonequinha.svg"
              alt="Ilustração"
              className="w-full max-w-3xl md:max-w-2xl lg:max-w-3xl object-contain"
            />
          </motion.div>
        </div>
      </Container>

      <svg
        className="absolute bottom-0 left-0 w-full h-20 md:h-24"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,100
            C120,20 250,25 310,60
            C500,170 450,0 580,60
            C700,100 770,0 1000,10
            C1800,90 500,40 3800, -450
            L1440,110
            L0,110
            Z
          "
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}