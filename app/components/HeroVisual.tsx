export default function HeroVisual({kind='home'}:{kind?:'home'|'rental'|'monitoring'|'studies'|'installations'}){
  const labels={home:'Engenharia em campo',rental:'Analisador de energia',monitoring:'Monitoramento e avaliação',studies:'Estudos elétricos',installations:'Instalações e manutenção'};
  const images={
    home:'/assets/home-hero.webp',
    rental:'/assets/locacao-hero.webp',
    monitoring:'/assets/monitoramento-hero.webp',
    studies:'/assets/estudos-hero.webp',
    installations:'/assets/instalacoes-hero.webp'
  };
  const positions={home:'center',rental:'center',monitoring:'center',studies:'center',installations:'center'};
  return <div aria-label={labels[kind]} style={{width:'100%',height:'100%',minHeight:'inherit',overflow:'hidden'}}>
    <img src={images[kind]} alt={labels[kind]} style={{display:'block',width:'100%',height:'100%',minHeight:'255px',objectFit:'cover',objectPosition:positions[kind]}} />
  </div>
}
