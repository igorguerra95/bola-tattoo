import { TattooStyle, TattooArtist, GalleryItem, Testimonial, StatItem } from '../types';

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'blackwork-geometria',
    title: 'Blackwork & Geometria',
    priceFrom: 350,
    durationEstimate: 'A partir de 2h',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=800&q=80',
    tag: 'Especialidade da Casa',
    description: 'Preenchimento preto sólido e profundo, pontilhismo minucioso e padrões geométricos que abraçam a anatomia e a musculatura com presença marcante.',
    includes: [
      'Criação de desenho autoral exclusivo',
      'Tintas pretas de alta densidade e fixação',
      'Agulhas de alta precisão estéreis de uso único',
      'Curativo filme cicatrizante dérmico de última geração',
      'Acompanhamento completo de cicatrização'
    ]
  },
  {
    id: 'realismo-preto-cinza',
    title: 'Realismo Preto & Cinza',
    priceFrom: 600,
    durationEstimate: 'A partir de 3h',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=800&q=80',
    tag: 'Alta Complexidade',
    description: 'Texturas tridimensionais, retratos, animais e temas clássicos com degradação suave de cinzas e luzes dramáticas que reproduzem fidelidade fotográfica.',
    includes: [
      'Estudo fotográfico e renderização digital prévia',
      'Gradientes suaves com diluição artesanal de pigmentos',
      'Pigmentos certificados Anvisa sem metais pesados',
      'Kit de cuidados com pomada cicatrizante premium',
      'Sessão de retoque cortesia após 30 dias se necessário'
    ]
  },
  {
    id: 'fineline-micro',
    title: 'Fineline & Traço Fino',
    priceFrom: 250,
    durationEstimate: 'A partir de 1h',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=800&q=80',
    tag: 'Precisão Milimétrica',
    description: 'Traços sutis como fio de cabelo utilizando agulhas 1RL e 3RL. Perfeito para temas botânicos, caligrafias autorais, micro-realismo e artes minimalistas.',
    includes: [
      'Tipografia e vetores personalizados',
      'Calibração de agulha única para zero expansão do traço',
      'Aplicação com mínimo trauma dérmico',
      'Película dérmica impermeável de cicatrização',
      'Guia ilustrado de manutenção do traço fino'
    ]
  },
  {
    id: 'fechamentos-grandes-projetos',
    title: 'Fechamentos & Grandes Projetos',
    priceFrom: 1200,
    durationEstimate: 'Sessões de 4h a 6h',
    image: 'https://images.unsplash.com/photo-1590246814883-57833641361f?auto=format&fit=crop&w=800&q=80',
    tag: 'Projeto Integral',
    description: 'Fechamento completo de braço, perna, costas ou peitoral. Planejamento 3D respeitando articulações, movimento muscular e harmonia visual contínua.',
    includes: [
      'Briefing com mapeamento corporal e decalque 3D',
      'Divisão em sessões planejadas para o seu ritmo',
      'Kit completo de suporte regenerativo para cada etapa',
      'Prioridade na agenda do artista responsável',
      'Lanche e hidratação especial durante a sessão'
    ]
  },
  {
    id: 'cover-up-reforma',
    title: 'Cover-Up & Reforma Técnica',
    priceFrom: 450,
    durationEstimate: 'A partir de 2h30',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=800&q=80',
    description: 'Ressignificação de tatuagens antigas ou indesejadas através de técnicas avançadas de contraste, volumetria e camuflagem artística definitiva.',
    includes: [
      'Análise cromática e densidade do pigmento antigo',
      'Design estratégico com sobreposição inteligente',
      'Transformação total sem necessidade de laser prévio',
      'Blindagem de cor para evitar retorno da imagem antiga'
    ]
  },
  {
    id: 'body-piercing-joalheria',
    title: 'Body Piercing & Titânio F-136',
    priceFrom: 120,
    durationEstimate: '30 min',
    image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&w=800&q=80',
    description: 'Perfuração asséptica com agulhas americanas estéreis e aplicação direta de joias em Titânio Grau Implante (ASTM F-136) de alta biocompatibilidade.',
    includes: [
      'Joia básica em titânio grau implante inclusa',
      'Campo cirúrgico estéril e luvas cirúrgicas',
      'Solução antisséptica especializada',
      'Retorno para avaliação e eventual redução de haste (downsize)'
    ]
  }
];

