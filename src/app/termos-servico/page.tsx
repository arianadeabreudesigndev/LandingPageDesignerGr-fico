import Link from 'next/link';

export default function TermosServico() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#1E1E1E] hover:text-primary mb-8 transition-colors">
          ← Voltar para o início
        </Link>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-2">Termos de Serviço</h1>
          <p className="text-gray-500 mb-8">Última atualização: 26 de fevereiro de 2026</p>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. ACEITAÇÃO DOS TERMOS</h2>
            <p className="text-gray-700">
              Ao acessar ou contratar os serviços da <strong>Ariana de Abreu — Designer Gráfico</strong> (doravante denominada "Profissional", "nós" ou "nosso"), você ("Cliente" ou "usuário") concorda em cumprir e estar vinculado a estes Termos de Serviço. Caso não concorde com qualquer parte destes termos, solicitamos que não utilize nossos serviços ou entre em contato para esclarecimentos.
            </p>
            <p className="text-gray-700 mt-4">
              Estes Termos aplicam-se a todos os serviços prestados, incluindo design de logotipos, identidade visual, landing pages, materiais gráficos, consultorias e quaisquer outros serviços ofertados em nosso site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. DEFINIÇÕES</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Briefing:</strong> Documento ou reunião onde o Cliente fornece todas as informações necessárias para o desenvolvimento do projeto (objetivos, preferências estéticas, prazos, referências, etc.).</li>
              <li><strong>Projeto:</strong> Serviço contratado, especificado em proposta comercial ou orçamento.</li>
              <li><strong>Revisão:</strong> Solicitação de alteração em um entregável dentro do escopo acordado.</li>
              <li><strong>Entregável:</strong> Arquivo final (em formatos acordados) resultado do serviço prestado.</li>
              <li><strong>Contrato de Segurança:</strong> Documento formal assinado para projetos acima de R$500, detalhando direitos, deveres, prazos e garantias.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. CONTRATAÇÃO DOS SERVIÇOS</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">3.1. Orçamento e Proposta</h3>
            <p className="text-gray-700">
              O orçamento é gratuito e válido por 15 dias. Após a aprovação, será enviada uma proposta comercial detalhando escopo, prazos, valores e formas de pagamento. A contratação efetiva‑se com o aceite da proposta e o pagamento da entrada.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">3.2. Briefing e Início do Projeto</h3>
            <p className="text-gray-700">
              O projeto inicia após o recebimento de todas as informações solicitadas no briefing. O prazo de entrega começa a contar a partir da data em que o Cliente fornece todos os dados necessários. Atrasos na entrega do briefing podem impactar o cronograma final.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">3.3. Projetos acima de R$500</h3>
            <p className="text-gray-700">
              Para projetos com valor superior a R$500, é obrigatória a assinatura do <strong>Contrato de Segurança</strong>, que formaliza:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Direitos e deveres de ambas as partes;</li>
              <li>Garantia de prazos, entregas e pagamentos;</li>
              <li>Cláusula específica sobre propriedade intelectual;</li>
              <li>Regras de rescisão e penalidades.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Esse contrato é enviado por e-mail e deve ser assinado digitalmente antes do início do projeto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. PRAZOS E ENTREGAS</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">4.1. Prazos</h3>
            <p className="text-gray-700">
              Os prazos são informados na proposta e contam a partir da aprovação do briefing. Trabalhamos com prazos variáveis conforme a complexidade do projeto:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Projetos simples</strong> (logotipos, posts, convites, cartões de visita): até 3 dias úteis.</li>
              <li><strong>Landing pages institucionais e sites simples:</strong> de 5 a 7 dias úteis.</li>
              <li><strong>E-commerces e projetos complexos:</strong> até 30 dias úteis (ou conforme negociado, devido à pesquisa, arquitetura de informação e desenvolvimento).</li>
              <li><strong>Identidade visual completa:</strong> de 7 a 15 dias úteis, dependendo da profundidade do projeto.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Prazos podem ser ajustados conforme disponibilidade de agenda e complexidade, sempre comunicados previamente.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">4.2. Atrasos por parte do Cliente</h3>
            <p className="text-gray-700">
              Caso o Cliente não responda a solicitações de feedback ou confirmação em até 5 dias úteis, o projeto será colocado em espera. Após 15 dias sem retorno, o projeto poderá ser cancelado, retendo-se 30% do valor pago como compensação pelos serviços já prestados (pesquisa, briefings, rascunhos), salvo acordo em contrário no Contrato de Segurança.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">4.3. Entregas</h3>
            <p className="text-gray-700">
              Os arquivos são entregues em formato digital (PNG, JPG, PDF, SVG, conforme especificado) via link do Google Drive ou WeTransfer. Formatos editáveis (ex: Corel, Illustrator) podem ser solicitados com custo adicional, salvo quando acordado previamente.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Importante:</strong> A entrega final dos arquivos só ocorre após a confirmação do pagamento integral do projeto. O Cliente terá acesso aos arquivos somente quando o saldo estiver quitado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. REVISÕES E ALTERAÇÕES</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">5.1. Revisões inclusas</h3>
            <p className="text-gray-700">
              Cada serviço inclui um número determinado de revisões (ex: logotipo inclui 2 revisões). As revisões devem ser solicitadas por <strong>e-mail ou WhatsApp (por escrito)</strong> e ser claras e objetivas. Não serão aceitas solicitações de revisão por ligação ou áudio, a fim de garantir o registro formal das alterações solicitadas.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">5.2. Alterações no escopo</h3>
            <p className="text-gray-700">
              Mudanças significativas no escopo original (ex: passar de um logotipo simples para uma identidade visual completa) serão tratadas como novo projeto ou orçamento complementar.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">5.3. Revisões extras</h3>
            <p className="text-gray-700">
              Revisões além das inclusas poderão ser cobradas à parte (valor a ser acordado conforme complexidade).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. PAGAMENTOS</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">6.1. Formas de pagamento</h3>
            <p className="text-gray-700">
              Aceitamos as seguintes formas de pagamento:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>PIX</strong> (transferência instantânea);</li>
              <li><strong>Transferência bancária</strong> (depósito ou TED);</li>
              <li><strong>Dinheiro</strong> (apenas para clientes da cidade de Saquarema e região, mediante encontro presencial combinado).</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">6.2. Condições de pagamento</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Projetos até R$500:</strong> pagamento integral antes do início.</li>
              <li><strong>Projetos acima de R$500:</strong> 50% de entrada e 50% na entrega final (ou conforme acordado no Contrato de Segurança).</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">6.3. Atraso no pagamento</h3>
            <p className="text-gray-700">
              O atraso superior a 5 dias no pagamento da(s) parcela(s) pode suspender o projeto. Após 15 dias, o projeto poderá ser cancelado, retendo-se 30% do valor já pago como compensação pelos serviços prestados.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">6.4. Liberação dos arquivos</h3>
            <p className="text-gray-700">
              <strong>Os arquivos finais só serão entregues após a quitação integral do projeto.</strong> Mesmo após a aprovação do Cliente, o acesso aos arquivos (download, link) será concedido somente quando o pagamento estiver confirmado.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. PROPRIEDADE INTELECTUAL</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">7.1. Direitos autorais</h3>
            <p className="text-gray-700">
              A propriedade intelectual dos arquivos criados é transferida ao Cliente somente após o pagamento integral do projeto. Enquanto não quitado, a Profissional detém todos os direitos sobre o material.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">7.2. Uso dos arquivos</h3>
            <p className="text-gray-700">
              O Cliente pode usar os arquivos para os fins contratados (comerciais, institucionais, etc.). É vedada a revenda ou redistribuição dos arquivos como se fossem de sua autoria.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">7.3. Direitos da Profissional</h3>
            <p className="text-gray-700">
              A Profissional reserva-se o direito de divulgar o projeto em seu portfólio e redes sociais, <strong>salvo solicitação expressa em contrário do Cliente</strong>. Essa autorização pode ser concedida ou negada no momento da contratação ou a qualquer tempo por e-mail. Para projetos com contrato, essa cláusula consta no Contrato de Segurança.
            </p>
            <p className="text-gray-700 mt-2">
              Caso o Cliente não autorize a divulgação, isso não implicará qualquer acréscimo no valor do projeto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">8. CANCELAMENTO E REEMBOLSO</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">8.1. Cancelamento pelo Cliente</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Antes do início:</strong> reembolso integral de qualquer valor pago.</li>
              <li><strong>Após o início (antes da entrega final):</strong> será retido 30% do valor total pelos serviços já prestados (pesquisa, briefings, rascunhos). O restante será reembolsado.</li>
              <li><strong>Após a entrega final:</strong> não há reembolso, salvo por vício ou não conformidade com o escopo acordado.</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">8.2. Cancelamento pela Profissional</h3>
            <p className="text-gray-700">
              Caso a Profissional não possa cumprir o contrato por motivo de força maior, será oferecido reembolso integral ou a realização do serviço por profissional de confiança equivalente, a critério do Cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">9. DIVULGAÇÃO DE PARCERIAS E PROJETOS</h2>
            <p className="text-gray-700">
              Valorizamos a transparência e o reconhecimento mútuo. Por isso:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Projetos de clientes:</strong> A divulgação em nosso portfólio depende de autorização prévia (opt-in). Você pode autorizar ou não no momento da contratação.</li>
              <li><strong>Parcerias profissionais:</strong> Consideramos "parceiros" clientes com quem realizamos trocas de serviços ou colaborações. A divulgação como parceiro só ocorre mediante autorização expressa, podendo ser revogada a qualquer tempo.</li>
              <li><strong>Projetos acima de R$500:</strong> A autorização para divulgação é tratada no Contrato de Segurança, com campo específico para escolha do Cliente.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Para revogar uma autorização já concedida, basta enviar um e-mail para arianadeabreudesigndev@gmail.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">10. OBRIGAÇÕES DO CLIENTE</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Fornecer informações verdadeiras, completas e atualizadas;</li>
              <li>Garantir que possui todos os direitos sobre materiais fornecidos (ex: textos, fotos, logotipos de terceiros);</li>
              <li>Não utilizar os serviços para fins ilegais, imorais ou que violem direitos de terceiros;</li>
              <li>Comunicar imediatamente qualquer uso não autorizado de seus dados.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">11. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p className="text-gray-700">
              A Profissional não se responsabiliza por:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Conteúdos fornecidos pelo Cliente que violem direitos autorais de terceiros;</li>
              <li>Problemas técnicos alheios à sua atuação (ex: falhas de hospedagem, e-mail);</li>
              <li>Decisões comerciais baseadas nos serviços prestados.</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Em nenhum caso a responsabilidade da Profissional excederá o valor total pago pelo serviço.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">12. COMUNICAÇÕES</h2>
            <p className="text-gray-700">
              Toda comunicação oficial será feita por e-mail (arianadeabreudesigndev@gmail.com) ou, durante a execução do projeto, via WhatsApp (para agilidade). O Cliente concorda em manter seus dados de contato atualizados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">13. DISPOSIÇÕES GERAIS</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">13.1. Alterações nos Termos</h3>
            <p className="text-gray-700">
              Podemos atualizar estes Termos periodicamente. A versão mais recente estará sempre disponível nesta página. O uso continuado dos serviços após alterações constitui aceitação.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">13.2. Lei Aplicável e Foro</h3>
            <p className="text-gray-700">
              Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Resende, Estado do Rio de Janeiro, para dirimir quaisquer controvérsias, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>

            <h3 className="text-xl font-medium text-gray-800 mt-6 mb-2">13.3. Contato</h3>
            <p className="text-gray-700">
              Para questões sobre estes Termos, entre em contato:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>E-mail:</strong> arianadeabreudesigndev@gmail.com</li>
              <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/arianadeabreudev" className="text-primary hover:underline" target="_blank" rel="noopener">linkedin.com/in/arianadeabreudev</a></li>
            </ul>
          </section>

          <hr className="my-8 border-gray-200" />

          <p className="text-center text-gray-500 text-sm">
            © 2026 Ariana de Abreu — Designer Gráfico. Todos os direitos reservados.
          </p>
        </article>
      </div>
    </main>
  );
}