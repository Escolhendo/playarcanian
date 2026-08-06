import { getBookGuide } from './bookGuide.js';

const copy = {
  en: {
    categories:{ characters:'character', organizations:'organization', places:'location', concepts:'concept', events:'event', anomalies:'anomaly', objects:'object' },
    tags:{ characters:'Character dossier', organizations:'Institutional dossier', places:'Location dossier', concepts:'Concept dossier', events:'Event dossier', anomalies:'Anomaly dossier', objects:'Evidence dossier' },
    alias:'Official dossier', documented:'Documented in the published material', appearance:'Published record', family:'Family information is disclosed only when confirmed by the narrative.', affiliation:'Connections are listed in the relationship network below.', origin:'Origin not fully disclosed in the public material.', residence:'Associated locations are listed in the relationship network below.',
    summary:(name, kind, chapter) => `${name} is a documented ${kind} in Arcanian: Devaneios${chapter ? `, connected to ${chapter}` : ''}. This entry combines the published record, direct relationships and the spoiler level defined by the official archive.`,
    bodyChapter:(chapter) => `Narrative context — ${chapter.title}: ${chapter.summary}`,
    bodyRelations:(names) => names.length ? `The dossier directly connects this entry to ${names.join(', ')}. These links organize people, institutions, locations, evidence and consequences established by the book.` : 'No direct connection has been made public beyond the information in this dossier.',
    bodyMethod:(level) => `The entry follows the published 2026 edition and separates confirmed information from interpretation. Spoiler classification: level ${level}.`,
    first:(chapter) => chapter ? `Chapter ${chapter.number} — ${chapter.title}` : 'See the published dossier'
  },
  es: {
    categories:{ characters:'personaje', organizations:'organización', places:'lugar', concepts:'concepto', events:'acontecimiento', anomalies:'anomalía', objects:'objeto' },
    tags:{ characters:'Expediente de personaje', organizations:'Expediente institucional', places:'Expediente de lugar', concepts:'Expediente conceptual', events:'Expediente de acontecimiento', anomalies:'Expediente de anomalía', objects:'Expediente de evidencia' },
    alias:'Expediente oficial', documented:'Documentado en el material publicado', appearance:'Registro publicado', family:'La información familiar solo se muestra cuando está confirmada por la narración.', affiliation:'Las conexiones aparecen en la red de relaciones inferior.', origin:'El origen no ha sido revelado por completo en el material público.', residence:'Los lugares asociados aparecen en la red de relaciones inferior.',
    summary:(name, kind, chapter) => `${name} es un ${kind} documentado en Arcanian: Devaneios${chapter ? ` y vinculado a ${chapter}` : ''}. La entrada reúne el registro publicado, sus relaciones directas y el nivel de spoiler definido por el archivo oficial.`,
    bodyChapter:(chapter) => `Contexto narrativo — ${chapter.title}: ${chapter.summary}`,
    bodyRelations:(names) => names.length ? `El expediente conecta directamente esta entrada con ${names.join(', ')}. Los vínculos organizan personas, instituciones, lugares, pruebas y consecuencias establecidas por el libro.` : 'No se ha publicado ninguna conexión directa adicional fuera de la información de este expediente.',
    bodyMethod:(level) => `La entrada sigue la edición publicada de 2026 y separa la información confirmada de la interpretación. Clasificación de spoiler: nivel ${level}.`,
    first:(chapter) => chapter ? `Capítulo ${chapter.number} — ${chapter.title}` : 'Consultar el expediente publicado'
  },
  it: {
    categories:{ characters:'personaggio', organizations:'organizzazione', places:'luogo', concepts:'concetto', events:'evento', anomalies:'anomalia', objects:'oggetto' },
    tags:{ characters:'Dossier personaggio', organizations:'Dossier istituzionale', places:'Dossier luogo', concepts:'Dossier concetto', events:'Dossier evento', anomalies:'Dossier anomalia', objects:'Dossier prova' },
    alias:'Dossier ufficiale', documented:'Documentato nel materiale pubblicato', appearance:'Registro pubblicato', family:'Le informazioni familiari vengono mostrate soltanto quando confermate dalla narrazione.', affiliation:'I collegamenti sono elencati nella rete di relazioni qui sotto.', origin:'L’origine non è stata interamente rivelata nel materiale pubblico.', residence:'I luoghi associati sono elencati nella rete di relazioni qui sotto.',
    summary:(name, kind, chapter) => `${name} è un ${kind} documentato in Arcanian: Devaneios${chapter ? ` e collegato a ${chapter}` : ''}. La voce riunisce il materiale pubblicato, le relazioni dirette e il livello spoiler stabilito dall’archivio ufficiale.`,
    bodyChapter:(chapter) => `Contesto narrativo — ${chapter.title}: ${chapter.summary}`,
    bodyRelations:(names) => names.length ? `Il dossier collega direttamente questa voce a ${names.join(', ')}. I collegamenti organizzano persone, istituzioni, luoghi, prove e conseguenze stabilite dal libro.` : 'Non è stato reso pubblico alcun collegamento diretto aggiuntivo oltre alle informazioni del dossier.',
    bodyMethod:(level) => `La voce segue l’edizione pubblicata del 2026 e separa le informazioni confermate dall’interpretazione. Classificazione spoiler: livello ${level}.`,
    first:(chapter) => chapter ? `Capitolo ${chapter.number} — ${chapter.title}` : 'Consulta il dossier pubblicato'
  },
  ja: {
    categories:{ characters:'人物', organizations:'組織', places:'場所', concepts:'概念', events:'出来事', anomalies:'異常現象', objects:'物品' },
    tags:{ characters:'人物記録', organizations:'組織記録', places:'場所記録', concepts:'概念記録', events:'出来事記録', anomalies:'異常現象記録', objects:'証拠記録' },
    alias:'公式記録', documented:'出版資料で確認済み', appearance:'出版記録', family:'家族情報は物語で確認された範囲のみ表示されます。', affiliation:'関係は下のネットワークに整理されています。', origin:'出自の全容は公開資料では明らかにされていません。', residence:'関連場所は下の関係ネットワークに整理されています。',
    summary:(name, kind, chapter) => `${name}は『Arcanian: Devaneios』で確認された${kind}です${chapter ? `。${chapter}と結びついています` : ''}。出版記録、直接の関係、公式アーカイブのネタバレ段階を一つの項目にまとめています。`,
    bodyChapter:(chapter) => `物語上の文脈 — ${chapter.title}：${chapter.summary}`,
    bodyRelations:(names) => names.length ? `この記録は${names.join('、')}と直接つながっています。人物、組織、場所、証拠、結果を本で確認された範囲に整理しています。` : 'この記録以外の直接的な関係はまだ公開されていません。',
    bodyMethod:(level) => `2026年刊行版を基準とし、確認済み情報と解釈を分けています。ネタバレ区分：レベル${level}。`,
    first:(chapter) => chapter ? `第${chapter.number}章 — ${chapter.title}` : '出版記録を参照'
  }
};

