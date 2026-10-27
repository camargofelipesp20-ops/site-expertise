'use client';

import {useEffect} from 'react';

const rentalRoutes:Record<string,string>={
  'Analisadores de Energia':'/locacao/analisadores-de-energia',
  'Termografia Elétrica':'/locacao/termovisores',
  'Alicates de Medição':'/locacao/terrometros/fluke-1630',
  'Aterramento e Ensaios':'/locacao/terrometros'
};

export default function RentalCardLinks(){
  useEffect(()=>{
    const cleanups:Array<()=>void>=[];

    document.querySelectorAll<HTMLElement>('.equipmentCard').forEach(card=>{
      const title=card.querySelector('h3')?.textContent?.trim();
      const href=title?rentalRoutes[title]:undefined;
      if(!href)return;

      card.setAttribute('role','link');
      card.setAttribute('tabindex','0');
      card.setAttribute('aria-label',`Ver locação de ${title}`);
      card.dataset.href=href;

      const navigate=()=>{window.location.href=href};
      const onClick=(event:MouseEvent)=>{
        if((event.target as HTMLElement).closest('a,button,input,select,textarea'))return;
        navigate();
      };
      const onKey=(event:KeyboardEvent)=>{
        if(event.key==='Enter'||event.key===' '){
          event.preventDefault();
          navigate();
        }
      };

      card.addEventListener('click',onClick);
      card.addEventListener('keydown',onKey);
      cleanups.push(()=>{
        card.removeEventListener('click',onClick);
        card.removeEventListener('keydown',onKey);
      });
    });

    return ()=>cleanups.forEach(fn=>fn());
  },[]);

  return <style jsx global>{`
    .equipmentCard[data-href]{
      cursor:pointer;
      transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;
    }
    .equipmentCard[data-href]:hover,
    .equipmentCard[data-href]:focus-visible{
      transform:translateY(-4px);
      border-color:#f47b20;
      box-shadow:0 12px 30px rgba(15,45,77,.13);
      outline:none;
    }
    .equipmentCard[data-href]:hover .more,
    .equipmentCard[data-href]:focus-visible .more{
      text-decoration:underline;
      text-underline-offset:3px;
    }
  `}</style>;
}
