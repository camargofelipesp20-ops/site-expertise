'use client';

import {useEffect} from 'react';

type GTMWindow = Window & {dataLayer?: Array<Record<string, string>>};

/**
 * Registra um único evento customizado para cada clique em link do WhatsApp.
 * Sem dados pessoais e sem informações das mensagens pré-preenchidas no link.
 * O envio ao GA4 é feito exclusivamente pelo Google Tag Manager.
 */
export default function WhatsAppClickTracker(){
  useEffect(()=>{
    function onClick(event: MouseEvent){
      if(!(event.target instanceof Element)) return;
      const link=event.target.closest<HTMLAnchorElement>('a[href*="wa.me/"]');
      if(!link) return;
      const w=window as GTMWindow;
      w.dataLayer=w.dataLayer||[];
      const position=link.dataset.waPosition||
        (link.closest('header')?'header':link.closest('footer')?'footer':'page');
      w.dataLayer.push({
        event:'whatsapp_click',
        page_path:window.location.pathname,
        cta_position:position,
        service:link.dataset.waService||'geral',
        channel:'site'
      });
    }
    // Captura o clique antes da navegação para o WhatsApp.
    document.addEventListener('click',onClick,true);
    return ()=>document.removeEventListener('click',onClick,true);
  },[]);
  return null;
}
