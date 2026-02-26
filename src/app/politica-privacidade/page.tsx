import Link from 'next/link';

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Botão voltar */}
        <Link href="/" className="inline-flex items-center text-[#1E1E1E] hover:text-primary mb-8 transition-colors">
          ← Voltar para o início
        </Link>

        {/* Conteúdo da política */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-[#1E1E1E] mb-2">Política de Privacidade</h1>
          <p className="text-gray-500 mb-8">Última atualização: 26 de fevereiro de 2026</p>

          <hr className="my-8 border-gray-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. QUEM SOMOS</h2>
            <p className="text-gray-700 mb-4">
              A <strong>Ariana de Abreu — Designer Gráfico</strong> valoriza a privacidade e a proteção dos dados pessoais de seus clientes e visitantes. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p className="text-gray-700"><strong>Controladora dos dados:</strong></p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Nome:</strong> Ariana de Abreu (Designer Gráfico)</li>
              <li><strong>E-mail para contato:</strong> arianadeabreudesigndev@gmail.com</li>
              <li><strong>Website:</strong> https://arianaabreudesign-161zaf9h6.vercel.app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. QUAIS DADOS COLETAMOS</h2>
            <p className="text-gray-700 mb-2">Coletamos apenas as informações necessárias para viabilizar nossos serviços:</p>
            
            <p className="text-gray-700 font-medium mt-4">a) Dados fornecidos diretamente por você:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Nome e sobrenome</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Mensagem com descrição do projeto desejado</li>
              <li>Informações de briefing (quando aplicável)</li>
            </ul>

            <p className="text-gray-700 font-medium mt-4">b) Dados coletados automaticamente:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Endereço IP</li>
              <li>Tipo de navegador</li>
              <li>Páginas acessadas</li>
              <li>Data e hora da visita</li>
            </ul>

            <p className="text-gray-700 font-medium mt-4">c) Dados sensíveis:</p>
            <p className="text-gray-700">Não coletamos dados sensíveis (origem racial, convicções religiosas, opiniões políticas, saúde, vida sexual ou dados genéticos).</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. PARA QUE USAMOS SEUS DADOS</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Atendimento e orçamento:</strong> Responder suas solicitações de contato e enviar orçamentos personalizados;</li>
              <li><strong>Execução de serviços:</strong> Gerenciar projetos contratados e manter comunicação durante o processo criativo;</li>
              <li><strong>Agendamento:</strong> Controlar vagas disponíveis e organizar nossa agenda de atendimento;</li>
              <li><strong>Envio de informações:</strong> Comunicar sobre promoções (como a de 26% OFF) desde que você tenha consentido;</li>
              <li><strong>Melhoria dos serviços:</strong> Análise estatística para aprimorar a experiência do usuário em nosso site.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              A base legal para o tratamento dos dados é, conforme a LGPD:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Execução de contrato:</strong> para projetos contratados;</li>
              <li><strong>Consentimento:</strong> para comunicações de marketing e divulgação de parcerias;</li>
              <li><strong>Legítimo interesse:</strong> para melhorar nossos serviços e proteger nosso site.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. COMPARTILHAMENTO DE DADOS E DIVULGAÇÃO DE PARCERIAS</h2>
            
            <p className="text-gray-700 font-medium mt-4">a) Projetos realizados (portfólio):</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Podemos divulgar projetos desenvolvidos em nosso portfólio, redes sociais e materiais promocionais;</li>
              <li>Para projetos acima de R$500, exigimos a assinatura de um <strong>Contrato de Segurança</strong> que inclui cláusula específica sobre divulgação;</li>
              <li><strong>Você pode escolher:</strong> No momento da contratação, será oferecida a opção de autorizar ou não a divulgação do seu projeto como parte do nosso portfólio.</li>
            </ul>

            <p className="text-gray-700 font-medium mt-4">b) Parcerias profissionais:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Consideramos "parceiros" clientes com quem realizamos trocas de serviços ou colaborações profissionais;</li>
              <li>A divulgação de parcerias só ocorre mediante <strong>autorização expressa</strong> do parceiro;</li>
              <li>Você pode, a qualquer momento, revogar essa autorização entrando em contato conosco.</li>
            </ul>

            <p className="text-gray-700 font-medium mt-4">c) Compartilhamento com terceiros:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Não vendemos</strong> seus dados pessoais;</li>
              <li>Utilizamos serviços de terceiros para operar nosso site (Vercel, Supabase, Resend), que atuam como <strong>operadores</strong> seguindo nossas instruções e em conformidade com a LGPD;</li>
              <li>Podemos compartilhar dados para cumprir obrigações legais ou proteger direitos.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. ARMAZENAMENTO E SEGURANÇA</h2>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Seus dados são armazenados em servidores seguros (Supabase) com criptografia;</li>
              <li>Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas;</li>
              <li>Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados, vazamentos ou qualquer forma de tratamento inadequado.</li>
            </ul>
            <p className="text-gray-700 mt-4"><strong>Prazo de retenção:</strong></p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Dados de contato para orçamentos não convertidos: 6 meses;</li>
              <li>Dados de clientes com projetos realizados: 5 anos após a conclusão (para fins fiscais e de comprovação);</li>
              <li>Dados de divulgação autorizada: enquanto perdurar a autorização ou até solicitação de remoção.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. SEUS DIREITOS COMO TITULAR</h2>
            <p className="text-gray-700 mb-2">A LGPD garante a você diversos direitos. Você pode, a qualquer momento e gratuitamente:</p>
            <ol className="list-decimal pl-6 text-gray-700">
              <li>Confirmar se tratamos seus dados;</li>
              <li>Acessar os dados que temos sobre você;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>Solicitar a portabilidade dos dados a outro fornecedor;</li>
              <li>Eliminar dados tratados com seu consentimento;</li>
              <li>Obter informações sobre entidades com as quais compartilhamos seus dados;</li>
              <li>Ser informado sobre a possibilidade de não fornecer consentimento e suas consequências;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ol>
            <p className="text-gray-700 mt-4">
              <strong>Para exercer seus direitos, envie um e-mail para:</strong> arianadeabreudesigndev@gmail.com<br />
              Responderemos sua solicitação em até <strong>15 dias</strong>, conforme previsto na LGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. COOKIES E TECNOLOGIAS SEMELHANTES</h2>
            <p className="text-gray-700">
              Utilizamos cookies para melhorar sua experiência de navegação:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li><strong>Cookies essenciais:</strong> necessários para o funcionamento do site;</li>
              <li><strong>Cookies analíticos:</strong> para entender como você interage com nosso site e melhorar nossos serviços.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Ao continuar navegando em nosso site, você concorda com o uso de cookies. Você pode desabilitá-los nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">8. PROJETOS ACIMA DE R$500</h2>
            <p className="text-gray-700">
              Para projetos com valor superior a R$500, exigimos a assinatura de um <strong>Contrato de Segurança</strong>, conforme mencionado em nosso rodapé. Este contrato formaliza:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Direitos e deveres de ambas as partes;</li>
              <li>Garantia de prazos, entregas e pagamentos;</li>
              <li>Cláusula específica sobre divulgação de portfólio;</li>
              <li>Tratamento de dados pessoais no contexto do projeto.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">9. ALTERAÇÕES NESTA POLÍTICA</h2>
            <p className="text-gray-700">
              Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou na legislação. Recomendamos que você revise esta página regularmente.
            </p>
            <p className="text-gray-700 mt-2">
              A data da última atualização está sempre no topo do documento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">10. FALE CONOSCO</h2>
            <p className="text-gray-700 mb-2">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato:
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