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

    // Incrementar o campo em_analise no Supabase
    const currentMonth = getCurrentMonth();
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