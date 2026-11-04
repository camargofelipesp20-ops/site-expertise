import type {Metadata} from 'next';
import EVLanding from '../mobilidade-eletrica/EVLanding';
import {report} from '../mobilidade-eletrica/content';

const canonical='https://www.expertise-eng.com.br/laudo-negado-carregador-veiculo-eletrico';
const title='Laudo Negado para Carregador de VE? | Expertise Engenharia';
const description='Seu condomínio recebeu um laudo desfavorável para carregadores de veículos elétricos? Conheça alternativas técnicas para avaliar a viabilidade da instalação.';
export const metadata:Metadata={
  title:{absolute:title},description,
  alternates:{canonical},
  openGraph:{type:'website',locale:'pt_BR',title,description,url:canonical,siteName:'Expertise Engenharia',
    images:[{url:'https://images.pexels.com/photos/34800930/pexels-photo-34800930.jpeg?auto=compress&cs=tinysrgb&w=1200',width:1200,height:630,alt:'Carregador de veículo elétrico em garagem'}]},
  twitter:{card:'summary_large_image',title,description}
};
export default function Page(){return <EVLanding data={report}/>;}
