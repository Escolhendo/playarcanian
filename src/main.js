import { works, news, docs } from './data.js';
import { legalDocuments } from './legal.js';
import { timelineEvents, wikiCategories, wikiEntries } from './wiki.js';
import { wikiSupplement } from './wikiSupplement.js';
import { finalWikiEntries } from './wikiFinal.js';
import { expandedWikiEntries, timelineExpansion } from './wikiExpansion.js';
import { getWikiProfile } from './wikiDetails.js';
import { getDeepWikiProfile } from './wikiDeepProfiles.js';
import { getProjectExperience } from './projectExperience.js';
import { localizedWork, localizedWikiEntry, localizedNews } from './i18n.js';
import { localizedLegalDocument } from './legalTranslations.js';

const root = document.querySelector('#root');
const allWikiEntries = [...wikiEntries, ...wikiSupplement, ...finalWikiEntries, ...expandedWikiEntries];
const allTimelineEvents = [timelineEvents[0], timelineEvents[1], timelineExpansion[0], ...timelineEvents.slice(2), ...timelineExpansion.slice(1)];

const LANGUAGES = [
  { id:'pt', label:'Português', short:'PT', html:'pt-BR' },
  { id:'en', label:'English', short:'EN', html:'en' },
  { id:'es', label:'Español', short:'ES', html:'es' },
  { id:'it', label:'Italiano', short:'IT', html:'it' },
  { id:'ja', label:'日本語', short:'JA', html:'ja' }
];

