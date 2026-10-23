import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Logo from './components/Logo';
import MobileMenu from './components/MobileMenu';

export const metadata: Metadata = {
  metadataBase:new URL('https://expertise-eng.com.br'),
  title:{default:'Expertise Engenharia | Soluções em Engenharia Elétrica',template:'%s | Expertise Engenharia'},
  description:'Engenharia elétrica, qualidade de energia, locação de equipamentos, estudos, instalações e manutenções para indústrias, condomínios e profissionais do setor.',
  openGraph:{title:'Expertise Engenharia',description:'Soluções em engenharia elétrica com foco em segurança, eficiência e confiabilidade.',type:'website',locale:'pt_BR'}
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="pt-BR"><body>
    <header className="header"><div className="container headerInner">
      <Link href="/" className="brandLink"><Logo/></Link>
      <nav className="desktopNav"><Link href="/#solucoes">Soluções</Link><Link href="/#como-atuamos">Como atuamos</Link><Link href="/#sobre">Sobre</Link><Link href="/#contato">Contato</Link><a className="outlineBtn" href="https://wa.me/5519997988672" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></nav>
      <MobileMenu/>
    </div></header>
    {children}
    <footer className="footer"><div className="container footerInner"><Logo/><p>Engenharia elétrica para operações mais seguras e eficientes.</p><div><strong>Campinas - SP</strong><span>Atendimento em todo o Estado de SP</span></div></div><div className="container footerBottom"><span>© 2026 Expertise Engenharia. Todos os direitos reservados.</span><nav><Link href="/#solucoes">Soluções</Link><Link href="/#sobre">Sobre</Link><Link href="/#contato">Contato</Link></nav></div></footer>
  </body></html>
}
