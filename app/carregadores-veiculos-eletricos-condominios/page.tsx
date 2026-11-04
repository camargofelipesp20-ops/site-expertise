import type {Metadata} from 'next';
import EVLanding from '../mobilidade-eletrica/EVLanding';
import {install} from '../mobilidade-eletrica/content';

const canonical='https://www.expertise-eng.com.br/carregadores-veiculos-eletricos-condominios';
const title='Instalação de Carregadores para Condomínios | Expertise Engenharia';
const description='Projetos e instalação de carregadores de veículos elétricos em condomínios. Engenharia elétrica, infraestrutura, segurança e soluções escaláveis. Campinas e SP.';
export const metadata:Metadata={
  title:{absolute:title},description,
  alternates:{canonical},
  openGraph:{type:'website',locale:'pt_BR',title,description,url:canonical,siteName:'Expertise Engenharia',
    images:[{url:'https://images.pexels.com/photos/28851165/pexels-photo-28851165.jpeg?auto=compress&cs=tinysrgb&w=1200',width:1200,height:630,alt:'Carregamento de veículos elétricos em garagem'}]},
  twitter:{card:'summary_large_image',title,description}
};
export default function Page(){return <EVLanding data={install}/>;}
