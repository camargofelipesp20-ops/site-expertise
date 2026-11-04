export type LandingFaq = {question: string; answer: string};
export type LandingCard = {title: string; description: string; icon: 'bolt'|'shield'|'gear'|'chart'|'building'|'meter'|'doc'|'wave'|'tool'|'team'};
export type LandingStep = {title: string; description: string};
export type LandingReason = {title: string; description: string; options: string[]; image: string; imageAlt: string};
export type LandingData = {
  key: 'instalacao'|'laudo';
  eyebrow: string;
  h1: string;
  heroText: string;
  heroImage: string;
  heroAlt: string;
  heroCta: string;
  message: string;
  problems?: LandingCard[];
  reasons?: LandingReason[];
  steps: LandingStep[];
  solutions?: LandingCard[];
  audiences?: LandingCard[];
  faqs: LandingFaq[];
  closingTitle: string;
  closingText: string;
  closingCta: string;
};

export const install: LandingData = {
  key: 'instalacao',
  eyebrow: 'Mobilidade elétrica • Condomínios',
  h1: 'Instalação de carregadores de veículos elétricos no seu condomínio, com segurança e planejamento.',
  heroText: 'Da avaliação da infraestrutura elétrica à instalação dos carregadores, a Expertise Engenharia desenvolve soluções completas para preparar seu condomínio para a mobilidade elétrica.',
  heroImage: 'https://images.pexels.com/photos/28851165/pexels-photo-28851165.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroAlt: 'Veículos elétricos conectados a estações de recarga em garagem coberta',
  heroCta: 'Falar com um especialista',
  message: 'Olá, encontrei a Expertise pelo site e gostaria de conversar sobre a instalação de carregadores de veículos elétricos no meu condomínio.',
  problems: [
    {title:'Capacidade elétrica',description:'A infraestrutura atual pode não estar dimensionada para o crescimento da demanda de carregamento.',icon:'bolt'},
    {title:'Segurança das instalações',description:'O projeto deve considerar proteções, dimensionamento, normas aplicáveis e características da edificação.',icon:'shield'},
    {title:'Instalações individuais',description:'Soluções isoladas podem dificultar o controle das cargas e a expansão futura.',icon:'building'},
    {title:'Custos e responsabilidades',description:'É importante definir infraestrutura compartilhada, medição de consumo e responsabilidades de instalação e operação.',icon:'meter'}
  ],
  steps: [
    {title:'Conversa inicial gratuita',description:'Entendemos a demanda e as informações já disponíveis, sem substituir um diagnóstico técnico.'},
    {title:'Diagnóstico e medições, se necessários',description:'Etapa técnica contratada conforme o cenário, com avaliação da instalação existente.'},
    {title:'Estudo de alternativas',description:'Analisamos cenários e dimensionamos uma solução compatível com a infraestrutura.'},
    {title:'Projeto de engenharia elétrica',description:'Definimos proteções, circuitos, infraestrutura e documentação técnica aplicável.'},
    {title:'Escolha da infraestrutura e carregadores',description:'Especificamos soluções adequadas ao perfil atual e às necessidades futuras.'},
    {title:'Apoio à apresentação em assembleia',description:'Quando contratado, auxiliamos na apresentação técnica e no processo de aprovação.'},
    {title:'Execução das instalações',description:'Implantamos a infraestrutura e os equipamentos previstos no escopo aprovado.'},
    {title:'Testes e comissionamento',description:'Verificamos a instalação e orientamos a operação e possíveis expansões.'}
  ],
  solutions: [
    {title:'Infraestrutura coletiva',description:'Planejamento da distribuição elétrica para atender diferentes vagas e organizar a implantação.',icon:'building'},
    {title:'Gerenciamento inteligente de carga',description:'Controle da demanda simultânea, quando tecnicamente adequado à capacidade disponível.',icon:'gear'},
    {title:'Medição e individualização do consumo',description:'Alternativas para identificar e atribuir o consumo dos carregadores.',icon:'meter'},
    {title:'Expansão planejada',description:'Preparação para ampliar gradualmente a quantidade de veículos elétricos atendidos.',icon:'chart'}
  ],
  faqs: [
    {question:'É possível instalar carregadores em qualquer condomínio?',answer:'Não é possível garantir sem avaliar o caso. A viabilidade depende da infraestrutura, demanda, segurança, normas aplicáveis e das intervenções necessárias.'},
    {question:'O condomínio precisa aumentar a capacidade elétrica?',answer:'Nem sempre. A avaliação técnica pode indicar capacidade disponível, gerenciamento de carga ou adequações. Em alguns casos, o aumento de capacidade será necessário.'},
    {question:'É possível instalar carregadores sem sobrecarregar a rede?',answer:'Uma solução corretamente dimensionada, com proteções e eventualmente gerenciamento de carga, pode controlar a demanda. A adequação depende do estudo do sistema existente.'},
    {question:'Como funciona a medição do consumo individual?',answer:'Há alternativas de medição por carregador ou por circuito, com modelos de gestão e cobrança. A solução é definida conforme a infraestrutura e as regras do condomínio.'},
    {question:'É necessário aprovar a instalação em assembleia?',answer:'Depende da intervenção, das regras do condomínio e da legislação aplicável. A Expertise pode apoiar tecnicamente a apresentação, quando contratada; a deliberação é do condomínio.'},
    {question:'É possível começar com poucos carregadores e expandir depois?',answer:'Sim, quando o planejamento técnico prevê etapas de expansão e as condições elétricas permitem. A preparação inicial deve considerar cenários de crescimento.'},
    {question:'A Expertise realiza o projeto e a instalação?',answer:'Sim. Oferecemos engenharia, projeto e execução conforme o escopo contratado, além de testes e orientação para operação.'},
    {question:'A conversa inicial tem custo?',answer:'Não. A conversa inicial é gratuita para entender a demanda. Diagnósticos, medições, estudos, laudos, projeto executivo e ART são serviços técnicos pagos quando necessários.'}
  ],
  closingTitle:'Prepare seu condomínio para a mobilidade elétrica.',
  closingText:'Converse com a equipe da Expertise Engenharia e descubra quais são os próximos passos para implantar uma solução segura e planejada.',
  closingCta:'Conversar com a Expertise pelo WhatsApp'
};

