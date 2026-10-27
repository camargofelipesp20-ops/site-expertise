import type {Metadata} from 'next';
import {RentalRoute} from '../RentalSite';
import {equipmentMeta} from '../equipmentMeta';

export async function generateMetadata({params}:{params:Promise<{parts?:string[]}>}):Promise<Metadata>{
  const {parts=[]}=await params;
  const [catSlug,itemSlug]=parts;
  const item=equipmentMeta.find(x=>x.catSlug===catSlug&&x.slug===itemSlug);
  if(item){
    return {title:`Locação ${item.brand} ${item.model} | Expertise Engenharia`,description:item.short};
  }
  const category=equipmentMeta.find(x=>x.catSlug===catSlug)?.cat;
  if(category){
    return {title:`Locação de ${category} | Expertise Engenharia`,description:`Equipamentos profissionais para ${category.toLowerCase()}, com suporte técnico e disponibilidade sob consulta.`};
  }
  return {title:'Locação de Equipamentos | Expertise Engenharia',description:'Catálogo completo de equipamentos para engenharia elétrica, qualidade de energia, aterramento, isolação, termografia e ensaios.'};
}

export default async function Page({params}:{params:Promise<{parts?:string[]}>}){
  const {parts=[]}=await params;
  return <RentalRoute parts={parts}/>;
}
