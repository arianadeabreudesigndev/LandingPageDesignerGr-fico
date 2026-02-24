import { AgendaData } from '@/types';
import Container from '../ui/Container';
import Section from '../ui/Section';
import AgendaStats from '../agenda/AgendaStats';
import Link from 'next/link';

import agendaData from '@/data/agenda.json';

export default function Agenda() {
  const data: AgendaData = agendaData;

  return (
    <Section id="agenda">
      <Container className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
          Atendimento com agenda limitada
        </h2>

        <h3 className="text-xl text-primary mb-6">
          Qualidade exige prioridade, quando fecha, fecha.
        </h3>

        <div className="w-48 h-[3px] bg-primary mx-auto rounded-full mb-8"></div>

        <p className="max-w-2xl mx-auto text-black dark:text-gray-300 leading-tight">
          Trabalho com um número reduzido de projetos por mês para manter a qualidade, atenção aos detalhes e acompanhamento próximo.
        </p>

        <p className="max-w-2xl mx-auto text-black dark:text-gray-300 leading-tight mt-2">
          Se você deseja garantir o espaço na minha agenda, o ideal é reservar<br />
          com antecedência.
        </p>

        <AgendaStats data={data} />

        <Link
          href="#contato"
          className="inline-flex items-center gap-2 text-2xl font-semibold text-primary hover:text-gray-800 transition-colors mt-6"
        >
          AGENDE SUA PEÇA
        </Link>
      </Container>
    </Section>
  );
}