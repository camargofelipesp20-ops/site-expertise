import Link from 'next/link';
import LeadForm from './components/LeadForm';
import HeroVisual from './components/HeroVisual';

const services=[
  {n:'01',title:'Locação de Equipamentos',desc:'Analisadores de energia e instrumentos para medições e diagnósticos em campo.',href:'/locacao-de-equipamentos'},
  {n:'02',title:'Monitoramento e Avaliação',desc:'Medições e diagnósticos para identificar riscos, distúrbios e oportunidades.',href:'/monitoramento-e-avaliacao'},
  {n:'03',title:'Estudos e Implementação',desc:'Estudos elétricos e soluções para eficiência, qualidade de energia e desempenho.',href:'/estudos-e-implementacao'},
  {n:'04',title:'Instalações e Manutenções',desc:'Instalações, adequações, cabines primárias e manutenção elétrica.',href:'/instalacoes-eletricas'}
];

export default function Home(){return <main>
  <section className="hero homeHero"><div className="container heroGrid">
    <div className="heroCopy"><div className="eyebrow">Soluções em engenharia elétrica</div><h1>Engenharia elétrica para operações mais <span>seguras e eficientes.</span></h1><p>Conhecimento técnico, experiência prática e foco em resultado para apoiar decisões elétricas mais confiáveis.</p><div className="actions"><a className="btn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Expertise." target="_blank" rel="noreferrer">Falar com um especialista →</a><a className="ghostBtn" href="#solucoes">Conhecer soluções →</a></div></div>
    <div className="heroMedia"><HeroVisual kind="home"/></div>
  </div></section>

  <section className="metricStrip"><div className="container metrics metricsThree"><div><strong>24+</strong><span>anos de atuação</span></div><div><strong>SP</strong><span>atendimento em todo o estado</span></div><div><strong>4</strong><span>frentes de atuação</span></div></div></section>

  <section className="section soft" id="solucoes"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Nossas soluções</div><h2>Da medição à implementação.</h2><p>Quatro frentes complementares para aumentar segurança, confiabilidade e eficiência.</p></div><div className="serviceCards">{services.map(s=><Link className="serviceCard" href={s.href} key={s.href}><span className="num">{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p><span className="more">Saiba mais →</span></Link>)}</div></div></section>

  <section className="section compactSection" id="sobre"><div className="container compactDual">
    <div><div className="eyebrow">Como atuamos</div><h2>Um processo simples e técnico.</h2><div className="miniSteps"><div><b>1</b><span><strong>Entendemos</strong><small>Cenário, necessidade e objetivo.</small></span></div><div><b>2</b><span><strong>Definimos</strong><small>A melhor abordagem técnica.</small></span></div><div><b>3</b><span><strong>Executamos</strong><small>Implantação e acompanhamento.</small></span></div></div></div>
    <div><div className="eyebrow">Por que Expertise</div><h2>Parceiro técnico do diagnóstico à execução.</h2><div className="miniValues"><div><strong>Profundidade técnica</strong><small>Qualidade de energia, eficiência, proteção e instalações.</small></div><div><strong>Soluções sob medida</strong><small>Projetos construídos a partir da realidade da operação.</small></div><div><strong>Foco em resultado</strong><small>Segurança, confiabilidade e eficiência.</small></div></div></div>
  </div></section>

  <section className="featureBand"><div className="container featureBandInner"><div><div className="eyebrow">Locação de equipamentos</div><h2>Locação de Analisadores de Energia</h2><p>Equipamentos profissionais para medições e diagnósticos, com suporte de quem entende da aplicação.</p><Link className="btn" href="/locacao-de-equipamentos">Conhecer a locação →</Link></div><div className="featureVisual"><HeroVisual kind="rental"/></div></div></section>

  <section className="section contactSection" id="contato"><div className="container contactGrid"><div className="contactIntro"><div className="eyebrow">Contato</div><h2>Vamos conversar sobre o seu projeto?</h2><p>Conte sua necessidade. Nossa equipe entende o cenário e direciona o próximo passo.</p><a className="whatsappBtn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Expertise." target="_blank" rel="noreferrer">Falar pelo WhatsApp →</a><ul><li>Campinas - SP</li><li>Todo o Estado de São Paulo</li><li>Outros estados conforme o projeto</li></ul></div><LeadForm service="um projeto de engenharia elétrica"/></div></section>
</main>}
