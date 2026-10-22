import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Expertise Engenharia',
  description: 'Soluções em engenharia elétrica, qualidade de energia, locação de equipamentos, estudos, instalações e manutenções.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="container headerInner">
            <Link className="brand" href="/" aria-label="Expertise Engenharia">
              <span className="brandMark"><span></span></span>
              <span><strong>EXPERTISE</strong><small>ENGENHARIA</small></span>
            </Link>
            <nav className="nav">
              <Link href="/#solucoes">Soluções</Link>
              <Link href="/#sobre">Sobre</Link>
              <Link href="/#contato">Contato</Link>
              <a className="outlineBtn" href="https://wa.me/5519997988672" target="_blank" rel="noreferrer">WhatsApp</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container footerGrid">
            <div className="brand footerBrand"><span className="brandMark"><span></span></span><span><strong>EXPERTISE</strong><small>ENGENHARIA</small></span></div>
            <p>Engenharia elétrica com profundidade técnica, foco em segurança e resultado.</p>
            <p>Campinas - SP<br/>Atendimento em todo o Estado de São Paulo.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
