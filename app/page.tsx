import Link from 'next/link';
import LeadForm from './components/LeadForm';
import HeroVisual from './components/HeroVisual';
import LineIcon from './components/LineIcon';

const services=[
  {icon:'rental' as const,title:'Locação de Equipamentos',desc:'Analisadores de energia e equipamentos para diagnósticos e medições em campo.',href:'/locacao-de-equipamentos'},
  {icon:'wave' as const,title:'Monitoramento e Avaliação',desc:'Medições, análises e laudos técnicos para identificar oportunidades e riscos.',href:'/monitoramento-e-avaliacao'},
  {icon:'doc' as const,title:'Estudos e Implementação',desc:'Estudos elétricos, projetos e suporte à implementação de soluções.',href:'/estudos-e-implementacao'},
  {icon:'tool' as const,title:'Instalações e Manutenções',desc:'Instalações, adequações e manutenções preventivas e corretivas.',href:'/instalacoes-eletricas'}
];

const proof=[
  {icon:'chart' as const,title:'+100',text:'projetos realizados'},
  {icon:'pin' as const,title:'Atendimento em todo',text:'o Estado de SP'},
  {icon:'team' as const,title:'Equipe técnica',text:'especializada'},
  {icon:'globe' as const,title:'Atuação também fora',text:'do estado conforme o projeto'}
];

export default function Home(){return <main>
  <section className="hero homeHero"><div className="container heroGrid">
    <div className="heroCopy"><div className="eyebrow">Soluções em engenharia elétrica</div><h1>Engenharia elétrica para operações mais <span>seguras e eficientes.</span></h1><p>Unimos conhecimento técnico, experiência prática e foco em resultado para apoiar a sua operação com soluções em engenharia elétrica.</p><div className="actions"><a className="btn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Expertise." target="_blank" rel="noreferrer">Falar com especialista →</a><a className="ghostBtn" href="#solucoes">Conhecer soluções →</a></div></div>
    <div className="heroMedia"><HeroVisual kind="home"/></div>
  </div></section>

  <section className="proofStrip homeProof"><div className="container proofGrid">{proof.map(x=><div key={x.title}><span className="iconLine"><LineIcon name={x.icon}/></span><span><strong>{x.title}</strong><small>{x.text}</small></span></div>)}</div></section>

  <section className="section soft" id="solucoes"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Nossas soluções</div><h2>Soluções completas em engenharia elétrica.</h2><p>Da análise à implementação, oferecemos soluções para aumentar a confiabilidade, a segurança e a eficiência da sua operação.</p></div><div className="serviceCards">{services.map(s=><Link className="serviceCard approvedCard" href={s.href} key={s.href}><span className="cardIcon"><LineIcon name={s.icon}/></span><h3>{s.title}</h3><p>{s.desc}</p><span className="more">Saiba mais →</span></Link>)}</div></div></section>

  <section className="section processSection" id="como-atuamos"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Como atuamos</div><h2>Um processo simples e eficiente.</h2></div><div className="processRow"><div><b>1</b><span><strong>Entendemos a necessidade</strong><small>Mapeamos o seu cenário e os objetivos do projeto.</small></span></div><i>→</i><div><b>2</b><span><strong>Definimos a solução</strong><small>Apresentamos a melhor abordagem técnica e comercial.</small></span></div><i>→</i><div><b>3</b><span><strong>Executamos e acompanhamos</strong><small>Colocamos o plano em prática e acompanhamos os resultados.</small></span></div></div></div></section>

  <section className="section whySection" id="sobre"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Por que Expertise</div><h2>Mais que serviços, <span className="underlineAccent">um parceiro técnico.</span></h2></div><div className="valueRow"><div><span className="cardIcon"><LineIcon name="doc"/></span><span><strong>Profundidade técnica</strong><small>Equipe com sólida experiência em sistemas elétricos e mais de 24 anos de atuação.</small></span></div><div><span className="cardIcon"><LineIcon name="gear"/></span><span><strong>Soluções sob medida</strong><small>Cada projeto é tratado de forma única, de acordo com a sua realidade.</small></span></div><div><span className="cardIcon"><LineIcon name="chart"/></span><span><strong>Foco em resultado</strong><small>Soluções que contribuem para uma operação mais segura, confiável e eficiente.</small></span></div></div></div></section>

  <section className="section rentalHighlight"><div className="container rentalBanner"><div><div className="eyebrow">Locação de equipamentos</div><h2>Locação de Analisadores de Energia</h2><p>Equipamentos de alta precisão para medições, diagnósticos e estudos em sistemas elétricos, com suporte técnico especializado.</p><Link className="btn" href="/locacao-de-equipamentos">Conhecer a locação →</Link></div><div className="rentalBannerVisual"><HeroVisual kind="rental"/></div><ul className="checks compactChecks"><li>Equipamentos de alta precisão</li><li>Suporte técnico especializado</li><li>Locação por período de acordo com o projeto</li></ul></div></section>

  <section className="section contactSection" id="contato"><div className="container contactGrid"><div className="contactIntro"><div className="eyebrow">Contato</div><h2>Vamos conversar sobre o seu projeto?</h2><p>Conte para nós a sua necessidade. Nossa equipe retornará o mais breve possível.</p><a className="whatsappBtn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Expertise." target="_blank" rel="noreferrer">Falar pelo WhatsApp</a><ul className="contactFacts"><li><LineIcon name="pin"/>Campinas - SP</li><li><LineIcon name="globe"/>Atendimento em todo o Estado de SP</li><li><LineIcon name="team"/>Atuação também fora do estado conforme o projeto</li></ul></div><LeadForm service="Engenharia elétrica" button="Enviar mensagem"/></div></section>
</main>}
