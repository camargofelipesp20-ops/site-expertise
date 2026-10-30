import Link from 'next/link';
import LeadForm from './components/LeadForm';
import HeroVisual from './components/HeroVisual';
import LineIcon from './components/LineIcon';

const services=[
  {icon:'wave' as const,title:'Qualidade de Energia',desc:'Análise, monitoramento e diagnóstico para harmônicos, fator de potência e estabilidade da rede.',href:'/servicos/analise-qualidade-energia'},
  {icon:'shield' as const,title:'Proteção Elétrica',desc:'Estudos de coordenação, seletividade e ajustes de proteção para maior segurança.',href:'/servicos/coordenacao-seletividade'},
  {icon:'chart' as const,title:'Eficiência Energética',desc:'Redução da conta de energia e estudos técnico-econômicos para otimizar as instalações.',href:'/servicos/reducao-conta-energia'},
  {icon:'tool' as const,title:'Manutenção e Diagnósticos',desc:'Manutenção preventiva, preditiva e corretiva com diagnóstico técnico especializado.',href:'/servicos/manutencao-eletrica-industrial'},
  {icon:'bolt' as const,title:'SPDA e Laudos',desc:'Projeto, instalação, avaliação de SPDA e documentação técnica para a instalação.',href:'/servicos/projeto-laudo-spda'},
  {icon:'rental' as const,title:'Locação de Equipamentos',desc:'Analisadores de energia e outros equipamentos com suporte técnico especializado.',href:'/locacao-de-equipamentos'}
];

const proof=[
  {icon:'calendar' as const,title:'+24 anos',text:'de atuação'},
  {icon:'team' as const,title:'Equipe técnica',text:'especializada'},
  {icon:'pin' as const,title:'Atendimento em',text:'todo o Estado de SP'},
  {icon:'gear' as const,title:'Soluções sob medida',text:'para cada necessidade'}
];

export default function Home(){return <main>
  <section className="hero homeHero"><div className="container heroGrid">
    <div className="heroCopy"><div className="eyebrow">Soluções em engenharia elétrica</div><h1>Engenharia elétrica para operações mais <span>seguras, eficientes e econômicas.</span></h1><p>Há mais de 24 anos, a Expertise entrega soluções em qualidade de energia, proteção, eficiência energética, manutenção e instalações elétricas para indústrias, condomínios e empresas.</p><div className="actions"><a className="btn" href="#solucoes">Conheça nossas soluções →</a><a className="ghostBtn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20da%20Expertise." target="_blank" rel="noreferrer">Falar com um especialista</a></div></div>
    <div className="heroMedia"><HeroVisual kind="home"/></div>
  </div></section>

  <section className="proofStrip homeProof"><div className="container proofGrid">{proof.map(x=><div key={x.title}><span className="iconLine"><LineIcon name={x.icon}/></span><span><strong>{x.title}</strong><small>{x.text}</small></span></div>)}</div></section>

  <section className="section soft" id="solucoes"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Nossas soluções</div><h2>Engenharia elétrica completa, para o seu desafio.</h2><p>Unimos conhecimento técnico, experiência prática e equipamentos de ponta para entregar soluções que aumentam a segurança, a eficiência e a confiabilidade do seu sistema elétrico.</p></div><div className="serviceCards homeServices">{services.map(s=><Link className="serviceCard approvedCard" href={s.href} key={s.href}><span className="cardIcon"><LineIcon name={s.icon}/></span><h3>{s.title}</h3><p>{s.desc}</p><span className="more">Saiba mais →</span></Link>)}</div></div></section>

  <section className="section processSection" id="como-atuamos"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Como atuamos</div><h2>Do diagnóstico à execução.</h2></div><div className="processRow"><div><b>1</b><span><strong>Entendemos a necessidade</strong><small>Mapeamos o cenário e os objetivos do projeto.</small></span></div><i>→</i><div><b>2</b><span><strong>Definimos a solução</strong><small>Apresentamos a abordagem técnica e comercial adequada.</small></span></div><i>→</i><div><b>3</b><span><strong>Executamos e acompanhamos</strong><small>Colocamos o plano em prática e apoiamos os próximos passos.</small></span></div></div></div></section>

  <section className="section whySection" id="sobre"><div className="container"><div className="sectionHead centered"><div className="eyebrow">Nossos diferenciais</div><h2>Por que escolher a Expertise?</h2><p>Mais de duas décadas entregando soluções técnicas com foco em resultados, segurança e eficiência.</p></div><div className="valueRow"><div><span className="cardIcon"><LineIcon name="doc"/></span><span><strong>Experiência comprovada</strong><small>+24 anos de atuação em engenharia elétrica.</small></span></div><div><span className="cardIcon"><LineIcon name="team"/></span><span><strong>Equipe técnica especializada</strong><small>Engenheiros e técnicos com sólida experiência.</small></span></div><div><span className="cardIcon"><LineIcon name="gear"/></span><span><strong>Soluções sob medida</strong><small>Projetos alinhados às necessidades de cada cliente.</small></span></div></div></div></section>

  <section className="section rentalHighlight"><div className="container rentalBanner"><div><div className="eyebrow">Locação de equipamentos</div><h2>Locação de Analisadores de Energia</h2><p>Equipamentos de alta precisão para medições, diagnósticos e estudos em sistemas elétricos, com suporte técnico especializado.</p><Link className="btn" href="/locacao-de-equipamentos">Conhecer a locação →</Link></div><div className="rentalPhoto"><img src="/assets/rental-feature.webp" alt="Analisador de energia"/></div><ul className="checks compactChecks"><li>Equipamentos de alta precisão</li><li>Suporte técnico especializado</li><li>Locação por período de acordo com o projeto</li></ul></div></section>

  <section className="section contactSection" id="contato"><div className="container contactGrid"><div className="contactIntro"><div className="eyebrow">Contato</div><h2>Vamos conversar sobre o seu projeto?</h2><p>Conte para nós a sua necessidade. Nossa equipe retornará o mais breve possível.</p><a className="whatsappBtn" href="https://wa.me/5519997988672?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Expertise." target="_blank" rel="noreferrer">Falar pelo WhatsApp</a><ul className="contactFacts"><li><LineIcon name="pin"/>Campinas - SP</li><li><LineIcon name="globe"/>Atendimento em todo o Estado de SP</li><li><LineIcon name="team"/>Atuação também fora do estado conforme o projeto</li></ul></div><LeadForm service="Engenharia elétrica" button="Enviar mensagem"/></div></section>
</main>}
