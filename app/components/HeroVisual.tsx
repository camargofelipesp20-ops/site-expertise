import homeImage from '../assets/home';
import rentalImage from '../assets/rental';
import monitoringImage from '../assets/monitoring';
import studiesImage from '../assets/studies';
import installationsImage from '../assets/installations';

export default function HeroVisual({kind='home'}:{kind?:'home'|'rental'|'monitoring'|'studies'|'installations'}){
  const labels={home:'Engenharia em campo',rental:'Analisador de energia',monitoring:'Monitoramento e avaliação',studies:'Estudos elétricos',installations:'Instalações e manutenção'};
  const images={home:homeImage,rental:rentalImage,monitoring:monitoringImage,studies:studiesImage,installations:installationsImage};
  return <div aria-label={labels[kind]} style={{width:'100%',height:'100%',minHeight:'inherit',overflow:'hidden'}}>
    <img src={images[kind]} alt={labels[kind]} style={{display:'block',width:'100%',height:'100%',minHeight:'255px',objectFit:'cover',objectPosition:'center'}} />
  </div>
}
