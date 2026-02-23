'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from '@/lib/validations';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Erro ao enviar');

      // Redireciona para WhatsApp
      window.location.href = result.whatsappLink;
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro desconhecido');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contato">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Envie sua ideia agora</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
              <input
                id="nome"
                type="text"
                {...register('nome')}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              />
              {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome.message}</p>}
            </div>
            <div>
              <label htmlFor="sobrenome" className="block text-sm font-medium mb-1">Sobrenome</label>
              <input
                id="sobrenome"
                type="text"
                {...register('sobrenome')}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              />
              {errors.sobrenome && <p className="mt-1 text-sm text-red-600">{errors.sobrenome.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium mb-1">Telefone</label>
              <input
                id="telefone"
                type="tel"
                {...register('telefone')}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
              />
              {errors.telefone && <p className="mt-1 text-sm text-red-600">{errors.telefone.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-1">Do que você precisa?</label>
            <textarea
              id="mensagem"
              rows={5}
              {...register('mensagem')}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
            />
            {errors.mensagem && <p className="mt-1 text-sm text-red-600">{errors.mensagem.message}</p>}
          </div>

          {submitError && <p className="text-sm text-red-600">{submitError}</p>}

          <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar pedido de orçamento'}
          </Button>

          <p className="text-sm text-center text-gray-500 dark:text-gray-500">
            Seu orçamento é gratuito, sem compromisso, resposta em até 48 horas úteis.
          </p>
        </form>
      </Container>
    </Section>
  );
}