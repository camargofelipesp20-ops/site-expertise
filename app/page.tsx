import Link from 'next/link';
import LeadForm from './components/LeadForm';
import HeroVisual from './components/HeroVisual';

const services=[
  {n:'01',title:'Locação de Equipamentos',desc:'Analisadores de energia e instrumentos para medições e diagnósticos em campo.',href:'/locacao-de-equipamentos'},
  {n:'02',title:'Monitoramento e Avaliação',desc:'Medições, análises e diagnósticos para identificar riscos, distúrbios e oportunidades.',href:'/monitoramento-e-avaliacao'},
  {n:'03',title:'Estudos e Implementação',desc:'Estudos elétricos e soluções para eficiência, qualidade de energia e desempenho.',href:'/estudos-e-implementacao'},
  {n:'04',title:'Instalações e Manutenções',desc:'Instalações, adequações, cabines primárias e manutenção elétrica.',href:'/instalacoes-eletricas'}
];

export default function Home(){return <main>
  <section className="hero homeHero"><div className="container heroGrid">
    <div className="heroCopy"><div className="eyebrow">Soluções em engenharia elétrica</div><h1>Engenharia elétrica para operações mais <span>seguras e eficientes.</span></h1><p>Unimos conhecimento técnico, experiência prática e foco em resultado para apoiar sua operação com soluções em engenharia elétrica.</p><div className="actions"><a className="btn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Expertise." target="_blank" rel="noreferrer">Falar com um especialista →</a><a className="ghostBtn" href="#solucoes">Conhecer soluções →</a></div></div>
    <div className="heroMedia"><HeroVisual kind="home"/></div>
  </div></section>

  <section className="metricStrip"><div className="container metrics"><div><strong>24+</strong><span>anos de atuação</span></div><div><strong>SP</strong><span>atendimento em todo o estado</span></div><div><strong>4</strong><span>frentes de atuação</span></div><div><strong>1</strong><span>parceiro técnico do diagnóstico à execução</span></div></div></section>

  <section className="section soft" id="solucoes"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Nossas soluções</div><h2>Soluções completas em engenharia elétrica.</h2><p>Da análise à implementação, oferecemos soluções para aumentar a confiabilidade, a segurança e a eficiência da sua operação.</p></div><div className="serviceCards">{services.map(s=><Link className="serviceCard" href={s.href} key={s.href}><span className="num">{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p><span className="more">Saiba mais →</span></Link>)}</div></div></section>

  <section className="section" id="como-atuamos"><div className="container"><div className="sectionHead centered compact"><div className="eyebrow">Como atuamos</div><h2>Um processo simples e eficiente.</h2></div><div className="steps"><div><b>1</b><h3>Entendemos a necessidade</h3><p>Mapeamos o cenário, a dor e os objetivos do projeto.</p></div><span>→</span><div><b>2</b><h3>Definimos a solução</h3><p>Apresentamos a melhor abordagem técnica e comercial.</p></div><span>→</span><div><b>3</b><h3>Executamos e acompanhamos</h3><p>Colocamos o plano em prática e acompanhamos os resultados.</p></div></div></div></section>

  <section className="section soft" id="sobre"><div className="container"><div className="sectionHead centered compact"><div className="eyebrow">Por que Expertise</div><h2>Mais que serviços, um parceiro técnico.</h2></div><div className="valueGrid"><article><h3>Profundidade técnica</h3><p>Experiência sólida em qualidade de energia, eficiência, proteção e instalações elétricas.</p></article><article><h3>Soluções sob medida</h3><p>Cada projeto parte da realidade técnica e operacional do cliente.</p></article><article><h3>Foco em resultado</h3><p>Segurança, confiabilidade e eficiência como critérios de decisão.</p></article></div></div></section>

  <section className="featureBand"><div className="container featureBandInner"><div><div className="eyebrow">Locação de equipamentos</div><h2>Locação de Analisadores de Energia</h2><p>Equipamentos de alta precisão para medições, diagnósticos e estudos em sistemas elétricos, com suporte técnico especializado.</p><Link className="btn" href="/locacao-de-equipamentos">Conhecer a locação →</Link></div><div className="featureVisual"><HeroVisual kind="rental"/></div></div></section>

  <section className="section" id="contato"><div className="container contactGrid"><div className="contactIntro"><div className="eyebrow">Contato</div><h2>Vamos conversar sobre o seu projeto?</h2><p>Conte para nós a sua necessidade. Nossa equipe retorna para entender o cenário e direcionar o próximo passo.</p><a className="whatsappBtn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Expertise." target="_blank" rel="noreferrer">Falar pelo WhatsApp →</a><ul><li>Campinas - SP</li><li>Atendimento em todo o Estado de São Paulo</li><li>Atuação fora do estado conforme o projeto</li></ul></div><LeadForm service="um projeto de engenharia elétrica"/></div></section>
</main>}
