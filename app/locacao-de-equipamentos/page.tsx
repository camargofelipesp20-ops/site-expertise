import type {Metadata} from 'next';
import {Catalog} from '../locacao/RentalSite';

export const metadata:Metadata={
  title:'Locação de Equipamentos | Expertise Engenharia',
  description:'Catálogo de analisadores de energia, terrômetros, megômetros, termografia, hipot, miliohmímetros e equipamentos para engenharia elétrica.'
};

export default function Page(){
  return <Catalog/>;
}
