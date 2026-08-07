import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { docs, news, works } from './data.js';
import { legalDocuments } from './legal.js';
import { timelineEvents, wikiCategories, wikiEntries } from './wiki.js';
import { getWikiProfile } from './wikiDetails.js';
import { wikiSupplement } from './wikiSupplement.js';
import { finalWikiEntries } from './wikiFinal.js';
import { getBookGuide } from './bookGuide.js';
import {
  getDictionary,
  languages,
  themes,
  localizedNews,
  localizedWikiEntry,
  localizedWork
} from './i18n.js';
import { timelineTranslations, docsTranslations, wikiInterfaceExtra } from './fullTranslations.js';
import { localizedLegalDocument } from './legalTranslations.js';
import './styles.css';
import './redesign.css';

const allWikiEntries = [...wikiEntries, ...wikiSupplement, ...finalWikiEntries];

const SiteContext = createContext(null);
const useSite = () => useContext(SiteContext);

const socials = [
  ['Instagram', 'https://instagram.com/twoeyesonyou'],
  ['X', 'https://x.com/twoeyeson_you'],
  ['TikTok', 'https://www.tiktok.com/@twoeyesonyou'],
  ['YouTube', 'https://youtube.com/@twoeyesonyou'],
  ['Discord', 'https://discord.gg/Ftu5mcXhcX']
];

const navPrimary = [
  ['home', '#/', 'home'],
  ['projects', '#/arcanian', 'grid'],
  ['news', '#/news', 'news'],
  ['wiki', '#/wiki', 'wiki'],
  ['studio', '#/about', 'studio']
];

const navSecondary = [
  ['timeline', '#/timeline', 'timeline'],
  ['media', '#/media', 'media'],
  ['documents', '#/documentation', 'document'],
  ['contact', '#/contact', 'mail']
];

function Icon({ name, size = 21 }) {
  const icons = {
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></>,
    grid: <><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></>,
    wiki: <><path d="M4 5a3 3 0 0 1 3-3h5v17H7a3 3 0 0 0-3 3Z"/><path d="M20 5a3 3 0 0 0-3-3h-5v17h5a3 3 0 0 1 3 3Z"/></>,
    timeline: <><path d="M5 3v18"/><circle cx="5" cy="7" r="2"/><circle cx="5" cy="17" r="2"/><path d="M9 7h10"/><path d="M9 17h10"/></>,
    news: <><path d="M4 5h12v14H4z"/><path d="M8 9h4M8 13h4"/><path d="M16 8h4v11a2 2 0 0 1-2 2H6"/></>,
    media: <><rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="10" r="2"/><path d="m21 15-5-5L5 20"/></>,
    studio: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    document: <><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4"/><path d="M9 12h6M9 16h6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14"/><path d="m3 7 9 6 9-6"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    arrow: <><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
    book: <><path d="M4 5a3 3 0 0 1 3-3h5v17H7a3 3 0 0 0-3 3Z"/><path d="M20 5a3 3 0 0 0-3-3h-5v17h5a3 3 0 0 1 3 3Z"/></>,
    lock: <><rect x="5" y="10" width="14" height="11"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    external: <><path d="M14 3h7v7"/><path d="m10 14 11-11"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.4a1.8 1.8 0 0 0 1.3-3.1 1.8 1.8 0 0 1 1.3-3h2a3 3 0 0 0 3-3A9 9 0 0 0 12 3Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="10" cy="6.8" r="1"/><circle cx="14" cy="6.8" r="1"/><circle cx="17" cy="10" r="1"/></>,
    check: <path d="m5 12 4 4L19 6"/>
  };
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name] || icons.arrow}</svg>;
}

const routeAliases = {
  '/home': '/',
  '/inicio': '/',
  '/projects': '/arcanian',
  '/projetos': '/arcanian',
  '/studio': '/about',
  '/estudio': '/about',
  '/sobre': '/about',
  '/docs': '/documentation',
  '/documentos': '/documentation',
  '/comprar': '/purchase',
  '/devaneios': '/purchase',
  '/game': '/obra/arcanian',
  '/jogo': '/obra/arcanian',
  '/obra/game': '/obra/arcanian',
  '/obra/jogo': '/obra/arcanian',
  '/ultima-danca': '/obra/a-ultima-danca',
  '/a-ultima-danca': '/obra/a-ultima-danca',
  '/obra/ultima-danca': '/obra/a-ultima-danca',
  '/wiki-arcanian': '/wiki'
};

function normalizeRoute(value) {
  let route = decodeURIComponent(String(value || '/').split('?')[0]).trim();
  if (!route.startsWith('/')) route = `/${route}`;
  route = route.replace(/\/{2,}/g, '/');
  if (route.length > 1) route = route.replace(/\/+$/, '');
  return routeAliases[route.toLowerCase()] || route;
}

function getRoute() {
  const params = new URLSearchParams(window.location.search);
  const redirectedRoute = params.get('route');
  const hashRoute = window.location.hash.replace(/^#/, '');
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  if (window.location.hostname.endsWith('github.io') && pathParts.length) pathParts.shift();
  const directPath = pathParts.length && pathParts.at(-1) !== 'index.html' ? `/${pathParts.join('/')}` : '/';
  return normalizeRoute(hashRoute || redirectedRoute || directPath || '/');
}

function useRoute() {
  const [route, setRoute] = useState(getRoute);
  useEffect(() => {
    const update = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update);
    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
    };
  }, []);
  return route;
}

function SmartLink({ href, children, className = '', ...props }) {
  const external = /^https?:|^mailto:/.test(href);
  return <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...props}>{children}</a>;
}

function routeName(route, d, lang) {
  const work = works.find((item) => route === `/obra/${item.slug}`);
  const entry = allWikiEntries.find((item) => route === `/wiki/${item.slug}`);
  const legal = legalDocuments.find((item) => route === `/documentation/${item.slug}`);
  if (work) return localizedWork(work, lang).displayTitle;
  if (entry) return localizedWikiEntry(entry, lang).name;
  if (legal) return localizedLegalDocument(legal, lang).title;
  if (route.startsWith('/wiki/')) return d.routes['/wiki'];
  if (route.startsWith('/documentation/')) return d.routes['/documentation'];
  if (route.startsWith('/obra/')) return d.routes['/arcanian'];
  return d.routes[route] || 'Two Eyes On You';
}

function isActive(route, href) {
  const path = href.replace(/^#/, '');
  if (path === '/') return route === '/';
  if (path === '/arcanian') return route === '/arcanian' || route.startsWith('/obra/');
  if (path === '/wiki') return route.startsWith('/wiki');
  if (path === '/documentation') return route.startsWith('/documentation');
  return route === path;
}

function ButtonLink({ href, children, tone = 'primary' }) {
  return <SmartLink href={href} className={`button-link button-link--${tone}`}><span>{children}</span><Icon name="arrow" size={17}/></SmartLink>;
}


function ProjectLogo({ work, className = '', compact = false, eager = false }) {
  const { lang } = useSite();
  const item = localizedWork(work, lang);
  return <span className={`project-logo ${compact ? 'project-logo--compact' : ''} ${className}`.trim()} role="img" aria-label={item.displayTitle}>
    <img src={work.logo} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async"/>
  </span>;
}

function useReveal(scopeKey) {
  useEffect(() => {
    let observer;
    const activate = () => {
      const nodes = [...document.querySelectorAll('[data-reveal]')];
      if (document.documentElement.dataset.motion === 'reduced' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
        nodes.forEach((node) => node.classList.add('is-visible'));
        return;
      }
      observer?.disconnect();
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
      nodes.forEach((node, index) => {
        node.style.setProperty('--order', index % 5);
        observer.observe(node);
      });
    };
    const frame = window.requestAnimationFrame(activate);
    const mutation = new MutationObserver(() => window.requestAnimationFrame(activate));
    mutation.observe(document.querySelector('.route-stage') || document.body, { childList: true, subtree: true });
    return () => {
      window.cancelAnimationFrame(frame);
      mutation.disconnect();
      observer?.disconnect();
    };
  }, [scopeKey]);
}

function RailButton({ item, route }) {
  const { d } = useSite();
  const [key, href, icon] = item;
  return <SmartLink href={href} className={`rail-action ${isActive(route, href) ? 'is-active' : ''}`} aria-label={d.nav[key]} data-tip={d.nav[key]}><Icon name={icon}/></SmartLink>;
}

const settingsUiCopy = {
  pt: { menu:'Menu', navigation:'Navegação', details:'Ver detalhes', active:'Ativo', quick:'Navegação rápida' },
  en: { menu:'Menu', navigation:'Navigation', details:'View details', active:'Active', quick:'Quick navigation' },
  es: { menu:'Menú', navigation:'Navegación', details:'Ver detalles', active:'Activo', quick:'Navegación rápida' },
  it: { menu:'Menu', navigation:'Navigazione', details:'Vedi dettagli', active:'Attivo', quick:'Navigazione rapida' },
  ja: { menu:'メニュー', navigation:'ナビゲーション', details:'詳細を見る', active:'選択中', quick:'クイックナビゲーション' }
};

function SideRail({ route, onSearch, onSettings }) {
  const { d, lang, theme, setLang } = useSite();
  const currentWork = works.find((work) => route === `/obra/${work.slug}`);
  const [mobileOpen, setMobileOpen] = useState(false);
  const themeName = d.settings[themes.find((item) => item.id === theme)?.key] || d.settings.theme;
  const language = languages.find((item) => item.id === lang) || languages[0];
  const ui = settingsUiCopy[lang] || settingsUiCopy.pt;

  useEffect(() => setMobileOpen(false), [route]);
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [mobileOpen]);

  const openSearch = () => { setMobileOpen(false); onSearch(); };
  const openSettings = () => { setMobileOpen(false); onSettings(); };

  return <>
    <aside className="site-rail">
      <SmartLink href="#/" className="rail-logo brand-logo-surface" aria-label="Two Eyes On You"><img src="./media/logo.webp" alt=""/></SmartLink>
      <nav className="rail-group" aria-label={ui.navigation}>{navPrimary.map((item) => <RailButton key={item[0]} item={item} route={route}/>)}</nav>
      <div className="rail-spacer"/>
      <button className="rail-action" type="button" aria-label={d.common.search} data-tip={d.common.search} onClick={onSearch}><Icon name="search"/></button>
      <button className="rail-action rail-theme-action" type="button" aria-label={`${d.settings.language}: ${language.label}. ${d.settings.theme}: ${themeName}`} data-tip={`${language.short} · ${themeName}`} onClick={onSettings}><span className={`theme-dot theme-dot--${theme}`}/><Icon name="settings" size={19}/></button>
      <SmartLink href="#/purchase" className={`rail-buy ${route === '/purchase' ? 'is-active' : ''}`} data-tip={d.nav.buy}><Icon name="book"/></SmartLink>
    </aside>

    <header className="mobile-bar">
      <SmartLink href="#/" className="mobile-logo brand-logo-surface" aria-label="Two Eyes On You"><img src="./media/logo.webp" alt=""/></SmartLink>
      <div className="mobile-route">{currentWork ? <ProjectLogo work={currentWork} compact className="project-logo--route"/> : <strong>{routeName(route, d, lang)}</strong>}</div>
      <button type="button" className="mobile-theme-trigger" onClick={onSettings} aria-label={`${d.settings.language}: ${language.label}. ${d.settings.theme}: ${themeName}`}>
        <span className={`theme-dot theme-dot--${theme}`}/><span>{language.short}</span><Icon name="settings" size={18}/>
      </button>
    </header>

    <nav className="mobile-dock" aria-label={ui.quick}>
      {navPrimary.slice(0, 3).map(([key, href, icon]) => <SmartLink key={key} href={href} className={isActive(route, href) ? 'is-active' : ''}><Icon name={icon}/><span>{d.nav[key]}</span></SmartLink>)}
      <button type="button" onClick={openSearch}><Icon name="search"/><span>{d.common.search}</span></button>
      <button type="button" className={mobileOpen ? 'is-active' : ''} onClick={() => setMobileOpen((value) => !value)} aria-expanded={mobileOpen} aria-controls="mobile-navigation"><Icon name={mobileOpen ? 'close' : 'menu'}/><span>{ui.menu}</span></button>
    </nav>

    <button className={`mobile-nav-backdrop ${mobileOpen ? 'is-open' : ''}`} type="button" aria-label={d.common.close} onClick={() => setMobileOpen(false)}/>
    <aside id="mobile-navigation" className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
      <div className="mobile-nav__head"><div><span className="brand-logo-surface"><img src="./media/logo.webp" alt=""/></span><span><small>Two Eyes On You</small><strong>{ui.menu}</strong></span></div><button type="button" onClick={() => setMobileOpen(false)} aria-label={d.common.close}><Icon name="close"/></button></div>
      <button className="mobile-nav__search" type="button" onClick={openSearch}><Icon name="search"/><span>{d.search.placeholder}</span><Icon name="arrow" size={18}/></button>

      <section className="mobile-nav__section">
        <small>{ui.navigation}</small>
        <div className="mobile-nav__links">{navPrimary.map(([key, href, icon]) => <SmartLink key={key} href={href} className={isActive(route, href) ? 'is-active' : ''}><Icon name={icon}/><strong>{d.nav[key]}</strong><Icon name="arrow" size={18}/></SmartLink>)}</div>
      </section>

      <section className="mobile-nav__section mobile-nav__more">
        <small>{d.common.viewAll}</small>
        <div>{navSecondary.map(([key, href, icon]) => <SmartLink key={key} href={href} className={isActive(route, href) ? 'is-active' : ''}><Icon name={icon}/><span>{d.nav[key]}</span></SmartLink>)}</div>
      </section>

      <section className="mobile-nav__section mobile-nav__compact-settings">
        <label><span><Icon name="globe"/><strong>{d.settings.language}</strong></span><select value={lang} onChange={(event) => setLang(event.target.value)}>{languages.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
        <button type="button" onClick={openSettings}><span><span className={`theme-dot theme-dot--${theme}`}/><strong>{d.settings.theme}</strong><small>{themeName}</small></span><Icon name="settings"/></button>
      </section>

      <SmartLink href="#/purchase" className="mobile-buy"><Icon name="book"/><strong>{d.nav.buy}</strong><Icon name="arrow"/></SmartLink>
    </aside>
  </>;
}

function TopBar({ route, onSearch, onSettings }) {
  const { d, lang, theme } = useSite();
  const language = languages.find((item) => item.id === lang) || languages[0];
  const currentWork = works.find((work) => route === `/obra/${work.slug}`);
  const themeName = d.settings[themes.find((item) => item.id === theme)?.key] || d.settings.theme;
  return <header className="top-bar">
    <div className="top-route"><span>Two Eyes On You</span>{currentWork ? <ProjectLogo work={currentWork} compact className="project-logo--route"/> : <strong>{routeName(route, d, lang)}</strong>}</div>
    <nav className="top-links"><SmartLink href="#/arcanian">{d.nav.projects}</SmartLink><SmartLink href="#/news">{d.nav.news}</SmartLink><SmartLink href="#/about">{d.nav.studio}</SmartLink></nav>
    <div className="top-actions">
      <button type="button" onClick={onSearch}><Icon name="search" size={18}/><span>{d.common.search}</span><kbd>Ctrl K</kbd></button>
      <button type="button" onClick={onSettings} className="preference-button" aria-label={`${d.settings.language}: ${language.label}. ${d.settings.theme}: ${themeName}`}><span className={`theme-dot theme-dot--${theme}`}/><span className="preference-button__copy"><small>{d.settings.language} · {d.settings.theme}</small><strong>{language.short} · {themeName}</strong></span><Icon name="palette" size={18}/></button>
      <SmartLink href="#/purchase" className="top-buy">{d.nav.buy}<Icon name="arrow" size={17}/></SmartLink>
    </div>
  </header>;
}

const themeDescriptions = {
  pt: { studio:'Identidade principal do estúdio, com ritmo editorial e formas orgânicas.', night:'Arquivo cinematográfico de alto contraste para leitura em ambientes escuros.', light:'Composição museográfica, neutra e precisa para textos e imagens.', sand:'Códice literário com textura de papel e hierarquia de publicação.', blue:'Terminal técnico para dossiês, sistemas e leitura analítica.' },
  en: { studio:'The studio’s primary identity, with editorial rhythm and organic forms.', night:'A high-contrast cinematic archive for dark environments.', light:'A neutral, precise gallery composition for text and imagery.', sand:'A literary codex with paper texture and publishing hierarchy.', blue:'A technical terminal for dossiers, systems and analytical reading.' },
  es: { studio:'La identidad principal del estudio, con ritmo editorial y formas orgánicas.', night:'Archivo cinematográfico de alto contraste para ambientes oscuros.', light:'Composición museográfica, neutra y precisa para texto e imagen.', sand:'Códice literario con textura de papel y jerarquía editorial.', blue:'Terminal técnico para expedientes, sistemas y lectura analítica.' },
  it: { studio:'L’identità principale dello studio, con ritmo editoriale e forme organiche.', night:'Archivio cinematografico ad alto contrasto per ambienti scuri.', light:'Composizione museale neutra e precisa per testo e immagini.', sand:'Codice letterario con trama cartacea e gerarchia editoriale.', blue:'Terminale tecnico per dossier, sistemi e lettura analitica.' },
  ja: { studio:'編集的なリズムと有機的な形を持つ、スタジオの中心的な視覚体系。', night:'暗い環境での閲覧に適した高コントラストの映画的アーカイブ。', light:'文章と画像を正確に見せる中立的なギャラリー構成。', sand:'紙の質感と出版物の階層を持つ文学的コーデックス。', blue:'記録、システム、分析的読解のための技術端末。' }
};

const fontOptions = [
  { id:'studio', label:{pt:'Grotesca do Estúdio',en:'Studio Grotesk',es:'Grotesca del Estudio',it:'Grottesca dello Studio',ja:'スタジオ・グロテスク'} },
  { id:'editorial', label:{pt:'Serif Editorial',en:'Editorial Serif',es:'Serif Editorial',it:'Serif Editoriale',ja:'エディトリアル・セリフ'} },
  { id:'humanist', label:{pt:'Interface Humanista',en:'Humanist Interface',es:'Interfaz Humanista',it:'Interfaccia Umanista',ja:'ヒューマニストUI'} },
  { id:'accessible', label:{pt:'Alta Legibilidade',en:'High Legibility',es:'Alta Legibilidad',it:'Alta Leggibilità',ja:'高可読性'} }
];

const textSizeOptions = [
  {id:'compact',label:{pt:'Compacto',en:'Compact',es:'Compacto',it:'Compatto',ja:'コンパクト'}},
  {id:'standard',label:{pt:'Padrão',en:'Standard',es:'Estándar',it:'Standard',ja:'標準'}},
  {id:'large',label:{pt:'Grande',en:'Large',es:'Grande',it:'Grande',ja:'大'}},
  {id:'xlarge',label:{pt:'Extra grande',en:'Extra large',es:'Extra grande',it:'Molto grande',ja:'特大'}}
];

const preferenceCopy = {
  pt:{visual:'Visual',reading:'Leitura',accessibility:'Acessibilidade',font:'Fonte',size:'Tamanho do texto',contrast:'Alto contraste',motion:'Reduzir movimentos',links:'Sublinhar links',focus:'Foco de teclado reforçado',cursor:'Cursor autoral',reset:'Restaurar padrões',resetText:'Redefine fonte, tamanho e recursos de acessibilidade.',on:'Ativado',off:'Desativado'},
  en:{visual:'Visual',reading:'Reading',accessibility:'Accessibility',font:'Typeface',size:'Text size',contrast:'High contrast',motion:'Reduce motion',links:'Underline links',focus:'Enhanced keyboard focus',cursor:'Authorial cursor',reset:'Restore defaults',resetText:'Resets typeface, text size and accessibility options.',on:'On',off:'Off'},
  es:{visual:'Visual',reading:'Lectura',accessibility:'Accesibilidad',font:'Tipografía',size:'Tamaño del texto',contrast:'Alto contraste',motion:'Reducir movimiento',links:'Subrayar enlaces',focus:'Foco de teclado reforzado',cursor:'Cursor autoral',reset:'Restaurar valores',resetText:'Restablece tipografía, tamaño y opciones de accesibilidad.',on:'Activado',off:'Desactivado'},
  it:{visual:'Aspetto',reading:'Lettura',accessibility:'Accessibilità',font:'Carattere',size:'Dimensione testo',contrast:'Contrasto elevato',motion:'Riduci movimento',links:'Sottolinea collegamenti',focus:'Focus da tastiera rinforzato',cursor:'Cursore autoriale',reset:'Ripristina valori',resetText:'Ripristina carattere, dimensione e opzioni di accessibilità.',on:'Attivo',off:'Disattivo'},
  ja:{visual:'表示',reading:'読みやすさ',accessibility:'アクセシビリティ',font:'書体',size:'文字サイズ',contrast:'高コントラスト',motion:'動きを減らす',links:'リンクに下線',focus:'キーボードフォーカス強調',cursor:'専用カーソル',reset:'初期設定に戻す',resetText:'書体、文字サイズ、アクセシビリティ設定を戻します。',on:'オン',off:'オフ'}
};

function PreferenceSwitch({ label, checked, onChange, copy }) {
  return <button type="button" className={`preference-switch ${checked ? 'is-active' : ''}`} onClick={() => onChange(!checked)} aria-pressed={checked}><span><strong>{label}</strong><small>{checked ? copy.on : copy.off}</small></span><i><b/></i></button>;
}

function SettingsPanel({ open, close }) {
  const { d, lang, setLang, theme, setTheme, font, setFont, textSize, setTextSize, a11y, setA11y, resetPreferences } = useSite();
  const [tab, setTab] = useState('visual');
  const ui = settingsUiCopy[lang] || settingsUiCopy.pt;
  const c = preferenceCopy[lang] || preferenceCopy.pt;
  useEffect(() => { if (open) setTab('visual'); }, [open]);
  if (!open) return null;
  const toggle = (key, value) => setA11y({ ...a11y, [key]:value });
  return <div className="modal-layer" onMouseDown={close}>
    <aside className="settings-panel settings-panel--advanced" onMouseDown={(event) => event.stopPropagation()}>
      <header><div><small>Two Eyes On You</small><h2>{d.settings.title}</h2><p>{d.settings.description}</p></div><button type="button" onClick={close} aria-label={d.common.close}><Icon name="close"/></button></header>
      <nav className="settings-tabs" aria-label={d.settings.title}>{[['visual',c.visual,'palette'],['reading',c.reading,'book'],['accessibility',c.accessibility,'eye']].map(([id,label,icon])=><button type="button" key={id} onClick={()=>setTab(id)} className={tab===id?'is-active':''}><Icon name={icon}/><span>{label}</span></button>)}</nav>

      {tab === 'visual' && <div className="settings-view">
        <section><div className="settings-label"><Icon name="globe"/><span>{d.settings.language}</span></div><div className="language-list">{languages.map((item) => <button type="button" key={item.id} onClick={() => setLang(item.id)} className={lang === item.id ? 'is-active' : ''}><span>{item.short}</span><strong>{item.label}</strong>{lang === item.id && <Icon name="check" size={16}/>}</button>)}</div></section>
        <section><div className="settings-label"><Icon name="palette"/><span>{d.settings.theme}</span></div><div className="theme-grid">{themes.map((item) => <button type="button" key={item.id} onClick={() => setTheme(item.id)} className={theme === item.id ? 'is-active' : ''}><span className={`theme-preview theme-preview--${item.id}`}><i/><b/><em/></span><span className="theme-card-copy"><strong>{d.settings[item.key]}</strong><small>{themeDescriptions[lang]?.[item.id] || themeDescriptions.pt[item.id]}</small></span>{theme === item.id && <span className="theme-selected"><Icon name="check" size={16}/> {ui.active}</span>}</button>)}</div></section>
      </div>}

      {tab === 'reading' && <div className="settings-view settings-reading">
        <section><div className="settings-label"><Icon name="document"/><span>{c.font}</span></div><div className="font-grid">{fontOptions.map((item)=><button type="button" key={item.id} onClick={()=>setFont(item.id)} className={`font-card font-card--${item.id} ${font===item.id?'is-active':''}`}><span>Aa</span><strong>{item.label[lang] || item.label.pt}</strong>{font===item.id&&<Icon name="check" size={16}/>}</button>)}</div></section>
        <section><div className="settings-label"><Icon name="book"/><span>{c.size}</span></div><div className="text-size-grid">{textSizeOptions.map((item,index)=><button type="button" key={item.id} onClick={()=>setTextSize(item.id)} className={textSize===item.id?'is-active':''}><span style={{fontSize:`${15+index*3}px`}}>A</span><strong>{item.label[lang] || item.label.pt}</strong></button>)}</div></section>
      </div>}

      {tab === 'accessibility' && <div className="settings-view settings-accessibility">
        <section className="preference-switches">
          <PreferenceSwitch label={c.contrast} checked={a11y.highContrast} onChange={(value)=>toggle('highContrast',value)} copy={c}/>
          <PreferenceSwitch label={c.motion} checked={a11y.reduceMotion} onChange={(value)=>toggle('reduceMotion',value)} copy={c}/>
          <PreferenceSwitch label={c.links} checked={a11y.underlineLinks} onChange={(value)=>toggle('underlineLinks',value)} copy={c}/>
          <PreferenceSwitch label={c.focus} checked={a11y.enhancedFocus} onChange={(value)=>toggle('enhancedFocus',value)} copy={c}/>
          <PreferenceSwitch label={c.cursor} checked={a11y.customCursor} onChange={(value)=>toggle('customCursor',value)} copy={c}/>
        </section>
        <button type="button" className="settings-reset" onClick={resetPreferences}><Icon name="settings"/><span><strong>{c.reset}</strong><small>{c.resetText}</small></span></button>
      </div>}
    </aside>
  </div>;
}

function CommandPalette({ open, close }) {
  const { d, lang } = useSite();
  const [query, setQuery] = useState('');
  const ref = useRef(null);
  const commands = useMemo(() => [
    ...[...navPrimary, ...navSecondary].map(([key, href, icon]) => ({ title: d.nav[key], href, icon, meta: d.search.navigation })),
    ...works.map((work) => ({ title: localizedWork(work, lang).displayTitle, href: `#/obra/${work.slug}`, icon: 'book', meta: d.search.work })),
    ...allWikiEntries.map((entry) => ({ title: entry.name, href: `#/wiki/${entry.slug}`, icon: 'wiki', meta: d.search.wiki })),
    ...docs.map((doc) => ({ title: doc.title, href: `#/documentation/${doc.slug}`, icon: 'document', meta: d.search.document }))
  ], [d, lang]);
  const results = commands.filter((item) => `${item.title} ${item.meta}`.toLowerCase().includes(query.toLowerCase())).slice(0, 14);
  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => ref.current?.focus(), 20);
    }
  }, [open]);
  useEffect(() => {
    const esc = (event) => event.key === 'Escape' && close();
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [close]);
  if (!open) return null;
  return <div className="modal-layer command-layer" onMouseDown={close}>
    <section className="command-box" onMouseDown={(event) => event.stopPropagation()}>
      <header><small>{d.search.title}</small><button type="button" onClick={close}><Icon name="close"/></button></header>
      <label className="command-input"><Icon name="search"/><input ref={ref} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={d.search.placeholder}/><kbd>ESC</kbd></label>
      <div className="command-results">{results.map((item) => <SmartLink href={item.href} key={`${item.meta}-${item.title}`} onClick={close}><Icon name={item.icon}/><div><strong>{item.title}</strong><small>{item.meta}</small></div><Icon name="arrow"/></SmartLink>)}{!results.length && <p>{d.common.noResults}</p>}</div>
    </section>
  </div>;
}

