import Link from 'next/link';
import LeadForm from '../components/LeadForm';
import LineIcon from '../components/LineIcon';
import WhatsAppLink from './WhatsAppLink';
import {type LandingData, type LandingCard} from './content';
import './ev.css';

function IconCard({item,ordinal}:{item:LandingCard;ordinal?:string}){
  return <article className="evCard">
    <div className="evCardTop"><span className="evCardIcon"><LineIcon name={item.icon}/></span>{ordinal&&<span className="evCardNumber">{ordinal}</span>}</div>
    <h3>{item.title}</h3><p>{item.description}</p>
  </article>;
}

function StepList({data}:{data:LandingData}){
  return <ol className="evSteps">
    {data.steps.map((step,i)=><li key={step.title} className="evStep">
      <span className="evStepNumber">{String(i+1).padStart(2,'0')}</span>
      <div><h3>{step.title}</h3><p>{step.description}</p></div>
    </li>)}
  </ol>;
}

function FAQ({data}:{data:LandingData}){
  return <section className="evSection evFaqSection" id="perguntas-frequentes">
    <div className="evContainer evFaqLayout">
      <div className="evFaqAside"><span className="evEyebrow">Perguntas frequentes</span>
        <h2>Respostas para decidir com mais segurança.</h2>
        <p>As condições técnicas variam entre condomínios. As respostas abaixo são orientações gerais, não um laudo individual.</p>
        <WhatsAppLink page={data.key} message={data.message} location="middle" className="evButton evButtonOutline">Tirar uma dúvida com a Expertise</WhatsAppLink>
      </div>
      <div className="evFaqList">
        {data.faqs.map((faq,i)=><details key={faq.question} className="evFaq" open={i===0}>
          <summary><span>{faq.question}</span><span className="evPlus" aria-hidden="true">+</span></summary>
          <p>{faq.answer}</p>
        </details>)}
      </div>
    </div>
  </section>;
}

const comparativeFlow=['Laudo desfavorável','Identificação dos impeditivos','Estudo de alternativas','Solução viável, quando possível'];

