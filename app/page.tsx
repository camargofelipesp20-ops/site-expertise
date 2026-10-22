import Link from 'next/link';

const services=[
  ['01','Locação de Equipamentos','Analisadores de energia e instrumentos para profissionais do setor.','/locacao-de-equipamentos'],
  ['02','Monitoramento e Avaliação','Medições e diagnósticos para identificar distúrbios, riscos e oportunidades.','/monitoramento-e-avaliacao'],
  ['03','Estudos e Implementação','Estudos e soluções para qualidade, eficiência e desempenho elétrico.','/estudos-e-implementacao'],
  ['04','Instalações e Manutenções','Instalações, adequações, cabines primárias e manutenção elétrica.','/instalacoes-eletricas']
];

export default function Home(){return <main>
  <section className="hero"><div className="container heroGrid">
    <div><div className="eyebrow">Soluções em engenharia elétrica</div><h1>Engenharia elétrica para operações mais <span>seguras e eficientes.</span></h1><p>Unimos experiência técnica, análise e execução para apoiar indústrias, condomínios e profissionais do setor em decisões elétricas mais confiáveis.</p><div className="actions"><a className="btn" href="https://wa.me/5519997988672" target="_blank">Falar com um especialista</a><a className="btn secondary" href="#solucoes">Conhecer soluções</a></div></div>
    <div className="visual" aria-hidden="true" />
  </div></section>

  <section className="section soft" id="solucoes"><div className="container"><div className="sectionHead"><div className="eyebrow">Nossas soluções</div><h2>Da medição à implementação.</h2><p>Quatro frentes complementares para aumentar a segurança, a confiabilidade e a eficiência da operação.</p></div><div className="cards">{services.map(([n,t,d,h])=><article className="card" key={h}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p><Link href={h}>Saiba mais →</Link></article>)}</div></div></section>

  <section className="section" id="sobre"><div className="container split"><div className="sectionHead"><div className="eyebrow">Por que Expertise</div><h2>Mais que serviços, um parceiro técnico.</h2><p>Atuação orientada por profundidade técnica, clareza na recomendação e foco no resultado da operação.</p><div className="stats"><div className="stat"><strong>20+</strong><span>anos de experiência</span></div><div className="stat"><strong>SP</strong><span>atendimento em todo o estado</span></div><div className="stat"><strong>4</strong><span>frentes de atuação</span></div></div></div><div className="list"><div className="listItem"><strong>Profundidade técnica</strong><p>Experiência em qualidade de energia, eficiência, proteção e instalações elétricas.</p></div><div className="listItem"><strong>Soluções sob medida</strong><p>Cada projeto parte da realidade técnica e operacional do cliente.</p></div><div className="listItem"><strong>Foco em resultado</strong><p>Segurança, confiabilidade e eficiência como critérios de decisão.</p></div></div></div></section>

  <section className="section soft" id="contato"><div className="container contact"><div className="sectionHead"><div className="eyebrow">Contato</div><h2>Vamos conversar sobre sua necessidade?</h2><p>Fale com a Expertise pelo WhatsApp ou envie seus dados para iniciarmos o atendimento.</p><div className="actions"><a className="btn" href="https://wa.me/5519997988672" target="_blank">Abrir WhatsApp</a></div></div><form className="form" action="mailto:contato@expertise-eng.com.br" method="post" encType="text/plain"><input name="nome" placeholder="Nome" required/><input name="empresa" placeholder="Empresa"/><input name="email" type="email" placeholder="E-mail" required/><input name="telefone" placeholder="Telefone / WhatsApp"/><textarea name="mensagem" placeholder="Conte brevemente sua necessidade" required/><button className="btn full" type="submit">Solicitar contato</button></form></div></section>
</main>}
