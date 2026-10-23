import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(root, 'app', 'assets', 'hq25');
const outputDir = path.join(root, 'public', 'assets');

fs.mkdirSync(outputDir, { recursive: true });

const assets = {
  'home-hero.webp': ['home0.ts'],
  'locacao-hero.webp': ['rental0.ts', 'rental1.ts'],
  'monitoramento-hero.webp': ['monitoring0.ts', 'monitoring1.ts'],
  'estudos-hero.webp': ['studies0.ts', 'studies1.ts'],
  'instalacoes-hero.webp': ['installations0.ts', 'installations1.ts'],
};

function extractBase64(file) {
  const text = fs.readFileSync(path.join(sourceDir, file), 'utf8');
  const match = text.match(/export default ['"]([A-Za-z0-9+/=]+)['"]/s);
  if (!match) throw new Error(`Base64 não encontrado em ${file}`);
  return match[1];
}

for (const [output, chunks] of Object.entries(assets)) {
  const base64 = chunks.map(extractBase64).join('');
  const buffer = Buffer.from(base64, 'base64');
  if (buffer.length < 5000) throw new Error(`Imagem ${output} inválida ou incompleta`);
  fs.writeFileSync(path.join(outputDir, output), buffer);
  console.log(`Imagem gerada: ${output} (${buffer.length} bytes)`);
}
