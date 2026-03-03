import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { formSchema } from '@/lib/validations';
import { supabase } from '@/lib/supabaseClient';

const resend = new Resend(process.env.RESEND_API_KEY);

// Função para obter o mês atual no formato YYYY-MM
function getCurrentMonth() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const { nome, sobrenome, email, telefone, mensagem } = parsed.data;

    // Enviar e-mail via Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'arianadeabreudesigndev@gmail.com',
      subject: 'Novo orçamento solicitado',
      html: `
        <h1>Novo contato</h1>
        <p><strong>Nome:</strong> ${nome} ${sobrenome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    });

    const currentMonth = getCurrentMonth();

    // Verifica se já existe um registro para o mês atual
    const { data: existing, error: checkError } = await supabase
      .from('agenda')
      .select('id')
      .eq('mes', currentMonth)
      .maybeSingle();

    if (checkError) {
      console.error('Erro ao verificar mês:', checkError);
    }

    // Se não existir, insere um novo registro com valores iniciais
    if (!existing) {
      const { error: insertError } = await supabase
        .from('agenda')
        .insert({ vagas: 5, em_analise: 0, fila: 0, finalizados: 0, mes: currentMonth });

      if (insertError) {
        console.error('Erro ao inserir mês:', insertError);
      } else {
        console.log(`Registro criado para o mês ${currentMonth}`);
      }
    }

    // Incrementa o contador em_analise (a função já lida com a linha existente)
    const { error: supabaseError } = await supabase.rpc('increment_em_analise', {
      target_month: currentMonth,
    });

    if (supabaseError) {
      console.error('Erro ao incrementar contador no Supabase:', supabaseError);
    }

    // Retornar sucesso (apenas e-mail)
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  }
}