function HeroProject({ work, index, setIndex }) {
  const { d, lang } = useSite();
  const item = localizedWork(work, lang);
  return <section className="home-masthead" style={{ '--accent': work.accent }}>
    <div className="home-masthead__media" key={work.slug}><img src={work.image} alt=""/></div>
    <div className="home-masthead__shade"/>
    <div className="home-masthead__identity" data-reveal>
      <small>{d.home.eyebrow}</small>
      <h1>Two Eyes<br/>On You</h1>
      <p>{d.home.text}</p>
      <div className="hero-actions"><ButtonLink href="#/arcanian">{d.home.primary}</ButtonLink><ButtonLink href="#/about" tone="secondary">{d.home.secondary}</ButtonLink></div>
    </div>
    <aside className="home-masthead__selected" data-reveal>
      <span>{String(index + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}</span>
      <small>{d.home.featured} · {item.eyebrow}</small>
      <ProjectLogo work={work} className="project-logo--feature" eager/>
      <p>{item.summary}</p>
      <SmartLink href={`#/obra/${work.slug}`} className="inline-link">{d.common.explore}<Icon name="arrow"/></SmartLink>
    </aside>
    <nav className="home-masthead__projects" aria-label={d.home.projects}>
      {works.map((candidate, candidateIndex) => {
        const candidateItem = localizedWork(candidate, lang);
        return <button type="button" key={candidate.slug} className={candidateIndex === index ? 'is-active' : ''} onClick={() => setIndex(candidateIndex)} aria-label={candidateItem.displayTitle}>
          <span>{String(candidateIndex + 1).padStart(2, '0')}</span>
          <ProjectLogo work={candidate} compact/>
          <i/>
        </button>;
      })}
    </nav>
  </section>;
}

const editorialCopy = {
  pt: {
    selected:'Em destaque', works:'Obras e projetos', worksIntro:'Cada obra ocupa um formato diferente dentro do mesmo universo. Entre pela história, pelos personagens ou pelo jogo.', read:'Abrir seção', encyclopedia:'Enciclopédia Arcanian', encyclopediaText:'Personagens, famílias, relações, organizações, lugares e acontecimentos organizados com contexto e conexões.', facts:'Informações', overview:'Visão geral', relations:'Família e relações', appearances:'Presença nas obras', openFull:'Abrir página completa', noFamily:'Nenhum parentesco foi confirmado no material publicado.', gameStory:'A história', characters:'Personagens', world:'Mundo', gameplay:'Experiência', gameIntro:'Uma adaptação própria do universo Arcanian, construída para funcionar como jogo e não como reprodução literal dos livros.', discover:'Conheça o personagem', source:'Conteúdo baseado no material publicado e nos projetos anunciados pela Two Eyes On You.'
  },
  en: {
    selected:'Featured', works:'Works and projects', worksIntro:'Each work uses a different format inside the same universe. Enter through the story, the characters or the game.', read:'Open section', encyclopedia:'Arcanian Encyclopedia', encyclopediaText:'Characters, families, relationships, organizations, places and events organized with context and connections.', facts:'Information', overview:'Overview', relations:'Family and relationships', appearances:'Works', openFull:'Open full page', noFamily:'No family relationship has been confirmed in the published material.', gameStory:'Story', characters:'Characters', world:'World', gameplay:'Experience', gameIntro:'An original adaptation of the Arcanian universe, designed as a game rather than a literal reproduction of the books.', discover:'Meet the character', source:'Content based on published material and projects announced by Two Eyes On You.'
  },
  es: {
    selected:'Destacado', works:'Obras y proyectos', worksIntro:'Cada obra utiliza un formato diferente dentro del mismo universo. Entra por la historia, los personajes o el juego.', read:'Abrir sección', encyclopedia:'Enciclopedia Arcanian', encyclopediaText:'Personajes, familias, relaciones, organizaciones, lugares y acontecimientos organizados con contexto y conexiones.', facts:'Información', overview:'Visión general', relations:'Familia y relaciones', appearances:'Presencia en las obras', openFull:'Abrir página completa', noFamily:'No se ha confirmado ningún parentesco en el material publicado.', gameStory:'La historia', characters:'Personajes', world:'Mundo', gameplay:'Experiencia', gameIntro:'Una adaptación propia del universo Arcanian, diseñada como juego y no como reproducción literal de los libros.', discover:'Conocer al personaje', source:'Contenido basado en el material publicado y los proyectos anunciados por Two Eyes On You.'
  },
  it: {
    selected:'In evidenza', works:'Opere e progetti', worksIntro:'Ogni opera usa un formato diverso nello stesso universo. Entra attraverso la storia, i personaggi o il gioco.', read:'Apri sezione', encyclopedia:'Enciclopedia Arcanian', encyclopediaText:'Personaggi, famiglie, relazioni, organizzazioni, luoghi ed eventi organizzati con contesto e connessioni.', facts:'Informazioni', overview:'Panoramica', relations:'Famiglia e relazioni', appearances:'Presenza nelle opere', openFull:'Apri pagina completa', noFamily:'Nessun legame familiare è stato confermato nel materiale pubblicato.', gameStory:'La storia', characters:'Personaggi', world:'Mondo', gameplay:'Esperienza', gameIntro:'Un adattamento originale dell’universo Arcanian, progettato come gioco e non come riproduzione letterale dei libri.', discover:'Scopri il personaggio', source:'Contenuto basato sul materiale pubblicato e sui progetti annunciati da Two Eyes On You.'
  },
  ja: {
    selected:'注目', works:'作品とプロジェクト', worksIntro:'同じ世界の中で、それぞれの作品は異なる形式を使います。物語、人物、ゲームから入れます。', read:'セクションを開く', encyclopedia:'Arcanian百科事典', encyclopediaText:'人物、家族、関係、組織、場所、出来事を文脈とつながりとともに整理します。', facts:'情報', overview:'概要', relations:'家族と関係', appearances:'登場作品', openFull:'詳細ページを開く', noFamily:'公開資料では家族関係は確認されていません。', gameStory:'物語', characters:'登場人物', world:'世界', gameplay:'体験', gameIntro:'書籍の直訳ではなく、ゲームとして設計されたArcanian世界の独自アダプテーションです。', discover:'人物を見る', source:'公開作品およびTwo Eyes On Youが発表したプロジェクトに基づく内容です。'
  }
};


const studioHomeCopy = {
  pt: {
    steps: [
      ['01','Começa pela cena','Definimos quem está presente, o que cada personagem sabe e qual perda está escondida naquele momento.'],
      ['02','A forma vem depois','Devaneios pede prosa; Tormenta pede quadros; o jogo precisa dar controle. O formato serve à história, não ao contrário.'],
      ['03','Tudo precisa conversar','Texto, desenho, silêncio, cor, animação e som recebem a mesma direção para não parecerem peças coladas.'],
      ['04','A versão só termina quando funciona','Cortamos o que explica demais, refazemos o que não tem ritmo e mantemos apenas o que deixa alguma coisa depois.']
    ],
    openWiki: 'Entrar na Wiki Arcanian'
  },
  en: {
    steps: [
      ['01','Start with the scene','We define who is present, what each character knows and which loss is hidden inside that moment.'],
      ['02','Choose the form afterwards','Devaneios needs prose; Tormenta needs panels; the game needs control. The format serves the story.'],
      ['03','Make every part speak together','Text, drawing, silence, colour, animation and sound share one direction instead of feeling assembled.'],
      ['04','Finish only when it works','We cut what over-explains, rebuild what has no rhythm and keep what leaves something behind.']
    ],
    openWiki: 'Enter the Arcanian Wiki'
  },
  es: {
    steps: [
      ['01','Empezar por la escena','Definimos quién está presente, qué sabe cada personaje y qué pérdida se esconde en ese momento.'],
      ['02','Elegir la forma después','Devaneios necesita prosa; Tormenta necesita viñetas; el juego necesita control. El formato sirve a la historia.'],
      ['03','Hacer que todo dialogue','Texto, dibujo, silencio, color, animación y sonido comparten una misma dirección.'],
      ['04','Terminar solo cuando funciona','Cortamos lo que explica demasiado, rehacemos lo que no tiene ritmo y conservamos lo que deja algo.']
    ],
    openWiki: 'Entrar en la Wiki Arcanian'
  },
  it: {
    steps: [
      ['01','Partire dalla scena','Definiamo chi è presente, cosa sa ogni personaggio e quale perdita è nascosta in quel momento.'],
      ['02','Scegliere la forma dopo','Devaneios richiede prosa; Tormenta richiede tavole; il gioco richiede controllo. Il formato serve la storia.'],
      ['03','Far dialogare ogni parte','Testo, disegno, silenzio, colore, animazione e suono condividono una sola direzione.'],
      ['04','Finire solo quando funziona','Tagliamo ciò che spiega troppo, rifacciamo ciò che non ha ritmo e teniamo ciò che rimane.']
    ],
    openWiki: 'Entra nella Wiki Arcanian'
  },
  ja: {
    steps: [
      ['01','場面から始める','誰がいて、何を知り、その瞬間にどんな喪失が隠れているかを決めます。'],
      ['02','形式は後で選ぶ','Devaneiosには文章、Tormentaにはコマ、ゲームには操作が必要です。形式は物語に従います。'],
      ['03','すべてを同じ方向へ','文章、絵、沈黙、色、アニメーション、音を別々の部品にせず、一つの演出でまとめます。'],
      ['04','機能するまで終わらせない','説明しすぎる部分を削り、リズムのない部分を作り直し、残るものだけを選びます。']
    ],
    openWiki: 'Arcanian Wikiへ'
  }
};

const projectSignatures = {
  pt: {
    devaneios: ['Fato', 'Inferência', 'Teste'],
    'menos-um': ['Joel', '×', 'Elisabeth'],
    'a-ultima-danca': ['Vírus', 'Arnins', 'Última chance'],
    tormenta: ['Lendas', 'L.A.C.H.R.Y.M.A.', 'Grande Dia'],
    arcanian: ['História', 'Mundo', 'Jogar']
  },
  en: {
    devaneios: ['Fact', 'Inference', 'Test'],
    'menos-um': ['Joel', '×', 'Elisabeth'],
    'a-ultima-danca': ['Virus', 'Arnins', 'Last chance'],
    tormenta: ['Legends', 'L.A.C.H.R.Y.M.A.', 'Great Day'],
    arcanian: ['Story', 'World', 'Play']
  },
  es: {
    devaneios: ['Hecho', 'Inferencia', 'Prueba'],
    'menos-um': ['Joel', '×', 'Elisabeth'],
    'a-ultima-danca': ['Virus', 'Arnins', 'Última oportunidad'],
    tormenta: ['Leyendas', 'L.A.C.H.R.Y.M.A.', 'Gran Día'],
    arcanian: ['Historia', 'Mundo', 'Jugar']
  },
  it: {
    devaneios: ['Fatto', 'Inferenza', 'Verifica'],
    'menos-um': ['Joel', '×', 'Elisabeth'],
    'a-ultima-danca': ['Virus', 'Arnins', 'Ultima possibilità'],
    tormenta: ['Leggende', 'L.A.C.H.R.Y.M.A.', 'Grande Giorno'],
    arcanian: ['Storia', 'Mondo', 'Gioca']
  },
  ja: {
    devaneios: ['事実', '推論', '検証'],
    'menos-um': ['Joel', '×', 'Elisabeth'],
    'a-ultima-danca': ['ウイルス', 'Arnins', '最後の機会'],
    tormenta: ['伝説', 'L.A.C.H.R.Y.M.A.', '大いなる日'],
    arcanian: ['物語', '世界', '遊ぶ']
  }
};

const episodeMarkCopy = {
  pt: 'ARCANIAN · EPISÓDIO I',
  en: 'ARCANIAN · EPISODE I',
  es: 'ARCANIAN · EPISODIO I',
  it: 'ARCANIAN · EPISODIO I',
  ja: 'ARCANIAN · エピソード I'
};

function ProjectSignature({ slug }) {
  const { lang } = useSite();
  const items = projectSignatures[lang]?.[slug] || projectSignatures.pt[slug] || [];
  return <div className={`joy-project__signature joy-project__signature--${slug}`} aria-hidden="true">
    {items.map((item, index) => <span key={`${slug}-${item}`}><i>{String(index + 1).padStart(2, '0')}</i>{item}</span>)}
  </div>;
}


const redesignCopy = {
  pt: {
    home: {
      eyebrow: 'Estúdio independente · Santos, Brasil',
      titleA: 'Histórias que', titleB: 'mudam de forma.',
      text: 'Livros, quadrinhos e jogos conectados pelo universo Arcanian — cada obra com uma linguagem própria.',
      projects: 'Explorar projetos', studio: 'Conhecer o estúdio',
      selected: 'Projetos em foco', selectedTitle: 'Não são versões da mesma página.',
      film: 'Filme do livro', filmTitle: 'Devaneios em movimento.', filmText: 'Uma apresentação visual do primeiro episódio publicado de Arcanian.',
      wiki: 'Arquivo Arcanian', wikiTitle: 'A história completa fica na Wiki.', wikiText: 'Personagens, famílias, eventos e conexões canônicas, sem transformar a página inicial em um manual.', openWiki: 'Entrar na Wiki'
    },
    projects: { eyebrow:'Universo Arcanian', title:'Cinco portas. Cinco ritmos.', text:'Escolha pela atmosfera, não por uma lista de descrições.' },
    media: { eyebrow:'Mídias', title:'Imagem, som e movimento.', film:'Vídeo oficial de Devaneios', gallery:'Arquivo visual', platform:'Plataformas do jogo', platforms:'Steam e Xbox', steam:'Em desenvolvimento para Steam', still:'Quadros estáticos' },
    purchase: { eyebrow:'Arcanian: Devaneios', title:'Escolha a loja.', text:'A Amazon reúne as edições física e digital. A Uiclap oferece a edição física sob demanda.', amazon:'Comprar na Amazon', amazonMeta:'Físico + Kindle', uiclap:'Comprar na Uiclap', uiclapMeta:'Livro físico', note:'Preço, frete e disponibilidade são definidos pelas lojas.' },
    about: { eyebrow:'Two Eyes On You', title:'Um estúdio para histórias que não cabem em um único formato.', text:'A forma vem depois da intenção: romance para entrar no pensamento, quadrinho para controlar o silêncio e jogo para entregar parte da decisão ao público.', pillars:[['Narrativa','Personagens e consequências antes de exposição.'],['Direção visual','Cada projeto recebe ritmo, tipografia e composição próprios.'],['Tecnologia','Ferramentas servem à cena — nunca o contrário.']] },
    contact: { eyebrow:'Contato', title:'Vamos falar sobre trabalho, imprensa ou parceria.', text:'Use o e-mail institucional. Propostas objetivas recebem respostas melhores.', mail:'Enviar e-mail' },
    work: { openWiki:'Aprofundar na Wiki', watch:'Assistir ao vídeo', stores:'Ver edições', chapter:'Recorte narrativo', evidence:'Pistas centrais', acts:'Três atos', layers:'Camadas da tormenta', gameStatus:'Em desenvolvimento', gamePlatform:'Steam', gameFeatures:'Estrutura do jogo', gameCast:'Personagens jogáveis', gameWorld:'Mundos', gamePlatforms:'Plataformas planejadas', platformPlan:'PC e Xbox', adaptationLabel:'Obras adaptadas', adaptationTitle:'Devaneios, Menos Um e Tormenta entram na mesma campanha.', adaptationText:'O jogo reorganiza acontecimentos, personagens e períodos dessas três obras para criar investigação, combate e escolhas próprias — sem funcionar como resumo interativo.', directContinuation:'SEQUÊNCIA DIRETA DE DEVANEIOS', devaneiosEpisode:'Devaneios. Episódio I.', beforeRupture:'Antes da ruptura.', lastChance:'UMA ÚLTIMA CHANCE', chapterLabel:'CAPÍTULO', beforeGreatDay:'ANTES DO GRANDE DIA', playStoryTitle:'Jogar a história. Não apenas assistir.', worldCountsTitle:'O cenário também conta.', act:'ATO' }
  },
  en: {
    home: { eyebrow:'Independent studio · Santos, Brazil', titleA:'Stories that', titleB:'change form.', text:'Books, comics and games connected by the Arcanian universe — each work with its own language.', projects:'Explore projects', studio:'Meet the studio', selected:'Featured projects', selectedTitle:'They are not versions of the same page.', film:'Book film', filmTitle:'Devaneios in motion.', filmText:'A visual presentation of Arcanian’s first published episode.', wiki:'Arcanian archive', wikiTitle:'The full story lives in the Wiki.', wikiText:'Characters, families, events and canonical connections without turning the homepage into a manual.', openWiki:'Enter the Wiki' },
    projects:{eyebrow:'Arcanian universe',title:'Five doors. Five rhythms.',text:'Choose by atmosphere, not by a wall of descriptions.'},
    media:{eyebrow:'Media',title:'Image, sound and movement.',film:'Official Devaneios video',gallery:'Visual archive',platform:'Game platforms',platforms:'Steam and Xbox',steam:'In development for Steam', still:'Still frames'},
    purchase:{eyebrow:'Arcanian: Devaneios',title:'Choose the store.',text:'Amazon carries physical and digital editions. Uiclap offers the print-on-demand physical edition.',amazon:'Buy on Amazon',amazonMeta:'Print + Kindle',uiclap:'Buy on Uiclap',uiclapMeta:'Print book',note:'Price, shipping and availability are set by each store.'},
    about:{eyebrow:'Two Eyes On You',title:'A studio for stories that do not fit a single format.',text:'Form comes after intent: prose enters thought, comics control silence and games hand part of the decision to the audience.',pillars:[['Narrative','Characters and consequences before exposition.'],['Visual direction','Each project gets its own rhythm, typography and composition.'],['Technology','Tools serve the scene — never the opposite.']]},
    contact:{eyebrow:'Contact',title:'Let’s talk about work, press or partnerships.',text:'Use the studio email. Clear proposals get better answers.',mail:'Send email'},
    work:{openWiki:'Go deeper in the Wiki',watch:'Watch the video',stores:'See editions',chapter:'Narrative cut',evidence:'Central clues',acts:'Three acts',layers:'Layers of the storm',gameStatus:'In development',gamePlatform:'Steam',gameFeatures:'Game structure',gameCast:'Playable characters',gameWorld:'Worlds', gamePlatforms:'Planned platforms', platformPlan:'PC and Xbox', adaptationLabel:'Adapted works', adaptationTitle:'Devaneios, Menos Um and Tormenta share one original campaign.', adaptationText:'The game reorganizes events, characters and periods from these three works to create its own investigation, combat and choices — not an interactive recap.', directContinuation:'DIRECT SEQUEL TO DEVANEIOS', devaneiosEpisode:'Devaneios. Episode I.', beforeRupture:'Before the rupture.', lastChance:'ONE LAST CHANCE', chapterLabel:'CHAPTER', beforeGreatDay:'BEFORE THE GREAT DAY', playStoryTitle:'Play the story. Don’t just watch.', worldCountsTitle:'The setting tells the story too.', act:'ACT'}
  },
  es: {
    home:{eyebrow:'Estudio independiente · Santos, Brasil',titleA:'Historias que',titleB:'cambian de forma.',text:'Libros, cómics y juegos conectados por el universo Arcanian — cada obra con un lenguaje propio.',projects:'Explorar proyectos',studio:'Conocer el estudio',selected:'Proyectos destacados',selectedTitle:'No son versiones de la misma página.',film:'Video del libro',filmTitle:'Devaneios en movimiento.',filmText:'Una presentación visual del primer episodio publicado de Arcanian.',wiki:'Archivo Arcanian',wikiTitle:'La historia completa está en la Wiki.',wikiText:'Personajes, familias, eventos y conexiones canónicas sin convertir el inicio en un manual.',openWiki:'Entrar en la Wiki'},
    projects:{eyebrow:'Universo Arcanian',title:'Cinco puertas. Cinco ritmos.',text:'Elige por la atmósfera, no por una pared de descripciones.'},
    media:{eyebrow:'Medios',title:'Imagen, sonido y movimiento.',film:'Video oficial de Devaneios',gallery:'Archivo visual',platform:'Plataformas del juego',platforms:'Steam y Xbox',steam:'En desarrollo para Steam', still:'Fotogramas'},
    purchase:{eyebrow:'Arcanian: Devaneios',title:'Elige la tienda.',text:'Amazon reúne las ediciones física y digital. Uiclap ofrece la edición física bajo demanda.',amazon:'Comprar en Amazon',amazonMeta:'Físico + Kindle',uiclap:'Comprar en Uiclap',uiclapMeta:'Libro físico',note:'Precio, envío y disponibilidad son definidos por cada tienda.'},
    about:{eyebrow:'Two Eyes On You',title:'Un estudio para historias que no caben en un solo formato.',text:'La forma viene después de la intención: la prosa entra en el pensamiento, el cómic controla el silencio y el juego entrega parte de la decisión al público.',pillars:[['Narrativa','Personajes y consecuencias antes que exposición.'],['Dirección visual','Cada proyecto recibe ritmo, tipografía y composición propios.'],['Tecnología','Las herramientas sirven a la escena — nunca al contrario.']]},
    contact:{eyebrow:'Contacto',title:'Hablemos de trabajo, prensa o colaboración.',text:'Usa el correo institucional. Las propuestas objetivas reciben mejores respuestas.',mail:'Enviar correo'},
    work:{openWiki:'Profundizar en la Wiki',watch:'Ver el video',stores:'Ver ediciones',chapter:'Recorte narrativo',evidence:'Pistas centrales',acts:'Tres actos',layers:'Capas de la tormenta',gameStatus:'En desarrollo',gamePlatform:'Steam',gameFeatures:'Estructura del juego',gameCast:'Personajes jugables',gameWorld:'Mundos', gamePlatforms:'Plataformas previstas', platformPlan:'PC y Xbox', adaptationLabel:'Obras adaptadas', adaptationTitle:'Devaneios, Menos Um y Tormenta comparten una campaña propia.', adaptationText:'El juego reorganiza acontecimientos, personajes y períodos de estas tres obras para crear investigación, combate y decisiones propias, no un resumen interactivo.', directContinuation:'SECUELA DIRECTA DE DEVANEIOS', devaneiosEpisode:'Devaneios. Episodio I.', beforeRupture:'Antes de la ruptura.', lastChance:'UNA ÚLTIMA OPORTUNIDAD', chapterLabel:'CAPÍTULO', beforeGreatDay:'ANTES DEL GRAN DÍA', playStoryTitle:'Jugar la historia. No solo mirar.', worldCountsTitle:'El escenario también cuenta.', act:'ACTO'}
  },
  it: {
    home:{eyebrow:'Studio indipendente · Santos, Brasile',titleA:'Storie che',titleB:'cambiano forma.',text:'Libri, fumetti e giochi collegati dall’universo Arcanian — ogni opera con un linguaggio proprio.',projects:'Esplora i progetti',studio:'Scopri lo studio',selected:'Progetti in evidenza',selectedTitle:'Non sono versioni della stessa pagina.',film:'Video del libro',filmTitle:'Devaneios in movimento.',filmText:'Una presentazione visiva del primo episodio pubblicato di Arcanian.',wiki:'Archivio Arcanian',wikiTitle:'La storia completa vive nella Wiki.',wikiText:'Personaggi, famiglie, eventi e connessioni canoniche senza trasformare la home in un manuale.',openWiki:'Entra nella Wiki'},
    projects:{eyebrow:'Universo Arcanian',title:'Cinque porte. Cinque ritmi.',text:'Scegli dall’atmosfera, non da un muro di descrizioni.'},
    media:{eyebrow:'Media',title:'Immagine, suono e movimento.',film:'Video ufficiale di Devaneios',gallery:'Archivio visivo',platform:'Piattaforme del gioco',platforms:'Steam e Xbox',steam:'In sviluppo per Steam', still:'Fotogrammi'},
    purchase:{eyebrow:'Arcanian: Devaneios',title:'Scegli il negozio.',text:'Amazon riunisce le edizioni fisica e digitale. Uiclap offre l’edizione fisica print-on-demand.',amazon:'Acquista su Amazon',amazonMeta:'Cartaceo + Kindle',uiclap:'Acquista su Uiclap',uiclapMeta:'Libro cartaceo',note:'Prezzo, spedizione e disponibilità sono definiti dai negozi.'},
    about:{eyebrow:'Two Eyes On You',title:'Uno studio per storie che non entrano in un solo formato.',text:'La forma viene dopo l’intenzione: la prosa entra nel pensiero, il fumetto controlla il silenzio e il gioco consegna parte della decisione al pubblico.',pillars:[['Narrativa','Personaggi e conseguenze prima dell’esposizione.'],['Direzione visiva','Ogni progetto riceve ritmo, tipografia e composizione propri.'],['Tecnologia','Gli strumenti servono la scena — mai il contrario.']]},
    contact:{eyebrow:'Contatti',title:'Parliamo di lavoro, stampa o collaborazioni.',text:'Usa l’email dello studio. Le proposte chiare ricevono risposte migliori.',mail:'Invia email'},
    work:{openWiki:'Approfondisci nella Wiki',watch:'Guarda il video',stores:'Vedi edizioni',chapter:'Taglio narrativo',evidence:'Indizi centrali',acts:'Tre atti',layers:'Strati della tormenta',gameStatus:'In sviluppo',gamePlatform:'Steam',gameFeatures:'Struttura del gioco',gameCast:'Personaggi giocabili',gameWorld:'Mondi', gamePlatforms:'Piattaforme previste', platformPlan:'PC e Xbox', adaptationLabel:'Opere adattate', adaptationTitle:'Devaneios, Menos Um e Tormenta condividono una campagna originale.', adaptationText:'Il gioco riorganizza eventi, personaggi e periodi delle tre opere per creare indagine, combattimento e scelte proprie, non un riassunto interattivo.', directContinuation:'SEGUITO DIRETTO DI DEVANEIOS', devaneiosEpisode:'Devaneios. Episodio I.', beforeRupture:'Prima della frattura.', lastChance:'UN’ULTIMA POSSIBILITÀ', chapterLabel:'CAPITOLO', beforeGreatDay:'PRIMA DEL GRANDE GIORNO', playStoryTitle:'Gioca la storia. Non limitarti a guardare.', worldCountsTitle:'Anche l’ambientazione racconta.', act:'ATTO'}
  },
  ja: {
    home:{eyebrow:'インディペンデント・スタジオ · ブラジル、サントス',titleA:'物語は',titleB:'形を変える。',text:'Arcanianの世界でつながる本、コミック、ゲーム。作品ごとに異なる言語とリズムを持ちます。',projects:'作品を見る',studio:'スタジオについて',selected:'注目作品',selectedTitle:'同じページの着せ替えではありません。',film:'書籍映像',filmTitle:'動き出すDevaneios。',filmText:'Arcanian最初の刊行エピソードを映像で紹介します。',wiki:'Arcanianアーカイブ',wikiTitle:'詳しい物語はWikiへ。',wikiText:'人物、家族、出来事、正史のつながりを、ホームを説明書にせず整理します。',openWiki:'Wikiを開く'},
    projects:{eyebrow:'Arcanianユニバース',title:'五つの入口。五つのリズム。',text:'説明の量ではなく、空気で選んでください。'},
    media:{eyebrow:'メディア',title:'映像、音、動き。',film:'Devaneios公式映像',gallery:'ビジュアル・アーカイブ',platform:'ゲームの対応プラットフォーム',platforms:'Steam・Xbox',steam:'Steam向けに開発中', still:'静止画'},
    purchase:{eyebrow:'Arcanian: Devaneios',title:'ストアを選ぶ。',text:'Amazonでは紙版とデジタル版、Uiclapではオンデマンド紙版を扱います。',amazon:'Amazonで購入',amazonMeta:'紙版 + Kindle',uiclap:'Uiclapで購入',uiclapMeta:'紙の本',note:'価格、送料、在庫は各ストアが決定します。'},
    about:{eyebrow:'Two Eyes On You',title:'一つの形式に収まらない物語のためのスタジオ。',text:'意図が先、形式は後。小説は思考へ入り、コミックは沈黙を制御し、ゲームは判断の一部を観客へ渡します。',pillars:[['物語','説明より先に人物と結果。'],['ビジュアル','各作品に固有のリズム、書体、構図。'],['技術','道具は場面に仕える。逆ではありません。']]},
    contact:{eyebrow:'お問い合わせ',title:'仕事、取材、協業について話しましょう。',text:'スタジオのメールをご利用ください。要点の明確な提案ほど回答しやすくなります。',mail:'メールを送る'},
    work:{openWiki:'Wikiで詳しく見る',watch:'映像を見る',stores:'版を選ぶ',chapter:'物語の焦点',evidence:'中心となる手掛かり',acts:'三幕',layers:'嵐の層',gameStatus:'開発中',gamePlatform:'Steam',gameFeatures:'ゲーム構造',gameCast:'プレイアブル人物',gameWorld:'世界', gamePlatforms:'予定プラットフォーム', platformPlan:'PC・Xbox', adaptationLabel:'原作', adaptationTitle:'Devaneios、Menos Um、Tormentaを一つの独自キャンペーンへ。', adaptationText:'三作品の出来事、人物、時代を再構成し、捜査、戦闘、選択を作ります。操作できる要約ではありません。', directContinuation:'DEVANEIOSの直接の続編', devaneiosEpisode:'Devaneios。エピソードI。', beforeRupture:'亀裂の前。', lastChance:'最後の機会', chapterLabel:'章', beforeGreatDay:'「大いなる日」の前', playStoryTitle:'物語を遊ぶ。見るだけではない。', worldCountsTitle:'舞台も物語を語る。', act:'幕'}
  }
};

const shortProjectCopy = {
  pt:{devaneios:'Uma investigação que se recusa a permanecer enterrada.','menos-um':'Joel e Elisabeth antes de a ausência ocupar tudo.','a-ultima-danca':'Sequência direta de Devaneios: a investigação se transforma em crise coletiva.',tormenta:'As pessoas que existiam antes de virarem lendas.',arcanian:'Devaneios, Menos Um e Tormenta adaptados em uma campanha própria.'},
  en:{devaneios:'An investigation that refuses to stay buried.','menos-um':'Joel and Elisabeth before absence occupied everything.','a-ultima-danca':'A direct sequel to Devaneios, where investigation becomes collective crisis.',tormenta:'The people who existed before becoming legends.',arcanian:'Devaneios, Menos Um and Tormenta adapted into an original campaign.'},
  es:{devaneios:'Una investigación que se niega a permanecer enterrada.','menos-um':'Joel y Elisabeth antes de que la ausencia lo ocupara todo.','a-ultima-danca':'Secuela directa de Devaneios: la investigación se convierte en crisis colectiva.',tormenta:'Las personas que existían antes de convertirse en leyendas.',arcanian:'Devaneios, Menos Um y Tormenta adaptados en una campaña propia.'},
  it:{devaneios:'Un’indagine che rifiuta di restare sepolta.','menos-um':'Joel ed Elisabeth prima che l’assenza occupasse tutto.','a-ultima-danca':'Seguito diretto di Devaneios: l’indagine diventa crisi collettiva.',tormenta:'Le persone esistite prima di diventare leggende.',arcanian:'Devaneios, Menos Um e Tormenta adattati in una campagna originale.'},
  ja:{devaneios:'埋もれたままでいることを拒む捜査。','menos-um':'不在がすべてを占める前のJoelとElisabeth。','a-ultima-danca':'Devaneiosの直接の続編。捜査は集団的危機へ変わります。',tormenta:'伝説になる前に生きていた人々。',arcanian:'Devaneios、Menos Um、Tormentaを独自キャンペーンへ適応。'}
};

function InteractiveEye3D({ compact = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const reset = () => {
      node.dataset.active = 'false';
      node.style.setProperty('--eye-rx', '0deg');
      node.style.setProperty('--eye-ry', '0deg');
      node.style.setProperty('--pupil-x', '0px');
      node.style.setProperty('--pupil-y', '0px');
    };

    const track = (event) => {
      const box = node.getBoundingClientRect();
      const activation = compact ? 190 : 300;
      const withinX = event.clientX >= box.left - activation && event.clientX <= box.right + activation;
      const withinY = event.clientY >= box.top - activation && event.clientY <= box.bottom + activation;
      if (!withinX || !withinY) {
        reset();
        return;
      }

      const centerX = box.left + box.width / 2;
      const centerY = box.top + box.height / 2;
      const x = Math.max(-1, Math.min(1, (event.clientX - centerX) / (box.width * .68)));
      const y = Math.max(-1, Math.min(1, (event.clientY - centerY) / (box.height * .58)));
      node.dataset.active = 'true';
      node.style.setProperty('--eye-rx', `${-y * 8}deg`);
      node.style.setProperty('--eye-ry', `${x * 12}deg`);
      node.style.setProperty('--pupil-x', `${x * (compact ? 22 : 34)}px`);
      node.style.setProperty('--pupil-y', `${y * (compact ? 13 : 19)}px`);
    };

    window.addEventListener('pointermove', track, { passive: true });
    window.addEventListener('blur', reset);
    return () => {
      window.removeEventListener('pointermove', track);
      window.removeEventListener('blur', reset);
    };
  }, [compact]);

  return <div ref={ref} className={`vision-object ${compact ? 'vision-object--compact' : ''}`} aria-hidden="true">
    <div className="vision-object__activation"/>
    <div className="vision-object__halo"><i/><i/><i/></div>
    <div className="vision-object__eye">
      <div className="vision-object__sclera"/>
      <img className="vision-object__ink" src="./media/eye-ink.webp" alt=""/>
      <span className="vision-object__iris"><img src="./media/eye-iris.webp" alt=""/></span>
    </div>
    <div className="vision-object__axis vision-object__axis--one"/><div className="vision-object__axis vision-object__axis--two"/>
    <small>TWO / EYES / ON / YOU</small>
  </div>;
}