export const TATTOO_ARTISTS: TattooArtist[] = [
  {
    id: 'igor-bola',
    name: 'Igor "Bola"',
    nickname: 'Mestre Fundador',
    role: 'Master Artist & Diretor Criativo',
    experience: '15 anos de arte',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    specialty: 'Blackwork Pesado, Fechamentos & Geometria Sagrada',
    bio: 'Pioneiro em projetos de grande escala com preto de alta saturação e anatomia aplicada. Fundou o estúdio Bola Tattoo com o propósito de criar arte eterna e indelével.'
  },
  {
    id: 'camila-prado',
    name: 'Camila Prado',
    nickname: 'Mestra do Traço',
    role: 'Especialista em Fineline & Botânica',
    experience: '8 anos de arte',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    specialty: 'Traço Agulha Única (1RL), Micro-realismo & Flora Autoral',
    bio: 'Reconhecida pela extrema delicadeza técnica e calibração de pressão dérmica. Especialista em microdetalhes que cicatrizam nítidos por décadas.'
  },
  {
    id: 'rodrigo-kuro',
    name: 'Rodrigo "Kuro"',
    nickname: 'Irezumi Master',
    role: 'Especialista em Oriental Tradicional',
    experience: '11 anos de arte',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    specialty: 'Oriental Tradicional, Dragões, Ondas Japonesas & Máscaras',
    bio: 'Estudou a iconografia clássica do Irezumi no Japão. Especialista em composição dinâmica e fluidez em braços, pernas e costas inteiras.'
  },
  {
    id: 'lucas-vieira',
    name: 'Lucas Vieira',
    nickname: 'Mestre do Preto & Cinza',
    role: 'Especialista em Realismo & Retratos',
    experience: '9 anos de arte',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    specialty: 'Retratos Fotográficos, Esculturas Renascentistas & Luz Dramática',
    bio: 'Foco total no realismo preto e cinza com contraste cinematográfico e texturas aveludadas que não esverdeiam com o tempo.'
  },
  {
    id: 'beatriz-lima',
    name: 'Beatriz Lima',
    nickname: 'Piercer & Curadora',
    role: 'Body Piercer Avançada & Joalheria',
    experience: '7 anos de prática',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
    specialty: 'Visagismo Auricular, Titânio Anodizado & Perfurações Assépticas',
    bio: 'Membro ativo de associações de biossegurança. Projetos personalizados de orelha (ear curation) com joias autênticas em titânio e ouro sólido.'
  }
];

