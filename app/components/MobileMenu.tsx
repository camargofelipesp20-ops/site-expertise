'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu(){
  const [open,setOpen]=useState(false);
  return <div className="mobileNav">
    <button className="menuBtn" aria-label="Abrir menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><span></span><span></span><span></span></button>
    {open&&<div className="menuPanel">
      <Link onClick={()=>setOpen(false)} href="/#solucoes">Soluções</Link>
      <Link onClick={()=>setOpen(false)} href="/locacao-de-equipamentos">Locação de Equipamentos</Link>
      <Link onClick={()=>setOpen(false)} href="/#como-atuamos">Como atuamos</Link>
      <Link onClick={()=>setOpen(false)} href="/#sobre">Sobre</Link>
      <Link onClick={()=>setOpen(false)} href="/#contato">Contato</Link>
      <a className="menuWhats" href="https://wa.me/5519997988672" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a>
    </div>}
  </div>
}
