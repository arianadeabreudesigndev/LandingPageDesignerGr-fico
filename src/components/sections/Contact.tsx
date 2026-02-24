'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormData } from '@/lib/validations';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useState, useRef } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    setSuccessMessage(null);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Erro ao enviar');

      // Sucesso: exibe mensagem e toca som
      setSuccessMessage('Orçamento enviado com sucesso!');
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log('Erro ao tocar som:', e));
      }
      reset();
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro desconhecido');
    } finally {
      setIsSubmitting(false);
      // Remove a mensagem de sucesso após 5 segundos
      setTimeout(() => setSuccessMessage(null), 4000);
    }
  };

  return (
    <Section id="contato" className="relative bg-white overflow-hidden">
      {/* Forma geométrica*/}
      <div
        className="absolute inset-0 bg-[#1E1E1E]"
        style={{
          clipPath: 'polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)',
        }}
      />

      {/* Elemento de áudio para som de sucesso */}
      <audio ref={audioRef} src="/sounds/success.mp3" preload="auto" />

      <Container className="relative z-10 pt-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 uppercase">
            <span className="font-normal text-white">ENVIE SUA</span>
            <br />
            <span className="font-bold text-primary">IDEIA AGORA!</span>
          </h2>

          {/* Mensagem de sucesso */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-500 text-white rounded-lg text-center font-semibold animate-pulse">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome"
                {...register('nome')}
                className="w-full px-4 py-3 bg-transparent border-2 border-white rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.nome && <p className="mt-1 text-sm text-red-400">{errors.nome.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Sobrenome"
                {...register('sobrenome')}
                className="w-full px-4 py-3 bg-transparent border-2 border-white rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.sobrenome && <p className="mt-1 text-sm text-red-400">{errors.sobrenome.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="E-mail"
                {...register('email')}
                className="w-full px-4 py-3 bg-transparent border-2 border-white rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Telefone"
                {...register('telefone')}
                className="w-full px-4 py-3 bg-transparent border-2 border-white rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.telefone && <p className="mt-1 text-sm text-red-400">{errors.telefone.message}</p>}
            </div>

            <div>
              <textarea
                placeholder="Do que você precisa?"
                rows={4}
                {...register('mensagem')}
                className="w-full px-4 py-3 bg-transparent border-2 border-white rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.mensagem && <p className="mt-1 text-sm text-red-400">{errors.mensagem.message}</p>}
            </div>

            {submitError && <p className="text-sm text-red-400 text-center">{submitError}</p>}

            <Button
              type="submit"
              variant="primary"
              className="w-full uppercase text-white font-semibold py-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'ENVIAR PEDIDO DE ORÇAMENTO'}
            </Button>

            <p className="text-sm text-center text-white mt-4">
              Seu orçamento é gratuito e sem compromisso!<br />
              resposta em até 24h úteis.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}