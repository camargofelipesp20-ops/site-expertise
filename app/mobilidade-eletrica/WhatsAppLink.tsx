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
  // O listener global do site envia o evento uma única vez por clique.
  return <a className={className} href={url} target="_blank" rel="noopener noreferrer" data-wa-service={page} data-wa-position={location}>{children}</a>;
}
