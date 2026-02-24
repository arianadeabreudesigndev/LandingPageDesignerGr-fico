import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ariana de Abreu — Designer Gráfico | Identidade Visual',
  description: 'Design gráfico autoral com foco em identidade visual, logotipos, landing pages e materiais impressos. Atendimento com agenda limitada e qualidade que impressiona.',
  icons: {
    icon: '/images/fav-icon.svg',
    apple: '/images/fav-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}