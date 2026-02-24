import { supabase } from '@/lib/supabaseClient'
import Container from '../ui/Container'
import Section from '../ui/Section'
import AgendaStats from '../agenda/AgendaStats'
import Link from 'next/link'

function getCurrentMonth() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export default async function Agenda() {
  const currentMonth = getCurrentMonth()

  // Busca os dados da agenda para o mês atual
  const { data, error } = await supabase
    .from('agenda')
    .select('*')
    .eq('mes', currentMonth)
    .single()

  // Tratamento de erro: se houver erro, usa fallback e exibe no console
  if (error) {
    console.error('Erro ao carregar agenda:', error)
    const fallbackData = { vagas: 5, em_analise: 0, fila: 0, finalizados: 0 }
    const agendaData = {
      vagas: { current: fallbackData.vagas, max: 20 },
      emAnalise: { current: fallbackData.em_analise, max: 30 },
      fila: { current: fallbackData.fila, max: 10 },
      finalizados: { current: fallbackData.finalizados, max: 100 }
    }
    return renderAgenda(agendaData)
  }

  // Se não houver dados (data === null), usa fallback
  const dbData = data || { vagas: 5, em_analise: 0, fila: 0, finalizados: 0 }

  // Transforma os dados do banco (números) para o formato com current e max
  const agendaData = {
    vagas: { current: dbData.vagas, max: 20 },
    emAnalise: { current: dbData.em_analise, max: 30 },
    fila: { current: dbData.fila, max: 10 },
    finalizados: { current: dbData.finalizados, max: 100 }
  }

  return renderAgenda(agendaData)
}

// Função auxiliar para renderizar o conteúdo da agenda (evita repetição de código)
function renderAgenda(agendaData: any) {
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

        <AgendaStats data={agendaData} />

        <Link
          href="#contato"
          className="inline-flex items-center gap-2 text-2xl font-semibold text-primary hover:text-gray-800 transition-colors mt-6"
        >
          AGENDE SUA PEÇA
        </Link>
      </Container>
    </Section>
  )
}