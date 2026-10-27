import type {Metadata} from 'next';
import {equipment,RentalRoute} from '../RentalSite';

export async function generateMetadata({params}:{params:Promise<{parts:string[]}>}):Promise<Metadata>{
  const {parts}=await params;
  const [catSlug,itemSlug]=parts;
  const item=equipment.find(x=>x.catSlug===catSlug&&x.slug===itemSlug);
  if(item){
    return {
      title:`Locação ${item.brand} ${item.model} | Expertise Engenharia`,
      description:item.short
    };
  }
  return {
    title:'Locação de Equipamentos Elétricos | Expertise Engenharia',
    description:'Equipamentos profissionais para locação técnica em engenharia elétrica.'
  };
}

export default async function Page({params}:{params:Promise<{parts:string[]}>}){
  const {parts}=await params;
  return <RentalRoute parts={parts}/>;
}
