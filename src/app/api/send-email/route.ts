import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { formSchema } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = formSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 });
    }

    const { nome, sobrenome, email, telefone, mensagem } = parsed.data;

    await resend.emails.send({
      from: 'onboarding@resend.dev', // substitir pelo meu domínio depois
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

    // Retornar sucesso + redirecionamento para WhatsApp
    const whatsappNumber = '5522992430098'; // SEU NÚMERO
    const text = encodeURIComponent(`Olá, acabei de enviar um orçamento pelo site. Meu nome: ${nome} ${sobrenome}. Mensagem: ${mensagem}`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${text}`;

    return NextResponse.json({ success: true, whatsappLink });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  }
}