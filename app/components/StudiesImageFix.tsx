'use client';

import { useEffect } from 'react';
import studiesResultV6 from '../assets/studiesResultV6';

export default function StudiesImageFix(){
  useEffect(()=>{
    const apply=()=>{
      const img=document.querySelector<HTMLImageElement>('img[alt="Painéis elétricos"]');
      if(img && img.src !== studiesResultV6){
        img.src=studiesResultV6;
        img.removeAttribute('srcset');
      }
    };
    apply();
    const observer=new MutationObserver(apply);
    observer.observe(document.body,{childList:true,subtree:true});
    return ()=>observer.disconnect();
  },[]);
  return null;
}
