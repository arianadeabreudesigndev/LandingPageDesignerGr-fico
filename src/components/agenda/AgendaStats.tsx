import { AgendaData } from '@/types';
import CircularProgress from './CircularProgress';

interface AgendaStatsProps {
  data: AgendaData;
}

export default function AgendaStats({ data }: AgendaStatsProps) {
  const stats = [
    { value: data.vagas.current, max: data.vagas.max, label: 'VAGAS' },
    { value: data.emAnalise.current, max: data.emAnalise.max, label: 'EM ANÁLISE' },
    { value: data.fila.current, max: data.fila.max, label: 'EM FILA' },
    { value: data.finalizados.current, max: data.finalizados.max, label: 'FINALIZADOS' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 my-8">
      {stats.map((stat) => (
        <CircularProgress
          key={stat.label}
          value={stat.value}
          max={stat.max}
          label={stat.label}
        />
      ))}
    </div>
  );
}