function SteamMark({ size = 31 }) {
  return <svg className="steam-mark" viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none">
    <circle cx="32" cy="32" r="30" fill="currentColor" opacity=".12"/>
    <circle cx="43.5" cy="21" r="10.5" stroke="currentColor" strokeWidth="5"/>
    <circle cx="43.5" cy="21" r="4.5" fill="currentColor"/>
    <circle cx="20" cy="43" r="7" stroke="currentColor" strokeWidth="4"/>
    <path d="M25.5 39.2 36.8 30l8.4 1.2M8 37l7.2 3.4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>;
}

function XboxMark({ size = 31 }) {
  return <svg className="xbox-mark" viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" fill="none">
    <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="3"/>
    <path d="M17 16.5c6.5 1.2 11.5 4.2 15 8.1 3.5-3.9 8.5-6.9 15-8.1-4.6-3-9.8-4.5-15-4.5s-10.4 1.5-15 4.5Z" fill="currentColor"/>
    <path d="M14 22c3.2 2 8.2 6.7 13.2 12.4C22.5 40 18.7 45.7 16.5 50M50 22c-3.2 2-8.2 6.7-13.2 12.4C41.5 40 45.3 45.7 47.5 50" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
  </svg>;
}

function PlatformBadge() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  return <div className="platform-badge platform-badge--dual">
    <small>{c.work.gamePlatforms}</small>
    <span><SteamMark/><strong>Steam</strong></span>
    <span><XboxMark/><strong>Xbox</strong></span>
  </div>;
}

