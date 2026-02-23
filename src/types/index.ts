import { Service } from '@/data/services';

export type { Service };

export interface AgendaData {
  vagas: { current: number; max: number };
  emAnalise: { current: number; max: number };
  fila: { current: number; max: number };
  finalizados: { current: number; max: number };
}

export interface FormData {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  mensagem: string;
}