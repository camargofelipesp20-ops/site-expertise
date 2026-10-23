'use client';
import { FormEvent, useState } from 'react';

const number='5519997988672';

export default function LeadForm({service='Engenharia elétrica'}:{service?:string}){
  const [sent,setSent]=useState(false);
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const fd=new FormData(e.currentTarget);
    const nome=String(fd.get('nome')||'');
    const empresa=String(fd.get('empresa')||'');
    const telefone=String(fd.get('telefone')||'');
    const email=String(fd.get('email')||'');
    const mensagem=String(fd.get('mensagem')||'');
    const text=[`Olá, sou ${nome}. Gostaria de falar sobre ${service}.`,empresa&&`Empresa: ${empresa}`,telefone&&`Telefone: ${telefone}`,email&&`E-mail: ${email}`,mensagem&&`Necessidade: ${mensagem}`].filter(Boolean).join('\n');
    setSent(true);
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');
  }
  return <form className="leadForm" onSubmit={submit}>
    <div className="formRow"><label>Nome *<input name="nome" required placeholder="Seu nome"/></label><label>Empresa<input name="empresa" placeholder="Sua empresa"/></label></div>
    <div className="formRow"><label>WhatsApp *<input name="telefone" required placeholder="(19) 99999-9999"/></label><label>E-mail<input name="email" type="email" placeholder="seu@email.com"/></label></div>
    <label>Mensagem<textarea name="mensagem" placeholder="Conte brevemente sua necessidade..."/></label>
    <button className="btn full" type="submit">Enviar solicitação →</button>
    <p className="formNote" aria-live="polite">{sent?'Abrimos o WhatsApp com sua solicitação pronta para enviar.':'Ao enviar, abriremos uma conversa no WhatsApp com os dados preenchidos.'}</p>
  </form>
}