function HomePage() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const lines = shortProjectCopy[lang] || shortProjectCopy.pt;
  return <main className="neo-home">
    <section className="neo-home__hero">
      <div className="neo-home__hero-copy" data-reveal>
        <h1><span>{c.home.titleA}</span><em>{c.home.titleB}</em></h1>
        <p>{c.home.text}</p>
        <div className="hero-actions"><ButtonLink href="#/arcanian">{c.home.projects}</ButtonLink><ButtonLink href="#/about" tone="secondary">{c.home.studio}</ButtonLink></div>
      </div>
      <InteractiveEye3D/>
    </section>

    <section className="neo-home__projects">
      <header data-reveal><small>{c.home.selected}</small><h2>{c.home.selectedTitle}</h2></header>
      <div className="project-mosaic">
        {works.map((work, index) => <SmartLink href={`#/obra/${work.slug}`} key={work.slug} className={`project-mosaic__card project-mosaic__card--${work.slug}`} style={{'--project-accent':work.accent}} data-reveal>
          <img src={work.image} alt="" loading={index < 2 ? 'eager' : 'lazy'}/><span className="project-mosaic__shade"/>
          <div><small>{String(index + 1).padStart(2,'0')}</small><ProjectLogo work={work} className="project-logo--mosaic"/><p>{lines[work.slug]}</p><b><Icon name="arrow"/></b></div>
        </SmartLink>)}
      </div>
    </section>

    <section className="neo-home__film">
      <div className="neo-film__copy" data-reveal><small>{c.home.film}</small><h2>{c.home.filmTitle}</h2><p>{c.home.filmText}</p><ButtonLink href="#/purchase" tone="outline">{c.work.stores}</ButtonLink></div>
      <div className="neo-film__screen" data-reveal><video autoPlay loop muted playsInline preload="auto" poster="./media/devaneios.webp" aria-label={c.home.filmTitle}><source src="./media/arcanian.mp4" type="video/mp4"/></video><span>{c.work.devaneiosEpisode.toUpperCase()}</span></div>
    </section>

    <section className="neo-home__wiki">
      <div data-reveal><small>{c.home.wiki}</small><h2>{c.home.wikiTitle}</h2><p>{c.home.wikiText}</p><ButtonLink href="#/wiki">{c.home.openWiki}</ButtonLink></div>
      <div className="neo-home__wiki-number" aria-hidden="true"><strong>{allWikiEntries.length}</strong><span>ENTRIES</span></div>
    </section>
  </main>;
}

function PageHero({ eyebrow, title, text, image, children, compact = false }) {
  return <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}><div className="page-hero__image"><img src={image} alt=""/></div><div className="page-hero__shade"/><div className="page-hero__copy" data-reveal><small>{eyebrow}</small><h1>{title}</h1>{text && <p>{text}</p>}{children}</div></section>;
}

function ProjectIndex({ compact = false }) {
  const { d, lang } = useSite();
  return <section className={`project-index ${compact ? 'project-index--compact' : ''}`}>
    {works.map((work, index) => {
      const item = localizedWork(work, lang);
      return <SmartLink href={`#/obra/${work.slug}`} key={work.slug} className="project-index__row" style={{ '--project-accent': work.accent }} data-reveal>
        <span className="project-index__number">{String(index + 1).padStart(2, '0')}</span>
        <div className="project-index__image"><img src={work.image} alt=""/></div>
        <div className="project-index__copy"><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--index"/><p>{item.summary}</p></div>
        <Icon name="arrow"/>
      </SmartLink>;
    })}
  </section>;
}

function ProjectsPage() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const lines = shortProjectCopy[lang] || shortProjectCopy.pt;
  return <main className="neo-projects-page">
    <section className="neo-projects-hero"><div data-reveal><small>{c.projects.eyebrow}</small><h1>{c.projects.title}</h1><p>{c.projects.text}</p></div><InteractiveEye3D compact/></section>
    <section className="neo-projects-grid">
      {works.map((work,index)=><SmartLink href={`#/obra/${work.slug}`} key={work.slug} className={`neo-project-tile neo-project-tile--${work.slug}`} style={{'--project-accent':work.accent}} data-reveal>
        <div className="neo-project-tile__media"><img src={work.image} alt="" loading="lazy"/><i/></div>
        <div className="neo-project-tile__copy"><span>{String(index+1).padStart(2,'0')}</span><ProjectLogo work={work} className="project-logo--tile"/><p>{lines[work.slug]}</p><Icon name="arrow"/></div>
      </SmartLink>)}
    </section>
  </main>;
}

function RelatedWiki({ slugs }) {
  const { d, lang } = useSite();
  const items = slugs.map((slug) => allWikiEntries.find((entry) => entry.slug === slug)).filter(Boolean);
  return <div className="related-lines">{items.map((entry, index) => { const item = localizedWikiEntry(entry, lang); return <SmartLink href={`#/wiki/${entry.slug}`} key={entry.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.tag}</small><strong>{item.name}</strong><p>{item.summary}</p></div><Icon name="arrow"/></SmartLink>; })}</div>;
}


