'use client';

import type {ReactNode} from 'react';

type Props = {
  message:string;
  page:'instalacao'|'laudo';
  location:'hero'|'middle'|'final'|'floating';
  className?:string;
  children:ReactNode;
};

export default function WhatsAppLink({message,page,location,className='',children}:Props){
  const url='https://wa.me/5519997988672?text='+encodeURIComponent(message);
  function recordClick(){
    // Não instala nem duplica serviços de rastreamento.
    // Se o GTM for configurado futuramente, poderá ouvir este evento.
    const w=window as Window & {dataLayer?:Array<Record<string,string>>};
    w.dataLayer?.push({event:'whatsapp_click',service:page,cta_position:location,channel:'site'});
  }
  return <a className={className} href={url} target="_blank" rel="noopener noreferrer" onClick={recordClick}>{children}</a>;
}
