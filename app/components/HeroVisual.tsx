'use client';

import { useEffect, useState } from 'react';

type Kind = 'home' | 'rental' | 'monitoring' | 'studies' | 'installations';

const labels: Record<Kind,string> = {
  home:'Engenharia em campo',
  rental:'Analisador de energia',
  monitoring:'Monitoramento e avaliação',
  studies:'Estudos elétricos',
  installations:'Instalações e manutenção'
};

const chunks: Record<Kind,string[]> = {
  home:['home-hq-0.txt','home-hq-1.txt','home-hq-2.txt','home-hq-3.txt','home-hq-4.txt','home-hq-5.txt'],
  rental:['rental-hq-0.txt','rental-hq-1.txt','rental-hq-2.txt','rental-hq-3.txt','rental-hq-4.txt','rental-hq-5.txt'],
  monitoring:['monitoring0.txt','monitoring1.txt'],
  studies:['studies-hq-0.txt','studies-hq-1.txt','studies-hq-2.txt','studies-hq-3.txt','studies-hq-4.txt','studies-hq-5.txt'],
  installations:['installations0.txt','installations1.txt']
};

function extractBase64(text:string){
  const match=text.match(/export default ['\"]([A-Za-z0-9+/=]+)['\"]/);
  return match?.[1] ?? '';
}

export default function HeroVisual({kind='home'}:{kind?:Kind}){
  const [src,setSrc]=useState('');

  useEffect(()=>{
    let active=true;
    setSrc('');

    Promise.all(chunks[kind].map(async file=>{
      const response=await fetch(`/assets/${file}`);
      if(!response.ok) throw new Error(`Falha ao carregar ${file}`);
      const part=extractBase64(await response.text());
      if(!part) throw new Error(`Bloco inválido: ${file}`);
      return part;
    }))
      .then(parts=>{
        if(active) setSrc(`data:image/webp;base64,${parts.join('')}`);
      })
      .catch(()=>{ if(active) setSrc(''); });

    return ()=>{active=false};
  },[kind]);

  return <div aria-label={labels[kind]} style={{width:'100%',height:'100%',minHeight:'inherit',overflow:'hidden'}}>
    {src ? <img src={src} alt={labels[kind]} style={{display:'block',width:'100%',height:'100%',minHeight:'255px',objectFit:'cover',objectPosition:'center'}} /> : <div aria-hidden="true" style={{width:'100%',height:'100%',minHeight:'255px',background:'#eef2f5'}} />}
  </div>
}
