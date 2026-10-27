'use client';
import Link from 'next/link';
import {equipment} from './RentalSite';

const wa=(m:string)=>`https://wa.me/5519997988672?text=${encodeURIComponent(m)}`;

export default function RentalProductPage({catSlug,itemSlug}:{catSlug:string;itemSlug:string}){
  const item=equipment.find(x=>x.catSlug===catSlug&&x.slug===itemSlug);
  if(!item) return null;
  const related=equipment.filter(x=>x.catSlug===item.catSlug&&x.slug!==item.slug).slice(0,3);
  return <main className="rentalProductPage">
    <section className="rentalProductHero">
      <div className="rentalProductHeroInner">
        <div className="rentalProductHeroCopy">
          <div className="rentalProductEyebrow">Expertise Engenharia • Locação técnica</div>
          <h1>Locação {item.brand} {item.model}</h1>
          <p>{item.short}</p>
          <div className="rentalProductActions">
            <a className="rentalWaBtn" href={wa(`Olá, gostaria de cotar a locação do ${item.brand} ${item.model}.`)} target="_blank" rel="noreferrer"><span className="rentalWaIcon" aria-hidden="true">◉</span>Solicitar cotação</a>
            <Link className="rentalSecondaryBtn" href="/locacao-de-equipamentos">Ver equipamentos</Link>
          </div>
        </div>
        <div className="rentalProductHeroMedia">
          <div className="rentalProductImageCard">
            <img src={item.image} alt={item.imageAlt} loading="eager" referrerPolicy="no-referrer"/>
          </div>
          <div className="rentalProductModelTag">{item.brand} {item.model}</div>
        </div>
      </div>
    </section>

    <section className="rentalProductBody">
      <div className="rentalProductWrap">
        <div className="rentalBreadcrumb"><Link href="/locacao-de-equipamentos">Locação</Link><span>/</span><Link href={`/locacao/${item.catSlug}`}>{item.cat}</Link><span>/</span><strong>{item.brand} {item.model}</strong></div>
        <div className="rentalProductGrid">
          <div className="rentalProductMain">
            <div className="rentalProductCategory">{item.cat}</div>
            <h2>{item.name}</h2>
            <p className="rentalProductIntro">{item.desc}</p>

            <section className="rentalInfoCard">
              <h3>Principais aplicações</h3>
              <div className="rentalAppsGrid">{item.apps.map(a=><div key={a} className="rentalAppItem"><span>✓</span>{a}</div>)}</div>
            </section>

            <section className="rentalSpecsSection">
              <h3>Especificações em destaque</h3>
              <div className="rentalSpecsGrid">{item.specs.map(s=><div className="rentalSpec" key={s}>{s}</div>)}</div>
              <p className="rentalFinePrint">As especificações, sensores e acessórios devem ser confirmados na cotação conforme a unidade disponível.</p>
            </section>

            <section className="rentalInfoCard">
              <h3>O que confirmar na locação</h3>
              <ul><li>Período desejado: diária, semanal, quinzenal ou mensal</li><li>Acessórios e sensores necessários para a aplicação</li><li>Certificado de calibração, quando exigido</li><li>Prazo e local de entrega</li></ul>
            </section>
          </div>

          <aside className="rentalQuoteCard">
            <div className="rentalProductEyebrow">Cotação</div>
            <h3>Consulte disponibilidade</h3>
            <p>Informe o período de uso e a aplicação. Nossa equipe verifica a unidade, os acessórios e a configuração mais adequada.</p>
            <a className="rentalWaBtn rentalWaBtnFull" href={wa(`Olá, gostaria de cotar a locação do ${item.brand} ${item.model}. Período aproximado: `)} target="_blank" rel="noreferrer"><span className="rentalWaIcon" aria-hidden="true">◉</span>Cotar {item.brand} {item.model}</a>
            <small>Campinas-SP • Atendimento em todo o Estado de São Paulo</small>
          </aside>
        </div>
      </div>
    </section>

    {related.length>0&&<section className="rentalRelated"><div className="rentalProductWrap"><div className="rentalProductCategory">Alternativas</div><h2>Equipamentos relacionados</h2><div className="rentalRelatedGrid">{related.map(r=><Link className="rentalRelatedCard" key={r.slug} href={`/locacao/${r.catSlug}/${r.slug}`}><div className="rentalRelatedImage"><img src={r.image} alt={r.imageAlt} loading="lazy" referrerPolicy="no-referrer"/></div><span>{r.brand}</span><h3>{r.model}</h3><p>{r.short}</p><strong>Ver equipamento →</strong></Link>)}</div></div></section>}

    <section className="rentalHelp"><div className="rentalProductWrap rentalHelpInner"><div><div className="rentalProductEyebrow">Precisa de orientação?</div><h2>Não sabe qual equipamento usar?</h2><p>Explique sua aplicação para nossa equipe técnica e ajudamos a identificar a instrumentação mais adequada.</p></div><a className="rentalWaBtn" href={wa('Olá, preciso de ajuda para escolher o equipamento de locação mais adequado para minha aplicação.')} target="_blank" rel="noreferrer"><span className="rentalWaIcon" aria-hidden="true">◉</span>Falar com especialista</a></div></section>
  </main>
}
