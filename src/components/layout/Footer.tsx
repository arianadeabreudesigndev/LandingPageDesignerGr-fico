import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      <Container>
        {/* Grid: no mobile centralizado, no desktop mantém alinhamento original */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 place-items-center md:place-items-start">
          {/* Coluna 1 */}
          <div className="w-full max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <h3 className="flex items-center gap-2 text-white font-bold uppercase text-xl mb-4 justify-center md:justify-start">
              <img src="/images/briefing-icon.svg" alt="" className="w-12 h-12" />
              Briefing e<br />Estratégia
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside md:list-outside text-left inline-block md:block">
              <li>Reunião formulário detalhado</li>
              <li>Análise de mercado e concorrência</li>
              <li>Direcionamento visual e conceitual documentado</li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div className="w-full max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <h3 className="flex items-center gap-2 text-white font-bold uppercase text-xl mb-4 justify-center md:justify-start">
              <img src="/images/criacao-icon.svg" alt="" className="w-12 h-12" />
              Criação e<br />Desenvolvimento
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside md:list-outside text-left inline-block md:block">
              <li>Construção dos primeiros conceitos</li>
              <li>Apresentação e ajustes estratégicos</li>
              <li>Refinamento técnico</li>
              <li>Finalização profissional</li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div className="w-full max-w-sm mx-auto md:mx-0 text-center md:text-left">
            <h3 className="flex items-center gap-2 text-white font-bold uppercase text-xl mb-4 justify-center md:justify-start">
              <img src="/images/entrega-icon.svg" alt="" className="w-12 h-12" />
              Entrega e<br />Implementação
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside md:list-outside text-left inline-block md:block">
              <li>Arquivos organizados e prontos para uso</li>
              <li>Entrega via drive</li>
              <li>Orientações básicas de aplicação</li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div className="w-full max-w-sm mx-auto md:mx-0 text-center relative md:-top-8">
            <div className="border-2 border-gray-500 rounded-xl p-6">
              <h3 className="text-center text-white font-bold uppercase text-xl mb-4">
                Contrato de<br />Segurança
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside text-left">
                <li>Aplicável a projetos acima de R$500</li>
                <li>Documento formal com direitos e deveres</li>
                <li>Garantia de prazos, entregas e pagamentos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Redes sociais (já centralizado) */}
        <div className="flex justify-center space-x-4 py-6 mt-8">
          <a href="#" aria-label="GitHub">
            <img src="/images/github-icon.svg" alt="GitHub" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img src="/images/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="/images/instagram-icon.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="/images/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8 hover:opacity-80" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src="/images/youtube-icon.svg" alt="YouTube" className="w-8 h-8 hover:opacity-80" />
          </a>
        </div>

        {/* Rodapé final: no mobile, Política, Termos, Copyright (nessa ordem) */}
        <div className="flex flex-col items-center text-sm text-gray-400 pt-6 space-y-2 md:flex-row md:justify-between md:space-y-0">
          <a href="#" className="hover:text-white order-1 md:order-none">Política de Privacidade</a>
          <p className="order-3 md:order-none">© 2026 Ariana de Abreu. Todos os direitos reservados.</p>
          <a href="#" className="hover:text-white order-2 md:order-none">Termos de Serviço</a>
        </div>
      </Container>
    </footer>
  );
}