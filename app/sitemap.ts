import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap{
  const base='https://expertise-eng.com.br';
  return [
    {url:base,lastModified:new Date(),changeFrequency:'weekly' as const,priority:1},
    {url:`${base}/locacao-de-equipamentos`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:.9},
    {url:`${base}/monitoramento-e-avaliacao`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:.8},
    {url:`${base}/estudos-e-implementacao`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:.8},
    {url:`${base}/instalacoes-eletricas`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:.8}
  ];
}