const TEXT = {
  pt: {
    projects:'Projetos', universe:'Universo', news:'Notícias', studio:'Estúdio', search:'Buscar', menu:'Menu', home:'Início',
    games:'Jogos', books:'Livros', comics:'HQ', animation:'Animação', wiki:'Wiki', timeline:'Cronologia', purchase:'Comprar Devaneios',
    discover:'Descobrir', explore:'Explorar', learn:'Saiba mais', viewAll:'Ver tudo', viewProject:'Ver projeto', close:'Fechar', back:'Voltar',
    available:'Disponível', development:'Em desenvolvimento', latest:'Últimas notícias', library:'Biblioteca de projetos',
    homeHero:'Histórias que atravessam formatos.', homeIntro:'Livros, HQ e jogos conectados por um mesmo universo, mas construídos para funcionar com identidade própria.',
    start:'Por onde começar', startText:'Entre em Arcanian pelo formato que combina mais com você. Nenhuma obra exige uma ordem única para começar.',
    database:'Base de dados oficial', databaseText:'Personagens, lugares, organizações e acontecimentos reunidos em uma wiki navegável com cronologia própria.',
    formats:'Explore por formato', faq:'Perguntas frequentes', contact:'Contato', docs:'Documentos', support:'Suporte',
    noResults:'Nenhum resultado encontrado.', spoilersOn:'Ocultar spoilers', spoilersOff:'Exibir spoilers', spoiler:'Conteúdo com spoiler',
    searchPlaceholder:'Busque projetos, personagens, lugares, notícias ou documentos', entries:'entradas', events:'eventos',
    studioTitle:'Two Eyes On You', studioText:'Um estúdio independente construindo histórias para diferentes formatos sem transformar adaptação em repetição.',
    footer:'© 2026 Two Eyes On You™. Todos os direitos reservados.', language:'IDIOMA', exploreLabel:'EXPLORAR',
    featured:'EM DESTAQUE', featuredTitle:'Entre em Arcanian.', featuredText:'Projetos, histórias e arquivos oficiais em um único ponto de entrada.',
    gameLabel:'JOGO DA ARCANIAN', episodeOne:'EPISÓDIO I', physicalDigital:'Físico · Digital', chooseEdition:'Escolher edição',
    discoverText:'Escolha a porta de entrada. O site leva você direto ao formato, à obra ou à lore que procura.',
    projectsText:'Os dois projetos com páginas completas atualmente: o jogo Arcanian e o livro Devaneios.',
    announced:'ANUNCIADOS', upcomingTitles:'Próximos títulos', announcedText:'Obras já reveladas do universo Arcanian, ainda sem páginas completas de projeto.', announcedBadge:'ANUNCIADO', announcedMore:'Mais informações serão divulgadas futuramente.',
    lessOneType:'LIVRO · VAZIO ABSOLUTO', lessOneText:'Joel e Elisabeth antes da ruptura. Uma história mais íntima sobre o que existia antes de tudo desmoronar.',
    tormentaType:'HQ · MITOS E LENDAS', tormentaText:'Uma história ambientada antes do Grande Dia, voltada às lendas de Arcanian e ao Projeto L.A.C.H.R.Y.M.A.',
    lastDanceType:'LIVRO · SEQUÊNCIA DIRETA', lastDanceText:'A continuação direta de Devaneios, levando Ikarius e Joel para as consequências do que o primeiro episódio deixou em aberto.',
    formatsText:'Explore a Two Eyes On You por mídia. Cada formato preserva a própria linguagem.', newsText:'Lançamentos, produção, atualizações do site e desenvolvimento do universo.',
    startGameTitle:'Jogo da Arcanian', startGameText:'Ikarius e Joel conduzem uma campanha própria criada para investigação, ação e escolhas.', startGameTag:'XBOX · STEAM / PC',
    startBookText:'O Episódio I abre o caso que liga Ezequiel, Mountevoir, as Espirais e o passado de Ikarius.', startBookTag:'LIVRO · DISPONÍVEL',
    startWikiText:'Personagens, Fragmentos, armas, eventos, organizações, lugares e conexões entre as obras.', entriesUpper:'VERBETES',
    prev:'Anterior', next:'Próximo', categoryCountOne:'projeto nesta categoria.', categoryCountMany:'projetos nesta categoria.', categoryFuture:'Esta categoria está pronta para projetos futuros, sem misturar formatos.',
    noAnnounced:'Nenhum projeto anunciado.', categoryFutureLong:'Esta área existe para que futuros projetos entrem na biblioteca sem alterar a arquitetura do site.',
    overview:'Visão geral', highlights:'Destaques', media:'Mídia', characters:'Personagens', world:'Mundo', spiral:'A Espiral', connections:'Conexões', platformsPlanned:'PLATAFORMAS PLANEJADAS',
    insideWork:'Dentro da obra.', centralCharacters:'Personagens centrais', centralCharactersText:'Pessoas que sustentam o conflito desta obra.', otherProjects:'Outros projetos', otherProjectsText:'Outras portas de entrada para Arcanian.',
    wikiContinue:'Continue pela Wiki', wikiContinueText:'Personagens, lugares, eventos e conceitos diretamente ligados a esta obra.',
    spiralTitle:'Uma marca que cria raízes.', spiralText:'A Espiral aparece como evidência física, memória material e âncora. A apresentação visual mantém textura, profundidade e raízes projetadas para fora da superfície sem transformar a página em um efeito gratuito.',
    spiralNotes:['Marca','Raízes','Memória material'], defaultClosing:'Explore outras histórias conectadas ao universo Arcanian.',
    purchaseTitle:'Escolha sua edição.', physicalKindle:'FÍSICO + KINDLE', physicalBook:'LIVRO FÍSICO', physicalDigitalDesc:'Edição física e digital.', printOnDemand:'Impressão sob demanda.', purchaseNote:'Pagamento, preço, frete, estoque e suporte da compra são definidos pela plataforma escolhida.',
    newsArchive:'Arquivo de notícias', newsPageText:'Atualizações sobre lançamentos, produção, desenvolvimento e o universo Arcanian.',
    privacy:'Privacidade', terms:'Termos', licenses:'Licenças', skip:'Pular para o conteúdo', backTop:'Voltar ao topo',
    searchProjects:'PROJETOS', searchNews:'NOTÍCIAS', searchDocs:'DOCUMENTOS', legal:'LEGAL',
    notFoundTitle:'Página não encontrada.', notFoundText:'O endereço pode ter mudado. Use um dos atalhos abaixo para continuar navegando.', backHome:'Voltar ao início'
  },
  en: {
    projects:'Projects', universe:'Universe', news:'News', studio:'Studio', search:'Search', menu:'Menu', home:'Home',
    games:'Games', books:'Books', comics:'Comics', animation:'Animation', wiki:'Wiki', timeline:'Timeline', purchase:'Buy Devaneios',
    discover:'Discover', explore:'Explore', learn:'Learn more', viewAll:'View all', viewProject:'View project', close:'Close', back:'Back',
    available:'Available', development:'In development', latest:'Latest news', library:'Project library',
    homeHero:'Stories built across formats.', homeIntro:'Books, comics and games connected by one universe, each designed with its own identity.',
    start:'Where to begin', startText:'Enter Arcanian through the format that fits you best. No single order is required to start.',
    database:'Official database', databaseText:'Characters, places, organizations and events gathered in a navigable wiki with its own timeline.',
    formats:'Explore by format', faq:'Frequently asked questions', contact:'Contact', docs:'Documents', support:'Support',
    noResults:'No results found.', spoilersOn:'Hide spoilers', spoilersOff:'Show spoilers', spoiler:'Spoiler content',
    searchPlaceholder:'Search projects, characters, places, news or documents', entries:'entries', events:'events',
    studioTitle:'Two Eyes On You', studioText:'An independent studio building stories for different formats without turning adaptation into repetition.',
    footer:'© 2026 Two Eyes On You™. All rights reserved.', language:'LANGUAGE', exploreLabel:'EXPLORE',
    featured:'FEATURED', featuredTitle:'Enter Arcanian.', featuredText:'Projects, stories and official archives in one place.',
    gameLabel:'ARCANIAN GAME', episodeOne:'EPISODE I', physicalDigital:'Print · Digital', chooseEdition:'Choose edition',
    discoverText:'Choose your entry point. The site takes you directly to the format, work or lore you want.',
    projectsText:'The two projects with full pages right now: the Arcanian game and the book Devaneios.',
    announced:'ANNOUNCED', upcomingTitles:'Upcoming titles', announcedText:'Already revealed works from the Arcanian universe that do not yet have full project pages.', announcedBadge:'ANNOUNCED', announcedMore:'More information will be released in the future.',
    lessOneType:'BOOK · ABSOLUTE VOID', lessOneText:'Joel and Elisabeth before the rupture. A more intimate story about what existed before everything fell apart.',
    tormentaType:'COMIC · MYTHS AND LEGENDS', tormentaText:'A story set before the Great Day, focused on Arcanian’s legends and Project L.A.C.H.R.Y.M.A.',
    lastDanceType:'BOOK · DIRECT SEQUEL', lastDanceText:'The direct sequel to Devaneios, taking Ikarius and Joel into the consequences left open by Episode I.',
    formatsText:'Explore Two Eyes On You by medium. Each format keeps its own language.', newsText:'Releases, production, site updates and development of the universe.',
    startGameTitle:'Arcanian Game', startGameText:'Ikarius and Joel lead an original campaign built around investigation, action and choices.', startGameTag:'XBOX · STEAM / PC',
    startBookText:'Episode I opens the case connecting Ezequiel, Mountevoir, the Spirals and Ikarius’s past.', startBookTag:'BOOK · AVAILABLE',
    startWikiText:'Characters, Fragments, weapons, events, organizations, places and connections between the works.', entriesUpper:'ENTRIES',
    prev:'Previous', next:'Next', categoryCountOne:'project in this category.', categoryCountMany:'projects in this category.', categoryFuture:'This category is ready for future projects without mixing formats.',
    noAnnounced:'No project announced.', categoryFutureLong:'This area exists so future projects can enter the library without changing the site architecture.',
    overview:'Overview', highlights:'Highlights', media:'Media', characters:'Characters', world:'World', spiral:'The Spiral', connections:'Connections', platformsPlanned:'PLANNED PLATFORMS',
    insideWork:'Inside the work.', centralCharacters:'Central characters', centralCharactersText:'The people carrying this work’s conflict.', otherProjects:'Other projects', otherProjectsText:'Other entry points into Arcanian.',
    wikiContinue:'Continue through the Wiki', wikiContinueText:'Characters, places, events and concepts directly connected to this work.',
    spiralTitle:'A mark that grows roots.', spiralText:'The Spiral appears as physical evidence, material memory and an anchor. Its visual presentation keeps texture, depth and roots extending beyond the surface without turning the page into a gratuitous effect.',
    spiralNotes:['Mark','Roots','Material memory'], defaultClosing:'Explore other stories connected to the Arcanian universe.',
    purchaseTitle:'Choose your edition.', physicalKindle:'PRINT + KINDLE', physicalBook:'PRINT BOOK', physicalDigitalDesc:'Print and digital editions.', printOnDemand:'Print on demand.', purchaseNote:'Payment, price, shipping, stock and purchase support are defined by the selected platform.',
    newsArchive:'News archive', newsPageText:'Updates on releases, production, development and the Arcanian universe.',
    privacy:'Privacy', terms:'Terms', licenses:'Licences', skip:'Skip to content', backTop:'Back to top',
    searchProjects:'PROJECTS', searchNews:'NEWS', searchDocs:'DOCUMENTS', legal:'LEGAL',
    notFoundTitle:'Page not found.', notFoundText:'The address may have changed. Use one of the shortcuts below to keep browsing.', backHome:'Back to home'
  },
  es: {
    projects:'Proyectos', universe:'Universo', news:'Noticias', studio:'Estudio', search:'Buscar', menu:'Menú', home:'Inicio',
    games:'Juegos', books:'Libros', comics:'Cómics', animation:'Animación', wiki:'Wiki', timeline:'Cronología', purchase:'Comprar Devaneios',
    discover:'Descubrir', explore:'Explorar', learn:'Saber más', viewAll:'Ver todo', viewProject:'Ver proyecto', close:'Cerrar', back:'Volver',
    available:'Disponible', development:'En desarrollo', latest:'Últimas noticias', library:'Biblioteca de proyectos',
    homeHero:'Historias construidas entre formatos.', homeIntro:'Libros, cómics y juegos conectados por un mismo universo, cada uno con identidad propia.',
    start:'Por dónde empezar', startText:'Entra en Arcanian por el formato que mejor encaje contigo. No hay un único orden obligatorio.',
    database:'Base de datos oficial', databaseText:'Personajes, lugares, organizaciones y acontecimientos reunidos en una wiki navegable con cronología propia.',
    formats:'Explorar por formato', faq:'Preguntas frecuentes', contact:'Contacto', docs:'Documentos', support:'Soporte',
    noResults:'No se encontraron resultados.', spoilersOn:'Ocultar spoilers', spoilersOff:'Mostrar spoilers', spoiler:'Contenido con spoilers',
    searchPlaceholder:'Busca proyectos, personajes, lugares, noticias o documentos', entries:'entradas', events:'eventos',
    studioTitle:'Two Eyes On You', studioText:'Un estudio independiente que crea historias para distintos formatos sin convertir la adaptación en repetición.',
    footer:'© 2026 Two Eyes On You™. Todos los derechos reservados.', language:'IDIOMA', exploreLabel:'EXPLORAR',
    featured:'DESTACADO', featuredTitle:'Entra en Arcanian.', featuredText:'Proyectos, historias y archivos oficiales en un solo punto de entrada.',
    gameLabel:'JUEGO ARCANIAN', episodeOne:'EPISODIO I', physicalDigital:'Físico · Digital', chooseEdition:'Elegir edición',
    discoverText:'Elige tu puerta de entrada. El sitio te lleva directamente al formato, obra o lore que buscas.',
    projectsText:'Los dos proyectos con páginas completas actualmente: el juego Arcanian y el libro Devaneios.',
    announced:'ANUNCIADOS', upcomingTitles:'Próximos títulos', announcedText:'Obras ya reveladas del universo Arcanian que todavía no tienen páginas completas de proyecto.', announcedBadge:'ANUNCIADO', announcedMore:'Se divulgará más información próximamente.',
    lessOneType:'LIBRO · VACÍO ABSOLUTO', lessOneText:'Joel y Elisabeth antes de la ruptura. Una historia más íntima sobre lo que existía antes de que todo se derrumbara.',
    tormentaType:'CÓMIC · MITOS Y LEYENDAS', tormentaText:'Una historia ambientada antes del Gran Día, centrada en las leyendas de Arcanian y el Proyecto L.A.C.H.R.Y.M.A.',
    lastDanceType:'LIBRO · SECUELA DIRECTA', lastDanceText:'La continuación directa de Devaneios, llevando a Ikarius y Joel a las consecuencias que dejó abiertas el Episodio I.',
    formatsText:'Explora Two Eyes On You por medio. Cada formato conserva su propio lenguaje.', newsText:'Lanzamientos, producción, actualizaciones del sitio y desarrollo del universo.',
    startGameTitle:'Juego Arcanian', startGameText:'Ikarius y Joel protagonizan una campaña propia creada para investigación, acción y decisiones.', startGameTag:'XBOX · STEAM / PC',
    startBookText:'El Episodio I abre el caso que conecta a Ezequiel, Mountevoir, las Espirales y el pasado de Ikarius.', startBookTag:'LIBRO · DISPONIBLE',
    startWikiText:'Personajes, Fragmentos, armas, eventos, organizaciones, lugares y conexiones entre las obras.', entriesUpper:'ENTRADAS',
    prev:'Anterior', next:'Siguiente', categoryCountOne:'proyecto en esta categoría.', categoryCountMany:'proyectos en esta categoría.', categoryFuture:'Esta categoría está preparada para futuros proyectos sin mezclar formatos.',
    noAnnounced:'Ningún proyecto anunciado.', categoryFutureLong:'Esta área existe para que futuros proyectos entren en la biblioteca sin cambiar la arquitectura del sitio.',
    overview:'Visión general', highlights:'Destacados', media:'Multimedia', characters:'Personajes', world:'Mundo', spiral:'La Espiral', connections:'Conexiones', platformsPlanned:'PLATAFORMAS PREVISTAS',
    insideWork:'Dentro de la obra.', centralCharacters:'Personajes centrales', centralCharactersText:'Las personas que sostienen el conflicto de esta obra.', otherProjects:'Otros proyectos', otherProjectsText:'Otras puertas de entrada a Arcanian.',
    wikiContinue:'Continúa por la Wiki', wikiContinueText:'Personajes, lugares, eventos y conceptos directamente relacionados con esta obra.',
    spiralTitle:'Una marca que echa raíces.', spiralText:'La Espiral aparece como evidencia física, memoria material y ancla. Su presentación visual conserva textura, profundidad y raíces proyectadas fuera de la superficie sin convertir la página en un efecto gratuito.',
    spiralNotes:['Marca','Raíces','Memoria material'], defaultClosing:'Explora otras historias conectadas con el universo Arcanian.',
    purchaseTitle:'Elige tu edición.', physicalKindle:'FÍSICO + KINDLE', physicalBook:'LIBRO FÍSICO', physicalDigitalDesc:'Edición física y digital.', printOnDemand:'Impresión bajo demanda.', purchaseNote:'El pago, precio, envío, stock y soporte de compra son definidos por la plataforma elegida.',
    newsArchive:'Archivo de noticias', newsPageText:'Actualizaciones sobre lanzamientos, producción, desarrollo y el universo Arcanian.',
    privacy:'Privacidad', terms:'Términos', licenses:'Licencias', skip:'Saltar al contenido', backTop:'Volver arriba', searchProjects:'PROYECTOS', searchNews:'NOTICIAS', searchDocs:'DOCUMENTOS', legal:'LEGAL',
    notFoundTitle:'Página no encontrada.', notFoundText:'La dirección puede haber cambiado. Usa uno de los accesos de abajo para seguir navegando.', backHome:'Volver al inicio'
  },
  it: {
    projects:'Progetti', universe:'Universo', news:'Notizie', studio:'Studio', search:'Cerca', menu:'Menu', home:'Home',
    games:'Giochi', books:'Libri', comics:'Fumetti', animation:'Animazione', wiki:'Wiki', timeline:'Cronologia', purchase:'Acquista Devaneios',
    discover:'Scopri', explore:'Esplora', learn:'Scopri di più', viewAll:'Vedi tutto', viewProject:'Vedi progetto', close:'Chiudi', back:'Indietro',
    available:'Disponibile', development:'In sviluppo', latest:'Ultime notizie', library:'Biblioteca progetti',
    homeHero:'Storie costruite attraverso formati diversi.', homeIntro:'Libri, fumetti e giochi collegati da un unico universo, ciascuno con una propria identità.',
    start:'Da dove iniziare', startText:'Entra in Arcanian attraverso il formato che preferisci. Non esiste un unico ordine obbligatorio.',
    database:'Database ufficiale', databaseText:'Personaggi, luoghi, organizzazioni ed eventi raccolti in una wiki navigabile con una propria cronologia.',
    formats:'Esplora per formato', faq:'Domande frequenti', contact:'Contatti', docs:'Documenti', support:'Supporto',
    noResults:'Nessun risultato trovato.', spoilersOn:'Nascondi spoiler', spoilersOff:'Mostra spoiler', spoiler:'Contenuto con spoiler',
    searchPlaceholder:'Cerca progetti, personaggi, luoghi, notizie o documenti', entries:'voci', events:'eventi',
    studioTitle:'Two Eyes On You', studioText:'Uno studio indipendente che crea storie per formati diversi senza trasformare l’adattamento in ripetizione.',
    footer:'© 2026 Two Eyes On You™. Tutti i diritti riservati.', language:'LINGUA', exploreLabel:'ESPLORA',
    featured:'IN EVIDENZA', featuredTitle:'Entra in Arcanian.', featuredText:'Progetti, storie e archivi ufficiali in un unico punto di accesso.',
    gameLabel:'GIOCO ARCANIAN', episodeOne:'EPISODIO I', physicalDigital:'Cartaceo · Digitale', chooseEdition:'Scegli edizione',
    discoverText:'Scegli il tuo punto di ingresso. Il sito ti porta direttamente al formato, all’opera o alla lore che cerchi.',
    projectsText:'I due progetti con pagine complete al momento: il gioco Arcanian e il libro Devaneios.',
    announced:'ANNUNCIATI', upcomingTitles:'Prossimi titoli', announcedText:'Opere dell’universo Arcanian già rivelate ma senza ancora una pagina progetto completa.', announcedBadge:'ANNUNCIATO', announcedMore:'Ulteriori informazioni saranno pubblicate in futuro.',
    lessOneType:'LIBRO · VUOTO ASSOLUTO', lessOneText:'Joel ed Elisabeth prima della frattura. Una storia più intima su ciò che esisteva prima che tutto crollasse.',
    tormentaType:'FUMETTO · MITI E LEGGENDE', tormentaText:'Una storia ambientata prima del Grande Giorno, dedicata alle leggende di Arcanian e al Progetto L.A.C.H.R.Y.M.A.',
    lastDanceType:'LIBRO · SEGUITO DIRETTO', lastDanceText:'Il seguito diretto di Devaneios, che porta Ikarius e Joel nelle conseguenze lasciate aperte dall’Episodio I.',
    formatsText:'Esplora Two Eyes On You per mezzo. Ogni formato mantiene il proprio linguaggio.', newsText:'Uscite, produzione, aggiornamenti del sito e sviluppo dell’universo.',
    startGameTitle:'Gioco Arcanian', startGameText:'Ikarius e Joel guidano una campagna originale costruita su indagine, azione e scelte.', startGameTag:'XBOX · STEAM / PC',
    startBookText:'L’Episodio I apre il caso che collega Ezequiel, Mountevoir, le Spirali e il passato di Ikarius.', startBookTag:'LIBRO · DISPONIBILE',
    startWikiText:'Personaggi, Frammenti, armi, eventi, organizzazioni, luoghi e collegamenti tra le opere.', entriesUpper:'VOCI',
    prev:'Precedente', next:'Successivo', categoryCountOne:'progetto in questa categoria.', categoryCountMany:'progetti in questa categoria.', categoryFuture:'Questa categoria è pronta per progetti futuri senza mescolare formati.',
    noAnnounced:'Nessun progetto annunciato.', categoryFutureLong:'Quest’area esiste per accogliere progetti futuri senza modificare l’architettura del sito.',
    overview:'Panoramica', highlights:'In evidenza', media:'Media', characters:'Personaggi', world:'Mondo', spiral:'La Spirale', connections:'Collegamenti', platformsPlanned:'PIATTAFORME PREVISTE',
    insideWork:'Dentro l’opera.', centralCharacters:'Personaggi centrali', centralCharactersText:'Le persone che sostengono il conflitto di quest’opera.', otherProjects:'Altri progetti', otherProjectsText:'Altri punti di ingresso in Arcanian.',
    wikiContinue:'Continua nella Wiki', wikiContinueText:'Personaggi, luoghi, eventi e concetti direttamente collegati a quest’opera.',
    spiralTitle:'Un segno che mette radici.', spiralText:'La Spirale appare come prova fisica, memoria materiale e ancora. La presentazione visiva mantiene texture, profondità e radici che si estendono oltre la superficie senza trasformare la pagina in un effetto gratuito.',
    spiralNotes:['Segno','Radici','Memoria materiale'], defaultClosing:'Esplora altre storie collegate all’universo Arcanian.',
    purchaseTitle:'Scegli la tua edizione.', physicalKindle:'CARTACEO + KINDLE', physicalBook:'LIBRO CARTACEO', physicalDigitalDesc:'Edizione cartacea e digitale.', printOnDemand:'Stampa su richiesta.', purchaseNote:'Pagamento, prezzo, spedizione, disponibilità e assistenza all’acquisto sono definiti dalla piattaforma scelta.',
    newsArchive:'Archivio notizie', newsPageText:'Aggiornamenti su uscite, produzione, sviluppo e universo Arcanian.',
    privacy:'Privacy', terms:'Termini', licenses:'Licenze', skip:'Vai al contenuto', backTop:'Torna su', searchProjects:'PROGETTI', searchNews:'NOTIZIE', searchDocs:'DOCUMENTI', legal:'LEGALE',
    notFoundTitle:'Pagina non trovata.', notFoundText:'L’indirizzo potrebbe essere cambiato. Usa uno dei collegamenti qui sotto per continuare.', backHome:'Torna alla home'
  },
  ja: {
    projects:'プロジェクト', universe:'世界観', news:'ニュース', studio:'スタジオ', search:'検索', menu:'メニュー', home:'ホーム',
    games:'ゲーム', books:'書籍', comics:'コミック', animation:'アニメーション', wiki:'Wiki', timeline:'年表', purchase:'Devaneiosを購入',
    discover:'見る', explore:'探索', learn:'詳しく見る', viewAll:'すべて見る', viewProject:'プロジェクトを見る', close:'閉じる', back:'戻る',
    available:'発売中', development:'開発中', latest:'最新ニュース', library:'プロジェクト一覧',
    homeHero:'形式を越えてつながる物語。', homeIntro:'一つの世界でつながる書籍、コミック、ゲーム。それぞれが独自の表現を持ちます。',
    start:'どこから始める？', startText:'好きな形式からArcanianに入れます。始めるための唯一の順番はありません。',
    database:'公式データベース', databaseText:'人物、場所、組織、出来事を独自の年表とともに閲覧できるWikiにまとめています。',
    formats:'形式から探す', faq:'よくある質問', contact:'お問い合わせ', docs:'文書', support:'サポート',
    noResults:'結果が見つかりません。', spoilersOn:'ネタバレを隠す', spoilersOff:'ネタバレを表示', spoiler:'ネタバレ内容',
    searchPlaceholder:'プロジェクト、人物、場所、ニュース、文書を検索', entries:'項目', events:'出来事',
    studioTitle:'Two Eyes On You', studioText:'異なる形式の物語を、単なる反復的な翻案にせず制作するインディペンデントスタジオ。',
    footer:'© 2026 Two Eyes On You™. All rights reserved.', language:'言語', exploreLabel:'探索',
    featured:'注目', featuredTitle:'Arcanianへ。', featuredText:'プロジェクト、物語、公式アーカイブへの入口。',
    gameLabel:'ARCANIAN ゲーム', episodeOne:'エピソードI', physicalDigital:'紙版 · デジタル', chooseEdition:'版を選ぶ',
    discoverText:'入口を選んでください。形式、作品、設定資料へ直接進めます。',
    projectsText:'現在フルページがあるのは、Arcanianゲームと書籍Devaneiosの2プロジェクトです。',
    announced:'発表済み', upcomingTitles:'今後のタイトル', announcedText:'すでに発表されているArcanian作品で、まだ個別のフルプロジェクトページがないものです。', announcedBadge:'発表済み', announcedMore:'詳細は今後公開されます。',
    lessOneType:'書籍 · 絶対の虚無', lessOneText:'亀裂の前のJoelとElisabeth。すべてが崩れる前に存在していたものを描く、より親密な物語。',
    tormentaType:'コミック · 神話と伝説', tormentaText:'「大いなる日」以前を舞台に、Arcanianの伝説とL.A.C.H.R.Y.M.A.計画を描く物語。',
    lastDanceType:'書籍 · 直接続編', lastDanceText:'Devaneiosの直接続編。IkariusとJoelがエピソードIで残された結果に向き合います。',
    formatsText:'媒体別にTwo Eyes On Youを探索。それぞれの形式が独自の表現を保ちます。', newsText:'発売、制作、サイト更新、世界観開発の情報。',
    startGameTitle:'Arcanian ゲーム', startGameText:'IkariusとJoelが、捜査、アクション、選択のために作られた独自キャンペーンを進みます。', startGameTag:'XBOX · STEAM / PC',
    startBookText:'エピソードIはEzequiel、Mountevoir、螺旋、Ikariusの過去を結ぶ事件を開きます。', startBookTag:'書籍 · 発売中',
    startWikiText:'人物、Fragment、武器、出来事、組織、場所、作品間のつながり。', entriesUpper:'項目',
    prev:'前へ', next:'次へ', categoryCountOne:'件のプロジェクト。', categoryCountMany:'件のプロジェクト。', categoryFuture:'このカテゴリは形式を混在させず、将来のプロジェクトを追加できる構成です。',
    noAnnounced:'発表済みプロジェクトはありません。', categoryFutureLong:'将来のプロジェクトをサイト構造を変えずに追加できる領域です。',
    overview:'概要', highlights:'特徴', media:'メディア', characters:'登場人物', world:'世界', spiral:'螺旋', connections:'つながり', platformsPlanned:'予定プラットフォーム',
    insideWork:'作品の内側。', centralCharacters:'主要人物', centralCharactersText:'この作品の対立を支える人物たち。', otherProjects:'他のプロジェクト', otherProjectsText:'Arcanianへの別の入口。',
    wikiContinue:'Wikiで続きを見る', wikiContinueText:'この作品に直接関係する人物、場所、出来事、概念。',
    spiralTitle:'根を張る印。', spiralText:'螺旋は物理的証拠、物質に残る記憶、アンカーとして現れます。質感、奥行き、表面から伸びる根を保ちつつ、ページを不要な演出にはしません。',
    spiralNotes:['印','根','物質の記憶'], defaultClosing:'Arcanian世界につながる他の物語を探索してください。',
    purchaseTitle:'版を選んでください。', physicalKindle:'紙版 + KINDLE', physicalBook:'紙の書籍', physicalDigitalDesc:'紙版とデジタル版。', printOnDemand:'オンデマンド印刷。', purchaseNote:'支払い、価格、送料、在庫、購入サポートは選択したプラットフォームが管理します。',
    newsArchive:'ニュースアーカイブ', newsPageText:'発売、制作、開発、Arcanian世界の最新情報。',
    privacy:'プライバシー', terms:'利用規約', licenses:'ライセンス', skip:'本文へ移動', backTop:'トップへ戻る', searchProjects:'プロジェクト', searchNews:'ニュース', searchDocs:'文書', legal:'法務',
    notFoundTitle:'ページが見つかりません。', notFoundText:'URLが変更された可能性があります。下のリンクから閲覧を続けてください。', backHome:'ホームへ戻る'
  }
};

