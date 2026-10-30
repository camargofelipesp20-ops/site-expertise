import Link from 'next/link';
import HeroVisual from '../components/HeroVisual';
import LineIcon from '../components/LineIcon';
import type {ServicePageData} from './serviceData';
import './services.css';

const whatsapp='https://wa.me/5519997988672';
const serviceIcons=['wave','chart','gear','tool','doc'] as const;
const benefitIcons=['chart','gear','doc'] as const;
const process=[
  {n:'01',title:'Levantamento',text:'Entendemos a necessidade, o histórico e a instalação.'},
  {n:'02',title:'Análise técnica',text:'Medições, inspeções e avaliação conforme o escopo.'},
  {n:'03',title:'Recomendações',text:'Definimos as ações e soluções tecnicamente adequadas.'},
  {n:'04',title:'Relatório e suporte',text:'Documentamos os resultados e apoiamos os próximos passos.'}
];
const clients=['CPFL Energia','Albrás','Eaton','DuPont','Toyota','Valeo','Unigel'];

function wa(service:string){return `${whatsapp}?text=${encodeURIComponent(`Olá, gostaria de falar com um especialista da Expertise sobre ${service}.`)}`;}

export default function ServiceLanding({data}:{data:ServicePageData}){
  return <main className="serviceLp">
    <section className="slHero">
      <div className="slHeroGrid">
        <div className="slHeroCopy">
          <div className="slEyebrow">{data.eyebrow}</div>
          <h1>{data.title} <span>{data.highlight}</span></h1>
          <p>{data.intro}</p>
          <div className="slActions">
            <a className="slPrimary" href="#contato-servico">{data.primaryCta} →</a>
            <a className="slWhatsapp" href={wa(data.metaTitle)} target="_blank" rel="noreferrer">Falar com um especialista</a>
          </div>
        </div>
        <div className="slHeroMedia"><HeroVisual kind={data.heroKind}/></div>
      </div>
    </section>

    <section className="slBenefits" aria-label="Principais benefícios"><div className="slContainer slBenefitGrid">
      {data.benefits.map((item,i)=><div className="slBenefit" key={item.title}><span className="slIcon"><LineIcon name={benefitIcons[i%benefitIcons.length]}/></span><span><strong>{item.title}</strong><small>{item.text}</small></span></div>)}
    </div></section>

    <section className="slSection"><div className="slContainer">
      <div className="slIntroGrid">
        <div className="slIntroCopy"><div className="slEyebrow blue">{data.sectionEyebrow}</div><h2>{data.sectionTitle}</h2><p>{data.sectionText}</p><a className="slWhatsapp inline" href={wa(data.metaTitle)} target="_blank" rel="noreferrer">Falar com um especialista</a></div>
        <div className="slIntroImage"><img src={data.resultImage} alt={`Solução da Expertise para ${data.metaTitle}`}/></div>
      </div>

      <div className="slEyebrow blue slServicesLabel">Nossos serviços</div>
      <div className="slServiceGrid">
        {data.services.map((item,i)=><article className="slServiceCard" key={item.title}><span className="slCircleIcon"><LineIcon name={serviceIcons[i%serviceIcons.length]}/></span><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </div>
    </div></section>

    <section className="slResult"><div className="slContainer slResultGrid">
      <div className="slResultImage"><img src={data.resultImage} alt={data.resultTitle}/></div>
      <div className="slResultCopy"><div className="slEyebrow light">Resultado técnico</div><h2>{data.resultTitle}</h2><p>{data.resultText}</p><ul>{data.resultBullets.map(item=><li key={item}>✓ {item}</li>)}</ul></div>
    </div></section>

    <section className="slProcess"><div className="slContainer"><div className="slEyebrow blue">Nosso processo</div><h2>Do diagnóstico à solução</h2><div className="slProcessGrid">{process.map((step,i)=><div className="slProcessStep" key={step.n}><span className="slProcessIcon"><LineIcon name={serviceIcons[i%serviceIcons.length]}/></span><div><b>{step.n}</b><strong>{step.title}</strong><small>{step.text}</small></div></div>)}</div></div></section>

    <section className="slApplications"><div className="slContainer"><div className="slEyebrow blue">Aplicações</div><h2>Onde esta solução pode ser aplicada</h2><div className="slAppGrid">{data.applications.map((item,i)=><div className="slApp" key={item}><span className="slCircleIcon small"><LineIcon name={serviceIcons[i%serviceIcons.length]}/></span><strong>{item}</strong></div>)}</div></div></section>

    <section className="slClients"><div className="slContainer"><div className="slEyebrow blue centered">Empresas onde a Expertise já prestou serviços</div><div className="slClientRow">{clients.map(c=><span key={c}>{c}</span>)}</div></div></section>

    <section className="slFinalCta" id="contato-servico"><div className="slContainer slFinalGrid"><div><div className="slEyebrow light">Expertise Engenharia</div><h2>Vamos conversar sobre o seu projeto?</h2><p>Nossa equipe técnica pode entender a sua necessidade e indicar o melhor caminho para o seu sistema elétrico.</p></div><a className="slWhatsapp large" href={wa(data.metaTitle)} target="_blank" rel="noreferrer">Falar com um especialista</a></div></section>

    <nav className="slRelated" aria-label="Outras soluções"><div className="slContainer"><Link href="/#solucoes">← Voltar para todas as soluções</Link><Link href="/locacao-de-equipamentos">Locação de equipamentos →</Link></div></nav>
  </main>
}