export const report: LandingData = {
  key: 'laudo',
  eyebrow: 'Revisão técnica • Condomínios',
  h1: 'Carregador de veículo elétrico negado no condomínio? O laudo pode não ser o fim do projeto.',
  heroText: 'Um laudo desfavorável nem sempre significa impossibilidade de instalação. A Expertise Engenharia avalia os impeditivos técnicos e estuda alternativas que podem viabilizar uma solução segura.',
  heroImage: 'https://images.pexels.com/photos/34800930/pexels-photo-34800930.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroAlt: 'Motorista conectando um veículo elétrico a um carregador em garagem coberta',
  heroCta:'Quero avaliar meu caso',
  message:'Olá, encontrei a Expertise pelo site. Meu condomínio recebeu um laudo desfavorável para instalação de carregadores de veículos elétricos e gostaria de entender as alternativas.',
  reasons:[
    {
      title:'Capacidade elétrica insuficiente',
      description:'Entrada de energia, transformador ou infraestrutura existente podem não suportar novas cargas sem adequações.',
      options:['Avaliação da demanda real','Estudo da simultaneidade dos carregamentos','Gerenciamento inteligente de carga','Adequações na infraestrutura, quando necessárias'],
      image:'https://images.pexels.com/photos/34054464/pexels-photo-34054464.jpeg?auto=compress&cs=tinysrgb&w=900',
      imageAlt:'Técnico medindo instalações de um painel elétrico'
    },
    {
      title:'Instalações individuais sem planejamento global',
      description:'Carregadores instalados isoladamente, vaga por vaga, podem limitar o controle da demanda e a expansão.',
      options:['Infraestrutura coletiva','Gerenciamento centralizado','Critérios para novas conexões','Planejamento de expansão'],
      image:'https://images.pexels.com/photos/11554666/pexels-photo-11554666.jpeg?auto=compress&cs=tinysrgb&w=900',
      imageAlt:'Veículo elétrico estacionado em garagem residencial'
    },
    {
      title:'Projeto ou documentação técnica insuficientes',
      description:'A negativa pode decorrer da ausência de dados, medições, estudos ou documentação para demonstrar segurança e viabilidade.',
      options:['Revisão do laudo existente','Levantamentos e medições','Estudos de alternativas técnicas','Desenvolvimento de nova solução de engenharia'],
      image:'https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&w=900',
      imageAlt:'Profissional de elétrica avaliando um quadro de distribuição'
    }
  ],
  steps:[
    {title:'Conversa inicial gratuita',description:'Conhecemos a situação e orientamos quais informações podem ajudar.'},
    {title:'Entendimento da negativa',description:'Analisamos inicialmente o contexto e os impedimentos relatados, sem emitir parecer conclusivo.'},
    {title:'Proposta de revisão técnica',description:'Definimos o escopo e os honorários quando a análise especializada for necessária.'},
    {title:'Levantamentos e estudos contratados',description:'Executamos medições e avaliações técnicas conforme as necessidades identificadas.'},
    {title:'Identificação de alternativas',description:'Verificamos soluções possíveis e seus limites, sem garantia de reversão.'},
    {title:'Projeto e adequações, quando viáveis',description:'Desenvolvemos a solução de engenharia e as intervenções necessárias sob contratação.'},
    {title:'Apoio à implantação',description:'Podemos apoiar a aprovação técnica e executar a implantação conforme o escopo.'}
  ],
  audiences:[
    {title:'Síndicos',description:'Precisam responder aos moradores e compreender as razões técnicas da negativa recebida.',icon:'team'},
    {title:'Administradoras',description:'Gerenciam condomínios com instalações negadas ou projetos interrompidos.',icon:'building'},
    {title:'Condomínios com projetos paralisados',description:'Querem avaliar alternativas de engenharia antes de abandonar a implantação.',icon:'doc'}
  ],
  faqs:[
    {question:'Um laudo negativo pode ser revisto?',answer:'Sim. Um documento pode ser reavaliado tecnicamente. Isso não significa que a conclusão será necessariamente modificada: ela dependerá das evidências e das condições da instalação.'},
    {question:'É possível instalar carregadores sem trocar o transformador?',answer:'Em alguns casos, sim, com avaliação de demanda, controle de simultaneidade ou adequações. Em outros, a substituição ou reforço pode ser indispensável.'},
    {question:'O gerenciamento de carga pode resolver a limitação elétrica?',answer:'Pode ser uma alternativa quando tecnicamente adequada, mas não elimina todos os limites da instalação nem substitui as proteções e o dimensionamento corretos.'},
    {question:'A Expertise pode analisar um laudo de outra empresa?',answer:'Sim. Nosso objetivo é compreender os fundamentos técnicos apresentados, sem desqualificar automaticamente o trabalho do profissional anterior.'},
    {question:'Toda negativa pode ser revertida?',answer:'Não. Algumas restrições podem permanecer mesmo após o estudo. A revisão pode confirmar a inviabilidade ou identificar alternativas condicionadas a adequações.'},
    {question:'Quanto custa uma revisão técnica?',answer:'O valor depende da documentação, extensão da instalação, medições e profundidade do estudo. Após a conversa inicial, apresentamos proposta para as etapas técnicas necessárias.'},
    {question:'Preciso enviar o laudo antes da conversa?',answer:'Não é obrigatório para iniciar a conversa. Se você já tiver o laudo, pode disponibilizá-lo depois, com autorização do condomínio, para ajudar a definir o escopo.'},
    {question:'A primeira conversa é gratuita?',answer:'Sim. A conversa inicial é gratuita e não inclui laudo, medições, projeto, ART ou parecer técnico conclusivo. Essas etapas são contratadas quando necessárias.'}
  ],
  closingTitle:'Seu condomínio recebeu um laudo desfavorável?',
  closingText:'Converse com a Expertise Engenharia e entenda como iniciar uma avaliação das alternativas técnicas, sem promessas de reversão.',
  closingCta:'Falar com um especialista sobre meu laudo'
};