export default function EVLanding({data}:{data:LandingData}){
  const installation=data.key==='instalacao';
  const otherUrl=installation?'/laudo-negado-carregador-veiculo-eletrico':'/carregadores-veiculos-eletricos-condominios';
  const otherLabel=installation?'Recebeu um laudo desfavorável?':'Precisa instalar carregadores no condomínio?';
  const target=installation?'instalacao':'laudo';
  return <main className="evLanding">
    <div className="evBreadcrumb"><div className="evContainer"><Link href="/">Início</Link><span aria-hidden="true"> / </span><span>Mobilidade elétrica</span><span aria-hidden="true"> / </span><strong>{installation?'Instalação completa':'Revisão de laudo desfavorável'}</strong></div></div>

    <section className="evHero">
      <div className="evContainer evHeroGrid">
        <div className="evHeroText">
          <div className="evEyebrow evEyebrowLight">{data.eyebrow}</div>
          <h1>{data.h1}</h1>
          <p>{data.heroText}</p>
          <div className="evHeroActions">
            <WhatsAppLink page={data.key} message={data.message} location="hero" className="evButton evButtonWhatsApp">{data.heroCta}</WhatsAppLink>
            <a className="evButton evButtonGhost" href="#como-funciona">{installation?'Entenda como funciona':'Como avaliamos o laudo'}</a>
          </div>
          <span className="evHeroPromise">Conversa inicial gratuita • Diagnósticos e serviços técnicos contratados quando necessários</span>
        </div>
        <figure className="evHeroImage">
          <img src={data.heroImage} width={1600} height={1040} alt={data.heroAlt} fetchPriority="high" />
          <figcaption>Imagem ilustrativa de infraestrutura de recarga</figcaption>
          {!installation&&<div className="evHeroImageNote"><span>LAUDO DESFAVORÁVEL?</span><strong>Entenda os motivos técnicos antes de desistir.</strong></div>}
        </figure>
      </div>
    </section>

    <section className="evTrustStrip" aria-label="Conheça a Expertise">
      <div className="evContainer evTrustGrid">
        <div><strong>+24 anos</strong><span>de atuação em engenharia elétrica</span></div>
        <div><strong>Equipe técnica</strong><span>especializada em sistemas elétricos</span></div>
        <div><strong>Campinas e SP</strong><span>atendimento em todo o estado</span></div>
        <div><strong>Do estudo à execução</strong><span>conforme escopo contratado</span></div>
      </div>
    </section>

    {installation ? <>
      <section className="evSection" id="preocupacoes">
        <div className="evContainer">
          <div className="evSectionHeading"><span className="evEyebrow">Planejamento e segurança</span>
            <h2>Seu condomínio está preparado para receber veículos elétricos?</h2>
            <p>Um projeto deve olhar para o condomínio como um todo, e não apenas para uma vaga de garagem.</p>
          </div>
          <div className="evCards evCards4">{data.problems?.map((x,i)=><IconCard key={x.title} item={x} ordinal={'0'+(i+1)}/>)}</div>
        </div>
      </section>

      <section className="evSection evSectionSoft" id="como-funciona">
        <div className="evContainer">
          <div className="evSplitHeading">
            <div><span className="evEyebrow">Solução completa Expertise</span><h2>Da análise técnica à instalação: uma solução completa para o condomínio.</h2></div>
            <p>Seguimos um processo estruturado, adequado à demanda e à realidade da instalação. Cada etapa técnica é definida e contratada conforme a necessidade.</p>
          </div>
          <StepList data={data}/>
          <p className="evScopeNote"><strong>Importante:</strong> a conversa inicial é gratuita. Medições, diagnóstico detalhado, laudo, parecer técnico, projeto executivo e ART não estão incluídos gratuitamente.</p>
        </div>
      </section>

      <section className="evSection" id="solucoes">
        <div className="evContainer">
          <div className="evFeatureSplit">
            <div><span className="evEyebrow">Infraestrutura inteligente</span>
              <h2>Soluções para o presente e para a expansão futura.</h2>
              <p>O desenho do sistema pode combinar infraestrutura coletiva, medição individual e gestão de carga. A composição adequada depende da análise de cada condomínio.</p>
            </div>
            <figure className="evFeatureImage"><img src="https://images.pexels.com/photos/34800677/pexels-photo-34800677.jpeg?auto=compress&cs=tinysrgb&w=1300" width={1200} height={800} loading="lazy" alt="Carregador e veículo elétrico em instalação interna moderna"/><figcaption>Foto ilustrativa</figcaption></figure>
          </div>
          <div className="evCards evCards4">{data.solutions?.map(item=><IconCard key={item.title} item={item}/>)}</div>
          <div className="evMidCta"><div><strong>Seu condomínio precisa de uma solução sob medida?</strong><span>Comece com uma conversa inicial sem custo.</span></div>
            <WhatsAppLink page={data.key} message={data.message} location="middle" className="evButton evButtonWhatsApp">Falar com um especialista</WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="evSection evWhy">
        <div className="evContainer evWhyGrid">
          <div><span className="evEyebrow">Por que a Expertise?</span><h2>Engenharia antes de instalar.</h2><p>Não tratamos carregadores apenas como equipamentos. Consideramos o sistema elétrico, a operação do condomínio e a expansão futura.</p></div>
          <ul>
            <li>Mais de 24 anos de atuação.</li>
            <li>Especialização em engenharia elétrica.</li>
            <li>Experiência em medições e avaliação de sistemas elétricos.</li>
            <li>Soluções adaptadas à infraestrutura existente.</li>
            <li>Atuação desde o estudo até a implantação.</li>
            <li>Atendimento em Campinas e no estado de São Paulo.</li>
          </ul>
        </div>
      </section>
    </> : <>
      <section className="evSection" id="motivos">
        <div className="evContainer">
          <div className="evSectionHeading"><span className="evEyebrow">Entenda a negativa</span>
            <h2>Três razões comuns para um laudo desfavorável.</h2>
            <p>O impedimento identificado pode exigir um novo caminho técnico — ou confirmar uma restrição que deve ser respeitada.</p>
          </div>
          <div className="evReasonGrid">{data.reasons?.map((reason,i)=><article className="evReason" key={reason.title}>
            <div className="evReasonImage"><img src={reason.image} width={780} height={520} loading="lazy" alt={reason.imageAlt}/><span>0{i+1}</span></div>
            <div className="evReasonBody"><h3>{reason.title}</h3><p>{reason.description}</p><h4>Possíveis alternativas a estudar</h4><ul>{reason.options.map(x=><li key={x}>{x}</li>)}</ul></div>
          </article>)}</div>
          <p className="evImageCredit">Fotos ilustrativas: Pexels. Nenhuma das imagens representa um serviço específico realizado pela Expertise.</p>
        </div>
      </section>

      <section className="evSection evSectionSoft" id="como-funciona">
        <div className="evContainer">
          <div className="evSectionHeading"><span className="evEyebrow">Reavaliação técnica</span>
            <h2>Um laudo negativo não significa necessariamente inviabilidade definitiva.</h2>
            <p>Não se trata de simplesmente contestar outro profissional: buscamos compreender os fundamentos da negativa e verificar alternativas tecnicamente responsáveis.</p>
          </div>
          <ol className="evFlow">{comparativeFlow.map((label,i)=><li key={label}><span>{String(i+1).padStart(2,'0')}</span><strong>{label}</strong></li>)}</ol>
          <p className="evScopeNote"><strong>Sem garantia de reversão.</strong> A revisão pode encontrar alternativas, exigir adequações ou confirmar que a instalação não é viável nas condições avaliadas.</p>
        </div>
      </section>

      <section className="evSection" id="revisao">
        <div className="evContainer">
          <div className="evSplitHeading">
            <div><span className="evEyebrow">Como podemos ajudar?</span><h2>Da conversa inicial à eventual implantação.</h2></div>
            <p>As etapas técnicas são propostas conforme a documentação existente e a complexidade do caso. Não oferecemos laudo, medições ou ART gratuitamente.</p>
          </div>
          <StepList data={data}/>
          <div className="evMidCta"><div><strong>Já recebeu um laudo desfavorável?</strong><span>Vamos entender o histórico e explicar os próximos passos possíveis.</span></div>
            <WhatsAppLink page={data.key} message={data.message} location="middle" className="evButton evButtonWhatsApp">Quero avaliar meu caso</WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="evSection evSectionSoft" id="para-quem">
        <div className="evContainer">
          <div className="evSectionHeading"><span className="evEyebrow">Para quem é esta solução?</span><h2>Condomínios que precisam de clareza técnica.</h2></div>
          <div className="evCards evCards3">{data.audiences?.map(item=><IconCard item={item} key={item.title}/>)}</div>
        </div>
      </section>
    </>}

    <FAQ data={data}/>

    <section className="evSection evRelated">
      <div className="evContainer evRelatedGrid">
        <div><span className="evEyebrow">Outras soluções para mobilidade elétrica</span><h2>{otherLabel}</h2><p>{installation?'Podemos analisar os fundamentos do laudo e estudar alternativas técnicas.':'Conheça nossa solução completa de projeto, infraestrutura e instalação.'}</p></div>
        <Link href={otherUrl} className="evButton evButtonOutline">{installation?'Conhecer revisão de laudos':'Conhecer instalação completa'} →</Link>
      </div>
    </section>

    <section className="evFinal" id="contato-mobilidade">
      <div className="evContainer evFinalGrid">
        <div className="evFinalCopy">
          <span className="evEyebrow evEyebrowLight">Converse com a Expertise Engenharia</span>
          <h2>{data.closingTitle}</h2><p>{data.closingText}</p>
          <WhatsAppLink page={data.key} message={data.message} location="final" className="evButton evButtonWhatsApp">{data.closingCta}</WhatsAppLink>
          <p className="evFinePrint">Conversa inicial gratuita. Serviços técnicos especializados e documentos profissionais mediante proposta e contratação.</p>
        </div>
        <div className="evFormPanel"><h3>Prefere descrever sua necessidade?</h3><p>Preencha os dados; o formulário abrirá o WhatsApp com a solicitação preparada para você enviar.</p><LeadForm service={installation?'Instalação de carregadores em condomínios':'Revisão de laudo de carregador em condomínio'} button="Continuar no WhatsApp"/></div>
      </div>
    </section>

    <WhatsAppLink page={data.key} message={data.message} location="floating" className="evFloating" >Falar no WhatsApp</WhatsAppLink>
  </main>;
}
