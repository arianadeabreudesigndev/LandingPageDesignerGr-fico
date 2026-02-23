import Container from '../ui/Container';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Briefing */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              {/* Ícone de briefing (autoral) */}
              <span className="w-5 h-5 inline-block" aria-hidden="true" />
              Briefing e Estratégia
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Reunião formulário detalhado</li>
              <li>Análise de mercado e concorrência</li>
              <li>Direcionamento visual e conceitual documentado</li>
            </ul>
          </div>

          {/* Coluna 2: Criação */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              {/* Ícone de criação (autoral) */}
              <span className="w-5 h-5 inline-block" aria-hidden="true" />
              Criação e Desenvolvimento
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Construção dos primeiros conceitos</li>
              <li>Apresentação e ajustes estratégicos</li>
              <li>Refinamento técnico</li>
              <li>Finalização profissional</li>
            </ul>
          </div>

          {/* Coluna 3: Entrega */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              {/* Ícone de entrega (autoral) */}
              <span className="w-5 h-5 inline-block" aria-hidden="true" />
              Entrega e Implementação
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Arquivos organizados e prontos para uso</li>
              <li>Entrega via drive</li>
              <li>Orientações básicas de aplicação</li>
            </ul>
          </div>

          {/* Coluna 4: Segurança */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              {/* Ícone de segurança (autoral) */}
              <span className="w-5 h-5 inline-block" aria-hidden="true" />
              Contrato de Segurança
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Aplicável a projetos acima de R$500</li>
              <li>Documento formal com direitos e deveres</li>
              <li>Garantia de prazos, entregas e pagamentos</li>
            </ul>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center space-x-6 py-6 border-t border-gray-200 dark:border-gray-800">
          {/* Cada rede social é um link com um ícone autoral */}
          <a href="#" aria-label="Instagram" className="hover:opacity-75">
            <span className="block w-6 h-6" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:opacity-75">
            <span className="block w-6 h-6" aria-hidden="true" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:opacity-75">
            <span className="block w-6 h-6" aria-hidden="true" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
            <span className="block w-6 h-6" aria-hidden="true" />
          </a>
        </div>

        {/* Linha final */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
          <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/politica-privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Serviço</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}