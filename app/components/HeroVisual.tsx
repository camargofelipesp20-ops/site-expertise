export default function HeroVisual({kind='home'}:{kind?:'home'|'rental'|'monitoring'|'studies'|'installations'}){
  const labels={home:'QUALIDADE DE ENERGIA',rental:'ANALISADOR DE ENERGIA',monitoring:'MONITORAMENTO',studies:'ESTUDOS ELÉTRICOS',installations:'INSTALAÇÕES E MANUTENÇÃO'};
  return <div className={`techVisual ${kind}`} aria-label={labels[kind]}>
    <div className="visualGrid"></div>
    <div className="device">
      <div className="deviceTop"><i></i><i></i><i></i></div>
      <div className="screen"><svg viewBox="0 0 420 180" role="img" aria-label="Forma de onda elétrica"><path className="gridLine" d="M0 45h420M0 90h420M0 135h420M70 0v180M140 0v180M210 0v180M280 0v180M350 0v180"/><path className="waveA" d="M0 96 C25 96 28 60 45 60 S68 130 88 130 S110 38 135 38 S160 112 183 112 S205 72 228 72 S250 104 274 104 S300 55 326 55 S350 119 375 119 S398 82 420 82"/><path className="waveB" d="M0 113 C23 113 35 102 51 102 S72 72 91 72 S112 121 132 121 S156 92 176 92 S195 62 218 62 S245 126 268 126 S292 86 315 86 S338 106 360 106 S390 76 420 76"/></svg></div>
      <div className="deviceBottom"><span></span><span></span><span></span><span></span></div>
    </div>
    <div className="visualTag"><span></span>{labels[kind]}</div>
  </div>
}
