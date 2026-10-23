type IconName='chart'|'pin'|'team'|'globe'|'rental'|'wave'|'doc'|'tool'|'shield'|'gear'|'bolt'|'factory'|'building'|'calendar'|'headset'|'truck'|'target'|'thermal'|'meter';

export default function LineIcon({name}:{name:IconName}){
  const p={stroke:'currentColor',strokeWidth:1.8,fill:'none',strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
  const icons:Record<IconName,React.ReactNode>={
    chart:<><path {...p} d="M5 19V11M10 19V7M15 19V13M20 19V4"/></>,
    pin:<><path {...p} d="M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z"/><circle {...p} cx="12" cy="9" r="2"/></>,
    team:<><circle {...p} cx="9" cy="8" r="3"/><circle {...p} cx="17" cy="9" r="2.5"/><path {...p} d="M3 20c0-4 2-7 6-7s6 3 6 7M14 15c4-1 7 1 7 5"/></>,
    globe:<><circle {...p} cx="12" cy="12" r="9"/><path {...p} d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9z"/></>,
    rental:<><rect {...p} x="5" y="4" width="14" height="16" rx="2"/><path {...p} d="M8 8h8M9 13h6M10 17h4"/></>,
    wave:<><path {...p} d="M2 13c3 0 3-6 6-6s3 10 6 10 3-8 6-8 3 4 4 4"/></>,
    doc:<><path {...p} d="M6 3h8l4 4v14H6z"/><path {...p} d="M14 3v5h5M9 12h6M9 16h6"/></>,
    tool:<><path {...p} d="M14 5a5 5 0 01-6 6l-5 5 5 5 5-5a5 5 0 006-6l-4 2-3-3z"/></>,
    shield:<><path {...p} d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path {...p} d="M9 12l2 2 4-5"/></>,
    gear:<><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></>,
    bolt:<><path {...p} d="M13 2L5 14h6l-1 8 9-13h-6z"/></>,
    factory:<><path {...p} d="M3 21V9l6 3V8l6 4V5h6v16zM7 17h2M12 17h2M17 17h2"/></>,
    building:<><path {...p} d="M5 21V3h14v18M9 7h2M14 7h2M9 11h2M14 11h2M9 15h2M14 15h2M3 21h18"/></>,
    calendar:<><rect {...p} x="4" y="5" width="16" height="15" rx="2"/><path {...p} d="M8 3v4M16 3v4M4 10h16"/></>,
    headset:<><path {...p} d="M4 13v-2a8 8 0 0116 0v2M4 13h3v6H4zM17 13h3v6h-3zM17 19c0 2-2 2-4 2"/></>,
    truck:<><path {...p} d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle {...p} cx="7" cy="18" r="2"/><circle {...p} cx="18" cy="18" r="2"/></>,
    target:<><circle {...p} cx="12" cy="12" r="8"/><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M12 2v4M22 12h-4"/></>,
    thermal:<><rect {...p} x="5" y="3" width="14" height="18" rx="3"/><circle {...p} cx="12" cy="12" r="4"/><path {...p} d="M12 8v8M8 12h8"/></>,
    meter:<><path {...p} d="M5 18a8 8 0 1114 0"/><path {...p} d="M12 13l4-4M8 18h8"/></>
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>
}