const workIdentityCopy = {
  pt: {
    devaneios:{ label:'O método de Ikarius', title:'Primeiro o que aconteceu. Depois, o que isso pode significar.', steps:[['Fato','O que a cena, o corpo, o horário e a matéria permitem afirmar.'],['Inferência','A hipótese permanece separada da evidência até sobreviver ao teste.'],['Teste','Cada resposta precisa produzir uma forma de ser contrariada.']] },
    'menos-um':{ label:'Antes da ausência', title:'Uma relação construída no cotidiano — e não apenas lembrada depois da tragédia.', text:'Menos Um existe para mostrar o que havia entre os dois antes de o tempo, a culpa e a tentativa de desfazer a perda ocuparem tudo.' },
    'a-ultima-danca':{ label:'Depois de Devaneios', title:'Uma lembrança íntima e a última oportunidade de impedir um colapso coletivo.', text:'O título une Joel e Elisabeth ao limite político dos Arnins: duas interpretações da mesma dança, ambas marcadas por escolhas que não podem ser repetidas sem consequência.' },
    tormenta:{ label:'Antes do Grande Dia', title:'As lendas ainda tinham nomes, dúvidas e coisas a perder.', layers:['Lendas de Arcanian','Projeto L.A.C.H.R.Y.M.A.','Experimentos, reinos e alianças'] }
  },
  en: {
    devaneios:{ label:'Ikarius’s method', title:'First, what happened. Then, what it may mean.', steps:[['Fact','What the scene, body, time and material evidence allow him to state.'],['Inference','A hypothesis remains separate from evidence until it survives a test.'],['Test','Every answer must create a way to be disproved.']] },
    'menos-um':{ label:'Before the absence', title:'A relationship built through daily life — not merely remembered after tragedy.', text:'Menos Um shows what existed between them before time, guilt and the attempt to undo loss occupied everything.' },
    'a-ultima-danca':{ label:'After Devaneios', title:'An intimate memory and the last opportunity to prevent a collective collapse.', text:'The title connects Joel and Elisabeth to the Arnins’ political limit: two readings of the same dance, both marked by choices that cannot be repeated without consequence.' },
    tormenta:{ label:'Before the Great Day', title:'The legends still had names, doubts and things to lose.', layers:['Legends of Arcanian','Project L.A.C.H.R.Y.M.A.','Experiments, kingdoms and alliances'] }
  },
  es: {
    devaneios:{ label:'El método de Ikarius', title:'Primero, lo que ocurrió. Después, lo que puede significar.', steps:[['Hecho','Lo que la escena, el cuerpo, la hora y la materia permiten afirmar.'],['Inferencia','La hipótesis permanece separada de la evidencia hasta superar una prueba.'],['Prueba','Cada respuesta debe producir una forma de ser refutada.']] },
    'menos-um':{ label:'Antes de la ausencia', title:'Una relación construida en lo cotidiano — no solo recordada después de la tragedia.', text:'Menos Um muestra lo que existía entre ambos antes de que el tiempo, la culpa y el intento de deshacer la pérdida lo ocuparan todo.' },
    'a-ultima-danca':{ label:'Después de Devaneios', title:'Un recuerdo íntimo y la última oportunidad de impedir un colapso colectivo.', text:'El título une a Joel y Elisabeth con el límite político de los Arnins: dos lecturas de la misma danza, marcadas por decisiones que no pueden repetirse sin consecuencias.' },
    tormenta:{ label:'Antes del Gran Día', title:'Las leyendas todavía tenían nombres, dudas y cosas que perder.', layers:['Leyendas de Arcanian','Proyecto L.A.C.H.R.Y.M.A.','Experimentos, reinos y alianzas'] }
  },
  it: {
    devaneios:{ label:'Il metodo di Ikarius', title:'Prima ciò che è accaduto. Poi, ciò che può significare.', steps:[['Fatto','Ciò che scena, corpo, orario e materia permettono di affermare.'],['Inferenza','L’ipotesi resta separata dalla prova finché non supera una verifica.'],['Verifica','Ogni risposta deve produrre un modo per essere smentita.']] },
    'menos-um':{ label:'Prima dell’assenza', title:'Una relazione costruita nella vita quotidiana — non soltanto ricordata dopo la tragedia.', text:'Menos Um mostra ciò che esisteva tra loro prima che il tempo, la colpa e il tentativo di annullare la perdita occupassero tutto.' },
    'a-ultima-danca':{ label:'Dopo Devaneios', title:'Un ricordo intimo e l’ultima opportunità di impedire un collasso collettivo.', text:'Il titolo unisce Joel ed Elisabeth al limite politico degli Arnins: due letture della stessa danza, segnate da scelte che non possono essere ripetute senza conseguenze.' },
    tormenta:{ label:'Prima del Grande Giorno', title:'Le leggende avevano ancora nomi, dubbi e qualcosa da perdere.', layers:['Leggende di Arcanian','Progetto L.A.C.H.R.Y.M.A.','Esperimenti, regni e alleanze'] }
  },
  ja: {
    devaneios:{ label:'Ikariusの方法', title:'最初に、何が起きたか。その後で、それが何を意味し得るか。', steps:[['事実','現場、遺体、時刻、物質的証拠から断言できること。'],['推論','仮説は検証を通過するまで証拠と分けて扱います。'],['検証','すべての答えには反証できる方法が必要です。']] },
    'menos-um':{ label:'不在になる前', title:'悲劇の後に思い出されるだけではなく、日常の中で築かれた関係。', text:'Menos Umは、時間、罪悪感、喪失を取り消そうとする試みがすべてを占める前の二人を描きます。' },
    'a-ultima-danca':{ label:'Devaneiosの後', title:'個人的な記憶と、集団的な崩壊を止める最後の機会。', text:'題名はJoelとElisabeth、そしてArninsの政治的限界を結びます。同じダンスの二つの解釈は、結果なしには繰り返せない選択に刻まれています。' },
    tormenta:{ label:'「大いなる日」の前', title:'伝説にもまだ名前、疑い、失うものがありました。', layers:['Arcanianの伝説','L.A.C.H.R.Y.M.A.計画','実験、王国、同盟'] }
  }
};