export const STATS: StatItem[] = [
  {
    value: '15+',
    numeric: 15,
    suffix: '+',
    label: 'Anos de História',
    description: 'Trajetória sólida dedicada à excelência da tatuagem autoral e respeito rigoroso à biossegurança.'
  },
  {
    value: '12.000+',
    numeric: 12000,
    suffix: '+',
    label: 'Tattoos Eternizadas',
    description: 'Histórias, momentos e expressões artísticas gravadas permanentemente na pele de nossos clientes.'
  },
  {
    value: '5',
    numeric: 5,
    label: 'Artistas Residentes',
    description: 'Corpo técnico premiado, cada um dedicado a um estilo específico de alta complexidade.'
  },
  {
    value: '4.9',
    numeric: 4.9,
    suffix: '/5.0',
    label: 'Nota Máxima no Google',
    description: 'Satisfação comprovada em avaliações públicas reais sobre técnica, higiene e cicatrização.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'galeria-1',
    title: 'Fechamento em Blackwork & Geometria',
    category: 'blackwork',
    categoryLabel: 'Blackwork Pesado',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=80',
    artistName: 'Igor "Bola"',
    technique: 'Preto sólido saturado com pontilhismo de transição'
  },
  {
    id: 'galeria-2',
    title: 'Retrato Realista em Preto e Cinza',
    category: 'realismo',
    categoryLabel: 'Realismo P&B',
    image: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=80',
    artistName: 'Lucas Vieira',
    technique: 'Sombreamento aveludado com luzes em contraste dramático'
  },
  {
    id: 'galeria-3',
    title: 'Ramo Botânico em Fineline Agulha Única',
    category: 'fineline',
    categoryLabel: 'Traço Fino',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80',
    artistName: 'Camila Prado',
    technique: 'Agulha 1RL com precisão cirúrgica e folhagens microdetalhadas'
  },
  {
    id: 'galeria-4',
    title: 'Dragão Oriental & Ondas Dinâmicas',
    category: 'oriental',
    categoryLabel: 'Irezumi',
    image: 'https://images.unsplash.com/photo-1590246814883-57833641361f?auto=format&fit=crop&w=900&q=80',
    artistName: 'Rodrigo "Kuro"',
    technique: 'Movimento anatômico contínuo e escamas sombreadas à mão livre'
  },
  {
    id: 'galeria-5',
    title: 'Bancada Asséptica & Máquinas Pen Rotativas',
    category: 'estudio',
    categoryLabel: 'Biossegurança',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=900&q=80',
    artistName: 'Ambiente Bola Tattoo',
    technique: 'Equipamentos 100% esterilizados em autoclave classe B e descartáveis'
  },
  {
    id: 'galeria-6',
    title: 'Curadoria de Orelha com Joalheria em Titânio',
    category: 'piercing',
    categoryLabel: 'Body Piercing',
    image: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?auto=format&fit=crop&w=900&q=80',
    artistName: 'Beatriz Lima',
    technique: 'Perfuração asséptica com joias em titânio F-136 e zircônias cúbicas'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depo-1',
    name: 'Henrique Vasconcelos',
    role: 'Diretor de Criação',
    rating: 5,
    comment: 'Fiz o fechamento completo do meu braço esquerdo com o Igor Bola. Desde o primeiro rascunho até a última sessão, o respeito à anatomia do corpo e o cuidado rigoroso com a higiene foram impressionantes. Cicatrização 100% perfeita.',
    tattooProject: 'Fechamento de Braço em Blackwork',
    verified: true
  },
  {
    id: 'depo-2',
    name: 'Juliana Medeiros',
    role: 'Médica Veterinária',
    rating: 5,
    comment: 'A Camila Prado é uma verdadeira artista cirúrgica. Fiz uma tatuagem botânica no antebraço com linhas finíssimas há mais de 2 anos e o traço continua incrivelmente nítido e sem borrões. O estúdio é impecável!',
    tattooProject: 'Fineline Botânica e Caligrafia',
    verified: true
  },
  {
    id: 'depo-3',
    name: 'Felipe Antunes',
    role: 'Engenheiro de Software',
    rating: 5,
    comment: 'Estúdio de alto nível. Fiz um cover-up de uma tatuagem antiga que me incomodava há 10 anos. O Lucas fez um projeto realista em preto e cinza que cobriu totalmente a tatuagem antiga. Atendimento nota 10.',
    tattooProject: 'Cover-Up com Realismo Preto & Cinza',
    verified: true
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o processo de criação de uma tatuagem autoral?',
    answer: 'Você nos envia a sua ideia, referências visuais e a parte do corpo desejada. Nossos artistas criam um desenho exclusivo e personalizado sob medida para a sua anatomia. No dia da sessão, você avalia o decalque na pele antes do início da aplicação.'
  },
  {
    question: 'Quais são os padrões de biossegurança do estúdio Bola Tattoo?',
    answer: 'Seguimos protocolos rigorosos de biossegurança: todas as agulhas, cartuchos, luvas e campos são 100% descartáveis e abertos na sua frente. Nossos materiais permanentes passam por esterilização em autoclave classe B com laudos biológicos periódicos. Todas as tintas são certificadas pela Anvisa.'
  },
  {
    question: 'Como faço para solicitar um orçamento?',
    answer: 'Basta clicar no botão "Solicitar Orçamento" em nosso site ou nos enviar uma mensagem direta pelo WhatsApp. Informe a ideia, estilo desejado, parte do corpo e o tamanho aproximado em centímetros para receber uma estimativa detalhada de sessões e valores.'
  },
  {
    question: 'Vocês realizam cobertura de tatuagens antigas (Cover-Up) e cicatrizes?',
    answer: 'Sim! Nossos especialistas analisam a pigmentação residual e a textura da pele para desenvolver projetos inteligentes de alta densidade e contraste, cobrindo tatuagens antigas sem a necessidade de laser prévio na maioria dos casos.'
  },
  {
    question: 'Como é o processo de cicatrização e cuidados pós-sessão?',
    answer: 'Aplicamos um curativo dérmico impermeável de última geração (segunda pele) que protege contra bactérias e atrito nos primeiros dias. Você recebe nosso guia exclusivo com instruções de higienização, hidratação e proteção solar.'
  }
];
