import type { MetadataRoute } from 'next';

export default function sitemap():MetadataRoute.Sitemap{
  const base='https://expertise-eng.com.br';
  const categories=['analisadores-de-energia','terrometros','medidores-de-isolacao','miliohmimetros','teste-de-reles','hipot','termovisores'];
  const products=[
    ['analisadores-de-energia','fluke-435'],['analisadores-de-energia','fluke-435-ii'],['analisadores-de-energia','ims-p-600-g4'],['analisadores-de-energia','ims-pq-600-g4'],['analisadores-de-energia','ims-pq-700-g4'],['analisadores-de-energia','ims-pq-700-g5-1kv'],['analisadores-de-energia','ims-pqa-700-g5-1kv'],
    ['terrometros','fluke-1625'],['terrometros','fluke-1630'],
    ['medidores-de-isolacao','fluke-1507'],['medidores-de-isolacao','fluke-1587'],['medidores-de-isolacao','instrum-dmg-15-ki'],
    ['miliohmimetros','instrum-milliohm-1'],['teste-de-reles','instrum-ccr-0100'],['hipot','instrum-hy-60kv-5ma-cc'],['termovisores','fluke-ti10']
  ];
  const now=new Date();
  return [
    {url:base,lastModified:now,changeFrequency:'weekly' as const,priority:1},
    {url:`${base}/locacao-de-equipamentos`,lastModified:now,changeFrequency:'weekly' as const,priority:.95},
    ...categories.map(c=>({url:`${base}/locacao/${c}`,lastModified:now,changeFrequency:'monthly' as const,priority:.85})),
    ...products.map(([c,p])=>({url:`${base}/locacao/${c}/${p}`,lastModified:now,changeFrequency:'monthly' as const,priority:.8})),
    {url:`${base}/monitoramento-e-avaliacao`,lastModified:now,changeFrequency:'monthly' as const,priority:.8},
    {url:`${base}/estudos-e-implementacao`,lastModified:now,changeFrequency:'monthly' as const,priority:.8},
    {url:`${base}/instalacoes-eletricas`,lastModified:now,changeFrequency:'monthly' as const,priority:.8}
  ];
}
