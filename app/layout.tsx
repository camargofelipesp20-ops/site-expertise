import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';
import './final-tuning.css';
import './studies-no-image.css';
import './rental-hero-fix.css';
import Logo from './components/Logo';
import MobileMenu from './components/MobileMenu';
import RentalCardLinks from './components/RentalCardLinks';
import WhatsAppClickTracker from './components/WhatsAppClickTracker';

export const metadata: Metadata = {
  metadataBase:new URL('https://expertise-eng.com.br'),
  title:{default:'Expertise Engenharia | Soluções em Engenharia Elétrica',template:'%s | Expertise Engenharia'},
  description:'Engenharia elétrica, qualidade de energia, locação de equipamentos, estudos, instalações e manutenções para indústrias, condomínios e profissionais do setor.',
  openGraph:{title:'Expertise Engenharia',description:'Soluções em engenharia elétrica com foco em segurança, eficiência e confiabilidade.',type:'website',locale:'pt_BR'}
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR">
<head>
  {/* O GA4 será configurado exclusivamente dentro do GTM, evitando duplicidade de page_view. */}
  <Script id="expertise-google-tag-manager" strategy="beforeInteractive" dangerouslySetInnerHTML={{__html:
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KLXDQ223');"
  }}/>
</head><body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLXDQ223" height="0" width="0" style={{display:'none',visibility:'hidden'}} title="Google Tag Manager"/></noscript>
<header className="header"><div className="container headerInner"><Link href="/" className="brandLink"><Logo/></Link><nav className="desktopNav"><Link href="/#solucoes">Soluções</Link><Link href="/locacao-de-equipamentos">Locação de Equipamentos</Link><Link href="/#como-atuamos">Como atuamos</Link><Link href="/#sobre">Sobre</Link><Link href="/#contato">Contato</Link><a className="outlineBtn" href="https://wa.me/5519997988672" target="_blank" rel="noreferrer">Falar pelo WhatsApp</a></nav><MobileMenu/></div></header>
<RentalCardLinks/>
<WhatsAppClickTracker/>
{children}
<footer className="footer"><div className="container footerInner"><Logo/><p>Engenharia elétrica para operações mais seguras e eficientes.</p><div className="footerMeta"><span>⌖ Campinas - SP</span><span>◫ Atendimento em todo o Estado de SP</span></div><div className="footerSocial"><span>in</span><span>◎</span></div></div><div className="container footerBottom"><span>© 2026 Expertise Engenharia. Todos os direitos reservados.</span><nav><Link href="/#solucoes">Soluções</Link><Link href="/locacao-de-equipamentos">Locação</Link><Link href="/#sobre">Sobre</Link><Link href="/#contato">Contato</Link></nav></div></footer>
</body></html>}
