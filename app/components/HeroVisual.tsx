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
  home:['home0.txt','home1.txt'],
  rental:['rental0.txt','rental1.txt'],
  monitoring:['monitoring0.txt','monitoring1.txt'],
  studies:['studies0.txt','studies1.txt'],
  installations:['installations0.txt','installations1.txt']
};

function extractBase64(text:string){
  const match=text.match(/export default ['"]([A-Za-z0-9+/=]+)['"]/);
  return match?.[1] ?? '';
}

export default function HeroVisual({kind='home'}:{kind?:Kind}){
  const [src,setSrc]=useState('');

  useEffect(()=>{
    let active=true;
    setSrc('');
    Promise.all(chunks[kind].map(file=>fetch(`/assets/${file}`).then(r=>{
      if(!r.ok) throw new Error(`Falha ao carregar ${file}`);
      return r.text();
    })))
      .then(parts=>{
        if(!active) return;
        const base64=parts.map(extractBase64).join('');
        if(base64) setSrc(`data:image/webp;base64,${base64}`);
      })
      .catch(()=>{ if(active) setSrc(''); });
    return ()=>{active=false};
  },[kind]);

  return <div aria-label={labels[kind]} style={{width:'100%',height:'100%',minHeight:'inherit',overflow:'hidden'}}>
    {src ? <img src={src} alt={labels[kind]} style={{display:'block',width:'100%',height:'100%',minHeight:'255px',objectFit:'cover',objectPosition:'center'}} /> : <div aria-hidden="true" style={{width:'100%',height:'100%',minHeight:'255px',background:'#eef2f5'}} />}
  </div>
}