const PRIMARY_PROJECT_SLUGS = ['arcanian','devaneios'];
const ANNOUNCED_PROJECT_SLUGS = ['menos-um','tormenta','a-ultima-danca'];
const primaryWorks = PRIMARY_PROJECT_SLUGS.map(slug => works.find(w => w.slug === slug)).filter(Boolean);
const announcedWorks = ANNOUNCED_PROJECT_SLUGS.map(slug => works.find(w => w.slug === slug)).filter(Boolean);
const PROJECT_CATEGORY_KEYS = ['games','books'];

const CATEGORY_MAP = {
  games: primaryWorks.filter(w => w.slug === 'arcanian'),
  books: primaryWorks.filter(w => w.slug === 'devaneios'),
  comics: [],
  animation: []
};
const CATEGORY_META = {
  games:{ href:'#/categoria/jogos', image:'./media/game.webp', icon:'controller' },
  books:{ href:'#/categoria/livros', image:'./media/devaneios.webp', icon:'book' },
  comics:{ href:'#/categoria/hq', image:'./media/tormenta.webp', icon:'panels' },
  animation:{ href:'#/categoria/animacao', image:'./media/banner.webp', icon:'play' }
};

const state = {
  lang: localStorage.getItem('teoy-language-v3') || 'pt',
  menuOpen:false,
  searchOpen:false,
  megaOpen:null,
  spoilers:false,
  wikiQuery:'',
  wikiCategory:'all',
  hero:0,
  heroPaused:false
};
if (!LANGUAGES.some(x => x.id === state.lang)) state.lang = 'pt';
let heroTimer = null;
let sectionNavHandler = null;

