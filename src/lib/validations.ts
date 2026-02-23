import { z } from 'zod';

export const formSchema = z.object({
  nome: z.string().min(2, 'Nome muito curto'),
  sobrenome: z.string().min(2, 'Sobrenome muito curto'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  mensagem: z.string().min(10, 'Descreva um pouco mais sua ideia'),
});

export type FormData = z.infer<typeof formSchema>;