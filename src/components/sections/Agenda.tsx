import { AgendaData } from '@/types';
import Container from '../ui/Container';
import Section from '../ui/Section';
import AgendaStats from '../agenda/AgendaStats';
import Link from 'next/link';

// Buscando dados do JSON (server component)
import agendaData from '@/data/agenda.json';

export default function Agenda() {
  const data: AgendaData = agendaData;

  return (
    <Section id="agenda">
      <Container className="text-center">

        <h2 className="text-3xl md:text-3xl font-bold mb-8 uppercase">
          Atendimento com agenda limitada!
        </h2>

        <h3 className="text-xl text-primary mb-7">
          Qualidade exige prioridade, quando fecha, fecha.
        </h3>

        <div className="w-48 h-[3px] bg-primary mx-auto rounded-full mb-9"></div>

        <p className="max-w-2xl mx-auto text-black dark:text-gray-300 leading-[1.15]">
          Trabalho com um número reduzido de projetos por mês para manter<br /> a qualidade,atenção aos detalhes e acompanhamento próximo.
        </p>

        <p className="max-w-2xl mx-auto text-black dark:text-gray-300 mt-4 leading-[1.15]">
          Se você deseja garantir o espaço na minha agenda, o ideal é reservar com antecedência.
        </p>

        <AgendaStats data={data} />

        <Link
          href="#contato"
          className="inline-flex items-center gap-2 text-2xl font-semibold text-primary hover:underline mt-6"
        >
          AGENDE SUA PEÇA AQUI
        </Link>
      </Container>
    </Section>
  );
}