function t(){ return TEXT[state.lang] || TEXT.pt; }
function contentLang(){ return ['pt','en','es','it','ja'].includes(state.lang) ? state.lang : 'en'; }
function esc(v=''){ return String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function localWork(w){ return localizedWork(w, contentLang()); }
function localWiki(e){ return localizedWikiEntry(e, contentLang()); }
function getWork(slug){ return works.find(w => w.slug === slug); }
function isPrimaryProject(slug){ return PRIMARY_PROJECT_SLUGS.includes(slug); }
function currentRoute(){ return normalizeRoute(window.location.hash.replace(/^#/, '') || '/'); }
function normalizeRoute(value){
  let route = decodeURIComponent(String(value || '/').split('?')[0]);
  if(!route.startsWith('/')) route='/' + route;
  route=route.replace(/\/{2,}/g,'/');
  if(route.length>1) route=route.replace(/\/+$/,'');
  const aliases={ '/home':'/', '/inicio':'/', '/projects':'/', '/projetos':'/', '/game':'/obra/arcanian', '/jogo':'/obra/arcanian', '/comprar':'/purchase', '/devaneios':'/obra/devaneios', '/studio':'/about', '/estudio':'/about', '/sobre':'/about', '/docs':'/documentation', '/documentos':'/documentation', '/wiki-arcanian':'/wiki' };
  return aliases[route.toLowerCase()] || route;
}
function stripHash(href=''){ return href.replace(/^#/,''); }
function typeOf(work){ if(work.slug==='arcanian') return t().games; if(work.slug==='tormenta') return t().comics; return t().books; }
function statusOf(work){ return work.slug==='devaneios' ? t().available : t().development; }

function icon(name,size=22){
  const p={
    menu:'<path d="M3 6h18M3 12h18M3 18h18"/>', close:'<path d="M5 5l14 14M19 5 5 19"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4.5-4.5"/>', arrow:'<path d="M4 12h15"/><path d="m14 7 5 5-5 5"/>',
    chevron:'<path d="m7 9 5 5 5-5"/>', globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    controller:'<path d="M8 8h8a5 5 0 0 1 4.7 6.7l-1.1 3a2 2 0 0 1-3.2.8L14.7 17H9.3l-1.7 1.5a2 2 0 0 1-3.2-.8l-1.1-3A5 5 0 0 1 8 8Z"/><path d="M7 12h4M9 10v4"/><circle cx="16" cy="12" r=".8"/><circle cx="18" cy="14" r=".8"/>',
    book:'<path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4Z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h6Z"/>',
    panels:'<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M10 4v16M10 11h11"/>', play:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m10 9 6 3-6 3Z"/>',
    external:'<path d="M14 4h6v6M10 14 20 4"/><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"/>',
    pause:'<path d="M8 5v14M16 5v14"/>', resume:'<path d="m9 6 9 6-9 6Z"/>',
    grid:'<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
    spark:'<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5Z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/>',
    eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    home:'<path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
    top:'<path d="m6 14 6-6 6 6"/>', plus:'<path d="M12 5v14M5 12h14"/>'
  };
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p[name] || p.arrow}</svg>`;
}

function logo(className='brand-logo'){ return `<a href="#/" class="${className}" aria-label="Two Eyes On You"><img src="./media/logo.webp" alt="Two Eyes On You"></a>`; }
function platformMark(type,label,compact=false){
  const src=type==='steam'?'./media/steam-symbol.webp':'./media/xbox-symbol.webp';
  return `<span class="platform-mark platform-mark--${esc(type)} ${compact?'platform-mark--compact':''}"><span class="platform-mark__icon"><img src="${src}" alt="" aria-hidden="true"></span><b>${esc(label)}</b></span>`;
}
function gamePlatformSet(className='platform-set',compact=false){
  return `<div class="${className}">${platformMark('xbox','Xbox',compact)}${platformMark('steam','Steam / PC',compact)}</div>`;
}
function studioSignature(){
  const copy={
    pt:[['ESTÚDIO','Independente · Brasil'],['FOCO','Propriedades originais'],['FORMATOS','Games · Livros · HQ'],['EM PRODUÇÃO','Arcanian']],
    en:[['STUDIO','Independent · Brazil'],['FOCUS','Original properties'],['FORMATS','Games · Books · Comics'],['IN PRODUCTION','Arcanian']],
    es:[['ESTUDIO','Independiente · Brasil'],['ENFOQUE','Propiedades originales'],['FORMATOS','Juegos · Libros · Cómics'],['EN PRODUCCIÓN','Arcanian']],
    it:[['STUDIO','Indipendente · Brasile'],['FOCUS','Proprietà originali'],['FORMATI','Giochi · Libri · Fumetti'],['IN PRODUZIONE','Arcanian']],
    ja:[['スタジオ','インディー · ブラジル'],['FOCUS','オリジナルIP'],['FORMATS','ゲーム · 書籍 · コミック'],['IN PRODUCTION','Arcanian']]
  }[contentLang()]||[];
  return `<section class="studio-signature dark-section" aria-label="Two Eyes On You Studio"><div class="wrap studio-signature__grid">${copy.map(([key,value],i)=>`<div data-reveal><small>${esc(key)}</small><strong>${esc(value)}</strong>${i===0?'<i aria-hidden="true"></i>':''}</div>`).join('')}</div></section>`;
}
function button(href,label,tone='primary',extra=''){
  const external=/^https?:|^mailto:/.test(href);
  return `<a href="${esc(href)}" class="btn btn--${tone} ${extra}" ${external?'target="_blank" rel="noreferrer"':''}><span>${esc(label)}</span>${icon(external?'external':'arrow',18)}</a>`;
}
function breadcrumb(items=[]){ return `<nav class="breadcrumb" aria-label="Breadcrumb">${items.map((x,i)=> i===items.length-1 ? `<span>${esc(x.label)}</span>` : `<a href="${esc(x.href)}">${esc(x.label)}</a><i>/</i>`).join('')}</nav>`; }
function sectionTitle(kicker,title,text='',action=''){
  return `<header class="section-title" data-reveal><div><span class="kicker">${esc(kicker)}</span><h2>${esc(title)}</h2>${text?`<p>${esc(text)}</p>`:''}</div>${action}</header>`;
}

function activeFor(route, href){
  const r=stripHash(href);
  if(r==='/wiki') return route==='/wiki'||route==='/timeline'||route.startsWith('/wiki/');
  if(r.startsWith('/categoria/')) return route===r || (route.startsWith('/obra/') && categoryRouteForWork(route.split('/')[2])===r);
  return route===r;
}
function categoryRouteForWork(slug){ if(slug==='arcanian')return'/categoria/jogos'; if(slug==='tormenta')return'/categoria/hq'; return'/categoria/livros'; }

function header(route){
  const primary=[
    ['projects',t().projects,'#/categoria/jogos'],
    ['universe',t().universe,'#/wiki'],
    ['news',t().news,'#/news'],
    ['studio',t().studio,'#/about']
  ];
  return `<header class="global-header" data-header>
    <div class="global-header__bar">
      <div class="header-brand header-brand--solo">${logo()}</div>
      <nav class="main-nav" aria-label="Principal">
        ${primary.map(([key,label,href])=>{const active=key==='projects'?(route.startsWith('/categoria/')||route.startsWith('/obra/')||route==='/purchase'):key==='universe'?(route==='/wiki'||route==='/timeline'||route.startsWith('/wiki/')):key==='studio'?(route==='/about'||route==='/contact'||route==='/faq'||route.startsWith('/documentation')):route===stripHash(href);return `<button class="main-nav__item ${active?'active':''}" data-mega-trigger="${key}" aria-expanded="false">${esc(label)}${key==='projects'||key==='universe'?icon('chevron',14):''}</button>`;}).join('')}
      </nav>
      <div class="header-tools">
        <a class="header-purchase" href="#/purchase">${esc(t().purchase)}</a>
        <button class="header-tool search-trigger" aria-label="${esc(t().search)}">${icon('search',20)}<span>${esc(t().search)}</span></button>
        <button class="header-tool language-trigger" aria-label="Idioma">${icon('globe',18)}<span>${state.lang.toUpperCase()}</span></button>
        <button class="header-tool menu-trigger" aria-label="${esc(t().menu)}">${icon('menu',22)}</button>
      </div>
    </div>
  </header>`;
}

function megaMenus(){
  const projects=primaryWorks.map(w=>{const x=localWork(w);return `<a href="#/obra/${w.slug}" class="mega-card"><img src="${esc(w.image)}" alt="" loading="lazy"><div><span>${esc(typeOf(w))}</span><strong>${esc(x.displayTitle)}</strong></div></a>`}).join('');
  const latest=localizedNews(news,contentLang()).slice(0,2).map(n=>`<a href="${esc(n.href)}" class="mega-news"><img src="${esc(n.image)}" alt="" loading="lazy"><div><span>${esc(n.category)} · ${esc(n.date)}</span><strong>${esc(n.title)}</strong></div></a>`).join('');
  return `<div class="mega-layer" aria-hidden="true">
    <section class="mega-panel" data-mega-panel="projects">
      <div class="mega-panel__head"><span>LIBRARY</span><h2>${esc(t().projects)}</h2></div>
      <div class="mega-projects">${projects}</div>
      <nav class="mega-links"><a href="#/obra/arcanian">${t().games}${icon('arrow',16)}</a><a href="#/obra/devaneios">Devaneios${icon('arrow',16)}</a></nav>
    </section>
    <section class="mega-panel" data-mega-panel="universe">
      <div class="mega-split"><div class="mega-universe-art"><img src="./media/banner.webp" alt="" loading="lazy"></div><div class="mega-universe-copy"><span>ARCANIAN DATABASE</span><h2>${esc(t().database)}</h2><p>${esc(t().databaseText)}</p><div class="mega-metrics"><b>${allWikiEntries.length}</b><span>${esc(t().entries)}</span></div><div class="button-row">${button('#/wiki',t().wiki,'light')}${button('#/timeline',t().timeline,'outline')}</div></div></div>
    </section>
    <section class="mega-panel" data-mega-panel="news"><div class="mega-panel__head"><span>NEWSWIRE</span><h2>${esc(t().latest)}</h2></div><div class="mega-news-grid">${latest}</div><a href="#/news" class="mega-more">${esc(t().viewAll)}${icon('arrow',16)}</a></section>
    <section class="mega-panel" data-mega-panel="studio"><div class="mega-studio"><img src="./media/eye-ink.webp" alt="" loading="lazy"><div><span>INDEPENDENT STUDIO</span><h2>${esc(t().studioTitle)}</h2><p>${esc(t().studioText)}</p><nav><a href="#/about">${t().studio}${icon('arrow',16)}</a><a href="#/contact">${t().contact}${icon('arrow',16)}</a><a href="#/documentation">${t().docs}${icon('arrow',16)}</a><a href="#/faq">FAQ${icon('arrow',16)}</a></nav></div></div></section>
  </div>`;
}

function languagePopover(){
  return `<div class="language-popover" hidden><div class="language-popover__panel"><span>${esc(t().language)}</span>${LANGUAGES.map(l=>`<button data-lang="${l.id}" class="${l.id===state.lang?'active':''}"><span>${esc(l.label)}</span><b>${l.short}</b></button>`).join('')}</div></div>`;
}

function mobileDrawer(){
  return `<aside class="mobile-drawer ${state.menuOpen?'open':''}" aria-hidden="${state.menuOpen?'false':'true'}">
    <div class="mobile-drawer__head">${logo('brand-logo brand-logo--drawer')}<button class="drawer-close" aria-label="${esc(t().close)}">${icon('close',24)}</button></div>
    <div class="mobile-drawer__body">
      <section><span>${esc(t().exploreLabel)}</span><a href="#/">${esc(t().home)}${icon('arrow')}</a><a href="#/obra/arcanian">${t().games}${icon('arrow')}</a><a href="#/obra/devaneios">Devaneios${icon('arrow')}</a></section>
      <section><span>ARCANIAN</span><a href="#/obra/arcanian">Arcanian${icon('arrow')}</a><a href="#/wiki">${t().wiki}${icon('arrow')}</a><a href="#/timeline">${t().timeline}${icon('arrow')}</a><a href="#/purchase">${t().purchase}${icon('arrow')}</a></section>
      <section><span>TWO EYES ON YOU</span><a href="#/news">${t().news}${icon('arrow')}</a><a href="#/about">${t().studio}${icon('arrow')}</a><a href="#/contact">${t().contact}${icon('arrow')}</a><a href="#/faq">FAQ${icon('arrow')}</a><a href="#/documentation">${t().docs}${icon('arrow')}</a></section>
    </div>
    <div class="mobile-drawer__foot"><button class="mobile-language">${icon('globe',18)} ${state.lang.toUpperCase()}</button><span>Two Eyes On You™</span></div>
  </aside>`;
}

function searchOverlay(){
  return `<div class="search-overlay ${state.searchOpen?'open':''}" aria-hidden="${state.searchOpen?'false':'true'}">
    <div class="search-overlay__top"><span>GLOBAL SEARCH</span><button class="search-close" aria-label="${esc(t().close)}">${icon('close',25)}</button></div>
    <div class="search-shell">
      <div class="search-box">${icon('search',28)}<input id="site-search" autocomplete="off" spellcheck="false" placeholder="${esc(t().searchPlaceholder)}"><kbd>/</kbd></div>
      <div class="search-hints"><span>${esc(t().searchProjects)}</span><span>WIKI</span><span>${esc(t().searchNews)}</span><span>${esc(t().searchDocs)}</span></div>
      <div id="search-results" class="search-results"></div>
    </div>
  </div>`;
}

function imageLightbox(){
  return `<div class="image-lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="${esc(zoomImageLabel())}">
    <button type="button" class="image-lightbox__backdrop" aria-label="${esc(t().close)}"></button>
    <div class="image-lightbox__stage">
      <div class="image-lightbox__top"><span class="image-lightbox__count">01 / 01</span><button type="button" class="image-lightbox__close" aria-label="${esc(t().close)}">${icon('close',24)}</button></div>
      <button type="button" class="image-lightbox__nav image-lightbox__nav--prev" aria-label="${esc(t().prev)}">${icon('chevron',24)}</button>
      <figure><img class="image-lightbox__image" src="" alt=""><figcaption class="image-lightbox__caption"></figcaption></figure>
      <button type="button" class="image-lightbox__nav image-lightbox__nav--next" aria-label="${esc(t().next)}">${icon('chevron',24)}</button>
    </div>
  </div>`;
}

function thirdPartyTrademarkNotice(){
  return {
    pt:'Xbox, Steam e demais nomes, logotipos e marcas de terceiros exibidos neste site pertencem aos seus respectivos titulares. O uso é apenas informativo e não implica afiliação, patrocínio ou endosso.',
    en:'Xbox, Steam and all other third-party names, logos and trademarks displayed on this site belong to their respective owners. Their use is informational only and does not imply affiliation, sponsorship or endorsement.',
    es:'Xbox, Steam y los demás nombres, logotipos y marcas de terceros mostrados en este sitio pertenecen a sus respectivos titulares. Su uso es únicamente informativo y no implica afiliación, patrocinio ni respaldo.',
    it:'Xbox, Steam e tutti gli altri nomi, loghi e marchi di terze parti mostrati su questo sito appartengono ai rispettivi titolari. Il loro utilizzo è esclusivamente informativo e non implica affiliazione, sponsorizzazione o approvazione.',
    ja:'このサイトに表示されるXbox、Steam、その他の第三者の名称・ロゴ・商標は、それぞれの権利者に帰属します。これらの表示は情報提供のみを目的としており、提携、スポンサーシップ、推奨を意味するものではありません。'
  }[contentLang()] || '';
}

function projectMeta(meta,work){
  return meta.map(([k,v],i)=>{
    const isPlatforms=work.slug==='arcanian' && i===0;
    return `<div class="${isPlatforms?'project-meta-bar__platform-cell':''}"><small>${esc(k)}</small>${isPlatforms?gamePlatformSet('project-meta-platforms',true):`<strong>${esc(v)}</strong>`}</div>`;
  }).join('');
}

function footer(){
  return `<footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand-block">${logo('footer-logo')}<div><strong>Two Eyes On You</strong><p>${esc(t().studioText)}</p></div></div>
      <div class="footer-columns">
        <nav><span>${esc(t().searchProjects)}</span><a href="#/obra/arcanian">Arcanian</a><a href="#/obra/devaneios">Devaneios</a></nav>
        <nav><span>ARCANIAN</span><a href="#/wiki">${t().wiki}</a><a href="#/timeline">${t().timeline}</a><a href="#/purchase">${t().purchase}</a></nav>
        <nav><span>${esc(t().studio.toUpperCase())}</span><a href="#/about">${t().studio}</a><a href="#/news">${t().news}</a><a href="#/contact">${t().contact}</a><a href="#/faq">FAQ</a></nav>
        <nav><span>${esc(t().legal)}</span><a href="#/documentation">${t().docs}</a><a href="#/documentation/privacy">${esc(t().privacy)}</a><a href="#/documentation/terms">${esc(t().terms)}</a><a href="#/documentation/licenses">${esc(t().licenses)}</a></nav>
      </div>
    </div>
    <div class="footer-social-row"><a href="https://instagram.com/twoeyesonyou" target="_blank" rel="noreferrer">Instagram</a><a href="https://youtube.com/@twoeyesonyou" target="_blank" rel="noreferrer">YouTube</a><a href="https://x.com/twoeyeson_you" target="_blank" rel="noreferrer">X</a><a href="https://discord.gg/Ftu5mcXhcX" target="_blank" rel="noreferrer">Discord</a></div>
    <div class="footer-trademark-note"><p>${esc(thirdPartyTrademarkNotice())}</p></div>
    <div class="footer-bottom"><span>${esc(t().footer)}</span><span>Santos · São Paulo · Brasil</span></div>
  </footer>`;
}

function shell(route,content){
  const landing=route==='/';
  return `<button type="button" class="skip-link" data-scroll-to="site-content">${esc(t().skip)}</button>${header(route)}${megaMenus()}${languagePopover()}${mobileDrawer()}${searchOverlay()}${imageLightbox()}<div class="scroll-progress ${landing?'scroll-progress--landing':''}" aria-hidden="true"><i></i></div><div id="site-content" class="site-stage ${landing?'site-stage--landing':''}" tabindex="-1">${content}${footer()}</div><button class="back-top" aria-label="${esc(t().backTop)}">${icon('top',20)}</button>`;
}

function heroSlide(work,index){
  const item=localWork(work);
  const exp=getProjectExperience(work.slug,contentLang());
  const landingMeta={
    arcanian:{media:'./media/banner.webp',kicker:exp?.heroLabel||`${t().gameLabel} · ${t().development.toUpperCase()}`,headline:{pt:'A investigação continua.',en:'The investigation continues.',es:'La investigación continúa.',it:'L’indagine continua.',ja:'捜査は続く。'}[contentLang()],primary:'#/obra/arcanian',primaryLabel:t().learn,secondary:'#/wiki',secondaryLabel:t().universe,position:'center'},
    devaneios:{media:'./media/welcome.webp',kicker:`ARCANIAN · ${t().episodeOne}`,headline:{pt:'O primeiro caso começa aqui.',en:'The first case begins here.',es:'El primer caso comienza aquí.',it:'Il primo caso comincia qui.',ja:'最初の事件はここから始まる。'}[contentLang()],primary:'#/purchase',primaryLabel:t().purchase,secondary:'#/obra/devaneios',secondaryLabel:t().viewProject,position:'center'},
  };
  const meta=landingMeta[work.slug]||{media:work.image,kicker:`${typeOf(work)} · ${statusOf(work)}`,headline:item.displayTitle,primary:`#/obra/${work.slug}`,primaryLabel:t().discover,secondary:'#/wiki',secondaryLabel:t().universe,position:'center'};
  const platforms=work.slug==='arcanian'?gamePlatformSet('hero-platforms',true):'';
  return `<article class="home-hero__slide ${index===state.hero?'active':''}" data-hero-slide="${index}" data-hero-route="#/obra/${work.slug}">
    <div class="home-hero__media"><img class="hero-media" src="${esc(meta.media)}" alt="" ${index===0?'fetchpriority="high"':'loading="lazy"'} style="object-position:${esc(meta.position)}"><div class="home-hero__scrim"></div></div>
    <div class="home-hero__content wrap"><div class="home-hero__copy home-hero__copy--landing" data-reveal>
      <span class="hero-kicker">${esc(meta.kicker)}</span>
      <div class="landing-hero__lockup"><img class="home-hero__logo" src="${esc(work.logo)}" alt="${esc(item.displayTitle)}"><h1>${esc(meta.headline)}</h1></div>
      ${platforms}
      <div class="button-row">${button(meta.primary,meta.primaryLabel,'light')}${button(meta.secondary,meta.secondaryLabel,'glass')}</div>
    </div></div>
  </article>`;
}

function mediaRailCard(work,index){
  const item=localWork(work);
  return `<a href="#/obra/${work.slug}" class="media-rail-card" data-reveal>
    <div class="media-rail-card__visual"><img src="${esc(work.image)}" alt="" loading="lazy"><span>${String(index+1).padStart(2,'0')}</span><div class="media-rail-card__overlay"><img class="media-rail-card__logo" src="${esc(work.logo)}" alt="${esc(item.displayTitle)}"><small>${esc(typeOf(work))} · ${esc(statusOf(work))}</small></div></div>
    <div class="media-rail-card__body"><em>${esc(t().viewProject)} ${icon('arrow',16)}</em></div>
  </a>`;
}

function newsCard(item,index=0){
  return `<a href="${esc(item.href)}" class="news-card ${index===0?'news-card--lead':''}" data-reveal>
    <div class="news-card__media"><img src="${esc(item.image)}" alt="" loading="lazy"></div>
    <div class="news-card__copy"><div class="news-meta"><span>${esc(item.category)}</span><time>${esc(item.date)}</time></div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p><em>${esc(t().learn)} ${icon('arrow',16)}</em></div>
  </a>`;
}

function formatTile(key){
  const m=CATEGORY_META[key], count=CATEGORY_MAP[key].length;
  const label={games:t().games,books:t().books,comics:t().comics,animation:t().animation}[key];
  return `<a href="${m.href}" class="format-tile" data-reveal><img src="${m.image}" alt="" loading="lazy"><div class="format-tile__shade"></div><span class="format-tile__icon">${icon(m.icon,25)}</span><div><small>${String(count).padStart(2,'0')} ${count===1?'PROJETO':'PROJETOS'}</small><h3>${esc(label)}</h3><em>${esc(t().explore)} ${icon('arrow',16)}</em></div></a>`;
}

function startCard({num,title,text,href,image,tag}){
  return `<a href="${href}" class="start-card" data-reveal><img src="${image}" alt="" loading="lazy"><div class="start-card__shade"></div><span class="start-card__num">${num}</span><div class="start-card__copy"><small>${esc(tag)}</small><h3>${esc(title)}</h3><p>${esc(text)}</p><em>${esc(t().discover)} ${icon('arrow',16)}</em></div></a>`;
}

function announcedCard(work,index){
  const item=localWork(work);
  const meta={
    'menos-um':{type:t().lessOneType,text:t().lessOneText},
    tormenta:{type:t().tormentaType,text:t().tormentaText},
    'a-ultima-danca':{type:t().lastDanceType,text:t().lastDanceText}
  }[work.slug] || {type:typeOf(work),text:item.summary};
  return `<article class="announced-card" data-reveal><div class="announced-card__media"><img src="${esc(work.image)}" alt="" loading="lazy"><span>${String(index+1).padStart(2,'0')}</span><b>${esc(t().announcedBadge)}</b></div><div class="announced-card__copy"><small>${esc(meta.type)}</small><div class="announced-card__logo-wrap"><img class="announced-card__logo announced-card__logo--${esc(work.slug)}" src="${esc(work.logo)}" alt="${esc(item.displayTitle)}" loading="lazy"></div><p>${esc(meta.text)}</p><em>${esc(t().announcedMore)}</em></div></article>`;
}

function renderHome(){
  const featured=primaryWorks;
  const siteNews=localizedNews(news,contentLang());
  const starts=[
    {num:'01',title:t().startGameTitle,text:t().startGameText,href:'#/obra/arcanian',image:'./media/game.webp',tag:t().startGameTag},
    {num:'02',title:'Arcanian: Devaneios',text:t().startBookText,href:'#/obra/devaneios',image:'./media/welcome.webp',tag:t().startBookTag},
    {num:'03',title:'Wiki Arcanian',text:t().startWikiText,href:'#/wiki',image:'./media/banner.webp',tag:`${allWikiEntries.length} ${t().entriesUpper}`},
  ];
  return `<main class="home-page home-page--landing">
    <section class="home-hero home-hero--landing" aria-label="${esc(t().featured)}">
      <div class="home-hero__slides">${featured.map(heroSlide).join('')}</div>
      <div class="hero-controls hero-controls--landing wrap"><div class="hero-dots">${featured.map((w,i)=>`<button data-hero-dot="${i}" class="${i===state.hero?'active':''}" aria-label="${esc(t().featured)} ${i+1}"><span></span><b>${String(i+1).padStart(2,'0')}</b><em>${esc(localWork(w).displayTitle)}</em></button>`).join('')}</div><button class="hero-pause" aria-label="${esc(t().featured)}">${state.heroPaused?icon('resume',18):icon('pause',18)}</button></div>
      <a href="#/obra/${featured[state.hero]?.slug||'arcanian'}" class="landing-scroll-cue" data-hero-explore aria-label="${esc(t().explore)}"><span>${esc(t().exploreLabel)}</span>${icon('chevron',16)}</a>
    </section>

    <section id="landing-featured" class="landing-featured dark-section"><div class="wrap">
      ${sectionTitle(t().featured,t().featuredTitle,t().featuredText,`<a class="section-action" href="#/categoria/jogos">${t().viewAll}${icon('arrow',17)}</a>`)}
      <div class="landing-feature-grid">
        <a href="#/obra/arcanian" class="landing-feature landing-feature--lead" data-reveal><img src="./media/game.webp" alt="" loading="lazy"><div class="landing-feature__shade"></div><div class="landing-feature__copy"><span>${esc(t().gameLabel)}</span><img src="./media/logos-fixed/arcanian.webp" alt="Arcanian">${gamePlatformSet('landing-platforms',true)}<em>${esc(t().discover)} ${icon('arrow',17)}</em></div></a>
        <a href="#/purchase" class="landing-feature landing-feature--side" data-reveal><img src="./media/devaneios.webp" alt="" loading="lazy"><div class="landing-feature__shade"></div><div class="landing-feature__copy"><span>${esc(t().episodeOne)}</span><img src="./media/logos-fixed/devaneios.webp" alt="Arcanian: Devaneios"><strong>${esc(t().physicalDigital)}</strong><em>${esc(t().chooseEdition)} ${icon('arrow',17)}</em></div></a>
      </div>
    </div></section>

    <section class="home-start light-section"><div class="wrap">${sectionTitle(t().discover.toUpperCase(),t().start,t().discoverText)}<div class="start-grid">${starts.map(startCard).join('')}</div></div></section>

    <section class="project-library dark-section"><div class="wrap">${sectionTitle(t().projects.toUpperCase(),t().projects,t().projectsText)}<div class="media-rail media-rail--primary" data-media-rail>${primaryWorks.map(mediaRailCard).join('')}</div><div class="rail-controls"><button data-rail-prev aria-label="${esc(t().prev)}">${icon('arrow',18)}</button><button data-rail-next aria-label="${esc(t().next)}">${icon('arrow',18)}</button></div></div></section>

    <section id="announced" class="announced-projects light-section"><div class="wrap">${sectionTitle(t().announced,t().upcomingTitles,t().announcedText)}<div class="announced-grid">${announcedWorks.map(announcedCard).join('')}</div></div></section>

    <section class="database-feature dark-section">
      <div class="database-feature__media"><img src="./media/banner.webp" alt="" loading="lazy"><div></div></div>
      <div class="wrap database-feature__inner"><div class="database-feature__copy" data-reveal><span class="kicker">ARCANIAN DATABASE</span><h2>${esc(t().database)}</h2><p>${esc(t().databaseText)}</p><div class="database-stats"><div><b>${allWikiEntries.length}</b><span>${esc(t().entries)}</span></div><div><b>${allTimelineEvents.length}</b><span>${esc(t().events)}</span></div><div><b>${primaryWorks.length}</b><span>${esc(t().projects.toLowerCase())}</span></div></div><div class="button-row">${button('#/wiki',t().wiki,'light')}${button('#/timeline',t().timeline,'outline')}</div></div></div>
    </section>

    <section class="newswire light-section"><div class="wrap">${sectionTitle('NEWSWIRE',t().latest,t().newsText,`<a class="section-action" href="#/news">${t().viewAll}${icon('arrow',17)}</a>`)}<div class="news-grid">${siteNews.map(newsCard).join('')}</div></div></section>

    <section class="formats dark-section"><div class="wrap">${sectionTitle('FORMATS',t().formats,t().formatsText)}<div class="format-grid format-grid--primary">${PROJECT_CATEGORY_KEYS.map(formatTile).join('')}</div></div></section>

    <section class="studio-feature light-section"><div class="studio-feature__art"><img src="./media/eye-ink.webp" alt="" loading="lazy"></div><div class="studio-feature__copy" data-reveal><span class="kicker">TWO EYES ON YOU STUDIOS</span><h2>${esc(t().studioTitle)}</h2><p>${esc(t().studioText)}</p><div class="button-row">${button('#/about',t().studio,'dark')}${button('#/contact',t().contact,'outline-dark')}</div></div></section>

    <section class="faq-preview light-section"><div class="wrap">${sectionTitle('SUPPORT',t().faq,{pt:'Plataformas, privacidade, obras, disponibilidade e funcionamento do universo.',en:'Platforms, privacy, works, availability and how the universe works.',es:'Plataformas, privacidad, obras, disponibilidad y funcionamiento del universo.',it:'Piattaforme, privacy, opere, disponibilità e funzionamento dell’universo.',ja:'プラットフォーム、プライバシー、作品、提供状況、世界観について。'}[contentLang()],`<a class="section-action" href="#/faq">${t().viewAll}${icon('arrow',17)}</a>`)}<div class="faq-list">${faqItems().slice(0,4).map(faqItem).join('')}</div></div></section>
  </main>`;
}

function renderCategory(key){
  const list=CATEGORY_MAP[key]||[], meta=CATEGORY_META[key], label={games:t().games,books:t().books,comics:t().comics,animation:t().animation}[key];
  const countText=list.length?`${list.length} ${list.length===1?t().categoryCountOne:t().categoryCountMany}`:t().categoryFuture;
  return `<main class="category-page">
    <section class="page-hero page-hero--split dark-section"><div class="page-hero__visual"><img src="${meta.image}" alt="" fetchpriority="high"><div></div></div><div class="wrap page-hero__inner"><div class="page-hero__copy">${breadcrumb([{label:t().home,href:'#/'},{label:t().projects,href:'#/categoria/jogos'},{label}])}<span class="kicker">TWO EYES ON YOU / LIBRARY</span><h1>${esc(label)}</h1><p>${esc(countText)}</p></div></div></section>
    <section class="category-browser light-section"><div class="wrap"><nav class="category-tabs">${PROJECT_CATEGORY_KEYS.map(k=>`<a href="${CATEGORY_META[k].href}" class="${k===key?'active':''}"><span>${esc({games:t().games,books:t().books}[k])}</span><b>${String(CATEGORY_MAP[k].length).padStart(2,'0')}</b></a>`).join('')}</nav>
    ${list.length?`<div class="catalog-grid">${list.map(mediaRailCard).join('')}</div>`:`<div class="empty-category" data-reveal>${icon(meta.icon,42)}<h2>${esc(t().noAnnounced)}</h2><p>${esc(t().categoryFutureLong)}</p>${button('#/',t().back,'dark')}</div>`}</div></section>
  </main>`;
}

function spiralStage(){
  return `<div class="spiral-stage" data-tilt data-reveal><div class="spiral-depth"></div><img class="spiral ghost" src="./media/devaneios-spiral-reference.png" alt=""><img class="spiral main" src="./media/devaneios-spiral-reference.png" alt="Espiral de Devaneios com raízes"><img class="spiral roots" src="./media/devaneios-spiral-reference.png" alt="" aria-hidden="true"><div class="spiral-shadow"></div></div>`;
}

function workRelatedWiki(work){
  return (work.relatedWiki||[]).map(slug=>allWikiEntries.find(e=>e.slug===slug)).filter(Boolean).slice(0,8);
}

function zoomImageLabel(){
  return {pt:'Ampliar imagem',en:'Enlarge image',es:'Ampliar imagen',it:'Ingrandisci immagine',ja:'画像を拡大'}[contentLang()]||'Enlarge image';
}
function renderProjectMediaGallery(exp,slug=''){
  const gallery=exp.gallery||[];
  const count=gallery.length;
  return `<section class="project-gallery project-gallery--${esc(slug)} dark-section"><div class="wrap"><div class="project-gallery__head" data-reveal><span class="kicker">MEDIA / ${String(count).padStart(2,'0')}</span><h2>${esc(t().insideWork)}</h2></div><div class="project-gallery__grid">${gallery.map((src,i)=>`<figure class="project-gallery__item project-gallery__item--${i+1}" data-reveal><button type="button" class="project-gallery__zoom" data-lightbox-src="${esc(src)}" data-lightbox-index="${i}" aria-label="${esc(zoomImageLabel())}"><img src="${esc(src)}" alt="" loading="lazy"><span class="project-gallery__zoom-icon" aria-hidden="true">${icon('search',18)}</span></button></figure>`).join('')}</div></div></section>`;
}

function renderProjectFeatures(exp){
  return `<section id="details" class="project-feature-stack">${(exp.features||[]).map((f,i)=>`<article class="project-feature-band ${i%2?'project-feature-band--reverse':''} ${i===1?'dark-section':'light-section'}"><div class="project-feature-band__media" data-reveal><img src="${esc(f[3])}" alt="" loading="lazy"></div><div class="project-feature-band__copy" data-reveal><span>${esc(f[0])}</span><h2>${esc(f[1])}</h2><p>${esc(f[2])}</p></div></article>`).join('')}</section>`;
}

function renderWork(slug){
  const work=getWork(slug); if(!work || !isPrimaryProject(slug))return renderNotFound();
  const item=localWork(work), exp=getProjectExperience(slug,contentLang()), related=primaryWorks.filter(w=>w.slug!==slug), relatedWiki=workRelatedWiki(work);
  const meta=exp?.meta || (item.facts||work.facts||[]).slice(0,4);
  const heroButton=work.slug==='devaneios'?button('#/purchase',t().purchase,'light'):`<button type="button" class="btn btn--light" data-scroll-to="overview"><span>${esc(t().explore)}</span>${icon('arrow',18)}</button>`;
  const spiralNotes=t().spiralNotes.map(x=>`<span>${esc(x)}</span>`).join('');
  return `<main class="work-page project-page project--${esc(slug)}" style="--work:#c7a24a">
    <section class="project-product-hero dark-section"><img class="project-product-hero__media" src="${esc(work.image)}" alt="" fetchpriority="high"><div class="project-product-hero__shade"></div><div class="wrap project-product-hero__inner"><div class="project-product-hero__copy" data-reveal>${breadcrumb([{label:t().home,href:'#/'},{label:typeOf(work),href:'#'+categoryRouteForWork(slug)},{label:item.displayTitle}])}<span class="project-product-hero__label">${esc(exp?.heroLabel || item.eyebrow || work.eyebrow)}</span><img class="project-product-hero__logo" src="${esc(work.logo)}" alt="${esc(item.displayTitle)}"><div class="button-row">${heroButton}${button('#/wiki',t().wiki,'glass')}</div></div></div></section>
    <section class="project-meta-bar light-section"><div class="wrap project-meta-bar__grid">${projectMeta(meta,work)}</div></section>
    <nav class="work-subnav" aria-label="${esc(t().overview)}"><div class="wrap"><a class="work-subnav__identity" href="#/obra/${esc(work.slug)}" aria-label="${esc(item.displayTitle)}"><img src="${esc(work.logo)}" alt=""></a><button type="button" data-scroll-to="overview">${esc(t().overview)}</button><button type="button" data-scroll-to="details">${esc(t().highlights)}</button><button type="button" data-scroll-to="media">${esc(t().media)}</button>${item.characters?.length?`<button type="button" data-scroll-to="cast">${esc(t().characters)}</button>`:''}${item.worlds?.length?`<button type="button" data-scroll-to="worlds">${esc(t().world)}</button>`:''}${work.slug==='devaneios'?`<button type="button" data-scroll-to="spiral">${esc(t().spiral)}</button>`:''}<button type="button" data-scroll-to="connections">${esc(t().connections)}</button></div></nav>

    <section id="overview" class="project-intro light-section"><div class="wrap project-intro__grid"><div data-reveal><span class="kicker">${esc(exp?.introKicker || 'ARCANIAN')}</span><h1>${esc(exp?.introTitle || item.displayTitle)}</h1></div><div data-reveal><p>${esc(exp?.introText || item.long)}</p>${work.slug==='arcanian'?`<div class="platform-line"><span>${esc(t().platformsPlanned)}</span>${platformMark('xbox','Xbox')}${platformMark('steam','Steam / PC')}</div>`:''}</div></div></section>

    ${renderProjectFeatures(exp||{features:[]})}
    <div id="media">${renderProjectMediaGallery(exp||{gallery:[work.image]},work.slug)}</div>

    ${work.slug==='devaneios'?`<section id="spiral" class="spiral-feature dark-section"><div class="wrap spiral-feature__grid"><div class="spiral-copy" data-reveal><span class="kicker">DEVANEIOS / ${esc(t().spiralNotes[0].toUpperCase())}</span><h2>${esc(t().spiralTitle)}</h2><p>${esc(t().spiralText)}</p><div class="spiral-notes">${spiralNotes}</div></div>${spiralStage()}</div></section>`:''}

    ${renderWorkSpecific(item)}

    ${relatedWiki.length?`<section class="related-wiki dark-section"><div class="wrap">${sectionTitle('ARCANIAN DATABASE',t().wikiContinue,t().wikiContinueText)}<div class="related-wiki-grid">${relatedWiki.map(e=>`<a href="#/wiki/${e.slug}" data-reveal><span>${esc(e.category)}</span><strong>${esc(localWiki(e).name)}</strong><p>${esc(localWiki(e).summary||'')}</p>${icon('arrow',18)}</a>`).join('')}</div></div></section>`:''}

    <section class="project-closing dark-section"><div class="wrap" data-reveal><img src="${esc(work.logo)}" alt="${esc(item.displayTitle)}"><p>${esc(exp?.closing||t().defaultClosing)}</p></div></section>
    <section id="connections" class="more-projects light-section"><div class="wrap">${sectionTitle('MORE',t().otherProjects,t().otherProjectsText)}<div class="catalog-grid">${related.map(mediaRailCard).join('')}</div></div></section>
  </main>`;
}

function renderWorkSpecific(work){
  let html='';
  if(work.characters?.length){html+=`<section id="cast" class="cast-section dark-section"><div class="wrap">${sectionTitle('CAST',t().centralCharacters,t().centralCharactersText)}<div class="cast-grid">${work.characters.map((c,i)=>`<a href="#/wiki/${c.slug}" class="cast-card" data-reveal><span>${String(i+1).padStart(2,'0')} · ${esc(c.role)}</span><h3>${esc(c.name)}</h3><p>${esc(c.text)}</p><em>Wiki ${icon('arrow',16)}</em></a>`).join('')}</div></div></section>`;}
  if(work.worlds?.length){html+=`<section id="worlds" class="world-section dark-section"><div class="world-grid">${work.worlds.map((w,i)=>`<article class="world-card" data-reveal><img src="${esc(w.image)}" alt="" loading="lazy"><div class="world-card__shade"></div><div><span>${esc(t().world.toUpperCase())} ${String(i+1).padStart(2,'0')}</span><h3>${esc(w.name)}</h3><p>${esc(w.text)}</p></div></article>`).join('')}</div></section>`;}
  return html;
}

function renderPurchase(){
  const dev=localWork(getWork('devaneios'));
  return `<main class="purchase-page"><section class="purchase-hero dark-section"><div class="purchase-hero__art"><img src="./media/devaneios.webp" alt="Arcanian: Devaneios" fetchpriority="high"></div><div class="purchase-hero__copy">${breadcrumb([{label:t().home,href:'#/'},{label:'Devaneios',href:'#/obra/devaneios'},{label:t().purchase}])}<span class="kicker">ARCANIAN · ${esc(t().episodeOne)}</span><img src="./media/logos-fixed/devaneios.webp" alt="Arcanian: Devaneios"><h1>${esc(t().purchaseTitle)}</h1><p>${esc(dev.summary)}</p></div></section>
  <section class="store-section light-section"><div class="wrap"><div class="store-grid"><a class="store-card" href="https://www.amazon.com.br/dp/B0HD5MV8ZG" target="_blank" rel="noreferrer" data-reveal><span>01</span><div class="store-card__body"><small>${esc(t().physicalKindle)}</small><div class="store-card__logo store-card__logo--amazon"><img src="./media/store/amazon.png" alt="Amazon"></div><p>${esc(t().physicalDigitalDesc)}</p></div>${icon('external')}</a><a class="store-card" href="https://loja.uiclap.com/titulo/ua184114" target="_blank" rel="noreferrer" data-reveal><span>02</span><div class="store-card__body"><small>${esc(t().physicalBook)}</small><div class="store-card__logo store-card__logo--uiclap"><img src="./media/store/uiclap.png" alt="UICLAP"></div><p>${esc(t().printOnDemand)}</p></div>${icon('external')}</a></div><p class="purchase-note">${esc(t().purchaseNote)}</p></div></section></main>`;
}

function renderNews(){
  const siteNews=localizedNews(news,contentLang());
  return `<main class="news-page"><section class="page-hero page-hero--editorial dark-section"><div class="page-hero__visual"><img src="./media/welcome.webp" alt="" fetchpriority="high"><div></div></div><div class="wrap page-hero__inner"><div class="page-hero__copy">${breadcrumb([{label:t().home,href:'#/'},{label:t().news}])}<span class="kicker">NEWSWIRE</span><h1>${esc(t().news)}</h1><p>${esc(t().newsPageText)}</p></div></div></section><section class="news-archive light-section"><div class="wrap">${sectionTitle('LATEST',t().newsArchive)}<div class="news-grid news-grid--archive">${siteNews.map(newsCard).join('')}</div></div></section></main>`;
}

function wikiCard(entry,labels={}){
  const item=localWiki(entry), locked=entry.spoiler&&!state.spoilers;
  return `<a href="${locked?'#/wiki':`#/wiki/${entry.slug}`}" class="wiki-card ${locked?'locked':''}" data-reveal><div class="wiki-card__meta"><span>${esc(labels[entry.category]||entry.category)}</span>${entry.spoiler?`<b>${esc(t().spoiler)}</b>`:''}</div><h3>${locked?'████████':esc(item.name)}</h3><p>${locked?'Ative os spoilers para exibir esta entrada.':esc(item.summary||'')}</p><em>${locked?t().spoilersOff:'Abrir entrada'} ${icon('arrow',16)}</em></a>`;
}

function filteredWiki(){
  const q=state.wikiQuery.trim().toLowerCase();
  return allWikiEntries.filter(e=>{
    const x=localWiki(e), deep=getDeepWikiProfile(e.slug);
    const cat=state.wikiCategory==='all'||e.category===state.wikiCategory;
    const deepText=deep?[...(deep.identity||[]).flat(),...(deep.powers||[]),...(deep.weapons||[]),...(deep.techniques||[]),...(deep.events||[]),deep.note||''].join(' '):'';
    const hay=`${x.name} ${x.alias||''} ${x.tag||''} ${x.summary||''} ${deepText}`.toLowerCase();
    return cat&&(!q||hay.includes(q));
  });
}

function wikiPortalTile(cat){
  const count=cat.id==='all'?allWikiEntries.length:allWikiEntries.filter(e=>e.category===cat.id).length;
  return `<button type="button" class="wiki-portal-tile" data-wiki-category="${esc(cat.id)}"><span>${String(count).padStart(2,'0')}</span><strong>${esc(cat.label)}</strong>${icon('arrow',17)}</button>`;
}

function renderFragmentDirectory(){
  const slugs=['fragmentos','passagens-ikarius','gelo-beatriz','materia-lily','vento-kaji','adaptacao-mark','realidade-nicolle','tempo-joel','adaptacao-hiussen','influencia-hiussen'];
  const entries=slugs.map(s=>allWikiEntries.find(e=>e.slug===s)).filter(Boolean);
  return `<section class="wiki-fragment-feature dark-section"><div class="wrap"><div class="wiki-fragment-feature__head" data-reveal><div><span class="kicker">FRAGMENTOS</span><h2>Não existe um único tipo de poder.</h2></div><p>Compatibilidade, rejeição, manifestação, interface, ressonância e âncoras formam sistemas diferentes. A Wiki separa cada camada para que Fragmentos não virem uma categoria genérica.</p></div><div class="fragment-directory">${entries.map((e,i)=>`<a href="#/wiki/${e.slug}" data-reveal><span>${String(i+1).padStart(2,'0')}</span><small>${esc(e.tag||e.category)}</small><strong>${esc(e.name)}</strong><p>${esc(e.summary)}</p>${icon('arrow',17)}</a>`).join('')}</div></div></section>`;
}

function wikiAlphabetIndex(){
  const groups={};
  [...allWikiEntries].sort((a,b)=>a.name.localeCompare(b.name,'pt-BR')).forEach(entry=>{
    const initial=(entry.name||'#').normalize('NFD').replace(/[\u0300-\u036f]/g,'').charAt(0).toUpperCase();
    const key=/[A-Z0-9]/.test(initial)?initial:'#';
    (groups[key] ||= []).push(entry);
  });
  return `<section class="wiki-az light-section"><div class="wrap"><details class="wiki-az__details"><summary><div><span class="kicker">A–Z INDEX</span><h2>Índice completo da Wiki</h2><p>${allWikiEntries.length} verbetes organizados alfabeticamente. Use quando você já sabe o nome que procura.</p></div><b>${icon('plus',22)}</b></summary><div class="wiki-az__groups">${Object.entries(groups).map(([letter,entries])=>`<section><span>${esc(letter)}</span><div>${entries.map(e=>{const locked=e.spoiler&&!state.spoilers;return `<a href="${locked?'#/wiki':`#/wiki/${e.slug}`}"><small>${esc(e.category)}</small><strong>${locked?'████████':esc(localWiki(e).name)}</strong></a>`}).join('')}</div></section>`).join('')}</div></details></div></section>`;
}

function dossierLabels(category){
  if(category==='characters') return ['PODERES / MANIFESTAÇÕES','ARMAS / EQUIPAMENTO','TÉCNICAS / REGRAS','EVENTOS-CHAVE','Capacidades e equipamento'];
  if(category==='abilities') return ['EFEITOS','INTERFACES / EQUIPAMENTO','REGRAS / LIMITES','OCORRÊNCIAS','Funcionamento da habilidade'];
  if(category==='weapons') return ['EFEITOS / PROPRIEDADES','COMPONENTES / PORTADORES','REGRAS DE USO','OCORRÊNCIAS','Arma e funcionamento'];
  if(category==='technology'||category==='objects') return ['FUNÇÕES','COMPONENTES / INTERFACES','PROTOCOLOS / LIMITES','OCORRÊNCIAS','Função e operação'];
  if(category==='organizations') return ['CAPACIDADES / RECURSOS','INFRAESTRUTURA','MÉTODOS / PROTOCOLOS','EVENTOS-CHAVE','Estrutura e atuação'];
  if(category==='places') return ['CARACTERÍSTICAS','ESTRUTURAS / RECURSOS','REGRAS / ACESSO','EVENTOS-CHAVE','Lugar e relevância'];
  return ['COMPORTAMENTO / EFEITOS','INTERFACES / COMPONENTES','REGRAS / LIMITES','OCORRÊNCIAS','Regras e comportamento'];
}

function renderWiki(){
  const labels=Object.fromEntries(wikiCategories.map(c=>[c.id,c.label])), filtered=filteredWiki();
  const featured=['ikarius','aphride','joel','fragmentos','hiussen','grande-dia','lachryma','bayrule'].map(s=>allWikiEntries.find(e=>e.slug===s)).filter(Boolean);
  return `<main class="wiki-page"><section class="wiki-hero dark-section"><img src="./media/banner.webp" alt="" fetchpriority="high"><div class="wiki-hero__shade"></div><div class="wrap wiki-hero__copy">${breadcrumb([{label:'Início',href:'#/'},{label:'Universo',href:'#/wiki'},{label:'Wiki'}])}<span class="kicker">ARCANIAN DATABASE</span><h1>Wiki Arcanian</h1><p>Uma base de dados para personagens, Fragmentos, armas, tecnologia, lugares, eventos, anomalias e conexões entre obras.</p><div class="wiki-hero__actions">${button('#/timeline',t().timeline,'glass')}<span><b>${allWikiEntries.length}</b> ${esc(t().entries)}</span></div></div></section>
  <section class="wiki-portal light-section"><div class="wrap">${sectionTitle('EXPLORE','Explore como uma wiki de jogo','Entre por personagem, poder, arma, evento ou lugar — ou use a busca para cruzar tudo.')}<div class="wiki-portal-grid">${wikiCategories.filter(c=>c.id!=='all').map(wikiPortalTile).join('')}</div><div class="wiki-featured-row">${featured.map(e=>`<a href="#/wiki/${e.slug}" data-reveal><small>${esc(labels[e.category]||e.category)}</small><strong>${esc(e.name)}</strong>${icon('arrow',16)}</a>`).join('')}</div></div></section>
  ${renderFragmentDirectory()}
  ${wikiAlphabetIndex()}
  <section id="wiki-index" class="wiki-browser light-section"><div class="wrap wiki-browser__grid"><aside class="wiki-sidebar"><div class="wiki-search-label"><span>SEARCH DATABASE</span><div>${icon('search',18)}<input id="wiki-search" value="${esc(state.wikiQuery)}" placeholder="Personagem, arma, Fragmento, evento..."></div></div><div class="wiki-filter-group"><span>CATEGORIAS</span>${wikiCategories.map(c=>`<button data-wiki-category="${c.id}" class="${state.wikiCategory===c.id?'active':''}"><span>${esc(c.id==='all'?'Tudo':c.label)}</span></button>`).join('')}</div><button class="spoiler-toggle ${state.spoilers?'active':''}">${state.spoilers?t().spoilersOn:t().spoilersOff}</button></aside><div class="wiki-results"><div class="wiki-results__head"><div><strong>${filtered.length}</strong><span>${esc(t().entries)}</span></div><a href="#/timeline">${t().timeline}${icon('arrow',16)}</a></div><div class="wiki-grid">${filtered.map(e=>wikiCard(e,labels)).join('')||`<p class="empty-inline">${esc(t().noResults)}</p>`}</div></div></div></section></main>`;
}

function deepList(title,items=[]){if(!items.length)return'';return `<section class="wiki-dossier-section"><span>${esc(title)}</span><div>${items.map(x=>`<p>${esc(x)}</p>`).join('')}</div></section>`;}

function renderWikiEntry(slug){
  const entry=allWikiEntries.find(e=>e.slug===slug); if(!entry)return renderNotFound();
  if(entry.spoiler&&!state.spoilers)return `<main><section class="locked-page dark-section"><div>${icon('eye',44)}<span class="kicker">WIKI / SPOILER</span><h1>${esc(t().spoiler)}</h1><p>Esta entrada está protegida para evitar revelar conteúdo importante.</p><button class="btn btn--light spoiler-toggle">${esc(t().spoilersOff)}${icon('arrow',18)}</button></div></section></main>`;
  const item=localWiki(entry), profile=getWikiProfile(entry,allWikiEntries,contentLang()), deep=getDeepWikiProfile(entry.slug), related=(entry.related||[]).map(s=>allWikiEntries.find(e=>e.slug===s)).filter(Boolean).slice(0,10);
  const labels=Object.fromEntries(wikiCategories.map(c=>[c.id,c.label]));
  const facts=deep?.identity?.length?[...deep.identity,...profile.facts.filter(([k])=>!deep.identity.some(([dk])=>dk===k)).slice(0,6)]:profile.facts;
  const dossier=deep?dossierLabels(entry.category):null;
  return `<main class="wiki-entry-page"><section class="wiki-entry-hero dark-section"><div class="wrap wiki-entry-hero__grid"><div>${breadcrumb([{label:'Início',href:'#/'},{label:'Wiki',href:'#/wiki'},{label:item.name}])}<span class="kicker">${esc((labels[entry.category]||entry.category).toUpperCase())}</span><h1>${esc(item.name)}</h1>${item.alias?`<p class="wiki-alias">${esc(item.alias)}</p>`:''}<p class="lead">${esc(item.summary||'')}</p></div><aside class="wiki-entry-quick"><span>ARQUIVO</span>${facts.slice(0,5).map(([k,v])=>`<div><small>${esc(k)}</small><strong>${esc(v)}</strong></div>`).join('')}</aside></div></section>
  <section class="wiki-entry-content light-section"><div class="wrap wiki-entry-layout wiki-entry-layout--deep"><article>
    <section class="wiki-facts-panel" data-reveal><div class="wiki-facts-panel__title"><span>DATABASE</span><h2>Ficha</h2></div><div class="wiki-facts-grid">${facts.map(([k,v])=>`<div><small>${esc(k)}</small><strong>${esc(v)}</strong></div>`).join('')}</div></section>
    ${deep?`<section class="wiki-dossier" data-reveal><div class="wiki-dossier__head"><span>DOSSIÊ</span><h2>${esc(dossier[4])}</h2><p>${esc(deep.note||'')}</p></div>${deepList(dossier[0],deep.powers)}${deepList(dossier[1],deep.weapons)}${deepList(dossier[2],deep.techniques)}${deepList(dossier[3],deep.events)}</section>`:''}
    <section class="wiki-lore-sections">${profile.sections.map((sec,i)=>`<article class="wiki-lore-section" data-reveal><span>${String(i+1).padStart(2,'0')}</span><div><h2>${esc(sec.title)}</h2>${sec.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}</div></article>`).join('')}</section>
  </article><aside class="wiki-related-aside"><span>RELACIONADOS</span>${related.map(r=>`<a href="#/wiki/${r.slug}"><small>${esc(labels[r.category]||r.category)}</small><strong>${esc(localWiki(r).name)}</strong>${icon('arrow',15)}</a>`).join('')}<a class="wiki-back-index" href="#/wiki">${icon('grid',17)} Índice completo</a></aside></div></section></main>`;
}

function renderTimeline(){
  return `<main class="timeline-page"><section class="page-hero page-hero--timeline dark-section"><div class="page-hero__visual"><img src="./media/banner.webp" alt="" fetchpriority="high"><div></div></div><div class="wrap page-hero__inner"><div class="page-hero__copy">${breadcrumb([{label:'Início',href:'#/'},{label:'Universo',href:'#/wiki'},{label:t().timeline}])}<span class="kicker">ARCANIAN DATABASE</span><h1>${esc(t().timeline)}</h1><p>Eventos conhecidos do universo organizados em sequência.</p><button class="btn btn--glass spoiler-toggle">${state.spoilers?t().spoilersOn:t().spoilersOff}</button></div></div></section><section class="timeline-section light-section"><div class="wrap"><div class="timeline-list">${allTimelineEvents.map((e,i)=>{const locked=e.spoiler&&!state.spoilers;return `<article class="timeline-row ${locked?'locked':''}" data-reveal><span class="timeline-index">${String(i+1).padStart(2,'0')}</span><time>${esc(e.date)}</time><div><h3>${locked?'████████':esc(e.title)}</h3><p>${locked?'Conteúdo protegido por spoiler.':esc(e.text)}</p>${!locked&&e.links?.length?`<div class="timeline-links">${e.links.slice(0,5).map(s=>`<a href="#/wiki/${esc(s)}">${esc(s)}</a>`).join('')}</div>`:''}</div></article>`}).join('')}</div></div></section></main>`;
}

function renderAbout(){
  return `<main class="about-page"><section class="about-hero light-section"><div class="wrap about-hero__grid"><div data-reveal>${breadcrumb([{label:'Início',href:'#/'},{label:t().studio}])}<span class="kicker">INDEPENDENT STUDIO</span><h1>Two Eyes<br>On You.</h1><p>${esc(t().studioText)}</p>${button('#/contact',t().contact,'dark')}</div><div class="about-hero__art"><img src="./media/eye-ink.webp" alt="" fetchpriority="high"></div></div></section>
  <section class="about-manifesto dark-section"><div class="wrap"><span class="kicker">DIRECTION</span><h2 data-reveal>História primeiro.<br>Formato depois.</h2><div class="manifesto-grid"><article data-reveal><span>01</span><h3>História antes da plataforma.</h3><p>O formato precisa acrescentar alguma coisa à obra. Se só repete o que já existe, não justifica a adaptação.</p></article><article data-reveal><span>02</span><h3>Identidade por projeto.</h3><p>Devaneios, Menos Um, Tormenta e o jogo da Arcanian compartilham um universo, não uma obrigação estética.</p></article><article data-reveal><span>03</span><h3>Tecnologia como ferramenta.</h3><p>Engine, efeitos e recursos técnicos entram para sustentar direção artística, narrativa e gameplay.</p></article><article data-reveal><span>04</span><h3>Navegação sem ruído.</h3><p>O site foi organizado para alguém descobrir um projeto, mergulhar no universo ou resolver uma dúvida sem atravessar menus desnecessários.</p></article></div></div></section>
  <section class="about-formats light-section"><div class="wrap">${sectionTitle('WHAT WE MAKE',t().formats)}<div class="format-grid format-grid--primary">${PROJECT_CATEGORY_KEYS.map(formatTile).join('')}</div></div></section>
  <section class="contact-cta dark-section"><div class="wrap"><div><span class="kicker">CONTACT & PARTNERSHIPS</span><h2>Vamos conversar.</h2><p>Imprensa, parcerias, suporte, licenciamento e oportunidades relacionadas ao estúdio.</p></div>${button('mailto:contact@twoeyesonyou.com','contact@twoeyesonyou.com','light')}</div></section></main>`;
}

function faqItems(){
  return [
    ['O que é Arcanian?','Arcanian é o principal universo da Two Eyes On You. Livros, HQ e o jogo da Arcanian compartilham personagens, acontecimentos e regras do mundo, mas cada projeto tem uma proposta própria.'],
    ['O que é o jogo da Arcanian?','É uma aventura narrativa de ação com campanha própria. Ela adapta núcleos de Devaneios, Menos Um e Tormenta para investigação, exploração, combate e decisões em vez de simplesmente reproduzir páginas como cenas jogáveis.'],
    ['Em quais plataformas o jogo da Arcanian está planejado?','As plataformas planejadas atualmente são Xbox e Steam / PC. A disponibilidade final, requisitos e data de lançamento serão divulgados quando estiverem definidos.'],
    ['O jogo da Arcanian já tem data de lançamento?','Não há uma data final anunciada nesta versão do site. Informações de lançamento só devem ser tratadas como confirmadas quando publicadas pelos canais oficiais da Two Eyes On You.'],
    ['Preciso ler os livros antes de jogar?','Não. O jogo da Arcanian foi pensado para funcionar como uma experiência completa. Quem leu as obras terá contexto adicional, mas a campanha possui ordem e construção próprias.'],
    ['O jogo será para uma ou duas pessoas?','A proposta atual prevê campanha jogável por uma ou duas pessoas. No cooperativo, a intenção é que o segundo personagem tenha função narrativa e mecânica real, não seja apenas uma cópia do primeiro jogador.'],
    ['Quais obras o jogo da Arcanian adapta?','A campanha anunciada trabalha com Devaneios, Menos Um e Tormenta. A adaptação reorganiza acontecimentos e personagens para funcionar como jogo.'],
    ['Devaneios e A Última Dança são conectados?','Sim. A Última Dança é uma sequência direta de Arcanian: Devaneios.'],
    ['Tormenta é um livro?','Não. Arcanian: Tormenta foi concebida como história em quadrinhos e explora o período das lendas, Chinama e o Projeto L.A.C.H.R.Y.M.A.'],
    ['O que são Fragmentos?','Fragmentos não correspondem a um único tipo de poder. O universo mostra manifestações espaciais, temporais, materiais, adaptativas, energéticas e outras, além de compatibilidade, rejeição, implantes artificiais, ressonância e uso como âncoras. A Wiki separa essas camadas em entradas próprias.'],
    ['A Wiki tem spoilers?','Sim. Entradas que revelam acontecimentos importantes podem ficar ocultas por padrão. O visitante pode habilitar spoilers quando quiser explorar a base completa.'],
    ['As alturas, idades e armas na Wiki são oficiais?','A Wiki só transforma em dado aquilo que aparece no material publicado ou foi definido oficialmente para o projeto. Quando uma altura, idade ou medida não foi divulgada, ela aparece explicitamente como “não divulgada” em vez de ser inventada.'],
    ['Onde posso comprar Arcanian: Devaneios?','A página de compra direciona para Amazon e UICLAP. Preço, pagamento, frete, estoque e suporte da compra são responsabilidade da plataforma escolhida.'],
    ['Quais dados este site coleta?','A versão atual é um site institucional estático: não possui cadastro, login, formulário interno, banco de dados de visitantes ou analytics próprio. O idioma e alguns estados de interface podem ser mantidos localmente no navegador.'],
    ['O GitHub Pages recebe dados técnicos?','Sim. Como o site é hospedado no GitHub Pages, o provedor pode processar dados técnicos necessários para entregar a página, como endereço IP, navegador, horário de acesso e registros de conexão. Esses dados não formam um banco de visitantes mantido diretamente pela Two Eyes On You.'],
    ['O site usa cookies de rastreamento ou publicidade?','Nesta versão, não há cookies próprios configurados para rastreamento, publicidade, login ou analytics. Links externos, lojas e redes sociais seguem as políticas dos respectivos serviços.'],
    ['Como entro em contato sobre suporte, imprensa ou parceria?','Use a página de Contato ou o e-mail oficial exibido no site. Há atalhos separados para suporte técnico, parcerias, imprensa e licenciamento.'],
    ['A Two Eyes On You trabalha apenas com Arcanian?','Arcanian é o universo principal apresentado atualmente, mas o site é organizado por Jogos, Livros, HQ e Animação para comportar projetos em formatos diferentes sem obrigá-los a usar a mesma linguagem.'],
    ['O jogo da Arcanian está confirmado para PlayStation ou Nintendo?','Não. Nesta versão do projeto, as plataformas comunicadas são Xbox e Steam / PC. Outras plataformas só aparecerão no site se houver anúncio oficial; a página não presume lançamentos ainda não confirmados.'],
    ['O jogo da Arcanian é mundo aberto?','A proposta apresentada não depende de um mundo aberto. O foco está em campanha, investigação, exploração, combate e cenas construídas com intenção narrativa. O formato final pode evoluir durante o desenvolvimento, mas o site não vende uma promessa de mundo aberto.'],
    ['O jogo da Arcanian é um RPG?','Não é apresentado como RPG tradicional. A identidade atual é de aventura narrativa de ação, com sistemas próprios para personagens, investigação e combate.'],
    ['Vai existir classificação indicativa?','Sim, o produto final precisará seguir os processos de classificação aplicáveis às plataformas e regiões em que for lançado. Uma classificação final só deve aparecer no site depois de oficialmente definida.'],
    ['A Wiki mistura informação publicada e material de desenvolvimento?','A Wiki reúne o cânone publicado e definições oficiais do projeto. Quando um dado ainda não foi divulgado de forma suficiente — como certas alturas, idades, datas ou especificações — a ficha sinaliza a lacuna em vez de preenchê-la por suposição.'],
    ['Por que algumas entradas da Wiki ficam bloqueadas?','Porque nomes, relações, poderes e eventos de capítulos posteriores podem revelar viradas importantes. O controle de spoilers permite navegar por conceitos básicos sem expor automaticamente toda a cronologia.'],
    ['Como reporto uma informação errada na Wiki ou um problema no site?','Use a página de Contato e escolha suporte. Informe a página, o trecho ou o comportamento observado; isso facilita localizar e corrigir a inconsistência.'],
    ['O site vende ou compartilha dados de visitantes com anunciantes?','Não há sistema próprio de publicidade, perfilização ou venda de dados nesta versão do site. Ao abrir serviços externos, como lojas e redes sociais, passam a valer as políticas desses serviços.'],
    ['Onde vejo as regras completas de privacidade e cookies?','A área de Documentos reúne Política de Privacidade, Política de Cookies, Termos de Uso e demais informações jurídicas do site.'],
    ['Onde acompanho mudanças no jogo da Arcanian e nas obras?','Use a área de Notícias e os canais oficiais vinculados no rodapé. Datas, plataformas, versões e recursos só devem ser considerados confirmados quando aparecerem em comunicação oficial.']
  ];
}
function faqItem([q,a],i){return `<details class="faq-item" data-reveal><summary><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(q)}</strong><b>+</b></summary><div><p>${esc(a)}</p></div></details>`;}
function renderFaq(){return `<main class="faq-page"><section class="page-hero page-hero--support dark-section"><div class="page-hero__visual contain"><img src="./media/eye-iris.webp" alt="" fetchpriority="high"><div></div></div><div class="wrap page-hero__inner"><div class="page-hero__copy">${breadcrumb([{label:'Início',href:'#/'},{label:'FAQ'}])}<span class="kicker">SUPPORT</span><h1>FAQ</h1><p>As respostas mais rápidas sobre o universo, as obras e o site.</p></div></div></section><section class="faq-full light-section"><div class="wrap faq-layout"><aside><span>PRECISA DE MAIS?</span><h2>Não encontrou a resposta?</h2><p>Entre em contato diretamente com o estúdio.</p>${button('#/contact',t().contact,'dark')}</aside><div class="faq-list">${faqItems().map(faqItem).join('')}</div></div></section></main>`;}

function renderDocs(){const items=docs.map(d=>{const source=legalDocuments.find(x=>x.slug===d.slug);const local=source?localizedLegalDocument(source,contentLang()):null;return {...d,title:local?.title||d.title,description:local?.subtitle||d.description};});const intro={pt:'Políticas, termos de uso, licenças e diretrizes oficiais da marca.',en:'Policies, terms of use, licences and official brand guidelines.',es:'Políticas, términos de uso, licencias y directrices oficiales de marca.',it:'Politiche, termini di utilizzo, licenze e linee guida ufficiali del marchio.',ja:'ポリシー、利用規約、ライセンス、公式ブランドガイドライン。'}[contentLang()];return `<main class="docs-page"><section class="page-hero page-hero--support dark-section"><div class="page-hero__visual contain"><img src="./media/eye-ink.webp" alt="" fetchpriority="high"><div></div></div><div class="wrap page-hero__inner"><div class="page-hero__copy">${breadcrumb([{label:t().home,href:'#/'},{label:t().docs}])}<span class="kicker">LEGAL & INFORMATION</span><h1>${esc(t().docs)}</h1><p>${esc(intro)}</p></div></div></section><section class="docs-list light-section"><div class="wrap"><div class="doc-grid">${items.map((d,i)=>`<a href="#/documentation/${d.slug}" class="doc-card" data-reveal><span>${String(i+1).padStart(2,'0')}</span><div><small>OFFICIAL DOCUMENT</small><h3>${esc(d.title)}</h3><p>${esc(d.description)}</p></div>${icon('arrow',20)}</a>`).join('')}</div></div></section></main>`;}

function legalItem(item){if(item.type==='list')return`<ul>${item.items.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;return`<p>${esc(item.text||'')}</p>`;}
function renderLegal(slug){const source=legalDocuments.find(d=>d.slug===slug);if(!source)return renderNotFound();const doc=localizedLegalDocument(source,contentLang());const updated={pt:'Atualizado em',en:'Updated',es:'Actualizado',it:'Aggiornato',ja:'更新'}[contentLang()];const indexLabel={pt:'ÍNDICE',en:'CONTENTS',es:'ÍNDICE',it:'INDICE',ja:'目次'}[contentLang()];return `<main class="legal-page"><section class="legal-hero dark-section"><div class="wrap">${breadcrumb([{label:t().home,href:'#/'},{label:t().docs,href:'#/documentation'},{label:doc.title}])}<span class="kicker">OFFICIAL DOCUMENT</span><h1>${esc(doc.title)}</h1><p>${esc(doc.subtitle)}</p><small>${esc(updated)} ${esc(doc.updated)}</small></div></section><section class="legal-content light-section"><div class="wrap legal-layout"><aside><span>${esc(indexLabel)}</span>${doc.sections.map((sec,i)=>`<button type="button" data-scroll-to="legal-${i+1}">${String(i+1).padStart(2,'0')} ${esc(sec.title)}</button>`).join('')}</aside><article>${doc.sections.map((sec,i)=>`<section id="legal-${i+1}"><span>${String(i+1).padStart(2,'0')}</span><h2>${esc(sec.title)}</h2>${sec.items.map(legalItem).join('')}</section>`).join('')}</article></div></section></main>`;}
function renderContact(){const copy={pt:['Fale com a','Suporte, imprensa, parcerias, licenciamento e propriedade intelectual.','ASSUNTOS',['Suporte e falhas técnicas','Parcerias e colaborações','Imprensa e criadores','Licenciamento e direitos']],en:['Talk to','Support, press, partnerships, licensing and intellectual property.','TOPICS',['Support and technical issues','Partnerships and collaborations','Press and creators','Licensing and rights']],es:['Habla con','Soporte, prensa, alianzas, licencias y propiedad intelectual.','TEMAS',['Soporte y fallos técnicos','Alianzas y colaboraciones','Prensa y creadores','Licencias y derechos']],it:['Parla con','Supporto, stampa, partnership, licenze e proprietà intellettuale.','ARGOMENTI',['Supporto e problemi tecnici','Partnership e collaborazioni','Stampa e creator','Licenze e diritti']],ja:['お問い合わせ','サポート、プレス、提携、ライセンス、知的財産。','お問い合わせ内容',['サポート・技術的な問題','提携・コラボレーション','プレス・クリエイター','ライセンス・権利']]}[contentLang()];return `<main class="contact-page"><section class="contact-hero dark-section"><img src="./media/contact.jpg" alt="" fetchpriority="high"><div class="contact-hero__shade"></div><div class="wrap contact-hero__grid"><div class="contact-hero__copy" data-reveal>${breadcrumb([{label:t().home,href:'#/'},{label:t().contact}])}<span class="kicker">CONTACT</span><h1>${esc(copy[0])}<br>Two Eyes On You.</h1><p>${esc(copy[1])}</p>${button('mailto:contact@twoeyesonyou.com','contact@twoeyesonyou.com','light')}</div><aside data-reveal><span>${esc(copy[2])}</span>${copy[3].map((x,i)=>`<a href="mailto:contact@twoeyesonyou.com?subject=${encodeURIComponent(['Suporte','Parceria','Imprensa','Licenciamento'][i])}">${esc(x)}${icon('arrow',16)}</a>`).join('')}</aside></div></section></main>`;}
function renderNotFound(){return `<main><section class="not-found dark-section"><div><span class="kicker">404</span><h1>${esc(t().notFoundTitle)}</h1><p>${esc(t().notFoundText)}</p><div class="button-row">${button('#/',t().backHome,'light')}${button('#/categoria/jogos',t().projects,'outline')}${button('#/wiki',t().wiki,'outline')}</div></div></section></main>`;}
function routeContent(route){
  if(route==='/')return renderHome();
  if(route==='/categoria/jogos')return renderCategory('games');
  if(route==='/categoria/livros')return renderCategory('books');
  if(route==='/purchase')return renderPurchase();
  if(route==='/news')return renderNews();
  if(route==='/wiki')return renderWiki();
  if(route==='/timeline')return renderTimeline();
  if(route==='/about')return renderAbout();
  if(route==='/faq')return renderFaq();
  if(route==='/documentation')return renderDocs();
  if(route==='/contact')return renderContact();
  if(route.startsWith('/obra/'))return renderWork(route.split('/')[2]);
  if(route.startsWith('/wiki/'))return renderWikiEntry(route.split('/')[2]);
  if(route.startsWith('/documentation/'))return renderLegal(route.split('/')[2]);
  return renderNotFound();
}

function updateTitle(route){
  let title='Two Eyes On You Studios';
  let description=t().studioText;
  if(route.startsWith('/obra/')){const slug=route.split('/')[2],w=getWork(slug);if(w&&isPrimaryProject(slug)){const x=localWork(w);title=`${x.displayTitle} — Two Eyes On You`;description=x.summary;}}
  else if(route==='/wiki'){title='Wiki Arcanian — Two Eyes On You';description=t().databaseText;}
  else if(route.startsWith('/wiki/')){const e=allWikiEntries.find(x=>x.slug===route.split('/')[2]);if(e){const x=localWiki(e);title=`${x.name} — Wiki Arcanian`;description=x.summary||t().databaseText;}}
  else if(route==='/timeline'){title='Cronologia Arcanian — Two Eyes On You';description='A cronologia oficial de acontecimentos do universo Arcanian.';}
  else if(route==='/news'){title='Notícias — Two Eyes On You';description='Atualizações sobre lançamentos, produção, desenvolvimento e o universo Arcanian.';}
  else if(route==='/purchase'){title='Comprar Devaneios — Two Eyes On You';description='Escolha a edição de Arcanian: Devaneios.';}
  else if(route==='/faq'){title='FAQ — Two Eyes On You';description='Perguntas frequentes sobre Arcanian, as obras e o estúdio.';}
  else if(route==='/contact'){title='Contato — Two Eyes On You';description='Contato para suporte, imprensa, parcerias, licenciamento e direitos.';}
  else if(route==='/documentation'){title='Documentos — Two Eyes On You';description='Políticas, termos, licenças e diretrizes oficiais.';}
  else if(route==='/about')title='Two Eyes On You Studios';
  else if(route.startsWith('/categoria/')){const key={jogos:t().games,livros:t().books,hq:t().comics,animacao:t().animation}[route.split('/')[2]];if(key)title=`${key} — Two Eyes On You`;}
  document.title=title;
  document.querySelector('meta[name="description"]')?.setAttribute('content',description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',description);
}

function render(){
  const route=currentRoute();
  document.documentElement.lang=LANGUAGES.find(l=>l.id===state.lang)?.html||'pt-BR';
  document.body.classList.toggle('no-scroll',state.menuOpen||state.searchOpen);
  root.innerHTML=shell(route,routeContent(route));
  bind(); reveal(); updateTitle(route); updateScrollUI();
  if(state.searchOpen)requestAnimationFrame(()=>document.querySelector('#site-search')?.focus());
}

function bind(){
  bindHeader(); bindHero(); bindRail(); bindWiki(); bindTilt(); bindSectionNav(); bindLightbox();
  document.querySelectorAll('a[href^="#/"]').forEach(a=>a.addEventListener('click',()=>{state.menuOpen=false;state.searchOpen=false;state.megaOpen=null;}));
  document.querySelectorAll('[data-scroll-to]').forEach(control=>control.addEventListener('click',()=>{
    const target=document.getElementById(control.dataset.scrollTo);
    if(!target)return;
    target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
    if(target.tabIndex>=0)requestAnimationFrame(()=>target.focus({preventScroll:true}));
  }));
  document.querySelector('.back-top')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));
}

function bindSectionNav(){
  if(sectionNavHandler){window.removeEventListener('scroll',sectionNavHandler);sectionNavHandler=null;}
  const controls=[...document.querySelectorAll('.work-subnav [data-scroll-to], .legal-layout>aside [data-scroll-to]')];
  if(!controls.length)return;
  const sections=controls.map(control=>({control,target:document.getElementById(control.dataset.scrollTo)})).filter(x=>x.target);
  let activeId='';
  const update=()=>{
    const headerOffset=(Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header'))||72)+(Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--quick'))||44)+90;
    let current=sections[0];
    for(const item of sections){if(item.target.getBoundingClientRect().top<=headerOffset)current=item;else break;}
    const nextId=current?.target.id||'';
    if(nextId===activeId)return;
    activeId=nextId;
    sections.forEach(({control,target})=>{const on=target.id===activeId;control.classList.toggle('active',on);control.setAttribute('aria-current',on?'location':'false');});
  };
  sectionNavHandler=update;
  window.addEventListener('scroll',sectionNavHandler,{passive:true});
  update();
}

function bindHeader(){
  const megaLayer=document.querySelector('.mega-layer');
  const triggers=[...document.querySelectorAll('[data-mega-trigger]')];
  const closeMega=()=>{state.megaOpen=null;megaLayer?.classList.remove('open');megaLayer?.setAttribute('aria-hidden','true');document.querySelectorAll('.mega-panel').forEach(p=>p.classList.remove('active'));triggers.forEach(b=>b.setAttribute('aria-expanded','false'));};
  triggers.forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();const key=btn.dataset.megaTrigger;if(state.megaOpen===key){closeMega();return;}state.megaOpen=key;megaLayer?.classList.add('open');megaLayer?.setAttribute('aria-hidden','false');document.querySelectorAll('.mega-panel').forEach(p=>p.classList.toggle('active',p.dataset.megaPanel===key));triggers.forEach(b=>b.setAttribute('aria-expanded',String(b===btn)));}));
  megaLayer?.addEventListener('click',e=>{if(e.target===megaLayer)closeMega();});
  document.querySelector('.menu-trigger')?.addEventListener('click',()=>{state.menuOpen=true;render();});
  document.querySelector('.drawer-close')?.addEventListener('click',()=>{state.menuOpen=false;render();});
  document.querySelector('.search-trigger')?.addEventListener('click',()=>{state.searchOpen=true;render();});
  document.querySelector('.search-close')?.addEventListener('click',()=>{state.searchOpen=false;render();});
  const langBtn=document.querySelector('.language-trigger'), langPop=document.querySelector('.language-popover');
  langBtn?.addEventListener('click',e=>{e.stopPropagation();langPop.hidden=!langPop.hidden;});
  document.querySelector('.mobile-language')?.addEventListener('click',()=>{state.menuOpen=false;render();requestAnimationFrame(()=>document.querySelector('.language-trigger')?.click());});
  langPop?.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{state.lang=b.dataset.lang;localStorage.setItem('teoy-language-v3',state.lang);render();}));
  const input=document.querySelector('#site-search');input?.addEventListener('input',()=>renderSearchResults(input.value));if(input)renderSearchResults('');
}

function bindHero(){
  if(heroTimer){clearInterval(heroTimer);heroTimer=null;}
  const slides=[...document.querySelectorAll('[data-hero-slide]')], dots=[...document.querySelectorAll('[data-hero-dot]')], pause=document.querySelector('.hero-pause'), explore=document.querySelector('[data-hero-explore]');
  if(!slides.length)return;
  const activate=i=>{state.hero=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===state.hero));dots.forEach((d,n)=>d.classList.toggle('active',n===state.hero));if(explore){explore.href=slides[state.hero]?.dataset.heroRoute||'#/';explore.setAttribute('aria-label',`Explorar ${dots[state.hero]?.querySelector('em')?.textContent||'projeto em destaque'}`);}};
  const start=()=>{if(heroTimer)clearInterval(heroTimer);if(!state.heroPaused&&!matchMedia('(prefers-reduced-motion: reduce)').matches)heroTimer=setInterval(()=>activate(state.hero+1),8000);};
  dots.forEach(d=>d.addEventListener('click',()=>{activate(Number(d.dataset.heroDot));start();}));
  pause?.addEventListener('click',()=>{state.heroPaused=!state.heroPaused;pause.innerHTML=state.heroPaused?icon('resume',18):icon('pause',18);if(state.heroPaused){clearInterval(heroTimer);heroTimer=null;}else start();});
  start();
}

function bindRail(){
  const rail=document.querySelector('[data-media-rail]');if(!rail)return;
  const step=()=>Math.min(rail.clientWidth*.82,560);
  document.querySelector('[data-rail-prev]')?.addEventListener('click',()=>rail.scrollBy({left:-step(),behavior:'smooth'}));
  document.querySelector('[data-rail-next]')?.addEventListener('click',()=>rail.scrollBy({left:step(),behavior:'smooth'}));
}

function bindWiki(){
  const input=document.querySelector('#wiki-search');input?.addEventListener('input',()=>{state.wikiQuery=input.value;renderWikiResultsOnly();});
  document.querySelectorAll('[data-wiki-category]').forEach(btn=>btn.addEventListener('click',()=>{state.wikiCategory=btn.dataset.wikiCategory;render();}));
  document.querySelectorAll('.spoiler-toggle').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();state.spoilers=!state.spoilers;render();}));
}

function renderWikiResultsOnly(){
  const holder=document.querySelector('.wiki-results');if(!holder)return;
  const labels=Object.fromEntries(wikiCategories.map(c=>[c.id,c.label])), filtered=filteredWiki();
  holder.innerHTML=`<div class="wiki-results__head"><div><strong>${filtered.length}</strong><span>${esc(t().entries)}</span></div><a href="#/timeline">${t().timeline}${icon('arrow',16)}</a></div><div class="wiki-grid">${filtered.map(e=>wikiCard(e,labels)).join('')||`<p class="empty-inline">${esc(t().noResults)}</p>`}</div>`;
  reveal();
}

function renderSearchResults(query=''){
  const holder=document.querySelector('#search-results');if(!holder)return;
  const q=query.trim().toLowerCase(), items=[];
  primaryWorks.forEach(w=>{const x=localWork(w);items.push({group:t().searchProjects,type:typeOf(w),title:x.displayTitle,text:x.summary,href:`#/obra/${w.slug}`,image:w.image});});
  localizedNews(news,contentLang()).forEach(n=>items.push({group:t().searchNews,type:n.category,title:n.title,text:n.text,href:n.href,image:n.image}));
  allWikiEntries.forEach(e=>{if(!e.spoiler||state.spoilers){const x=localWiki(e);items.push({group:'WIKI',type:e.category,title:x.name,text:x.summary,href:`#/wiki/${e.slug}`});}});
  docs.forEach(d=>items.push({group:t().searchDocs,type:'LEGAL',title:d.title,text:d.description,href:`#/documentation/${d.slug}`}));
  const results=(q?items.filter(x=>`${x.title} ${x.text||''} ${x.type} ${x.group}`.toLowerCase().includes(q)):items.slice(0,10)).slice(0,18);
  const groups=[...new Set(results.map(x=>x.group))];
  holder.innerHTML=results.length?groups.map(g=>`<section class="search-group"><span>${g}</span>${results.filter(x=>x.group===g).map(x=>`<a href="${esc(x.href)}">${x.image?`<img src="${esc(x.image)}" alt="" loading="lazy">`:'<i></i>'}<div><small>${esc(x.type)}</small><strong>${esc(x.title)}</strong><p>${esc(x.text||'')}</p></div>${icon('arrow',17)}</a>`).join('')}</section>`).join(''):`<p class="empty-inline">${esc(t().noResults)}</p>`;
}

function bindLightbox(){
  const lightbox=document.querySelector('.image-lightbox');
  if(!lightbox)return;
  const image=lightbox.querySelector('.image-lightbox__image');
  const count=lightbox.querySelector('.image-lightbox__count');
  const prev=lightbox.querySelector('.image-lightbox__nav--prev');
  const next=lightbox.querySelector('.image-lightbox__nav--next');
  const triggers=[...document.querySelectorAll('[data-lightbox-src]')];
  let index=0;
  const show=(nextIndex)=>{
    if(!triggers.length)return;
    index=(nextIndex+triggers.length)%triggers.length;
    const trigger=triggers[index];
    image.src=trigger.dataset.lightboxSrc;
    image.alt=trigger.querySelector('img')?.alt||'';
    count.textContent=`${String(index+1).padStart(2,'0')} / ${String(triggers.length).padStart(2,'0')}`;
    prev.hidden=next.hidden=triggers.length<2;
  };
  const open=(nextIndex)=>{
    show(nextIndex);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.classList.add('lightbox-open');
    requestAnimationFrame(()=>lightbox.querySelector('.image-lightbox__close')?.focus());
  };
  const close=()=>{
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.classList.remove('lightbox-open');
    image.removeAttribute('src');
  };
  triggers.forEach((trigger,i)=>trigger.addEventListener('click',()=>open(i)));
  lightbox.querySelector('.image-lightbox__close')?.addEventListener('click',close);
  lightbox.querySelector('.image-lightbox__backdrop')?.addEventListener('click',close);
  prev?.addEventListener('click',()=>show(index-1));
  next?.addEventListener('click',()=>show(index+1));
  const figure=lightbox.querySelector('figure');
  let touchStartX=0;
  figure?.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0]?.clientX||0;},{passive:true});
  figure?.addEventListener('touchend',e=>{const x=e.changedTouches[0]?.clientX||0;const delta=x-touchStartX;if(Math.abs(delta)>48)show(index+(delta<0?1:-1));},{passive:true});
  lightbox.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.stopPropagation();close();}
    if(e.key==='ArrowLeft')show(index-1);
    if(e.key==='ArrowRight')show(index+1);
  });
}

function bindTilt(){
  document.querySelectorAll('[data-tilt]').forEach(node=>{
    if(matchMedia('(pointer: coarse)').matches)return;
    node.addEventListener('pointermove',e=>{const r=node.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;node.style.setProperty('--ry',`${x*7}deg`);node.style.setProperty('--rx',`${y*-7}deg`);});
    node.addEventListener('pointerleave',()=>{node.style.setProperty('--ry','0deg');node.style.setProperty('--rx','0deg');});
  });
}

function reveal(){
  const nodes=[...document.querySelectorAll('[data-reveal]:not(.revealed)')];
  if(!('IntersectionObserver'in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){nodes.forEach(n=>n.classList.add('revealed'));return;}
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -4%'});
  nodes.forEach(n=>io.observe(n));
}

function updateScrollUI(){
  const h=document.querySelector('[data-header]'), top=document.querySelector('.back-top'), bar=document.querySelector('.scroll-progress i');
  const y=window.scrollY;h?.classList.toggle('scrolled',y>20);top?.classList.toggle('show',y>700);
  if(bar){const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${max>0?Math.min(1,y/max):0})`;}
}

document.addEventListener('click',e=>{
  if(state.megaOpen && !e.target.closest('.global-header') && !e.target.closest('.mega-panel')){
    state.megaOpen=null;
    document.querySelector('.mega-layer')?.classList.remove('open');
    document.querySelectorAll('.mega-panel').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('[data-mega-trigger]').forEach(b=>b.setAttribute('aria-expanded','false'));
  }
  const langPop=document.querySelector('.language-popover');
  if(langPop && !langPop.hidden && !e.target.closest('.language-popover') && !e.target.closest('.language-trigger')) langPop.hidden=true;
});

window.addEventListener('scroll',updateScrollUI,{passive:true});
window.addEventListener('hashchange',()=>{state.menuOpen=false;state.searchOpen=false;state.megaOpen=null;window.scrollTo(0,0);render();});
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&(state.menuOpen||state.searchOpen||state.megaOpen)){state.menuOpen=false;state.searchOpen=false;state.megaOpen=null;render();}
  if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)){e.preventDefault();state.searchOpen=true;render();}
});

render();