function WorkIdentity({ slug }) {
  const { lang } = useSite();
  const copy = workIdentityCopy[lang]?.[slug] || workIdentityCopy.pt[slug];
  if (!copy) return null;
  if (slug === 'devaneios') return <section className="work-identity work-identity--devaneios" data-reveal>
    <div className="work-identity__symbol" aria-hidden="true"><span>∿</span></div>
    <div className="work-identity__copy"><small>{copy.label}</small><h2>{copy.title}</h2></div>
    <ol>{copy.steps.map(([title,text], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><p>{text}</p></li>)}</ol>
  </section>;
  if (slug === 'menos-um') return <section className="work-identity work-identity--menos-um" data-reveal>
    <div className="work-identity__couple"><strong>Joel</strong><span>&amp;</span><strong>Elisabeth</strong></div>
    <div className="work-identity__copy"><small>{copy.label}</small><h2>{copy.title}</h2><p>{copy.text}</p></div>
  </section>;
  if (slug === 'a-ultima-danca') return <section className="work-identity work-identity--a-ultima-danca" data-reveal>
    <div className="work-identity__dance" aria-hidden="true"><i/><i/><span>∞</span></div>
    <div className="work-identity__copy"><small>{copy.label}</small><h2>{copy.title}</h2><p>{copy.text}</p></div>
  </section>;
  if (slug === 'tormenta') return <section className="work-identity work-identity--tormenta" data-reveal>
    <div className="work-identity__storm" aria-hidden="true"><i/><i/><i/></div>
    <div className="work-identity__copy"><small>{copy.label}</small><h2>{copy.title}</h2></div>
    <div className="work-identity__layers">{copy.layers.map((item) => <span key={item}>{item}</span>)}</div>
  </section>;
  return null;
}

const workDepthCopy = {
  pt: { label: 'Linhas centrais', title: 'O que esta obra realmente acompanha.' },
  en: { label: 'Central threads', title: 'What this work actually follows.' },
  es: { label: 'Líneas centrales', title: 'Lo que esta obra realmente acompaña.' },
  it: { label: 'Linee centrali', title: 'Ciò che quest’opera segue davvero.' },
  ja: { label: '中心となる流れ', title: 'この作品が本当に追うもの。' }
};

function WorkDepth({ work, game = false }) {
  const { lang } = useSite();
  const copy = workDepthCopy[lang] || workDepthCopy.pt;
  if (!work?.facts?.length && !work?.threads?.length) return null;
  return <section className={`work-depth ${game ? 'work-depth--game' : ''}`} style={{ '--work-accent': work.accent }}>
    {work.facts?.length > 0 && <div className="work-depth__facts" data-reveal>
      {work.facts.map(([label, value], index) => <div key={`${label}-${value}`}><span>{String(index + 1).padStart(2, '0')}</span><small>{label}</small><strong>{value}</strong></div>)}
    </div>}
    {work.threads?.length > 0 && <div className="work-depth__threads">
      <header data-reveal><small>{copy.label}</small><h2>{copy.title}</h2></header>
      <div>{work.threads.map((thread, index) => <article key={thread.title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{thread.title}</h3><p>{thread.text}</p></div></article>)}</div>
    </div>}
  </section>;
}

function CaseSpiral3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext('2d');
    if (!context) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 1;
    let height = 1;
    let pixelRatio = 1;
    let frame = 0;
    let lastTime = performance.now();
    let phase = 0;
    let rotationX = -0.48;
    let rotationY = 0.32;
    let targetX = rotationX;
    let targetY = rotationY;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const handlePointer = (event) => {
      const bounds = canvas.getBoundingClientRect();
      const normalizedX = clamp((event.clientX - bounds.left) / bounds.width * 2 - 1, -1.4, 1.4);
      const normalizedY = clamp((event.clientY - bounds.top) / bounds.height * 2 - 1, -1.4, 1.4);
      targetY = 0.3 + normalizedX * 0.26;
      targetX = -0.48 - normalizedY * 0.2;
    };

    const draw = (now) => {
      const elapsed = Math.min(34, now - lastTime);
      lastTime = now;
      if (!reduceMotion.matches) phase += elapsed * 0.00034;
      rotationX += (targetX - rotationX) * 0.045;
      rotationY += (targetY - rotationY) * 0.045;

      context.clearRect(0, 0, width, height);
      const base = Math.min(width, height);
      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const camera = base * 1.55;
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      const project = (x, y, z) => {
        const rotatedY = y * cosX - z * sinX;
        const rotatedZ1 = y * sinX + z * cosX;
        const rotatedX = x * cosY + rotatedZ1 * sinY;
        const rotatedZ = -x * sinY + rotatedZ1 * cosY;
        const perspective = camera / (camera - rotatedZ);
        return {
          x: centerX + rotatedX * perspective,
          y: centerY + rotatedY * perspective,
          z: rotatedZ,
          scale: perspective
        };
      };

      const points = [];
      const pointCount = 230;
      for (let index = 0; index < pointCount; index += 1) {
        const progress = index / (pointCount - 1);
        const angle = progress * Math.PI * 9.4 + phase;
        const radius = base * (0.018 + progress * 0.37);
        const depth = Math.sin(angle * 0.78 + phase * 1.6) * base * 0.082
          + (progress - 0.5) * base * 0.035;
        points.push(project(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.78,
          depth
        ));
      }

      const segments = [];
      for (let index = 1; index < points.length; index += 1) {
        segments.push({
          from: points[index - 1],
          to: points[index],
          depth: (points[index - 1].z + points[index].z) * 0.5,
          progress: index / points.length
        });
      }
      segments.sort((a, b) => a.depth - b.depth);

      context.lineCap = 'round';
      context.lineJoin = 'round';
      segments.forEach((segment) => {
        const depthRatio = clamp((segment.depth / base + 0.28) / 0.56, 0, 1);
        const scale = (segment.from.scale + segment.to.scale) * 0.5;
        const tubeWidth = base * (0.018 + segment.progress * 0.004) * scale;

        context.beginPath();
        context.moveTo(segment.from.x + 2.5, segment.from.y + 5);
        context.lineTo(segment.to.x + 2.5, segment.to.y + 5);
        context.strokeStyle = `rgba(0, 0, 0, ${0.32 + depthRatio * 0.3})`;
        context.lineWidth = tubeWidth * 1.35;
        context.stroke();

        context.beginPath();
        context.moveTo(segment.from.x, segment.from.y);
        context.lineTo(segment.to.x, segment.to.y);
        context.strokeStyle = `rgba(${170 + Math.round(depthRatio * 70)}, ${34 + Math.round(depthRatio * 45)}, ${61 + Math.round(depthRatio * 55)}, ${0.46 + depthRatio * 0.5})`;
        context.lineWidth = tubeWidth;
        context.stroke();

        context.beginPath();
        context.moveTo(segment.from.x - tubeWidth * 0.14, segment.from.y - tubeWidth * 0.18);
        context.lineTo(segment.to.x - tubeWidth * 0.14, segment.to.y - tubeWidth * 0.18);
        context.strokeStyle = `rgba(255, 194, 203, ${0.08 + depthRatio * 0.46})`;
        context.lineWidth = Math.max(0.8, tubeWidth * 0.17);
        context.stroke();
      });

      const core = context.createRadialGradient(centerX - base * 0.02, centerY - base * 0.025, 0, centerX, centerY, base * 0.085);
      core.addColorStop(0, 'rgba(255, 235, 239, .96)');
      core.addColorStop(0.16, 'rgba(236, 78, 99, .98)');
      core.addColorStop(0.55, 'rgba(108, 14, 35, .92)');
      core.addColorStop(1, 'rgba(20, 4, 10, 0)');
      context.fillStyle = core;
      context.beginPath();
      context.arc(centerX, centerY, base * 0.088, 0, Math.PI * 2);
      context.fill();

      frame = window.requestAnimationFrame(draw);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', handlePointer, { passive: true });
    resize();
    frame = window.requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointer);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="case-hero__spiral" aria-hidden="true">
    <div className="case-hero__spiral-orbits"><i/><i/><i/></div>
    <canvas ref={canvasRef}/>
    <span className="case-hero__spiral-depth"/>
  </div>;
}

function DevaneiosPage({ work, item }) {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  return <main className="project-page project-page--devaneios" style={{'--work-accent':work.accent}}>
    <section className="case-hero">
      <div className="case-hero__media"><img src={work.image} alt=""/></div><div className="case-hero__veil"/>
      <div className="case-file-tabs" aria-hidden="true"><span>CASE 01</span><span>MNT-04</span><span>08.08.1974</span></div>
      <div className="case-hero__copy" data-reveal><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--case" eager/><p>{(shortProjectCopy[lang]||shortProjectCopy.pt)[work.slug]}</p><div className="hero-actions"><ButtonLink href="#/purchase">{c.work.stores}</ButtonLink><ButtonLink href="#/wiki" tone="secondary">{c.work.openWiki}</ButtonLink></div></div>
      <div className="case-hero__stamp" aria-hidden="true"><b>EVIDÊNCIA</b><span>CAMPO FORTE</span></div>
      <CaseSpiral3D/>
      <div className="case-hero__facts">{item.facts.slice(0,4).map(([label,value])=><div key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
    </section>
    <section className="case-film"><div data-reveal><small>{c.work.watch}</small><h2>{c.work.devaneiosEpisode}</h2></div><video autoPlay loop muted playsInline preload="auto" poster="./media/devaneios.webp" data-reveal aria-label={c.work.devaneiosEpisode}><source src="./media/arcanian.mp4" type="video/mp4"/></video></section>
    <section className="case-ledger"><header data-reveal><small>{c.work.evidence}</small><h2>{workIdentityCopy[lang]?.devaneios?.title || workIdentityCopy.pt.devaneios.title}</h2></header><div>{item.threads.slice(0,4).map((thread,index)=><article key={thread.title} data-reveal><span>{String(index+1).padStart(2,'0')}</span><h3>{thread.title}</h3><p>{thread.text}</p></article>)}</div></section>
    <section className="project-endcap"><span aria-hidden="true">CASE / 01</span><div><h2>{c.home.wikiTitle}</h2><ButtonLink href="#/wiki">{c.work.openWiki}</ButtonLink></div></section>
  </main>;
}

function MenosUmPage({ work, item }) {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const identity = workIdentityCopy[lang]?.['menos-um'] || workIdentityCopy.pt['menos-um'];
  return <main className="project-page project-page--menos-um" style={{'--work-accent':work.accent}}>
    <section className="minus-hero">
      <div className="minus-hero__number" aria-hidden="true">−1</div>
      <div className="minus-hero__thread" aria-hidden="true"><i/><i/><i/><span>J + E</span></div>
      <div className="minus-hero__copy" data-reveal><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--minus" eager/><p>{(shortProjectCopy[lang]||shortProjectCopy.pt)[work.slug]}</p><div className="hero-actions"><ButtonLink href="#/wiki/joel">Joel</ButtonLink><ButtonLink href="#/wiki/elisabeth" tone="secondary">Elisabeth</ButtonLink></div></div>
      <figure data-reveal><img src={work.image} alt=""/><figcaption>JOEL × ELISABETH</figcaption><span className="minus-photo-date">ANTES DA RUPTURA</span></figure>
      <div className="minus-margin-note" aria-hidden="true"><span>promessa</span><i/><span>casa</span><i/><span>futuro</span></div>
    </section>
    <section className="minus-manifesto" data-reveal><small>{identity.label}</small><h2>{identity.title}</h2><p>{identity.text}</p></section>
    <section className="minus-moments"><header data-reveal><small>{c.work.chapter}</small><h2>{c.work.beforeRupture}</h2></header><div>{item.sections.slice(0,3).map((section,index)=><article key={section.title} data-reveal><span>0{index+1}</span><h3>{section.title}</h3><p>{section.text}</p></article>)}</div></section>
    <section className="minus-end"><div aria-hidden="true"><span>J</span><i/><span>E</span></div><ButtonLink href="#/wiki">{c.work.openWiki}</ButtonLink></section>
  </main>;
}

function UltimaDancaPage({ work, item }) {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const identity = workIdentityCopy[lang]?.['a-ultima-danca'] || workIdentityCopy.pt['a-ultima-danca'];
  return <main className="project-page project-page--dance" style={{'--work-accent':work.accent}}>
    <section className="dance-hero"><div className="dance-hero__curtain"/><div className="dance-hero__spotlight"/><img src={work.image} alt=""/><div className="dance-program" aria-hidden="true"><span>ATO I</span><span>ATO II</span><span>ATO III</span></div><div className="dance-hero__copy" data-reveal><div className="dance-sequel-tag"><span>{c.work.directContinuation}</span><ProjectLogo work={works.find((candidate)=>candidate.slug==='devaneios')} compact/></div><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--dance" eager/><p>{(shortProjectCopy[lang]||shortProjectCopy.pt)[work.slug]}</p><ButtonLink href="#/wiki">{c.work.openWiki}</ButtonLink></div><div className="dance-hero__infinity" aria-hidden="true">∞</div><div className="dance-heartline" aria-hidden="true"><i/><i/><i/></div></section>
    <section className="dance-statement" data-reveal><small>{identity.label}</small><h2>{identity.title}</h2><p>{identity.text}</p></section>
    <section className="dance-acts"><header data-reveal><small>{c.work.acts}</small><span>I — II — III</span></header>{item.sections.slice(0,3).map((section,index)=><article key={section.title} data-reveal><div><span>{c.work.act} {index+1}</span><h2>{section.title}</h2></div><p>{section.text}</p></article>)}</section>
    <section className="dance-final"><div className="dance-final__line"/><strong>{c.work.lastChance}</strong><div className="dance-final__line"/></section>
  </main>;
}

function TormentaPage({ work, item }) {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const identity = workIdentityCopy[lang]?.tormenta || workIdentityCopy.pt.tormenta;
  const panels = [work.image,'./media/welcome.webp','./media/game.webp'];
  return <main className="project-page project-page--tormenta" style={{'--work-accent':work.accent}}>
    <section className="storm-hero"><div className="storm-hero__sky"><img src={work.image} alt=""/></div><div className="storm-lightning" aria-hidden="true"><i/><i/><i/></div><div className="storm-issue" aria-hidden="true"><span>ISSUE 01</span><b>{c.work.beforeGreatDay}</b></div><div className="storm-hero__copy" data-reveal><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--storm" eager/><p>{(shortProjectCopy[lang]||shortProjectCopy.pt)[work.slug]}</p><ButtonLink href="#/wiki">{c.work.openWiki}</ButtonLink></div><div className="storm-hero__mark" aria-hidden="true"><i/><i/><i/></div></section>
    <section className="storm-layers"><header data-reveal><small>{c.work.layers}</small><h2>{identity.title}</h2></header><div>{identity.layers.map((layer,index)=><span key={layer} data-reveal><b>0{index+1}</b>{layer}</span>)}</div></section>
    <section className="storm-panels">{item.sections.slice(0,3).map((section,index)=><article key={section.title} data-reveal><img src={panels[index]} alt="" loading="lazy"/><div><span>{c.work.chapterLabel} / 0{index+1}</span><h2>{section.title}</h2><p>{section.text}</p></div></article>)}</section>
    <section className="storm-end"><span>{c.work.beforeGreatDay}</span><ButtonLink href="#/timeline" tone="secondary">Timeline</ButtonLink></section>
  </main>;
}

function WorkPage({ work }) {
  const { lang } = useSite();
  if (!work) return <NotFoundPage/>;
  if (work.slug === 'arcanian') return <GamePage work={work}/>;
  const item = localizedWork(work, lang);
  if (work.slug === 'devaneios') return <DevaneiosPage work={work} item={item}/>;
  if (work.slug === 'menos-um') return <MenosUmPage work={work} item={item}/>;
  if (work.slug === 'a-ultima-danca') return <UltimaDancaPage work={work} item={item}/>;
  if (work.slug === 'tormenta') return <TormentaPage work={work} item={item}/>;
  return <NotFoundPage/>;
}

function GamePage({ work }) {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const item = localizedWork(work, lang);
  const lines = shortProjectCopy[lang] || shortProjectCopy.pt;
  return <main className="neo-game-page" style={{'--work-accent':work.accent}}>
    <section className="neo-game-hero">
      <div className="neo-game-hero__media"><img src={work.image} alt=""/></div><div className="neo-game-hero__veil"/><div className="game-scanlines" aria-hidden="true"/>
      <div className="neo-game-hero__copy" data-reveal><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--game-new" eager/><p>{lines.arcanian}</p><PlatformBadge/><div className="hero-actions"><ButtonLink href="#/news">{c.work.gameStatus}</ButtonLink><ButtonLink href="#/wiki" tone="secondary">{c.work.openWiki}</ButtonLink></div></div>
      <div className="neo-game-hero__object" aria-hidden="true"><div><i/><i/><i/></div><span>PLAY</span></div>
    </section>
    <section className="game-adaptation">
      <header data-reveal><small>{c.work.adaptationLabel}</small><h2>{c.work.adaptationTitle}</h2><p>{c.work.adaptationText}</p></header>
      <div className="game-adaptation__works">{['devaneios','menos-um','tormenta'].map((slug,index)=>{const source=works.find((candidate)=>candidate.slug===slug);return <SmartLink href={`#/obra/${slug}`} key={slug} data-reveal><span>{String(index+1).padStart(2,'0')}</span><ProjectLogo work={source}/><Icon name="arrow"/></SmartLink>;})}</div>
    </section>
    <section className="neo-game-platform"><header><small>{c.work.gamePlatforms}</small><strong>{c.work.platformPlan}</strong></header><div className="game-platform-list"><span><SteamMark size={46}/><b>Steam</b></span><span><XboxMark size={46}/><b>Xbox</b></span></div></section>
    <section className="neo-game-features"><header data-reveal><small>{c.work.gameFeatures}</small><h2>{c.work.playStoryTitle}</h2></header><div>{item.sections.slice(0,4).map((section,index)=><article key={section.title} data-reveal><span>0{index+1}</span><h3>{section.title}</h3><p>{section.text}</p></article>)}</div></section>
    <section className="neo-game-cast"><header data-reveal><small>{c.work.gameCast}</small><h2>Ikarius. Joel.<br/>Aphride. Merius.</h2></header><div>{item.characters.map((character,index)=><SmartLink href={`#/wiki/${character.slug}`} key={character.slug} data-reveal><span>{String(index+1).padStart(2,'0')}</span><strong>{character.name}</strong><small>{character.role}</small><Icon name="arrow"/></SmartLink>)}</div></section>
    <section className="neo-game-world"><header data-reveal><small>{c.work.gameWorld}</small><h2>{c.work.worldCountsTitle}</h2></header><div>{item.worlds.map((place,index)=><article key={place.name} data-reveal><img src={place.image} alt="" loading="lazy"/><div><span>0{index+1}</span><h3>{place.name}</h3><p>{place.text}</p></div></article>)}</div></section>
  </main>;
}

const studioJoyCopy = {
  pt: {
    hello:'Two Eyes On You', heroA:'Uma história não termina', heroB:'quando muda de forma.',
    heroText:'Arcanian começou como um universo escrito. Devaneios abriu a investigação; Menos Um volta para Joel e Elisabeth; Tormenta reconstrói o período das lendas; o jogo transforma esses conflitos em escolhas do jogador.',
    jump:'Abrir esta obra', introLabel:'Por que o estúdio existe', introTitle:'A Two Eyes On You foi criada para desenvolver Arcanian sem reduzir cada nova obra a uma versão da anterior.',
    introText:'O livro pode entrar na cabeça de Ikarius. A HQ pode transformar silêncio e passagem de tempo em quadro. O jogo precisa permitir que a pessoa investigue, lute e decida. O trabalho do estúdio é encontrar a forma certa para cada parte do universo.',
    projectsLabel:'Arcanian por obra', projectsTitle:'A mesma história muda quando o ponto de vista muda.', projectsText:'Devaneios acompanha uma investigação; Menos Um se aproxima de um casamento; Tormenta retorna às pessoas por trás das lendas; o Jogo reorganiza o universo para uma ou duas pessoas.',
    studioLabel:'Como as cenas são construídas', studioTitle:'Primeiro decidimos quem está ali — e o que pode ser perdido.', studioText:'Depois vêm o traço, a cor, o silêncio, o movimento, a câmera, a interface e a tecnologia. A ordem importa porque acabamento não substitui intenção.',
    wikiLabel:'Wiki Arcanian', wikiTitle:'Personagens, parentescos e acontecimentos com contexto — não apenas uma lista de nomes.', wikiText:'Os verbetes conectam família, afiliações, lugares, objetos, operações e consequências confirmadas pelas obras e pelos projetos anunciados.',
    entries:'verbetes', categories:'categorias', people:'personagens', latest:'O que mudou recentemente', allNews:'Abrir notícias', outroTitle:'Devaneios foi o primeiro episódio. Não é o limite do universo.', outroText:'Continue pela história de Joel e Elisabeth, pelo passado do L.A.C.H.R.Y.M.A., pelo jogo ou pela enciclopédia que liga tudo isso.', explore:'Conhecer a Two Eyes On You'
  },
  en: {
    hello:'Two Eyes On You', heroA:'A story does not end', heroB:'when it changes form.',
    heroText:'Arcanian began as a written universe. Devaneios opened the investigation; Menos Um returns to Joel and Elisabeth; Tormenta rebuilds the age of legends; the game turns those conflicts into player choices.',
    jump:'Open this work', introLabel:'Why the studio exists', introTitle:'Two Eyes On You was created to develop Arcanian without reducing every new work to another version of the previous one.',
    introText:'A novel can enter Ikarius’s thoughts. A comic can turn silence and passing time into panels. A game must let people investigate, fight and decide. The studio’s job is to find the right form for each part of the universe.',
    projectsLabel:'Arcanian by work', projectsTitle:'The same story changes when the point of view changes.', projectsText:'Devaneios follows an investigation; Menos Um moves closer to a marriage; Tormenta returns to the people behind the legends; the Game reorganizes the universe for one or two players.',
    studioLabel:'How scenes are built', studioTitle:'First we decide who is there — and what can be lost.', studioText:'Then come line, colour, silence, movement, camera, interface and technology. The order matters because polish cannot replace intention.',
    wikiLabel:'Arcanian Wiki', wikiTitle:'Characters, families and events with context — not merely a list of names.', wikiText:'Entries connect family, affiliations, places, objects, operations and consequences confirmed by the works and announced projects.',
    entries:'entries', categories:'categories', people:'characters', latest:'What changed recently', allNews:'Open news', outroTitle:'Devaneios was the first episode. It is not the limit of the universe.', outroText:'Continue through Joel and Elisabeth’s story, L.A.C.H.R.Y.M.A.’s past, the game or the encyclopedia connecting it all.', explore:'Discover Two Eyes On You'
  },
  es: {
    hello:'Two Eyes On You', heroA:'Una historia no termina', heroB:'cuando cambia de forma.',
    heroText:'Arcanian comenzó como un universo escrito. Devaneios abrió la investigación; Menos Um vuelve a Joel y Elisabeth; Tormenta reconstruye la época de las leyendas; el juego transforma esos conflictos en decisiones del jugador.',
    jump:'Abrir esta obra', introLabel:'Por qué existe el estudio', introTitle:'Two Eyes On You fue creado para desarrollar Arcanian sin reducir cada nueva obra a otra versión de la anterior.',
    introText:'La novela puede entrar en la mente de Ikarius. El cómic puede convertir el silencio y el paso del tiempo en viñetas. El juego debe permitir investigar, luchar y decidir. El trabajo del estudio es encontrar la forma correcta para cada parte del universo.',
    projectsLabel:'Arcanian por obra', projectsTitle:'La misma historia cambia cuando cambia el punto de vista.', projectsText:'Devaneios acompaña una investigación; Menos Um se acerca a un matrimonio; Tormenta vuelve a las personas detrás de las leyendas; el Juego reorganiza el universo para una o dos personas.',
    studioLabel:'Cómo se construyen las escenas', studioTitle:'Primero decidimos quién está allí — y qué puede perderse.', studioText:'Después llegan el trazo, el color, el silencio, el movimiento, la cámara, la interfaz y la tecnología. El orden importa porque el acabado no sustituye la intención.',
    wikiLabel:'Wiki Arcanian', wikiTitle:'Personajes, parentescos y acontecimientos con contexto — no solo una lista de nombres.', wikiText:'Las entradas conectan familia, afiliaciones, lugares, objetos, operaciones y consecuencias confirmadas por las obras y los proyectos anunciados.',
    entries:'entradas', categories:'categorías', people:'personajes', latest:'Qué cambió recientemente', allNews:'Abrir noticias', outroTitle:'Devaneios fue el primer episodio. No es el límite del universo.', outroText:'Continúa por la historia de Joel y Elisabeth, el pasado de L.A.C.H.R.Y.M.A., el juego o la enciclopedia que conecta todo.', explore:'Conocer Two Eyes On You'
  },
  it: {
    hello:'Two Eyes On You', heroA:'Una storia non finisce', heroB:'quando cambia forma.',
    heroText:'Arcanian è nato come universo scritto. Devaneios ha aperto l’indagine; Menos Um torna a Joel ed Elisabeth; Tormenta ricostruisce l’epoca delle leggende; il gioco trasforma quei conflitti in scelte del giocatore.',
    jump:'Apri quest’opera', introLabel:'Perché esiste lo studio', introTitle:'Two Eyes On You è stato creato per sviluppare Arcanian senza ridurre ogni nuova opera a un’altra versione della precedente.',
    introText:'Il romanzo può entrare nei pensieri di Ikarius. Il fumetto può trasformare silenzio e passaggio del tempo in tavole. Il gioco deve permettere di indagare, combattere e decidere. Il compito dello studio è trovare la forma giusta per ogni parte dell’universo.',
    projectsLabel:'Arcanian per opera', projectsTitle:'La stessa storia cambia quando cambia il punto di vista.', projectsText:'Devaneios segue un’indagine; Menos Um si avvicina a un matrimonio; Tormenta torna alle persone dietro le leggende; il Gioco riorganizza l’universo per una o due persone.',
    studioLabel:'Come vengono costruite le scene', studioTitle:'Prima decidiamo chi è presente — e cosa può essere perduto.', studioText:'Poi arrivano segno, colore, silenzio, movimento, camera, interfaccia e tecnologia. L’ordine conta perché la rifinitura non sostituisce l’intenzione.',
    wikiLabel:'Wiki Arcanian', wikiTitle:'Personaggi, famiglie ed eventi con contesto — non soltanto un elenco di nomi.', wikiText:'Le voci collegano famiglia, affiliazioni, luoghi, oggetti, operazioni e conseguenze confermate dalle opere e dai progetti annunciati.',
    entries:'voci', categories:'categorie', people:'personaggi', latest:'Cosa è cambiato di recente', allNews:'Apri le notizie', outroTitle:'Devaneios è stato il primo episodio. Non è il limite dell’universo.', outroText:'Continua con la storia di Joel ed Elisabeth, il passato di L.A.C.H.R.Y.M.A., il gioco o l’enciclopedia che collega tutto.', explore:'Scopri Two Eyes On You'
  },
  ja: {
    hello:'Two Eyes On You', heroA:'物語は終わりません', heroB:'形を変えたときも。',
    heroText:'Arcanianは文章の世界として始まりました。Devaneiosが捜査を開き、Menos UmがJoelとElisabethへ戻り、Tormentaが伝説の時代を再構築し、ゲームがその対立をプレイヤーの選択へ変えます。',
    jump:'この作品を開く', introLabel:'スタジオが存在する理由', introTitle:'Two Eyes On Youは、新作を前作の別版にせずArcanianを発展させるために作られました。',
    introText:'小説はIkariusの思考へ入れます。コミックは沈黙と時間の経過をコマにできます。ゲームは調査、戦闘、決断を可能にしなければなりません。スタジオの仕事は、世界の各部分に正しい形式を見つけることです。',
    projectsLabel:'作品ごとのArcanian', projectsTitle:'視点が変われば、同じ物語も変わります。', projectsText:'Devaneiosは捜査を追い、Menos Umは結婚生活へ近づき、Tormentaは伝説の背後にいた人々へ戻り、ゲームは一人または二人のために世界を再構成します。',
    studioLabel:'場面の作り方', studioTitle:'最初に、誰がそこにいて、何を失い得るかを決めます。', studioText:'その後に線、色、沈黙、動き、カメラ、インターフェース、技術が続きます。仕上げは意図の代わりにならないため、順序が重要です。',
    wikiLabel:'Arcanian Wiki', wikiTitle:'名前の一覧ではなく、文脈のある人物、家族、出来事。', wikiText:'項目は、作品と発表済みプロジェクトで確認された家族、所属、場所、物、作戦、結果をつなぎます。',
    entries:'項目', categories:'分類', people:'人物', latest:'最近の変更', allNews:'ニュースを開く', outroTitle:'Devaneiosは最初のエピソードでした。世界の限界ではありません。', outroText:'JoelとElisabethの物語、L.A.C.H.R.Y.M.A.の過去、ゲーム、またはすべてを結ぶ百科事典へ進んでください。', explore:'Two Eyes On Youを見る'
  }
};

const categoryNames = {
  pt:{ all:'Tudo', characters:'Personagens', organizations:'Organizações', places:'Lugares', concepts:'Conceitos', events:'Eventos', anomalies:'Anomalias', objects:'Objetos' },
  en:{ all:'All', characters:'Characters', organizations:'Organizations', places:'Places', concepts:'Concepts', events:'Events', anomalies:'Anomalies', objects:'Objects' },
  es:{ all:'Todo', characters:'Personajes', organizations:'Organizaciones', places:'Lugares', concepts:'Conceptos', events:'Eventos', anomalies:'Anomalías', objects:'Objetos' },
  it:{ all:'Tutto', characters:'Personaggi', organizations:'Organizzazioni', places:'Luoghi', concepts:'Concetti', events:'Eventi', anomalies:'Anomalie', objects:'Oggetti' },
  ja:{ all:'すべて', characters:'人物', organizations:'組織', places:'場所', concepts:'概念', events:'出来事', anomalies:'異常現象', objects:'物品' }
};

const bookAtlasCopy = {
  pt:{eyebrow:'Fonte canônica · primeira edição, 2026',title:'Mapa de Devaneios — Episódio I',text:'A enciclopédia agora acompanha o livro capítulo a capítulo. Cada núcleo conduz aos personagens, lugares, evidências e consequências realmente presentes na obra.',open:'Abrir núcleo',source:'Conteúdo estruturado a partir da edição publicada de Arcanian: Devaneios — Episódio I. Revelações continuam protegidas pelo controle de spoilers.'},
  en:{eyebrow:'Canonical source · first edition, 2026',title:'Devaneios — Episode I map',text:'The encyclopedia now follows the book chapter by chapter. Each narrative core leads to the characters, locations, evidence and consequences actually established by the work.',open:'Open cluster',source:'Content structured from the published edition of Arcanian: Devaneios — Episode I. Revelations remain protected by spoiler controls.'},
  es:{eyebrow:'Fuente canónica · primera edición, 2026',title:'Mapa de Devaneios — Episodio I',text:'La enciclopedia ahora sigue el libro capítulo por capítulo. Cada núcleo conduce a los personajes, lugares, pruebas y consecuencias realmente establecidos por la obra.',open:'Abrir núcleo',source:'Contenido estructurado a partir de la edición publicada de Arcanian: Devaneios — Episodio I. Las revelaciones siguen protegidas por el control de spoilers.'},
  it:{eyebrow:'Fonte canonica · prima edizione, 2026',title:'Mappa di Devaneios — Episodio I',text:'L’enciclopedia ora segue il libro capitolo per capitolo. Ogni nucleo conduce a personaggi, luoghi, prove e conseguenze realmente stabiliti dall’opera.',open:'Apri nucleo',source:'Contenuto strutturato dall’edizione pubblicata di Arcanian: Devaneios — Episodio I. Le rivelazioni restano protette dai controlli spoiler.'},
  ja:{eyebrow:'正史資料・初版 2026',title:'Devaneios エピソードI 章別マップ',text:'百科事典を本の章構成に沿って再編しました。各章から、作品で実際に確認された人物、場所、証拠、結果へ進めます。',open:'関連記録を開く',source:'『Arcanian: Devaneios — Episode I』2026年刊行版を基準に構成しています。重要な展開はネタバレ設定で保護されます。'}
};

function WikiPage() {
  const { d, lang } = useSite();
  const c = editorialCopy[lang] || editorialCopy.pt;
  const wi = wikiInterfaceExtra[lang] || wikiInterfaceExtra.pt;
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(allWikiEntries[0]?.slug);
  const [spoilers, setSpoilers] = useState(false);
  const localizedEntries = useMemo(() => allWikiEntries.map((entry) => localizedWikiEntry(entry, lang)), [lang]);
  const bookGuide = getBookGuide(lang);
  const bookCopy = bookAtlasCopy[lang] || bookAtlasCopy.pt;
  const filtered = useMemo(() => allWikiEntries
    .filter((entry) => {
      const item = localizedWikiEntry(entry, lang);
      const haystack = `${item.name} ${item.alias} ${item.tag} ${item.summary} ${(item.body || []).join(' ')}`.toLowerCase();
      return (category === 'all' || entry.category === category) && haystack.includes(query.toLowerCase());
    })
    .sort((a, b) => localizedWikiEntry(a, lang).name.localeCompare(localizedWikiEntry(b, lang).name, lang)), [category, query, lang]);
  useEffect(() => { if (filtered.length && !filtered.some((entry) => entry.slug === selected)) setSelected(filtered[0].slug); }, [filtered, selected]);
  const source = allWikiEntries.find((entry) => entry.slug === selected) || filtered[0] || allWikiEntries[0];
  const current = localizedWikiEntry(source, lang);
  const profile = getWikiProfile(current, localizedEntries, lang);
  const locked = current.spoiler > 0 && !spoilers;
  const characters = allWikiEntries.filter((entry) => entry.category === 'characters').length;
  const places = allWikiEntries.filter((entry) => entry.category === 'places').length;
  const events = allWikiEntries.filter((entry) => entry.category === 'events').length;

  return <main className="wiki-page wiki-page--studio">
    <PageHero eyebrow={d.wiki.eyebrow} title={c.encyclopedia} text={c.encyclopediaText} image="./media/welcome.webp" compact/>
    <section className="wiki-overview-bar">
      <div><strong>{allWikiEntries.length}</strong><span>{wi.published}</span></div>
      <div><strong>{characters}</strong><span>{categoryNames[lang]?.characters || 'Personagens'}</span></div>
      <div><strong>{places}</strong><span>{categoryNames[lang]?.places || 'Lugares'}</span></div>
      <div><strong>{events}</strong><span>{categoryNames[lang]?.events || 'Eventos'}</span></div>
      <p>{wi.evidence}</p>
    </section>

    <section className="wiki-book-atlas" data-reveal>
      <header><div><small>{bookCopy.eyebrow}</small><h2>{bookCopy.title}</h2></div><p>{bookCopy.text}</p></header>
      <div className="wiki-book-atlas__track">{bookGuide.map((chapter) => {
        const target = chapter.focus.find((slug) => allWikiEntries.some((entry) => entry.slug === slug));
        return <button type="button" key={chapter.number} disabled={!target} onClick={() => { setCategory('all'); setQuery(''); if (target) setSelected(target); setTimeout(() => document.querySelector('.wiki-atlas')?.scrollIntoView({ behavior:document.documentElement.dataset.motion === 'reduced' ? 'auto' : 'smooth', block:'start' }), 30); }}><span>{chapter.number}</span><div><strong>{chapter.title}</strong><p>{chapter.summary}</p><small>{bookCopy.open} · {chapter.focus.filter((slug)=>allWikiEntries.some((entry)=>entry.slug===slug)).length}</small></div><Icon name="arrow"/></button>;
      })}</div>
    </section>

    <section className="wiki-atlas wiki-atlas--expanded">
      <aside className="wiki-directory">
        <label className="wiki-search"><Icon name="search"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={d.common.search}/><span>{filtered.length}</span></label>
        <nav>{wikiCategories.map((item) => <button type="button" key={item.id} onClick={() => setCategory(item.id)} className={category === item.id ? 'is-active' : ''}><span>{categoryNames[lang]?.[item.id] || item.label}</span><em>{item.id === 'all' ? allWikiEntries.length : allWikiEntries.filter((entry) => entry.category === item.id).length}</em></button>)}</nav>
        <label className="spoiler-control"><input type="checkbox" checked={spoilers} onChange={(event) => setSpoilers(event.target.checked)}/><span>{d.wiki.spoilers}</span></label>
        <div className="wiki-directory__list">{filtered.map((entry) => { const item = localizedWikiEntry(entry, lang); return <button type="button" key={entry.slug} className={entry.slug === source.slug ? 'is-active' : ''} onClick={() => setSelected(entry.slug)}><small>{categoryNames[lang]?.[entry.category] || entry.tag}</small><strong>{item.name}</strong><span>{item.alias}</span></button>; })}</div>
      </aside>

      <article className="wiki-live wiki-live--expanded">
        <header><div><small>{categoryNames[lang]?.[current.category] || current.tag}</small><h1>{current.name}</h1><p>{current.alias}</p></div><span className="wiki-spoiler-mark">{wi.spoiler.toUpperCase()} {current.spoiler}</span></header>
        {locked ? <div className="wiki-entry-lock"><Icon name="lock" size={32}/><h2>{d.wiki.protected}</h2><p>{wi.locked}</p><button type="button" onClick={() => setSpoilers(true)}>{d.timeline.show}</button></div> : <>
          <p className="wiki-live__lead">{current.summary}</p>
          <section className="wiki-facts wiki-facts--ledger"><h2>{c.facts}</h2><dl>{profile.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
          <div className="wiki-live__chapters">{profile.sections.slice(0, 4).map((section, index) => <section className="wiki-live__section" key={section.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{section.title}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div></section>)}</div>
          <section className="wiki-relations wiki-relations--network"><header><h2>{c.relations}</h2><span>{profile.relationships.length}</span></header>{profile.relationships.map((relationship) => <SmartLink href={`#/wiki/${relationship.slug}`} key={`${relationship.slug}-${relationship.label}`}><div><small>{relationship.label}</small><strong>{relationship.name}</strong><p>{relationship.note}</p></div><Icon name="arrow"/></SmartLink>)}</section>
          <section className="wiki-live__appearances"><h2>{c.appearances}</h2>{profile.works.map((workName, index) => <div key={workName}><span>{String(index + 1).padStart(2, '0')}</span><strong>{workName}</strong></div>)}</section>
          <p className="wiki-source-note">{bookCopy.source}</p>
          <ButtonLink href={`#/wiki/${current.slug}`} tone="secondary">{c.openFull}</ButtonLink>
        </>}
      </article>
    </section>
  </main>;
}

function WikiEntryPage({ entry }) {
  const { d, lang } = useSite();
  const c = editorialCopy[lang] || editorialCopy.pt;
  const wi = wikiInterfaceExtra[lang] || wikiInterfaceExtra.pt;
  const [unlocked, setUnlocked] = useState(false);
  const localizedEntries = useMemo(() => allWikiEntries.map((source) => localizedWikiEntry(source, lang)), [lang]);
  if (!entry) return <NotFoundPage/>;
  const item = localizedWikiEntry(entry, lang);
  const profile = getWikiProfile(item, localizedEntries, lang);
  const bookCopy = bookAtlasCopy[lang] || bookAtlasCopy.pt;
  const locked = item.spoiler > 0 && !unlocked;
  return <main className="wiki-entry-page wiki-entry-page--rich">
    <header className="wiki-entry-header"><div><small>{categoryNames[lang]?.[item.category] || item.tag}</small><h1>{item.name}</h1><p>{item.alias}</p></div><SmartLink href="#/wiki" className="inline-link">{d.wiki.back}<Icon name="arrow"/></SmartLink></header>
    {locked ? <div className="wiki-entry-lock"><Icon name="lock" size={32}/><h2>{d.wiki.protected}</h2><p>{wi.locked}</p><button type="button" onClick={() => setUnlocked(true)}>{d.timeline.show}</button></div> : <div className="wiki-rich-layout">
      <aside className="wiki-rich-index"><small>{c.facts}</small>{profile.sections.map((section, index) => <a href={`#wiki-section-${index}`} key={section.title}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}</aside>
      <article className="wiki-rich-article"><p className="wiki-entry-lead">{item.summary}</p><section className="wiki-facts"><h2>{c.facts}</h2><dl>{profile.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>{profile.sections.map((section, index) => <section id={`wiki-section-${index}`} key={section.title} className="wiki-rich-section"><small>{String(index + 1).padStart(2, '0')}</small><h2>{section.title}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</section>)}<p className="wiki-source-note">{bookCopy.source}</p></article>
      <aside className="wiki-rich-relations"><small>{c.relations}</small>{profile.relationships.map((relationship) => <SmartLink href={`#/wiki/${relationship.slug}`} key={`${relationship.slug}-${relationship.label}`}><span>{relationship.label}</span><strong>{relationship.name}</strong><p>{relationship.note}</p></SmartLink>)}</aside>
    </div>}
  </main>;
}

function TimelinePage() {
  const { d, lang } = useSite();
  const [spoilers, setSpoilers] = useState(false);
  const translated = timelineTranslations[lang];
  const items = timelineEvents.map((event, index) => {
    const local = translated?.[index];
    return local ? { ...event, date:local[0], title:local[1], text:local[2] } : event;
  });
  return <main><PageHero eyebrow={d.timeline.eyebrow} title={d.timeline.title} text={d.timeline.text} image="./media/tormenta.webp"><button type="button" className="button-link button-link--primary" onClick={() => setSpoilers(!spoilers)}><span>{spoilers ? d.timeline.hide : d.timeline.show}</span><Icon name={spoilers ? 'eye' : 'lock'}/></button></PageHero><section className="section-block timeline-list">{items.map((event, index) => <article key={`${event.date}-${event.title}`} data-reveal className={event.spoiler && !spoilers ? 'is-locked' : ''}><span>{String(index + 1).padStart(2, '0')}</span><time>{event.date}</time><div><h2>{event.spoiler && !spoilers ? d.timeline.locked : event.title}</h2><p>{event.spoiler && !spoilers ? d.timeline.lockedText : event.text}</p></div></article>)}</section></main>;
}

function NewsPage() {
  const { d, lang } = useSite();
  const items = localizedNews(news, lang);
  return <main><PageHero eyebrow={d.news.eyebrow} title={d.news.title} text={d.news.text} image="./media/welcome.webp"/><section className="section-block news-page-grid">{items.map((item, index) => <article key={item.title} data-reveal><div><img src={item.image} alt=""/><span>{String(index + 1).padStart(2, '0')}</span></div><small>{item.category} · {item.date}</small><h2>{item.title}</h2><p>{item.text}</p><ButtonLink href={item.href} tone="outline">{d.common.readMore}</ButtonLink></article>)}</section></main>;
}

function MediaPage() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const gallery = [
    ['./media/banner.webp','Two Eyes On You'],
    ['./media/devaneios.webp','Devaneios'],
    ['./media/menos-um.webp','Menos Um'],
    ['./media/ultima-danca.webp','A Última Dança'],
    ['./media/tormenta.webp','Tormenta'],
    ['./media/game.webp','Arcanian — Jogo']
  ];
  return <main className="neo-media-page">
    <section className="neo-media-hero"><div data-reveal><small>{c.media.eyebrow}</small><h1>{c.media.title}</h1></div><div className="neo-media-hero__orb" aria-hidden="true"><i/><i/><span>REC</span></div></section>
    <section className="neo-media-film"><header data-reveal><small>{c.media.film}</small><h2>Devaneios / Episódio I</h2></header><video autoPlay loop muted playsInline preload="auto" poster="./media/devaneios.webp" data-reveal aria-label={c.media.film}><source src="./media/arcanian.mp4" type="video/mp4"/></video></section>
    <section className="neo-media-platform neo-media-platform--dual" data-reveal><header><small>{c.media.platform}</small><strong>{c.media.platforms}</strong></header><div className="media-platform-marks"><span><SteamMark size={48}/><b>Steam</b></span><span><XboxMark size={48}/><b>Xbox</b></span></div></section>
    <section className="neo-media-gallery"><header data-reveal><small>{c.media.gallery}</small><h2>{c.media.still}</h2></header><div>{gallery.map(([image,label],index)=><figure key={image} data-reveal><img src={image} alt="" loading="lazy"/><figcaption><span>{String(index+1).padStart(2,'0')}</span>{label}</figcaption></figure>)}</div></section>
  </main>;
}

const studioContent = {
  pt:{
    areas:[
      ['Devaneios','O Episódio I publicado apresenta Ikarius, Aphride, Joel, Merius, o C.I.A.N.E. e a investigação que liga a morte de Mountevoir ao Grande Dia.'],
      ['Menos Um','A obra volta para o casamento de Joel e Elisabeth: o apartamento, os livros, a pesquisa temporal, a gravidez e a promessa que antecede a ruptura.'],
      ['Tormenta','A HQ será ambientada meses antes do Grande Dia e acompanhará as lendas de Arcanian, Chinama e o Projeto L.A.C.H.R.Y.M.A.'],
      ['Jogo','Uma aventura narrativa de ação com Ikarius e Joel, campanha episódica, exploração lateral e experiência planejada para uma ou duas pessoas.']
    ],
    process:[
      ['01','Quem está na cena','Antes de desenhar o ambiente, definimos quais personagens estão presentes, o que sabem e o que tentam esconder.'],
      ['02','Qual é o ritmo','Uma conversa de Joel e Elisabeth não pode respirar como uma investigação de Ikarius nem como uma batalha em Chinama.'],
      ['03','O que cada formato acrescenta','A prosa entra no pensamento; a HQ controla o intervalo entre quadros; o jogo entrega parte da decisão ao público.'],
      ['04','O que precisa ser refeito','Cortamos explicação, alteramos composição e reescrevemos cenas até que personagem, imagem e ação pareçam pertencer à mesma obra.']
    ]
  },
  en:{
    areas:[
      ['Devaneios','The published Episode I introduces Ikarius, Aphride, Joel, Merius, C.I.A.N.E. and the investigation connecting Mountevoir’s death to the Great Day.'],
      ['Menos Um','The work returns to Joel and Elisabeth’s marriage: their apartment, books, temporal research, pregnancy and the promise before the rupture.'],
      ['Tormenta','The comic is set months before the Great Day and follows Arcanian’s legends, Chinama and Project L.A.C.H.R.Y.M.A.'],
      ['Game','A narrative action adventure with Ikarius and Joel, an episodic campaign, side exploration and a one- or two-player experience.']
    ],
    process:[
      ['01','Who is in the scene','Before designing the environment, we define who is present, what they know and what they are trying to hide.'],
      ['02','What rhythm it needs','A Joel and Elisabeth conversation cannot breathe like an Ikarius investigation or a battle in Chinama.'],
      ['03','What each form adds','Prose enters thought; comics control the interval between panels; games hand part of the decision to the audience.'],
      ['04','What must be rebuilt','We cut explanation, alter composition and rewrite until character, image and action belong to the same work.']
    ]
  },
  es:{
    areas:[
      ['Devaneios','El Episodio I publicado presenta a Ikarius, Aphride, Joel, Merius, el C.I.A.N.E. y la investigación que conecta la muerte de Mountevoir con el Gran Día.'],
      ['Menos Um','La obra vuelve al matrimonio de Joel y Elisabeth: el apartamento, los libros, la investigación temporal, el embarazo y la promesa anterior a la ruptura.'],
      ['Tormenta','El cómic sucede meses antes del Gran Día y acompaña las leyendas de Arcanian, Chinama y el Proyecto L.A.C.H.R.Y.M.A.'],
      ['Juego','Una aventura narrativa de acción con Ikarius y Joel, campaña episódica, exploración lateral y experiencia para una o dos personas.']
    ],
    process:[
      ['01','Quién está en la escena','Antes del escenario definimos quién está presente, qué sabe y qué intenta ocultar.'],
      ['02','Qué ritmo necesita','Una conversación de Joel y Elisabeth no respira como una investigación de Ikarius ni como una batalla en Chinama.'],
      ['03','Qué añade cada formato','La prosa entra en el pensamiento; el cómic controla el intervalo; el juego entrega parte de la decisión al público.'],
      ['04','Qué debe rehacerse','Cortamos explicación y reescribimos hasta que personaje, imagen y acción pertenezcan a la misma obra.']
    ]
  },
  it:{
    areas:[
      ['Devaneios','L’Episodio I pubblicato presenta Ikarius, Aphride, Joel, Merius, il C.I.A.N.E. e l’indagine che collega la morte di Mountevoir al Grande Giorno.'],
      ['Menos Um','L’opera torna al matrimonio di Joel ed Elisabeth: appartamento, libri, ricerca temporale, gravidanza e promessa prima della frattura.'],
      ['Tormenta','Il fumetto è ambientato mesi prima del Grande Giorno e segue le leggende di Arcanian, Chinama e il Progetto L.A.C.H.R.Y.M.A.'],
      ['Gioco','Un’avventura narrativa d’azione con Ikarius e Joel, campagna episodica, esplorazione laterale e gioco per una o due persone.']
    ],
    process:[
      ['01','Chi è nella scena','Prima dell’ambiente definiamo chi è presente, cosa sa e cosa cerca di nascondere.'],
      ['02','Quale ritmo serve','Una conversazione tra Joel ed Elisabeth non respira come un’indagine di Ikarius o una battaglia a Chinama.'],
      ['03','Cosa aggiunge ogni forma','La prosa entra nel pensiero; il fumetto controlla l’intervallo; il gioco affida parte della decisione al pubblico.'],
      ['04','Cosa va rifatto','Tagliamo spiegazioni e riscriviamo finché personaggio, immagine e azione appartengono alla stessa opera.']
    ]
  },
  ja:{
    areas:[
      ['Devaneios','刊行済みのエピソードIはIkarius、Aphride、Joel、Merius、C.I.A.N.E.、そしてMountevoirの死と「大いなる日」を結ぶ捜査を描きます。'],
      ['Menos Um','JoelとElisabethの結婚生活、部屋、本、時間研究、妊娠、そして亀裂の前の約束へ戻ります。'],
      ['Tormenta','「大いなる日」の数か月前を舞台に、Arcanianの伝説、Chinama、L.A.C.H.R.Y.M.A.計画を描くコミックです。'],
      ['ゲーム','IkariusとJoelを中心に、エピソード制、横方向の探索、一人または二人で遊ぶナラティブアクションです。']
    ],
    process:[
      ['01','誰が場面にいるか','背景より先に、誰がいて、何を知り、何を隠そうとしているかを決めます。'],
      ['02','どんなリズムが必要か','JoelとElisabethの会話は、Ikariusの捜査やChinamaの戦闘と同じ呼吸にはなりません。'],
      ['03','各形式が加えるもの','文章は思考へ入り、コミックはコマの間を制御し、ゲームは判断の一部を観客へ渡します。'],
      ['04','何を作り直すか','説明を削り、人物、映像、行動が同じ作品に属するまで構成を書き直します。']
    ]
  }
};

function AboutPage() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  return <main className="neo-about-page">
    <section className="neo-about-hero"><div data-reveal><small>{c.about.eyebrow}</small><h1>{c.about.title}</h1><p>{c.about.text}</p><ButtonLink href="#/contact">{c.contact.mail}</ButtonLink></div><InteractiveEye3D compact/></section>
    <section className="neo-about-pillars">{c.about.pillars.map(([title,text],index)=><article key={title} data-reveal><span>0{index+1}</span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="neo-about-strip"><span>BOOKS</span><i>×</i><span>COMICS</span><i>×</i><span>GAMES</span></section>
    <section className="neo-about-projects">{works.map((work)=><SmartLink href={`#/obra/${work.slug}`} key={work.slug} data-reveal><img src={work.image} alt="" loading="lazy"/><ProjectLogo work={work} compact/><Icon name="arrow"/></SmartLink>)}</section>
  </main>;
}

function DocumentationPage() {
  const { d, lang } = useSite();
  return <main className="neo-docs-page">
    <section className="neo-simple-hero"><small>{d.docs.eyebrow}</small><h1>{d.docs.title}</h1><p>{d.docs.text}</p></section>
    <section className="neo-docs-grid">{docs.map((doc,index)=>{const local=docsTranslations[lang]?.[doc.slug];return <SmartLink href={`#/documentation/${doc.slug}`} key={doc.slug} data-reveal><span>{String(index+1).padStart(2,'0')}</span><h2>{local?.[0]||doc.title}</h2><p>{local?.[1]||doc.description}</p><Icon name="arrow"/></SmartLink>})}</section>
  </main>;
}

function LegalDocumentPage({ legalDoc }) {
  const { d, lang } = useSite();
  if (!legalDoc) return <NotFoundPage/>;
  const local = localizedLegalDocument(legalDoc, lang);
  return <main className="legal-page"><header className="legal-header"><small>{d.docs.updated} {local.updated}</small><h1>{local.title}</h1><p>{local.subtitle}</p></header><section className="legal-layout"><aside><small>{d.docs.summary}</small>{local.sections.map((section, index) => <button type="button" key={section.title} onClick={() => document.querySelector(`#legal-${index}`)?.scrollIntoView({ behavior: 'smooth' })}>{section.title}</button>)}</aside><article>{local.sections.map((section, index) => <section id={`legal-${index}`} key={section.title}><h2>{section.title}</h2>{section.items.map((item, itemIndex) => item.type === 'list' ? <ul key={itemIndex}>{item.items.map((value) => <li key={value}>{value}</li>)}</ul> : <p key={itemIndex}>{item.text}</p>)}</section>)}</article></section></main>;
}

function ContactPage() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  return <main className="neo-contact-page">
    <section className="neo-contact-main"><div data-reveal><small>{c.contact.eyebrow}</small><h1>{c.contact.title}</h1><p>{c.contact.text}</p><ButtonLink href="mailto:contato@twoeyesonyou.com">{c.contact.mail}</ButtonLink></div><a href="mailto:contato@twoeyesonyou.com" className="neo-contact-mail">contato<br/>@twoeyesonyou.com</a></section>
    <section className="neo-contact-socials">{socials.map(([label,href],index)=><SmartLink href={href} key={label} data-reveal><span>0{index+1}</span><strong>{label}</strong><Icon name="external"/></SmartLink>)}</section>
  </main>;
}

function PurchasePage() {
  const { lang } = useSite();
  const c = redesignCopy[lang] || redesignCopy.pt;
  const devaneios = works.find((work)=>work.slug==='devaneios');
  return <main className="neo-purchase-page">
    <section className="neo-purchase-hero"><div className="neo-purchase-hero__visual"><img src="./media/devaneios.webp" alt="Arcanian: Devaneios"/><div className="neo-purchase-cover"><img src="./media/devaneios.webp" alt=""/></div></div><div className="neo-purchase-hero__copy" data-reveal><small>{c.purchase.eyebrow}</small><ProjectLogo work={devaneios} className="project-logo--purchase-new" eager/><h1>{c.purchase.title}</h1><p>{c.purchase.text}</p></div></section>
    <section className="neo-store-grid">
      <SmartLink href="https://www.amazon.com.br/dp/B0HD5MV8ZG" className="neo-store-card neo-store-card--amazon" data-reveal><span>01</span><div><small>{c.purchase.amazonMeta}</small><h2>Amazon</h2><strong>{c.purchase.amazon}</strong></div><Icon name="external"/></SmartLink>
      <SmartLink href="https://loja.uiclap.com/titulo/ua184114" className="neo-store-card neo-store-card--uiclap" data-reveal><span>02</span><div><small>{c.purchase.uiclapMeta}</small><h2>Uiclap</h2><strong>{c.purchase.uiclap}</strong></div><Icon name="external"/></SmartLink>
    </section>
    <p className="neo-purchase-note">{c.purchase.note}</p>
  </main>;
}

function NotFoundPage() {
  const { d } = useSite();
  return <main className="not-found"><span>404</span><h1>{d.notFound.title}</h1><ButtonLink href="#/" tone="secondary">{d.notFound.button}</ButtonLink></main>;
}

function Footer() {
  const { d } = useSite();
  return <footer className="site-footer"><div><span className="brand-logo-surface footer-logo"><img src="./media/logo.webp" alt=""/></span><div><strong>Two Eyes On You</strong><small>{d.footer.location}</small></div></div><nav><SmartLink href="#/arcanian">{d.nav.projects}</SmartLink><SmartLink href="#/news">{d.nav.news}</SmartLink><SmartLink href="#/wiki">{d.nav.wiki}</SmartLink><SmartLink href="#/about">{d.nav.studio}</SmartLink><SmartLink href="#/documentation">{d.nav.documents}</SmartLink><SmartLink href="#/contact">{d.nav.contact}</SmartLink></nav><span>{d.footer.rights}</span></footer>;
}

const defaultA11y = { highContrast:false, reduceMotion:false, underlineLinks:false, enhancedFocus:true, customCursor:true };

function App() {
  const route = useRoute();
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('teoy-language');
    return languages.some((item) => item.id === saved) ? saved : 'pt';
  });
const [theme, setThemeState] = useState(() => {
  const saved = localStorage.getItem('teoy-theme');
  const version = localStorage.getItem('teoy-theme-version');

  if (version !== '16') {
    localStorage.setItem('teoy-theme-version', '16');
    localStorage.setItem('teoy-theme', 'night');
    return 'night';
  }

  return themes.some((item) => item.id === saved) ? saved : 'night';
});
  const [font, setFontState] = useState(() => ['studio','editorial','humanist','accessible'].includes(localStorage.getItem('teoy-font')) ? localStorage.getItem('teoy-font') : 'studio');
  const [textSize, setTextSizeState] = useState(() => ['compact','standard','large','xlarge'].includes(localStorage.getItem('teoy-text-size')) ? localStorage.getItem('teoy-text-size') : 'standard');
  const [a11y, setA11yState] = useState(() => {
    try { return { ...defaultA11y, ...JSON.parse(localStorage.getItem('teoy-a11y') || '{}') }; }
    catch { return defaultA11y; }
  });
  const d = getDictionary(lang);

  const setLang = (value) => {
    if (!languages.some((item) => item.id === value)) return;
    localStorage.setItem('teoy-language', value);
    const option = languages.find((item) => item.id === value);
    document.documentElement.lang = option?.html || 'pt-BR';
    document.documentElement.dataset.language = value;
    setLangState(value);
  };

  const setTheme = (value) => {
    if (!themes.some((item) => item.id === value)) return;
    localStorage.setItem('teoy-theme', value);
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = ['studio', 'light', 'sand'].includes(value) ? 'light' : 'dark';
    setThemeState(value);
  };

  const setFont = (value) => {
    if (!fontOptions.some((item) => item.id === value)) return;
    localStorage.setItem('teoy-font', value);
    setFontState(value);
  };

  const setTextSize = (value) => {
    if (!textSizeOptions.some((item) => item.id === value)) return;
    localStorage.setItem('teoy-text-size', value);
    setTextSizeState(value);
  };

  const setA11y = (value) => {
    const next = { ...defaultA11y, ...value };
    localStorage.setItem('teoy-a11y', JSON.stringify(next));
    setA11yState(next);
  };

  const resetPreferences = () => {
    setFont('studio');
    setTextSize('standard');
    setA11y(defaultA11y);
  };

  useReveal(`${route}|${lang}|${theme}|${font}|${textSize}|${JSON.stringify(a11y)}`);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = ['studio', 'light', 'sand'].includes(theme) ? 'light' : 'dark';
  }, [theme]);

  useEffect(() => {
    const option = languages.find((item) => item.id === lang);
    document.documentElement.lang = option?.html || 'pt-BR';
    document.documentElement.dataset.language = lang;
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.font = font;
    root.dataset.textSize = textSize;
    root.dataset.contrast = a11y.highContrast ? 'high' : 'normal';
    root.dataset.motion = a11y.reduceMotion ? 'reduced' : 'full';
    root.dataset.links = a11y.underlineLinks ? 'underlined' : 'standard';
    root.dataset.focus = a11y.enhancedFocus ? 'enhanced' : 'standard';
    root.dataset.cursor = a11y.customCursor ? 'authorial' : 'system';
  }, [font, textSize, a11y]);

  useEffect(() => {
    const handler = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.title = `${routeName(route, d, lang)} — Two Eyes On You`;
  }, [route, d, lang]);

  const renderRoute = () => {
    if (route === '/') return <HomePage/>;
    if (route === '/arcanian') return <ProjectsPage/>;
    if (route === '/wiki') return <WikiPage/>;
    if (route.startsWith('/wiki/')) {
      const entry = allWikiEntries.find((item) => item.slug === route.split('/')[2]);
      return entry ? <WikiEntryPage entry={entry}/> : <WikiPage/>;
    }
    if (route === '/timeline') return <TimelinePage/>;
    if (route === '/news') return <NewsPage/>;
    if (route === '/media') return <MediaPage/>;
    if (route === '/about') return <AboutPage/>;
    if (route === '/documentation') return <DocumentationPage/>;
    if (route.startsWith('/documentation/')) {
      const legalDoc = legalDocuments.find((doc) => doc.slug === route.split('/')[2]);
      return legalDoc ? <LegalDocumentPage legalDoc={legalDoc}/> : <DocumentationPage/>;
    }
    if (route === '/contact') return <ContactPage/>;
    if (route === '/purchase') return <PurchasePage/>;
    if (route.startsWith('/obra/')) {
      const work = works.find((item) => item.slug === route.split('/')[2]);
      if (!work) return <ProjectsPage/>;
      return work.slug === 'arcanian' ? <GamePage work={work}/> : <WorkPage work={work}/>;
    }
    return <HomePage/>;
  };

  const context = useMemo(() => ({ d, lang, setLang, theme, setTheme, font, setFont, textSize, setTextSize, a11y, setA11y, resetPreferences }), [d, lang, theme, font, textSize, a11y]);
  const skipLabel = {pt:'Ir para o conteúdo',en:'Skip to content',es:'Ir al contenido',it:'Vai al contenuto',ja:'本文へ移動'}[lang];
  return <SiteContext.Provider value={context}>
    <a className="skip-link" href="#main-content">{skipLabel}</a>
    <div className="app-shell">
      <SideRail route={route} onSearch={() => setSearchOpen(true)} onSettings={() => setSettingsOpen(true)}/>
      <div className="app-main">
        <TopBar route={route} onSearch={() => setSearchOpen(true)} onSettings={() => setSettingsOpen(true)}/>
        <div id="main-content" tabIndex="-1" key={route} className="route-stage">{renderRoute()}</div>
        <Footer/>
      </div>
      <CommandPalette open={searchOpen} close={() => setSearchOpen(false)}/>
      <SettingsPanel open={settingsOpen} close={() => setSettingsOpen(false)}/>
    </div>
  </SiteContext.Provider>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