function humanize(slug) {
  return String(slug || '').split('-').filter(Boolean).map((part) => part.length <= 4 && /\d/.test(part) ? part.toUpperCase() : part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

function localizeWorkTitle(value, lang) {
  const title=String(value || '');
  const replacements={
    en:[['Episódio','Episode'],['anunciado','announced'],['Jogo','Game']],
    es:[['Episódio','Episodio'],['anunciado','anunciado'],['Jogo','Juego']],
    it:[['Episódio','Episodio'],['anunciado','annunciato'],['Jogo','Gioco']],
    ja:[[' — Episódio I',' — エピソードI'],[' — anunciado',' — 発表済み'],['Jogo','ゲーム']]
  }[lang] || [];
  return replacements.reduce((result,[from,to])=>result.replaceAll(from,to),title);
}

function chapterFor(entry, lang) {
  const guide = getBookGuide(lang);
  const appearance = String(entry.meta?.firstAppearance || '');
  const match = appearance.match(/(?:Capítulo|Chapter|Capitolo|第)\s*(\d{1,2})/i);
  if (match) return guide.find((item) => Number(item.number) === Number(match[1]));
  if (/prólogo|prologue|prologo|プロローグ/i.test(appearance)) return guide[0];
  const byFocus = guide.find((item) => item.focus?.includes(entry.slug));
  return byFocus || null;
}

export function createLocalizedWikiEntry(entry, lang) {
  if (lang === 'pt') return { ...entry, translated:true };
  const t = copy[lang] || copy.en;
  const chapter = chapterFor(entry, lang);
  const relationNames = (entry.related || []).slice(0, 6).map(humanize);
  const kind = t.categories[entry.category] || t.categories.concepts;
  const chapterLabel = chapter ? `${chapter.number === 'P' ? chapter.title : `${chapter.number} — ${chapter.title}`}` : '';
  return {
    ...entry,
    alias: `${t.alias}${chapterLabel ? ` · ${chapterLabel}` : ''}`,
    tag: t.tags[entry.category] || t.tags.concepts,
    summary: t.summary(entry.name, kind, chapterLabel),
    body: [
      ...(chapter ? [t.bodyChapter(chapter)] : []),
      t.bodyRelations(relationNames),
      t.bodyMethod(entry.spoiler || 0)
    ],
    meta: {
      ...entry.meta,
      occupation: t.tags[entry.category] || t.tags.concepts,
      family: t.family,
      affiliation: t.affiliation,
      origin: t.origin,
      residence: t.residence,
      status: t.documented,
      firstAppearance: t.first(chapter),
      works: (entry.meta?.works || ['Arcanian: Devaneios — Episódio I']).map((work) => localizeWorkTitle(work, lang))
    },
    translated:true
  };
}
