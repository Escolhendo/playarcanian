import { access } from 'node:fs/promises';
import { works, news, docs } from '../src/data.js';
import { wikiEntries } from '../src/wiki.js';
import { wikiSupplement } from '../src/wikiSupplement.js';
import { finalWikiEntries } from '../src/wikiFinal.js';
import { getBookGuide } from '../src/bookGuide.js';
import { legalDocuments } from '../src/legal.js';
import { getWikiProfile } from '../src/wikiDetails.js';

const errors = [];
const allWikiEntries = [...wikiEntries, ...wikiSupplement, ...finalWikiEntries];
const workSlugs = new Set(works.map((item) => item.slug));
const wikiSlugs = new Set(allWikiEntries.map((item) => item.slug));
const legalSlugs = new Set(legalDocuments.map((item) => item.slug));

const duplicateWikiSlugs = allWikiEntries.map((item) => item.slug).filter((slug, index, values) => values.indexOf(slug) !== index);
for (const slug of new Set(duplicateWikiSlugs)) errors.push(`Wiki duplicada: ${slug}`);
for (const chapter of getBookGuide('pt')) {
  if (!(chapter.focus || []).some((slug) => wikiSlugs.has(slug))) errors.push(`Mapa do livro ${chapter.number}: nenhum verbete existente`);
}

for (const work of works) {
  for (const slug of work.relatedWiki || []) {
    if (!wikiSlugs.has(slug)) errors.push(`Obra ${work.slug}: wiki inexistente ${slug}`);
  }
  if (work.primary?.href?.startsWith('#/obra/')) {
    const slug = work.primary.href.split('/')[2];
    if (!workSlugs.has(slug)) errors.push(`Obra ${work.slug}: rota inexistente ${work.primary.href}`);
  }
  const mediaPath = work.image.replace(/^\.\//, 'public/');
  try { await access(mediaPath); } catch { errors.push(`Mídia ausente: ${mediaPath}`); }
  const logoPath = work.logo?.replace(/^\.\//, 'public/');
  if (!logoPath) errors.push(`Logo não configurada: ${work.slug}`);
  else try { await access(logoPath); } catch { errors.push(`Logo ausente: ${logoPath}`); }
}

for (const item of news) {
  const slug = item.href?.split('/')[2];
  if (item.href?.startsWith('#/obra/') && !workSlugs.has(slug)) errors.push(`Notícia: rota inexistente ${item.href}`);
  if (item.href?.startsWith('#/wiki/') && !wikiSlugs.has(slug)) errors.push(`Notícia: wiki inexistente ${item.href}`);
  const mediaPath = item.image.replace(/^\.\//, 'public/');
  try { await access(mediaPath); } catch { errors.push(`Mídia ausente: ${mediaPath}`); }
}

for (const doc of docs) {
  if (!legalSlugs.has(doc.slug)) errors.push(`Documento inexistente: ${doc.slug}`);
}

for (const entry of allWikiEntries) {
  const profile = getWikiProfile(entry, allWikiEntries);
  for (const relationship of profile.relationships || []) {
    if (relationship.slug && !wikiSlugs.has(relationship.slug)) {
      errors.push(`Wiki ${entry.slug}: relação inexistente ${relationship.slug}`);
    }
  }
}

try { await access('public/404.html'); } catch { errors.push('public/404.html ausente'); }

if (errors.length) {
  console.error('\nValidação falhou:\n- ' + errors.join('\n- '));
  process.exit(1);
}

console.log(`Validação concluída: ${works.length} projetos, ${allWikiEntries.length} verbetes e ${legalDocuments.length} documentos.`);
