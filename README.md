# Landing Page - Designer Gráfico 2026

> **short_description:** Site profissional para designer gráfico com agenda dinâmica, serviços, promoções e formulário de contato integrado com WhatsApp e e-mail.
>
> **full_description:** Landing page desenvolvida para apresentar serviços de design gráfico, com seções de herói, agenda interativa (círculos de progresso), promoção sazonal, cards de serviços com ícones autorais e formulário de contato otimizado para conversão. Design responsivo, animações suaves e código modular com Next.js, TypeScript e Tailwind CSS.

---

## 🚀 Características

- **Design autoral:** Ilustrações e ícones SVG exclusivos
- **Agenda interativa:** Círculos de progresso com dados dinâmicos (vagas, análise, fila, finalizados)
- **Promoção destacada:** Forma geométrica personalizada e call-to-action para landing pages
- **Cards de serviços:** Ícones, título e modal com detalhes completos
- **Formulário integrado:** Envio para e-mail (Resend) e redirecionamento para WhatsApp
- **Animações suaves:** Framer Motion com efeitos de entrada e hover
- **Código limpo e modular:** Fácil manutenção e escalabilidade

---

## Sobre o Projeto

Este é o site institucional de uma designer gráfica, desenvolvido para atrair clientes e facilitar o contato. O projeto prioriza experiência do usuário, conversão e performance, com um visual moderno e identidade visual própria.

---

## Tecnologias Utilizadas

- **Next.js 15** + React 19 + TypeScript
- **Tailwind CSS** para estilização rápida e responsiva
- **Framer Motion** para animações
- **React Hook Form** + **Zod** para validação de formulários
- **Resend API** para envio de e-mails
- **Deploy na Vercel**

---

## Estrutura do Projeto

```text
src/
├── app/                         # Rotas e API (App Router)
│   ├── api/
│   │   └── send-email/          # Endpoint para envio do formulário
│   └── page.tsx                 # Página principal
│
├── components/                  # Componentes reutilizáveis
│   ├── ui/                      # Botão, Container, Section
│   ├── layout/                  # Navbar, Footer, MobileMenu, ThemeToggle
│   ├── sections/                # Hero, Agenda, Promo, Services, Contact
│   ├── services/                # ServiceCard, ServiceModal
│   └── agenda/                  # CircularProgress, AgendaStats
│
├── data/                        # Dados estáticos (agenda.json, services.ts)
├── lib/                         # Funções utilitárias e validações
├── types/                       # Definições TypeScript
└── public/
    └── images/                  # Ícones e ilustrações SVG
```

---

## Funcionalidades Principais

- **Hero:** Título em destaque (rosa #FAC2C2) com ilustração autoral e CTA animado
- **Agenda:** Círculos de progresso com números formatados (01, 02...) e link direto para o formulário
- **Promoção:** Oferta de 26% off em landing pages com forma geométrica irregular no fundo
- **Serviços:** Cards com ícones, título e descrição; modal com itens inclusos
- **Contato:** Formulário validado que envia e-mail e redireciona para WhatsApp
- **Footer:** Etapas do processo (Briefing, Criação, Entrega) e informações sobre contrato de segurança

---

## Como Executar Localmente

1. Clone o repositório  
   ```bash
   git clone https://github.com/arianadeabreudesigndev/LandingPageDesignerGr-fico.git
   cd LandingPageDesignerGr-fico


2. Instale as dependências
npm install

3. Configure a variável de ambiente no arquivo .env.local
RESEND_API_KEY=seu_token_aqui

4. Inicie o servidor de desenvolvimento
npm run dev

5. Acesse http://localhost:3000

--- 

# Scripts Disponíveis
npm run dev – Modo desenvolvimento

npm run build – Build de produção

npm run start – Servidor de produção

npm run lint – Verificação de lint

---

Licença
Copyright © 2026 Ariana de Abreu. Todos os direitos reservados.
Este projeto é público para visualização como parte do portfólio profissional. Não é permitido uso comercial sem autorização.

Contato
LinkedIn: linkedin.com/in/arianadeabreudev

Portfólio: portfolioariandeabreudesigndev.netlify.app

E-mail: arianadeabreudesigndev@gmail.com

⭐ Se este projeto foi útil para você, considere dar uma estrela!










