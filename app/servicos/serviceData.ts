export type ServicePageData={
  slug:string;
  eyebrow:string;
  title:string;
  highlight:string;
  intro:string;
  primaryCta:string;
  heroKind:'monitoring'|'studies'|'installations'|'home';
  benefits:{title:string;text:string}[];
  sectionEyebrow:string;
  sectionTitle:string;
  sectionText:string;
  services:{title:string;text:string}[];
  resultTitle:string;
  resultText:string;
  resultBullets:string[];
  resultImage:string;
  applications:string[];
  metaTitle:string;
  metaDescription:string;
};

export const servicePages:ServicePageData[]=[
  {
    slug:'analise-qualidade-energia',
    eyebrow:'Qualidade de energia',
    title:'Identifique problemas na sua instalação elétrica',
    highlight:'antes que virem prejuízo.',
    intro:'Análise, monitoramento e diagnóstico da qualidade da energia elétrica para identificar causas de falhas, distúrbios e perdas na operação.',
    primaryCta:'Solicitar uma análise técnica',heroKind:'monitoring',
    benefits:[
      {title:'Redução de paradas e falhas',text:'Identificação de causas elétricas que afetam a operação.'},
      {title:'Maior confiabilidade',text:'Mais segurança para equipamentos e processos.'},
      {title:'Conformidade técnica',text:'Avaliação orientada por critérios e normas aplicáveis.'}
    ],
    sectionEyebrow:'O que analisamos',sectionTitle:'Energia de qualidade para um processo mais seguro e eficiente.',
    sectionText:'A Expertise monitora grandezas elétricas e avalia o comportamento da instalação para identificar a origem de problemas e apoiar decisões técnicas.',
    services:[
      {title:'Tensão, corrente e frequência',text:'Medição e avaliação das principais grandezas elétricas.'},
      {title:'Harmônicos e distorções',text:'Análise de distorções presentes no sistema elétrico.'},
      {title:'Desequilíbrio de cargas',text:'Avaliação do comportamento das fases e da distribuição de cargas.'},
      {title:'Fator de potência e energia reativa',text:'Diagnóstico de condições que podem gerar cobranças e perdas.'},
      {title:'Variações e eventos',text:'Registro e análise de ocorrências relevantes durante o monitoramento.'}
    ],
    resultTitle:'Relatório técnico com diagnóstico e recomendações',
    resultText:'O estudo organiza os dados medidos, identifica causas prováveis e orienta as ações técnicas mais adequadas para a instalação.',
    resultBullets:['Diagnóstico das causas','Avaliação de impactos','Recomendações de soluções','Suporte técnico na implementação'],
    resultImage:'/assets/monitor-result.webp',
    applications:['Indústrias','Condomínios','Centros comerciais','Hospitais','Data centers'],
    metaTitle:'Análise de Qualidade de Energia',metaDescription:'Monitoramento, avaliação e diagnóstico da qualidade da energia elétrica para indústrias, condomínios e empresas.'
  },
  {
    slug:'reducao-conta-energia',eyebrow:'Eficiência energética',
    title:'Reduza a conta de energia',highlight:'da sua empresa.',
    intro:'Estudos técnicos e econômicos para identificar oportunidades de redução dos valores das faturas de energia e otimização das instalações.',
    primaryCta:'Solicitar um estudo',heroKind:'home',
    benefits:[
      {title:'Menor custo com energia',text:'Identificação de oportunidades de economia na fatura.'},
      {title:'Decisões com base técnica',text:'Avaliação técnica e econômica das alternativas.'},
      {title:'Instalação mais eficiente',text:'Ações orientadas à eficiência e ao melhor uso da energia.'}
    ],
    sectionEyebrow:'Como podemos ajudar',sectionTitle:'Estudos para reduzir custos sem comprometer a operação.',
    sectionText:'A análise considera o perfil de consumo, a instalação existente e oportunidades de eficiência, geração e adequação operacional.',
    services:[
      {title:'Análise de demanda e perfil de consumo',text:'Leitura do comportamento de consumo e demanda da unidade.'},
      {title:'Correção de fator de potência',text:'Avaliação de reativos excedentes e alternativas de correção.'},
      {title:'Eficiência energética',text:'Estudos técnicos e econômicos para otimizar o uso da energia.'},
      {title:'Otimização das instalações',text:'Identificação de melhorias que podem aumentar eficiência e confiabilidade.'},
      {title:'Iluminação, geração e cogeração',text:'Avaliação de soluções incluindo LED, fotovoltaica e cogeração.'}
    ],
    resultTitle:'Identificamos oportunidades reais de economia',
    resultText:'A Expertise estrutura as oportunidades encontradas e apresenta ações priorizadas para apoiar a tomada de decisão.',
    resultBullets:['Levantamento do cenário atual','Identificação de oportunidades','Análise técnica e econômica','Plano de ações recomendado'],
    resultImage:'/assets/studies-result.webp',applications:['Indústrias','Condomínios','Comércios','Empresas de serviços'],
    metaTitle:'Redução da Conta de Energia',metaDescription:'Estudos técnicos e econômicos para redução da conta de energia, eficiência energética e otimização das instalações.'
  },
  {
    slug:'fator-potencia-energia-reativa',eyebrow:'Fator de potência',
    title:'Reduza a cobrança de energia reativa',highlight:'e melhore o desempenho da instalação.',
    intro:'Estudo, projeto e implementação de soluções para redução da cobrança de reativos excedentes e melhoria do fator de potência.',
    primaryCta:'Solicitar um estudo',heroKind:'studies',
    benefits:[
      {title:'Redução de cobranças',text:'Atuação sobre reativos excedentes identificados na instalação.'},
      {title:'Solução dimensionada',text:'Projeto orientado às características reais da carga.'},
      {title:'Melhor uso da infraestrutura',text:'Adequação técnica para melhorar o desempenho do sistema.'}
    ],
    sectionEyebrow:'Como podemos ajudar',sectionTitle:'Solução técnica para fator de potência e energia reativa.',
    sectionText:'A Expertise avalia a instalação, identifica a origem do consumo reativo e define a solução adequada para o cenário encontrado.',
    services:[
      {title:'Diagnóstico da instalação',text:'Medições e avaliação da condição atual do sistema.'},
      {title:'Dimensionamento da solução',text:'Definição técnica de equipamentos e parâmetros necessários.'},
      {title:'Projeto de correção',text:'Especificação da solução de correção de fator de potência.'},
      {title:'Implementação',text:'Suporte à execução e adequação da solução definida.'},
      {title:'Verificação de resultados',text:'Avaliação do comportamento após a implementação.'}
    ],
    resultTitle:'Redução da cobrança de reativos excedentes',
    resultText:'O trabalho busca corrigir a condição identificada com uma solução compatível com a instalação e com o perfil de carga.',
    resultBullets:['Análise técnica do cenário','Dimensionamento adequado','Recomendações de implantação','Acompanhamento dos resultados'],
    resultImage:'/assets/studies-result.webp',applications:['Indústrias','Condomínios','Comércios','Instalações com cargas indutivas'],
    metaTitle:'Correção de Fator de Potência e Energia Reativa',metaDescription:'Estudo e implementação de soluções para redução de reativos excedentes e correção do fator de potência.'
  },
  {
    slug:'analise-harmonicos',eyebrow:'Harmônicos',
    title:'Identifique e reduza',highlight:'distorções harmônicas na instalação.',
    intro:'Monitoramento, análise e estudo de soluções para redução da distorção harmônica em sistemas elétricos.',
    primaryCta:'Solicitar uma análise técnica',heroKind:'monitoring',
    benefits:[
      {title:'Diagnóstico preciso',text:'Identificação do comportamento harmônico da instalação.'},
      {title:'Soluções direcionadas',text:'Recomendações compatíveis com a origem do problema.'},
      {title:'Maior confiabilidade',text:'Apoio à melhoria da estabilidade e do desempenho do sistema.'}
    ],
    sectionEyebrow:'O que fazemos',sectionTitle:'Da medição à solução para distorções harmônicas.',
    sectionText:'A Expertise mede, avalia e interpreta o comportamento harmônico da instalação, identificando fontes e oportunidades de mitigação.',
    services:[
      {title:'Medição e análise',text:'Registro das grandezas necessárias para caracterizar o problema.'},
      {title:'Identificação de fontes',text:'Avaliação das cargas e pontos associados às distorções.'},
      {title:'Estudo de soluções',text:'Definição das alternativas técnicas para reduzir a distorção.'},
      {title:'Projeto e implementação',text:'Suporte à aplicação da solução recomendada.'},
      {title:'Relatório técnico',text:'Documentação dos resultados e recomendações.'}
    ],
    resultTitle:'Solução completa para harmônicos',resultText:'O estudo transforma os dados medidos em um diagnóstico objetivo e em recomendações técnicas para a instalação.',
    resultBullets:['Análise técnica detalhada','Identificação das causas','Recomendações de soluções','Suporte na implementação'],
    resultImage:'/assets/monitor-result.webp',applications:['Indústrias','Data centers','Condomínios','Comércios'],
    metaTitle:'Análise de Harmônicos',metaDescription:'Medição, análise e soluções para redução da distorção harmônica em instalações elétricas.'
  },
  {
    slug:'coordenacao-seletividade',eyebrow:'Proteção elétrica',
    title:'Mais segurança e continuidade',highlight:'para a sua operação.',
    intro:'Estudo de coordenação e seletividade da proteção para melhorar o desempenho dos dispositivos de proteção da instalação.',
    primaryCta:'Solicitar um estudo',heroKind:'studies',
    benefits:[
      {title:'Maior segurança operacional',text:'Proteções ajustadas de forma coerente com a instalação.'},
      {title:'Redução de desligamentos indevidos',text:'Melhor coordenação entre os dispositivos de proteção.'},
      {title:'Confiabilidade técnica',text:'Critérios documentados para ajustes e operação.'}
    ],
    sectionEyebrow:'Nossos serviços',sectionTitle:'Coordenação e seletividade para um sistema elétrico mais confiável.',
    sectionText:'A Expertise avalia a proteção existente e desenvolve estudos para coordenar os dispositivos e melhorar a seletividade do sistema.',
    services:[
      {title:'Levantamento dos dispositivos',text:'Identificação dos equipamentos de proteção e suas características.'},
      {title:'Estudo de coordenação',text:'Avaliação da atuação relativa entre os dispositivos.'},
      {title:'Estudo de seletividade',text:'Definição de critérios para limitar desligamentos ao trecho necessário.'},
      {title:'Ajustes de proteção',text:'Recomendações de parametrização compatíveis com o estudo.'},
      {title:'Relatório técnico',text:'Documentação das premissas, resultados e recomendações.'}
    ],
    resultTitle:'Proteção elétrica bem coordenada',resultText:'O estudo fornece uma base técnica para ajustes e decisões de proteção, aumentando a previsibilidade da atuação do sistema.',
    resultBullets:['Análise da proteção existente','Critérios de coordenação','Recomendações de ajustes','Documentação técnica do estudo'],
    resultImage:'/assets/studies-result.webp',applications:['Indústrias','Subestações','Centros comerciais','Instalações de média e baixa tensão'],
    metaTitle:'Estudo de Coordenação e Seletividade',metaDescription:'Estudo de coordenação e seletividade da proteção para instalações elétricas industriais e comerciais.'
  },
  {
    slug:'diagnostico-paradas-queima',eyebrow:'Diagnóstico de falhas',
    title:'Máquinas parando ou equipamentos',highlight:'queimando?',
    intro:'Investigação das causas de desligamento, mau funcionamento ou queima de equipamentos por meio de medições e diagnóstico elétrico.',
    primaryCta:'Solicitar um diagnóstico',heroKind:'installations',
    benefits:[
      {title:'Redução de paradas',text:'Investigação das causas elétricas ligadas às ocorrências.'},
      {title:'Mais disponibilidade',text:'Apoio a ações para reduzir reincidências e interrupções.'},
      {title:'Decisão com dados',text:'Medições e diagnóstico para orientar a correção.'}
    ],
    sectionEyebrow:'Nosso processo',sectionTitle:'Do evento ao diagnóstico técnico.',
    sectionText:'A Expertise combina levantamento de dados, monitoramento e avaliação técnica para identificar causas prováveis e recomendar ações corretivas.',
    services:[
      {title:'Levantamento de dados',text:'Coleta de informações da instalação e histórico das ocorrências.'},
      {title:'Medições elétricas',text:'Monitoramento das grandezas relacionadas ao problema.'},
      {title:'Identificação das causas',text:'Análise técnica dos dados e correlação com os eventos.'},
      {title:'Plano de ação',text:'Recomendações para correção e redução de reincidências.'},
      {title:'Acompanhamento',text:'Suporte técnico na implementação das ações definidas.'}
    ],
    resultTitle:'Diagnóstico técnico com foco em resultados',resultText:'O objetivo é transformar sintomas de campo em causas técnicas identificáveis e em ações práticas para a operação.',
    resultBullets:['Diagnóstico das ocorrências','Identificação de causas prováveis','Recomendações corretivas','Suporte na implementação'],
    resultImage:'/assets/install-thermal.webp',applications:['Linhas de produção','Motores e acionamentos','Painéis elétricos','Instalações industriais'],
    metaTitle:'Diagnóstico de Paradas e Queima de Equipamentos',metaDescription:'Diagnóstico elétrico para investigar desligamentos, mau funcionamento e queima de máquinas e equipamentos.'
  },
  {
    slug:'projeto-laudo-spda',eyebrow:'SPDA e para-raios',
    title:'Proteção contra descargas atmosféricas',highlight:'com projeto, instalação e avaliação técnica.',
    intro:'Projetos, instalação e avaliação periódica de Sistemas de Proteção contra Descargas Atmosféricas, com suporte técnico especializado.',
    primaryCta:'Solicitar um orçamento',heroKind:'studies',
    benefits:[
      {title:'Proteção de pessoas e patrimônio',text:'Solução técnica voltada à segurança da instalação.'},
      {title:'Conformidade com requisitos aplicáveis',text:'Projeto e avaliação baseados em critérios técnicos.'},
      {title:'Avaliação periódica',text:'Acompanhamento da condição do sistema ao longo do tempo.'}
    ],
    sectionEyebrow:'Nossos serviços',sectionTitle:'SPDA completo, do projeto à avaliação periódica.',
    sectionText:'A Expertise atua nas diferentes etapas do sistema, desde a definição técnica até a instalação, inspeção e documentação.',
    services:[
      {title:'Projeto de SPDA',text:'Definição técnica do sistema de proteção.'},
      {title:'Instalação',text:'Execução conforme o projeto e a necessidade da edificação.'},
      {title:'Avaliação periódica',text:'Verificação da condição do sistema existente.'},
      {title:'Laudos e documentação',text:'Registro técnico das avaliações realizadas.'},
      {title:'Suporte para AVCB',text:'Consultoria para obtenção e renovação de AVCB quando aplicável.'}
    ],
    resultTitle:'Proteção completa contra descargas atmosféricas',resultText:'Projeto, instalação e avaliação técnica integrados para manter o sistema adequado às necessidades da instalação.',
    resultBullets:['Projeto conforme a necessidade','Instalação e adequações','Avaliação periódica','Documentação técnica'],
    resultImage:'/assets/studies-result.webp',applications:['Indústrias','Condomínios','Comércios','Galpões e centros logísticos'],
    metaTitle:'Projeto e Laudo de SPDA',metaDescription:'Projeto, instalação, inspeção e avaliação periódica de SPDA e para-raios com suporte técnico especializado.'
  },
  {
    slug:'manutencao-eletrica-industrial',eyebrow:'Manutenção elétrica',
    title:'Mais disponibilidade e segurança',highlight:'para a sua operação.',
    intro:'Manutenção elétrica preventiva, preditiva e corretiva, com inspeção termográfica e suporte técnico para instalações industriais.',
    primaryCta:'Solicitar um plano de manutenção',heroKind:'installations',
    benefits:[
      {title:'Redução do risco de falhas',text:'Ações preventivas e preditivas sobre a instalação.'},
      {title:'Maior disponibilidade',text:'Manutenção orientada à continuidade operacional.'},
      {title:'Planejamento técnico',text:'Intervenções organizadas conforme a condição e a necessidade do sistema.'}
    ],
    sectionEyebrow:'Tipos de manutenção',sectionTitle:'Manutenção elétrica para confiabilidade e continuidade.',
    sectionText:'A Expertise executa manutenção preventiva, preditiva e corretiva, integrando inspeções e diagnóstico técnico conforme a necessidade da instalação.',
    services:[
      {title:'Manutenção preventiva',text:'Rotinas planejadas para reduzir a probabilidade de falhas.'},
      {title:'Manutenção preditiva',text:'Avaliação da condição dos ativos para orientar intervenções.'},
      {title:'Manutenção corretiva',text:'Atuação em falhas e anomalias identificadas.'},
      {title:'Inspeção termográfica',text:'Termografia como apoio à avaliação da condição da instalação.'},
      {title:'Relatórios e plano de ação',text:'Registro das ocorrências e recomendações técnicas.'}
    ],
    resultTitle:'Equipe técnica para apoiar sua operação',resultText:'O trabalho combina manutenção, inspeção e diagnóstico para aumentar a confiabilidade das instalações elétricas.',
    resultBullets:['Planejamento das intervenções','Inspeções técnicas','Ações preventivas e corretivas','Relatórios e recomendações'],
    resultImage:'/assets/install-thermal.webp',applications:['Indústrias','Centros logísticos','Comércios','Condomínios empresariais'],
    metaTitle:'Manutenção Elétrica Industrial',metaDescription:'Manutenção elétrica preventiva, preditiva e corretiva com inspeção termográfica e suporte técnico especializado.'
  },
  {
    slug:'termografia-eletrica',eyebrow:'Termografia elétrica',
    title:'Identifique anomalias térmicas',highlight:'antes que evoluam para falhas.',
    intro:'Inspeção termográfica como ferramenta de manutenção preditiva para avaliação de instalações e equipamentos elétricos.',
    primaryCta:'Solicitar uma inspeção',heroKind:'installations',
    benefits:[
      {title:'Inspeção não invasiva',text:'Avaliação térmica sem desmontagens extensivas.'},
      {title:'Apoio à manutenção preditiva',text:'Informações para priorizar intervenções e inspeções.'},
      {title:'Registro técnico',text:'Documentação das anomalias observadas e recomendações.'}
    ],
    sectionEyebrow:'Nosso serviço',sectionTitle:'Termografia aplicada à manutenção elétrica.',
    sectionText:'A inspeção termográfica permite avaliar o comportamento térmico de componentes e apoiar a identificação de pontos que merecem atenção técnica.',
    services:[
      {title:'Inspeção termográfica',text:'Levantamento das condições térmicas dos equipamentos avaliados.'},
      {title:'Identificação de anomalias',text:'Classificação dos pontos que apresentam comportamento térmico atípico.'},
      {title:'Registro com imagens',text:'Documentação visual das ocorrências relevantes.'},
      {title:'Relatório técnico',text:'Organização dos achados e recomendações de manutenção.'},
      {title:'Acompanhamento',text:'Suporte para priorização das ações de correção.'}
    ],
    resultTitle:'Diagnóstico rápido para apoiar a manutenção',resultText:'As imagens térmicas são organizadas em relatório para ajudar a equipe de manutenção a tomar decisões com mais informação.',
    resultBullets:['Imagens termográficas','Identificação de anomalias','Relatório técnico','Recomendações de ação'],
    resultImage:'/assets/install-thermal.webp',applications:['Painéis elétricos','Subestações','Motores','Instalações industriais'],
    metaTitle:'Termografia Elétrica',metaDescription:'Inspeção termográfica para manutenção preditiva de painéis, equipamentos e instalações elétricas.'
  },
  {
    slug:'laudos-tecnicos-engenharia-eletrica',eyebrow:'Laudos técnicos',
    title:'Laudos técnicos com',highlight:'rigor e responsabilidade.',
    intro:'Elaboração de laudos técnicos de engenharia elétrica para registrar condições, avaliações, diagnósticos e recomendações técnicas.',
    primaryCta:'Solicitar um orçamento',heroKind:'studies',
    benefits:[
      {title:'Documentação técnica',text:'Registro organizado da condição e das conclusões da avaliação.'},
      {title:'Suporte à decisão',text:'Informações técnicas para orientar adequações e investimentos.'},
      {title:'Aplicação em diferentes demandas',text:'Laudos associados aos serviços de engenharia elétrica da Expertise.'}
    ],
    sectionEyebrow:'Tipos de laudos',sectionTitle:'Documentação técnica para diferentes necessidades da instalação.',
    sectionText:'A Expertise elabora laudos vinculados a inspeções, diagnósticos e estudos realizados nas áreas de qualidade de energia, proteção, SPDA e instalações elétricas.',
    services:[
      {title:'Laudos de instalações elétricas',text:'Avaliação técnica da condição da instalação conforme o escopo definido.'},
      {title:'Laudos de SPDA',text:'Documentação técnica associada às avaliações do sistema de proteção.'},
      {title:'Laudos de qualidade de energia',text:'Registro dos resultados de monitoramento e diagnóstico elétrico.'},
      {title:'Laudos de manutenção e inspeção',text:'Documentação de inspeções e condições encontradas em campo.'},
      {title:'Relatórios técnicos especializados',text:'Documentos preparados conforme a necessidade específica do projeto.'}
    ],
    resultTitle:'Laudos técnicos completos e objetivos',resultText:'Cada documento é estruturado de acordo com o escopo contratado e com as informações levantadas durante a avaliação técnica.',
    resultBullets:['Registro das condições avaliadas','Análise técnica do cenário','Conclusões e recomendações','Documentação para suporte às decisões'],
    resultImage:'/assets/studies-result.webp',applications:['Indústrias','Condomínios','Comércios','Instalações elétricas em geral'],
    metaTitle:'Laudos Técnicos de Engenharia Elétrica',metaDescription:'Laudos técnicos de engenharia elétrica para instalações, SPDA, qualidade de energia, inspeções e diagnósticos.'
  }
];

export const serviceBySlug=(slug:string)=>servicePages.find(item=>item.slug===slug);
