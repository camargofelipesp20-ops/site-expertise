import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import ServiceLanding from '../ServiceLanding';
import {serviceBySlug,servicePages} from '../serviceData';

export function generateStaticParams(){return servicePages.map(item=>({slug:item.slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params;
  const data=serviceBySlug(slug);
  if(!data) return {};
  return {
    title:data.metaTitle,
    description:data.metaDescription,
    alternates:{canonical:`/servicos/${data.slug}`},
    openGraph:{title:`${data.metaTitle} | Expertise Engenharia`,description:data.metaDescription,type:'website'}
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const data=serviceBySlug(slug);
  if(!data) notFound();
  return <ServiceLanding data={data}/>;
}
