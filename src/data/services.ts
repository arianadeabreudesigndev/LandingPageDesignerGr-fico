export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    includes: string[];
    active: boolean;
    icon?: string;
  }
  
  export const services: Service[] = [
    {
      id: 'logotipo',
      title: 'Logotipo',
      shortDescription: 'Criação de logotipo profissional com identidade única',
      fullDescription: 'Desenvolvimento de identidade visual com logotipo principal, variações de cor (preto/branco e colorido), pattern exclusivo e marca d’água. Inclui duas propostas iniciais e até duas rodadas de revisões. Entregue nos formatos PNG, JPG e SVG (vetor). Prazo de até 3 dias úteis após recebimento de todas as informações necessárias.',
      includes: [
        'Logotipo principal',
        'Variações em preto e branco e colorido',
        'Pattern exclusivo',
        'Marca d’água',
        'Arquivos em PNG, JPG e SVG (vetor)',
        'Duas propostas iniciais',
        'Até duas revisões'
      ],
      active: true,
    },
    {
      id: 'convites',
      title: 'Convites',
      shortDescription: 'Design de convites personalizados para qualquer ocasião',
      fullDescription: 'Convites digitais ou físicos (apenas design) para casamentos, aniversários, eventos temáticos e muito mais. Criação sob medida com arte personalizada, versão digital e para impressão. Prazo de até 3 dias úteis após recebimento das informações.',
      includes: [
        'Arte personalizada',
        'Versão digital e para impressão (físico: apenas design)',
        'Ajustes ilimitados até aprovação',
        'Formatos: PNG, JPG, PDF'
      ],
      active: true,
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      shortDescription: 'Páginas de conversão institucionais, lançamentos, e-commerce e mais',
      fullDescription: 'Desenvolvimento de landing pages responsivas com design estratégico focado em conversão. Atendo institucionais, lançamento de produtos, páginas de assinatura, e-commerce (complexidade maior) e projetos digitais simples. Estrutura moderna e otimizada para SEO. Prazo conforme escopo (consultar).',
      includes: [
        'Design personalizado',
        'Layout responsivo',
        'Otimização para conversão',
        'Integração com formulários',
        'Entrega do código ou protótipo navegável'
      ],
      active: true,
    },
    {
      id: 'posts-stories',
      title: 'Posts e Stories',
      shortDescription: 'Criação de artes para Instagram (posts, stories, carrosséis)',
      fullDescription: 'Artes para redes sociais com identidade visual consistente. Inclui posts estáticos, stories interativos e carrosséis. Ideal para feeds institucionais, promoções e conteúdo do dia a dia. Não aceito conteúdo imoral, ilegal, +18 ou com violência. Prazo de até 2 dias úteis.',
      includes: [
        'Posts para feed',
        'Stories',
        'Carrosséis',
        'Artes em alta resolução',
        'Formatos: PNG, JPG'
      ],
      active: true,
    },
    {
      id: 'etiquetas',
      title: 'Etiquetas',
      shortDescription: 'Design de etiquetas para diversos fins (apenas arte)',
      fullDescription: 'Criação de etiquetas personalizadas para produtos, eventos, organização, etc. Qualquer tamanho e formato. Atenção: apenas o design, não incluo impressão. Prazo de até 3 dias úteis.',
      includes: [
        'Design sob medida',
        'Arquivo pronto para impressão',
        'Formatos: PNG, JPG, PDF, CDR (sob consulta)'
      ],
      active: true,
    },
    {
      id: 'menus',
      title: 'Menus de Restaurante',
      shortDescription: 'Cardápios digitais ou físicos (design apenas)',
      fullDescription: 'Design de menus para restaurantes, bares, cafeterias, etc. Pode ser digital (para sites/redes) ou físico (arte para gráfica). Organização visual, tipografia legível e harmonia com a marca. Prazo de até 3 dias úteis.',
      includes: [
        'Layout personalizado',
        'Arte para digital ou impressão',
        'Ajustes até aprovação',
        'Formatos: PNG, JPG, PDF'
      ],
      active: true,
    },
    {
      id: 'catalogos',
      title: 'Catálogos',
      shortDescription: 'Catálogos de produtos ou serviços (design)',
      fullDescription: 'Criação de catálogos para apresentar produtos ou serviços de forma organizada e atraente. Para uso digital ou impresso (apenas design). Prazo conforme volume (consultar).',
      includes: [
        'Design de páginas',
        'Organização de conteúdo',
        'Arquivos prontos para gráfica',
        'Formatos: PDF, PNG, JPG'
      ],
      active: true,
    },
    {
      id: 'cartoes-visita',
      title: 'Cartões de Visita',
      shortDescription: 'Cartões de visita físicos ou virtuais (design)',
      fullDescription: 'Design de cartões de visita com informações de contato e identidade visual. Pode ser para impressão (físico) ou digital (compartilhável). Prazo de até 2 dias úteis.',
      includes: [
        'Arte personalizada',
        'Versão frente e verso',
        'Arquivo para gráfica ou digital',
        'Formatos: PNG, JPG, PDF'
      ],
      active: true,
    },
    {
      id: 'documentos-timbrados',
      title: 'Documentos Timbrados',
      shortDescription: 'Papel timbrado, envelopes, pastas personalizadas',
      fullDescription: 'Criação de documentos timbrados com a identidade da marca (papel timbrado, envelopes, pastas). Necessário envio da logo em alta qualidade (caso não tenha sido feita por mim). Prazo de até 3 dias úteis.',
      includes: [
        'Papel timbrado',
        'Envelope',
        'Pasta personalizada',
        'Arquivos prontos para impressão',
        'Formatos: PDF, PNG, JPG'
      ],
      active: true,
    },
    {
      id: 'manual-marca',
      title: 'Manual de Marca',
      shortDescription: 'Manual completo com diretrizes visuais',
      fullDescription: 'Documento completo que reúne todas as diretrizes da marca: logotipo, cores, tipografia, aplicações, tom de voz, etc. Ideal para empresas que desejam padronizar a comunicação. Requer pesquisa aprofundada. Prazo: até 5 dias úteis (ou mais, conforme complexidade).',
      includes: [
        'Logotipo e variações',
        'Paleta de cores',
        'Tipografia',
        'Aplicações em materiais',
        'Tom de voz',
        'Arquivo digital (PDF interativo)',
        'Versão para impressão (opcional)'
      ],
      active: true,
    },
    {
      id: 'panfletos',
      title: 'Panfletos',
      shortDescription: 'Panfletos promocionais (design para impressão ou digital)',
      fullDescription: 'Design de panfletos para divulgação de promoções, eventos ou serviços. Pode ser para distribuição física (arte para gráfica) ou digital (redes, e-mail). Prazo de até 3 dias úteis.',
      includes: [
        'Arte personalizada',
        'Frente e verso',
        'Arquivo pronto para gráfica',
        'Formatos: PNG, JPG, PDF'
      ],
      active: true,
    },
    {
      id: 'capas-youtube-twitch',
      title: 'Capas para YouTube/Twitch',
      shortDescription: 'Banners e artes para canais',
      fullDescription: 'Design de capas para YouTube, Twitch e outras plataformas. Criação com sua foto, se desejar, ou elementos visuais. Inclui banner, ícone e artes complementares. Prazo de até 3 dias úteis.',
      includes: [
        'Banner do canal',
        'Ícone/avatar',
        'Artes para sobreposição (opcional)',
        'Formatos: PNG, JPG'
      ],
      active: true,
    },
    {
      id: 'destaques-instagram',
      title: 'Destaques do Instagram',
      shortDescription: 'Ícones para destaques dos stories',
      fullDescription: 'Conjunto de ícones personalizados para os destaques do perfil do Instagram. Criação sob medida com a identidade visual. Mínimo de 3 ícones, podendo ser mais. Prazo de até 2 dias úteis.',
      includes: [
        'Ícones personalizados (mínimo 3)',
        'Arquivos em PNG',
        'Ajustes até aprovação'
      ],
      active: true,
    },
    {
      id: 'identidade-marca',
      title: 'Identidade de Marca',
      shortDescription: 'Pacote completo (logo + variações + aplicações) sem manual extenso',
      fullDescription: 'Um meio-termo entre logotipo e manual de marca. Inclui todo o pack do logotipo (logo principal, variações, pattern, marca d’água) mais definição de paleta de cores, tipografia e algumas aplicações visuais. Ideal para quem quer uma identidade forte sem o custo de um manual completo. Prazo de até 4 dias úteis.',
      includes: [
        'Logotipo e variações',
        'Pattern exclusivo',
        'Marca d’água',
        'Paleta de cores',
        'Tipografia sugerida',
        'Exemplos de aplicação',
        'Arquivos em PNG, JPG, SVG'
      ],
      active: true,
    },
    {
      id: 'redesign',
      title: 'Redesign de Logotipo',
      shortDescription: 'Atualização e modernização de logotipos existentes',
      fullDescription: 'Refinamento e atualização do seu logotipo atual, mantendo a essência da marca mas com um visual mais moderno e profissional. Inclui duas propostas e até duas revisões, entregue nos formatos PNG, JPG e SVG.',
      includes: [
        'Análise do logotipo atual',
        'Duas propostas de redesign',
        'Até duas revisões',
        'Arquivos em PNG, JPG e SVG',
        'Variações de cor (opcional)'
      ],
      active: true,
    }
  ];
  