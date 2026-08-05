import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { docs, news, works } from './data.js';
import { legalDocuments } from './legal.js';
import { timelineEvents, wikiCategories, wikiEntries } from './wiki.js';
import { getWikiProfile } from './wikiDetails.js';
import { wikiSupplement } from './wikiSupplement.js';
import {
  getDictionary,
  languages,
  themes,
  localizedNews,
  localizedWikiEntry,
  localizedWork
} from './i18n.js';
import './styles.css';

const allWikiEntries = [...wikiEntries, ...wikiSupplement];

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
  if (entry) return entry.name;
  if (legal) return legal.title;
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
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
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

function SideRail({ route, onSearch, onSettings }) {
  const { d, lang } = useSite();
  const currentWork = works.find((work) => route === `/obra/${work.slug}`);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => setMobileOpen(false), [route]);
  return <>
    <aside className="site-rail">
      <SmartLink href="#/" className="rail-logo" aria-label="Two Eyes On You"><img src="./media/logo.webp" alt=""/></SmartLink>
      <nav className="rail-group" aria-label="Principal">{navPrimary.map((item) => <RailButton key={item[0]} item={item} route={route}/>)}</nav>
      <div className="rail-divider"/>
      <nav className="rail-projects" aria-label={d.nav.projects}>
        {works.map((work) => { const item = localizedWork(work, lang); return <SmartLink href={`#/obra/${work.slug}`} key={work.slug} className={`rail-project ${route === `/obra/${work.slug}` ? 'is-active' : ''}`} data-tip={item.displayTitle}><img src={work.image} alt=""/></SmartLink>; })}
      </nav>
      <div className="rail-divider"/>
      <nav className="rail-group rail-group--small">{navSecondary.map((item) => <RailButton key={item[0]} item={item} route={route}/>)}</nav>
      <div className="rail-spacer"/>
      <button className="rail-action" type="button" aria-label={d.common.search} data-tip={d.common.search} onClick={onSearch}><Icon name="search"/></button>
      <button className="rail-action" type="button" aria-label={d.settings.open} data-tip={`${d.settings.open} · ${lang.toUpperCase()}`} onClick={onSettings}><Icon name="settings"/></button>
      <SmartLink href="#/purchase" className={`rail-buy ${route === '/purchase' ? 'is-active' : ''}`} data-tip={d.nav.buy}><Icon name="book"/></SmartLink>
    </aside>

    <header className="mobile-bar">
      <SmartLink href="#/" className="mobile-logo"><img src="./media/logo.webp" alt=""/></SmartLink>
      {currentWork ? <ProjectLogo work={currentWork} compact className="project-logo--route"/> : <strong>{routeName(route, d, lang)}</strong>}
      <div>
        <button type="button" onClick={onSettings} aria-label={d.settings.open}><Icon name="settings"/></button>
        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={d.nav.home}><Icon name={mobileOpen ? 'close' : 'menu'}/></button>
      </div>
    </header>
    <div className={`mobile-nav ${mobileOpen ? 'is-open' : ''}`}>
      <div className="mobile-nav__head"><img src="./media/logo.webp" alt=""/><button type="button" onClick={() => setMobileOpen(false)}><Icon name="close"/></button></div>
      {[...navPrimary, ...navSecondary].map(([key, href, icon]) => <SmartLink key={key} href={href}><Icon name={icon}/><strong>{d.nav[key]}</strong><Icon name="arrow"/></SmartLink>)}
      <div className="mobile-nav__projects">{works.map((work) => { const item = localizedWork(work, lang); return <SmartLink key={work.slug} href={`#/obra/${work.slug}`}><img src={work.image} alt=""/><ProjectLogo work={work} compact/></SmartLink>; })}</div>
      <SmartLink href="#/purchase" className="mobile-buy"><Icon name="book"/><strong>{d.nav.buy}</strong></SmartLink>
    </div>
  </>;
}

function TopBar({ route, onSearch, onSettings }) {
  const { d, lang, theme } = useSite();
  const language = languages.find((item) => item.id === lang);
  const currentWork = works.find((work) => route === `/obra/${work.slug}`);
  return <header className="top-bar">
    <div className="top-route"><span>Two Eyes On You</span>{currentWork ? <ProjectLogo work={currentWork} compact className="project-logo--route"/> : <strong>{routeName(route, d, lang)}</strong>}</div>
    <nav className="top-links"><SmartLink href="#/arcanian">{d.nav.projects}</SmartLink><SmartLink href="#/news">{d.nav.news}</SmartLink><SmartLink href="#/about">{d.nav.studio}</SmartLink></nav>
    <div className="top-actions">
      <button type="button" onClick={onSearch}><Icon name="search" size={18}/><span>{d.common.search}</span><kbd>Ctrl K</kbd></button>
      <button type="button" onClick={onSettings} className="preference-button"><span className={`theme-dot theme-dot--${theme}`}/><strong>{language.short}</strong><Icon name="settings" size={18}/></button>
      <SmartLink href="#/purchase" className="top-buy">{d.nav.buy}<Icon name="arrow" size={17}/></SmartLink>
    </div>
  </header>;
}

function SettingsPanel({ open, close }) {
  const { d, lang, setLang, theme, setTheme } = useSite();
  if (!open) return null;
  return <div className="modal-layer" onMouseDown={close}>
    <aside className="settings-panel" onMouseDown={(event) => event.stopPropagation()}>
      <header><div><small>Two Eyes On You</small><h2>{d.settings.title}</h2><p>{d.settings.description}</p></div><button type="button" onClick={close} aria-label={d.common.close}><Icon name="close"/></button></header>
      <section><div className="settings-label"><Icon name="palette"/><span>{d.settings.theme}</span></div><div className="theme-grid">{themes.map((item) => <button type="button" key={item.id} onClick={() => setTheme(item.id)} className={theme === item.id ? 'is-active' : ''}><span className={`theme-preview theme-preview--${item.id}`}><i/><b/></span><strong>{d.settings[item.key]}</strong>{theme === item.id && <Icon name="check" size={16}/>}</button>)}</div></section>
      <section><div className="settings-label"><Icon name="globe"/><span>{d.settings.language}</span></div><div className="language-list">{languages.map((item) => <button type="button" key={item.id} onClick={() => setLang(item.id)} className={lang === item.id ? 'is-active' : ''}><span>{item.short}</span><strong>{item.label}</strong>{lang === item.id && <Icon name="check" size={16}/>}</button>)}</div></section>
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
  devaneios: ['Fato', 'Inferência', 'Teste'],
  'menos-um': ['Joel', '×', 'Elisabeth'],
  'a-ultima-danca': ['Vírus', 'Arnins', 'Última chance'],
  tormenta: ['Lendas', 'L.A.C.H.R.Y.M.A.', 'Grande Dia'],
  arcanian: ['História', 'Mundo', 'Jogar']
};

function ProjectSignature({ slug }) {
  const items = projectSignatures[slug] || [];
  return <div className={`joy-project__signature joy-project__signature--${slug}`} aria-hidden="true">
    {items.map((item, index) => <span key={`${slug}-${item}`}><i>{String(index + 1).padStart(2, '0')}</i>{item}</span>)}
  </div>;
}

function HomePage() {
  const { d, lang } = useSite();
  const copy = studioJoyCopy[lang] || studioJoyCopy.pt;
  const [active, setActive] = useState(0);
  const work = works[active];
  const item = localizedWork(work, lang);
  const localizedItems = useMemo(() => localizedNews(news, lang), [lang]);
  const characterCount = allWikiEntries.filter((entry) => entry.category === 'characters').length;

  return <main className="joy-home" style={{ '--active-color': work.accent }}>
    <section className="joy-hero">
      <div className="joy-hero__shapes" aria-hidden="true"><i/><i/><i/><i/><i/></div>
      <div className="joy-hero__copy" data-reveal>
        <div className="joy-kicker"><span/><small>{copy.hello}</small></div>
        <h1><span>{copy.heroA}</span><span>{copy.heroB}</span></h1>
        <p>{copy.heroText}</p>
        <div className="hero-actions"><ButtonLink href="#/arcanian">{d.home.primary}</ButtonLink><ButtonLink href="#/about" tone="secondary">{copy.explore}</ButtonLink></div>
        <div className="joy-badge"><Icon name="eye" size={18}/><span>{copy.badge}</span></div>
      </div>

      <div className="joy-hero__stage" data-reveal>
        <div className="joy-hero__frame" key={work.slug}>
          <img src={work.image} alt=""/>
          <span className="joy-hero__sticker">{String(active + 1).padStart(2, '0')} / {String(works.length).padStart(2, '0')}</span>
          <span className="joy-hero__spark joy-hero__spark--one">✦</span>
          <span className="joy-hero__spark joy-hero__spark--two">●</span>
        </div>
        <div className="joy-hero__feature">
          <small>{copy.featured} · {item.eyebrow}</small>
          <ProjectLogo work={work} className="project-logo--feature" eager/>
          <p>{item.summary}</p>
          <SmartLink href={`#/obra/${work.slug}`} className="joy-round-link" aria-label={copy.jump}><Icon name="arrow" size={24}/></SmartLink>
        </div>
      </div>

    </section>

    <div className="joy-ribbon" aria-label={copy.ribbon}><div><span>{copy.ribbon}</span><span aria-hidden="true">{copy.ribbon}</span></div></div>

    <section className="joy-intro">
      <div className="joy-intro__copy" data-reveal><small>{copy.introLabel}</small><h2>{copy.introTitle}</h2><p>{copy.introText}</p><ButtonLink href="#/about" tone="outline">{d.home.secondary}</ButtonLink></div>
      <div className="joy-intro__collage" data-reveal>
        <figure><img src="./media/banner.webp" alt=""/></figure>
        <figure><img src="./media/welcome.webp" alt=""/></figure>
        <span>TOY</span><i aria-hidden="true">✷</i>
      </div>
    </section>

    <section className="joy-projects">
      <header data-reveal><div><small>{copy.projectsLabel}</small><h2>{copy.projectsTitle}</h2></div><p>{copy.projectsText}</p></header>
      <div className="joy-projects__list">
        {works.map((candidate, index) => {
          const local = localizedWork(candidate, lang);
          return <SmartLink href={`#/obra/${candidate.slug}`} key={candidate.slug} className={`joy-project joy-project--${candidate.slug}`} style={{ '--project-color': candidate.accent }} data-reveal>
            <span className="joy-project__number">{String(index + 1).padStart(2, '0')}</span>
            <div className="joy-project__image"><img src={candidate.image} alt=""/><i/></div>
            <div className="joy-project__copy"><small>{local.eyebrow}</small><ProjectLogo work={candidate} className="project-logo--list"/><p>{local.summary}</p><ProjectSignature slug={candidate.slug}/><strong>{d.common.explore}<Icon name="arrow" size={18}/></strong></div>
          </SmartLink>;
        })}
      </div>
    </section>

    <section className="joy-studio">
      <div className="joy-studio__visual" data-reveal><div><img src="./media/game.webp" alt=""/></div><div><img src="./media/devaneios.webp" alt=""/></div><span>ARCANIAN · EPISÓDIO I</span></div>
      <div className="joy-studio__copy"><header data-reveal><small>{copy.studioLabel}</small><h2>{copy.studioTitle}</h2><p>{copy.studioText}</p></header><ol>{(studioHomeCopy[lang] || studioHomeCopy.pt).steps.map(([number, title, text]) => <li key={number} data-reveal><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div>
    </section>

    <section className="joy-wiki">
      <div className="joy-wiki__number" data-reveal><strong>{allWikiEntries.length}</strong><span>{copy.entries}</span><i aria-hidden="true">+</i></div>
      <div className="joy-wiki__copy" data-reveal><small>{copy.wikiLabel}</small><h2>{copy.wikiTitle}</h2><p>{copy.wikiText}</p><div className="joy-wiki__stats"><span><strong>{wikiCategories.length - 1}</strong>{copy.categories}</span><span><strong>{characterCount}</strong>{copy.people}</span></div><ButtonLink href="#/wiki">{(studioHomeCopy[lang] || studioHomeCopy.pt).openWiki}</ButtonLink></div>
      <div className="joy-wiki__orbit" aria-hidden="true"><i/><i/><i/></div>
    </section>

    <section className="joy-news">
      <header data-reveal><div><small>{copy.latest}</small><h2>{d.nav.news}</h2></div><ButtonLink href="#/news" tone="outline">{copy.allNews}</ButtonLink></header>
      <div className="joy-news__layout">
        {localizedItems[0] && <SmartLink href={localizedItems[0].href} className="joy-news__lead" data-reveal><img src={localizedItems[0].image} alt=""/><div><span>{localizedItems[0].date}</span><small>{localizedItems[0].category}</small><h3>{localizedItems[0].title}</h3><p>{localizedItems[0].text}</p><Icon name="arrow"/></div></SmartLink>}
        <div className="joy-news__more">{localizedItems.slice(1).map((newsItem, index) => <SmartLink href={newsItem.href} key={`${newsItem.title}-${index}`} data-reveal><span>{newsItem.date}</span><div><small>{newsItem.category}</small><h3>{newsItem.title}</h3></div><Icon name="arrow"/></SmartLink>)}</div>
      </div>
    </section>

    <section className="joy-outro">
      <div className="joy-outro__shape" aria-hidden="true"><span>2</span><Icon name="eye" size={118}/></div>
      <div data-reveal><h2>{copy.outroTitle}</h2><p>{copy.outroText}</p><div className="hero-actions"><ButtonLink href="#/arcanian">{d.home.primary}</ButtonLink><ButtonLink href="#/wiki" tone="secondary">{d.nav.wiki}</ButtonLink></div></div>
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
  const { d, lang } = useSite();
  const c = editorialCopy[lang] || editorialCopy.pt;
  return <main>
    <PageHero eyebrow={d.projects.eyebrow} title={d.projects.title} text={d.projects.text} image="./media/banner.webp"/>
    <section className="editorial-intro" data-reveal><small>{c.works}</small><h2>{d.projects.intro}</h2></section>
    <ProjectIndex compact/>
  </main>;
}

function RelatedWiki({ slugs }) {
  const { d, lang } = useSite();
  const items = slugs.map((slug) => allWikiEntries.find((entry) => entry.slug === slug)).filter(Boolean);
  return <div className="related-lines">{items.map((entry, index) => { const item = localizedWikiEntry(entry, lang); return <SmartLink href={`#/wiki/${entry.slug}`} key={entry.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.tag}</small><strong>{item.name}</strong><p>{item.summary}</p></div><Icon name="arrow"/></SmartLink>; })}</div>;
}


function WorkIdentity({ slug }) {
  if (slug === 'devaneios') return <section className="work-identity work-identity--devaneios" data-reveal>
    <div className="work-identity__symbol" aria-hidden="true"><span>∿</span></div>
    <div className="work-identity__copy"><small>O método de Ikarius</small><h2>Primeiro o que aconteceu. Depois, o que isso pode significar.</h2></div>
    <ol><li><span>01</span><strong>Fato</strong><p>O que a cena, o corpo, o horário e a matéria permitem afirmar.</p></li><li><span>02</span><strong>Inferência</strong><p>A hipótese permanece separada da evidência até sobreviver ao teste.</p></li><li><span>03</span><strong>Teste</strong><p>Cada resposta precisa produzir uma forma de ser contrariada.</p></li></ol>
  </section>;
  if (slug === 'menos-um') return <section className="work-identity work-identity--menos-um" data-reveal>
    <div className="work-identity__couple"><strong>Joel</strong><span>&amp;</span><strong>Elisabeth</strong></div>
    <div className="work-identity__copy"><small>Antes da ausência</small><h2>Uma relação construída no cotidiano — e não apenas lembrada depois da tragédia.</h2><p>Menos Um existe para mostrar o que havia entre os dois antes de o tempo, a culpa e a tentativa de desfazer a perda ocuparem tudo.</p></div>
  </section>;
  if (slug === 'a-ultima-danca') return <section className="work-identity work-identity--a-ultima-danca" data-reveal>
    <div className="work-identity__dance" aria-hidden="true"><i/><i/><span>∞</span></div>
    <div className="work-identity__copy"><small>Depois de Devaneios</small><h2>Uma lembrança íntima e a última oportunidade de impedir um colapso coletivo.</h2><p>O título une Joel e Elisabeth ao limite político dos Arnins: duas interpretações da mesma dança, ambas marcadas por escolhas que não podem ser repetidas sem consequência.</p></div>
  </section>;
  if (slug === 'tormenta') return <section className="work-identity work-identity--tormenta" data-reveal>
    <div className="work-identity__storm" aria-hidden="true"><i/><i/><i/></div>
    <div className="work-identity__copy"><small>Antes do Grande Dia</small><h2>As lendas ainda tinham nomes, dúvidas e coisas a perder.</h2></div>
    <div className="work-identity__layers"><span>Lendas de Arcanian</span><span>Projeto L.A.C.H.R.Y.M.A.</span><span>Experimentos, reinos e alianças</span></div>
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

function WorkPage({ work }) {
  const { d, lang } = useSite();
  if (!work) return <NotFoundPage/>;
  if (work.slug === 'arcanian') return <GamePage work={work}/>;
  const item = localizedWork(work, lang);
  return <main className={`work-page work-page--${work.slug}`} style={{ '--work-accent': work.accent }}>
    <section className="work-hero"><div className="work-hero__image"><img src={work.image} alt=""/></div><div className="work-hero__shade"/><div className="work-hero__copy" data-reveal><small>{item.eyebrow}</small><ProjectLogo work={work} className="project-logo--hero" eager/><p>{item.summary}</p><div className="hero-actions"><ButtonLink href={work.primary.href}>{item.primary.label}</ButtonLink><ButtonLink href="#/wiki" tone="secondary">{d.work.wikiButton}</ButtonLink></div></div></section>
    {lang !== 'pt' && <div className="translation-note">{d.common.originalPt}</div>}<WorkIdentity slug={work.slug}/><WorkDepth work={work}/><section className="work-manifesto" data-reveal><small>{d.common.direction}</small><h2>{item.long}</h2></section>
    <section className="work-chapters">{work.sections.map((section, index) => <article key={section.title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{section.title}</h2><p>{section.text}</p></div><div className="work-chapters__line"/></article>)}</section>
    <section className="work-themes-editorial"><div className="work-themes-editorial__heading"><small>{d.common.direction}</small><ProjectLogo work={work} className="project-logo--themes"/></div>{item.themes.map(([title, text], index) => <div key={title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></div>)}</section>
    <section className="section-block work-wiki"><header className="section-heading" data-reveal><div><small>{d.work.related}</small><h2>{d.nav.wiki}</h2></div><p>{d.work.wikiText}</p></header><RelatedWiki slugs={work.relatedWiki}/></section>
  </main>;
}

function GamePage({ work }) {
  const { d, lang } = useSite();
  const c = editorialCopy[lang] || editorialCopy.pt;
  const item = localizedWork(work, lang);
  return <main className="game-page">
    <section className="game-masthead">
      <div className="game-masthead__media"><img src={work.image} alt=""/></div>
      <div className="game-masthead__shade"/>
      <div className="game-masthead__copy" data-reveal>
        <small>{item.eyebrow}</small>
        <ProjectLogo work={work} className="project-logo--hero" eager/>
        <p>{c.gameIntro}</p>
        <button type="button" className="button-link button-link--primary" onClick={() => document.querySelector('#game-story')?.scrollIntoView({ behavior: 'smooth' })}><span>{c.gameStory}</span><Icon name="arrow" size={17}/></button>
      </div>
      <div className="game-masthead__status"><span>Two Eyes On You</span><strong>{d.common.soon}</strong></div>
    </section>

    {lang !== 'pt' && <div className="translation-note translation-note--game">{d.common.originalPt}</div>}<WorkDepth work={work} game/><nav className="game-chapter-nav" aria-label={c.characters}>
      <a href="#game-story"><span>01</span>{c.gameStory}</a>
      <a href="#game-cast"><span>02</span>{c.characters}</a>
      <a href="#game-world"><span>03</span>{c.world}</a>
      <a href="#game-play"><span>04</span>{c.gameplay}</a>
    </nav>

    <section id="game-story" className="game-story">
      <div data-reveal><small>{c.gameStory}</small><h2>{item.long}</h2></div>
      <div data-reveal>{work.sections.map((section, index) => <article key={section.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{section.title}</h3><p>{section.text}</p></article>)}</div>
    </section>

    <section id="game-cast" className="game-characters">
      <header data-reveal><small>{c.characters}</small><h2>Ikarius. Joel.<br/>Aphride. Merius.</h2><p>Quatro pontos de vista para um conflito que atravessa família, investigação, tempo e escolhas feitas muito antes do jogador assumir o controle.</p></header>
      <nav className="game-cast-index">{work.characters.map((character, index) => <a key={character.slug} href={`#character-${character.slug}`}><span>{String(index + 1).padStart(2, '0')}</span><strong>{character.name}</strong><small>{character.role}</small></a>)}</nav>
      <div className="game-cast-ledger">
        {work.characters.map((character, index) => <article id={`character-${character.slug}`} key={character.slug} className={index % 2 ? 'is-reversed' : ''} data-reveal>
          <div className="game-character__number"><span>{String(index + 1).padStart(2, '0')}</span><strong>{character.name.slice(0, 1)}</strong></div>
          <div className="game-character__copy"><small>{character.role}</small><h2>{character.name}</h2><p>{character.text}</p><SmartLink href={`#/wiki/${character.slug}`} className="inline-link">{c.discover}<Icon name="arrow"/></SmartLink></div>
          <div className="game-character__rhythm" aria-hidden="true"><i/><i/><i/><i/></div>
        </article>)}
      </div>
    </section>

    <section id="game-world" className="game-world-intro" data-reveal><small>{c.world}</small><h2>Um mundo construído para ser atravessado.</h2><p>As regiões não funcionam como fundos intercambiáveis. Arquitetura, circulação, conflito e ritmo mudam de acordo com o lugar e com o personagem em cena.</p></section>
    <section className="game-locations">{work.worlds.map((place, index) => <article key={place.name} data-reveal><div className="game-location__media"><img src={place.image} alt=""/></div><div className="game-location__shade"/><div className="game-location__copy"><span>{String(index + 1).padStart(2, '0')}</span><h2>{place.name}</h2><p>{place.text}</p></div></article>)}</section>

    <section id="game-play" className="game-final">
      <div><small>{c.gameplay}</small><h2>Uma experiência para uma ou duas pessoas.</h2><p>Exploração, ação, investigação ambiental e decisões narrativas serão organizadas em episódios conectados. O segundo jogador precisa existir na história — não apenas ocupar espaço na tela.</p><ButtonLink href="#/news" tone="secondary">{d.nav.news}</ButtonLink></div>
      <img src="./media/game.webp" alt=""/>
    </section>
  </main>;
}


const studioJoyCopy = {
  pt: {
    hello: 'Two Eyes On You',
    heroA: 'Uma história não termina',
    heroB: 'quando muda de forma.',
    heroText: 'Arcanian começou como um universo escrito. Devaneios abriu a investigação; Menos Um volta para Joel e Elisabeth; Tormenta reconstrói o período das lendas; o jogo transforma esses conflitos em escolhas do jogador.',
    jump: 'Abrir esta obra',
    introLabel: 'Por que o estúdio existe',
    introTitle: 'A Two Eyes On You foi criada para desenvolver Arcanian sem reduzir cada nova obra a uma versão da anterior.',
    introText: 'O livro pode entrar na cabeça de Ikarius. A HQ pode transformar silêncio e passagem de tempo em quadro. O jogo precisa permitir que a pessoa investigue, lute e decida. O trabalho do estúdio é encontrar a forma certa para cada parte do universo.',
    projectsLabel: 'Arcanian por obra',
    projectsTitle: 'A mesma história muda quando o ponto de vista muda.',
    projectsText: 'Devaneios acompanha uma investigação; Menos Um se aproxima de um casamento; Tormenta retorna às pessoas por trás das lendas; o Jogo reorganiza o universo para uma ou duas pessoas.',
    studioLabel: 'Como as cenas são construídas',
    studioTitle: 'Primeiro decidimos quem está ali — e o que pode ser perdido.',
    studioText: 'Depois vêm o traço, a cor, o silêncio, o movimento, a câmera, a interface e a tecnologia. A ordem importa porque acabamento não substitui intenção.',
    wikiLabel: 'Wiki Arcanian',
    wikiTitle: 'Personagens, parentescos e acontecimentos com contexto — não apenas uma lista de nomes.',
    wikiText: 'Os verbetes conectam família, afiliações, lugares, objetos, operações e consequências confirmadas pelas obras e pelos projetos anunciados.',
    entries: 'verbetes', categories: 'categorias', people: 'personagens',
    latest: 'O que mudou recentemente', allNews: 'Abrir notícias',
    outroTitle: 'Devaneios foi o primeiro episódio. Não é o limite do universo.',
    outroText: 'Continue pela história de Joel e Elisabeth, pelo passado do L.A.C.H.R.Y.M.A., pelo jogo ou pela enciclopédia que liga tudo isso.',
    explore: 'Conhecer a Two Eyes On You'
  },
};

const categoryNames = {
  pt:{ all:'Tudo', characters:'Personagens', organizations:'Organizações', places:'Lugares', concepts:'Conceitos', events:'Eventos', anomalies:'Anomalias', objects:'Objetos' },
  en:{ all:'All', characters:'Characters', organizations:'Organizations', places:'Places', concepts:'Concepts', events:'Events', anomalies:'Anomalies', objects:'Objects' },
  es:{ all:'Todo', characters:'Personajes', organizations:'Organizaciones', places:'Lugares', concepts:'Conceptos', events:'Eventos', anomalies:'Anomalías', objects:'Objetos' },
  it:{ all:'Tutto', characters:'Personaggi', organizations:'Organizzazioni', places:'Luoghi', concepts:'Concetti', events:'Eventi', anomalies:'Anomalie', objects:'Oggetti' },
  ja:{ all:'すべて', characters:'人物', organizations:'組織', places:'場所', concepts:'概念', events:'出来事', anomalies:'異常現象', objects:'物品' }
};

function WikiPage() {
  const { d, lang } = useSite();
  const c = editorialCopy[lang] || editorialCopy.pt;
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(allWikiEntries[0]?.slug);
  const [spoilers, setSpoilers] = useState(false);
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
  const profile = getWikiProfile(source, allWikiEntries);
  const locked = current.spoiler > 0 && !spoilers;
  const characters = allWikiEntries.filter((entry) => entry.category === 'characters').length;
  const places = allWikiEntries.filter((entry) => entry.category === 'places').length;
  const events = allWikiEntries.filter((entry) => entry.category === 'events').length;

  return <main className="wiki-page wiki-page--studio">
    <PageHero eyebrow={d.wiki.eyebrow} title={c.encyclopedia} text={c.encyclopediaText} image="./media/welcome.webp" compact/>
    <section className="wiki-overview-bar">
      <div><strong>{allWikiEntries.length}</strong><span>verbetes publicados</span></div>
      <div><strong>{characters}</strong><span>{categoryNames[lang]?.characters || 'Personagens'}</span></div>
      <div><strong>{places}</strong><span>{categoryNames[lang]?.places || 'Lugares'}</span></div>
      <div><strong>{events}</strong><span>{categoryNames[lang]?.events || 'Eventos'}</span></div>
      <p>Conteúdo organizado a partir das obras publicadas e dos projetos anunciados pela Two Eyes On You. Informações não confirmadas não são tratadas como fato.</p>
    </section>

    <section className="wiki-atlas wiki-atlas--expanded">
      <aside className="wiki-directory">
        <label className="wiki-search"><Icon name="search"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={d.common.search}/><span>{filtered.length}</span></label>
        <nav>{wikiCategories.map((item) => <button type="button" key={item.id} onClick={() => setCategory(item.id)} className={category === item.id ? 'is-active' : ''}><span>{categoryNames[lang]?.[item.id] || item.label}</span><em>{item.id === 'all' ? allWikiEntries.length : allWikiEntries.filter((entry) => entry.category === item.id).length}</em></button>)}</nav>
        <label className="spoiler-control"><input type="checkbox" checked={spoilers} onChange={(event) => setSpoilers(event.target.checked)}/><span>{d.wiki.spoilers}</span></label>
        <div className="wiki-directory__list">{filtered.map((entry) => { const item = localizedWikiEntry(entry, lang); return <button type="button" key={entry.slug} className={entry.slug === source.slug ? 'is-active' : ''} onClick={() => setSelected(entry.slug)}><small>{categoryNames[lang]?.[entry.category] || entry.tag}</small><strong>{item.name}</strong><span>{item.alias}</span></button>; })}</div>
      </aside>

      <article className="wiki-live wiki-live--expanded">
        <header><div><small>{categoryNames[lang]?.[current.category] || current.tag}</small><h1>{current.name}</h1><p>{current.alias}</p></div><span className="wiki-spoiler-mark">SPOILER {current.spoiler}</span></header>
        {locked ? <div className="wiki-entry-lock"><Icon name="lock" size={32}/><h2>{d.wiki.protected}</h2><p>Este verbete reúne acontecimentos que ultrapassam a apresentação inicial da obra.</p><button type="button" onClick={() => setSpoilers(true)}>{d.timeline.show}</button></div> : <>
          <p className="wiki-live__lead">{current.summary}</p>
          <section className="wiki-facts wiki-facts--ledger"><h2>{c.facts}</h2><dl>{profile.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
          <div className="wiki-live__chapters">{profile.sections.slice(0, 4).map((section, index) => <section className="wiki-live__section" key={section.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{section.title}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div></section>)}</div>
          <section className="wiki-relations wiki-relations--network"><header><h2>{c.relations}</h2><span>{profile.relationships.length}</span></header>{profile.relationships.map((relationship) => <SmartLink href={`#/wiki/${relationship.slug}`} key={`${relationship.slug}-${relationship.label}`}><div><small>{relationship.label}</small><strong>{relationship.name}</strong><p>{relationship.note}</p></div><Icon name="arrow"/></SmartLink>)}</section>
          <section className="wiki-live__appearances"><h2>{c.appearances}</h2>{profile.works.map((workName, index) => <div key={workName}><span>{String(index + 1).padStart(2, '0')}</span><strong>{workName}</strong></div>)}</section>
          <p className="wiki-source-note">{c.source}{lang !== 'pt' ? ` · ${d.common.originalPt}` : ''}</p>
          <ButtonLink href={`#/wiki/${current.slug}`} tone="secondary">{c.openFull}</ButtonLink>
        </>}
      </article>
    </section>
  </main>;
}

function WikiEntryPage({ entry }) {
  const { d, lang } = useSite();
  const c = editorialCopy[lang] || editorialCopy.pt;
  const [unlocked, setUnlocked] = useState(false);
  if (!entry) return <NotFoundPage/>;
  const item = localizedWikiEntry(entry, lang);
  const profile = getWikiProfile(entry, allWikiEntries);
  const locked = item.spoiler > 0 && !unlocked;
  return <main className="wiki-entry-page wiki-entry-page--rich">
    <header className="wiki-entry-header"><div><small>{categoryNames[lang]?.[item.category] || item.tag}</small><h1>{item.name}</h1><p>{item.alias}</p></div><SmartLink href="#/wiki" className="inline-link">{d.wiki.back}<Icon name="arrow"/></SmartLink></header>
    {locked ? <div className="wiki-entry-lock"><Icon name="lock" size={32}/><h2>{d.wiki.protected}</h2><button type="button" onClick={() => setUnlocked(true)}>{d.timeline.show}</button></div> : <div className="wiki-rich-layout">
      <aside className="wiki-rich-index"><small>{c.facts}</small>{profile.sections.map((section, index) => <a href={`#wiki-section-${index}`} key={section.title}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a>)}</aside>
      <article className="wiki-rich-article"><p className="wiki-entry-lead">{item.summary}</p><section className="wiki-facts"><h2>{c.facts}</h2><dl>{profile.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>{profile.sections.map((section, index) => <section id={`wiki-section-${index}`} key={section.title} className="wiki-rich-section"><small>{String(index + 1).padStart(2, '0')}</small><h2>{section.title}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</section>)}<p className="wiki-source-note">{c.source}{lang !== 'pt' ? ` · ${d.common.originalPt}` : ''}</p></article>
      <aside className="wiki-rich-relations"><small>{c.relations}</small>{profile.relationships.map((relationship) => <SmartLink href={`#/wiki/${relationship.slug}`} key={`${relationship.slug}-${relationship.label}`}><span>{relationship.label}</span><strong>{relationship.name}</strong><p>{relationship.note}</p></SmartLink>)}</aside>
    </div>}
  </main>;
}

function TimelinePage() {
  const { d } = useSite();
  const [spoilers, setSpoilers] = useState(false);
  return <main><PageHero eyebrow={d.timeline.eyebrow} title={d.timeline.title} text={d.timeline.text} image="./media/tormenta.webp"><button type="button" className="button-link button-link--primary" onClick={() => setSpoilers(!spoilers)}><span>{spoilers ? d.timeline.hide : d.timeline.show}</span><Icon name={spoilers ? 'eye' : 'lock'}/></button></PageHero><section className="section-block timeline-list">{timelineEvents.map((event, index) => <article key={`${event.date}-${event.title}`} data-reveal className={event.spoiler && !spoilers ? 'is-locked' : ''}><span>{String(index + 1).padStart(2, '0')}</span><time>{event.date}</time><div><h2>{event.spoiler && !spoilers ? d.timeline.locked : event.title}</h2><p>{event.spoiler && !spoilers ? d.timeline.lockedText : event.text}</p></div></article>)}</section></main>;
}

function NewsPage() {
  const { d, lang } = useSite();
  const items = localizedNews(news, lang);
  return <main><PageHero eyebrow={d.news.eyebrow} title={d.news.title} text={d.news.text} image="./media/welcome.webp"/><section className="section-block news-page-grid">{items.map((item, index) => <article key={item.title} data-reveal><div><img src={item.image} alt=""/><span>{String(index + 1).padStart(2, '0')}</span></div><small>{item.category} · {item.date}</small><h2>{item.title}</h2><p>{item.text}</p><ButtonLink href={item.href} tone="outline">{d.common.readMore}</ButtonLink></article>)}</section></main>;
}

function MediaPage() {
  const { d } = useSite();
  const images = ['./media/banner.webp', './media/devaneios.webp', './media/menos-um.webp', './media/tormenta.webp', './media/game.webp', './media/welcome.webp'];
  return <main><PageHero eyebrow={d.media.eyebrow} title={d.media.title} text={d.media.text} image="./media/game.webp"/><section className="section-block media-video"><header className="section-heading"><div><small>{d.media.video}</small><h2>Jogo</h2></div></header><video controls poster="./media/game.webp"><source src="./media/arcanian.mp4" type="video/mp4"/></video></section><section className="section-block media-gallery"><header className="section-heading"><div><small>{d.media.images}</small><h2>Two Eyes On You</h2></div></header><div>{images.map((image, index) => <figure key={image} data-reveal><img src={image} alt=""/><figcaption>{String(index + 1).padStart(2, '0')} / Two Eyes On You</figcaption></figure>)}</div></section></main>;
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
  const { d, lang } = useSite();
  const local = studioContent[lang] || studioContent.pt;
  return <main className="studio-page"><PageHero eyebrow={d.studio.eyebrow} title={d.studio.title} text={d.studio.text} image="./media/banner.webp"><ButtonLink href="#/contact">{d.studio.contact}</ButtonLink></PageHero><section className="section-block studio-manifesto"><div data-reveal><small>{d.studio.manifesto}</small><h2>{d.studio.manifestoTitle}</h2></div><div data-reveal><p>{d.studio.p1}</p><p>{d.studio.p2}</p></div></section><section className="studio-areas">{local.areas.map(([title, text], index) => <article key={title} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="section-block studio-process"><header className="section-heading" data-reveal><div><small>{d.studio.process}</small><h2>{d.studio.processTitle}</h2></div></header><div>{local.process.map(([number, title, text]) => <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section><section className="section-block studio-projects"><header className="section-heading" data-reveal><div><small>{d.studio.projects}</small><h2>Arcanian</h2></div><ButtonLink href="#/arcanian" tone="outline">{d.common.explore}</ButtonLink></header><div>{works.map((work) => { const item = localizedWork(work, lang); return <SmartLink href={`#/obra/${work.slug}`} key={work.slug} data-reveal><img src={work.image} alt=""/><ProjectLogo work={work} compact/><Icon name="arrow"/></SmartLink>; })}</div></section><section className="studio-contact"><div><small>{d.studio.contact}</small><h2>{d.studio.contactTitle}</h2></div><ButtonLink href="#/contact">{d.nav.contact}</ButtonLink></section></main>;
}

function DocumentationPage() {
  const { d } = useSite();
  return <main><PageHero eyebrow={d.docs.eyebrow} title={d.docs.title} text={d.docs.text} image="./media/banner.webp"/><section className="section-block document-list">{docs.map((doc, index) => <SmartLink href={`#/documentation/${doc.slug}`} key={doc.slug} data-reveal><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{doc.title}</h2><p>{doc.description}</p></div><Icon name="arrow"/></SmartLink>)}</section></main>;
}

function LegalDocumentPage({ legalDoc }) {
  const { d, lang } = useSite();
  if (!legalDoc) return <NotFoundPage/>;
  return <main className="legal-page"><header className="legal-header"><small>{d.docs.updated} {legalDoc.updated}</small><h1>{legalDoc.title}</h1><p>{legalDoc.subtitle}</p>{lang !== 'pt' && <div className="legal-language-note"><Icon name="globe"/><span>{d.docs.legalOriginal}</span></div>}</header><section className="legal-layout"><aside><small>{d.docs.summary}</small>{legalDoc.sections.map((section, index) => <button type="button" key={section.title} onClick={() => document.querySelector(`#legal-${index}`)?.scrollIntoView({ behavior: 'smooth' })}>{section.title}</button>)}</aside><article>{legalDoc.sections.map((section, index) => <section id={`legal-${index}`} key={section.title}><h2>{section.title}</h2>{section.items.map((item, itemIndex) => item.type === 'list' ? <ul key={itemIndex}>{item.items.map((value) => <li key={value}>{value}</li>)}</ul> : <p key={itemIndex}>{item.text}</p>)}</section>)}</article></section></main>;
}

function ContactPage() {
  const { d } = useSite();
  return <main className="contact-page"><section className="contact-main"><div data-reveal><small>{d.contact.eyebrow}</small><h1>{d.contact.title}</h1><p>{d.contact.text}</p><ButtonLink href="mailto:contato@twoeyesonyou.com">{d.contact.button}</ButtonLink><strong>contato@twoeyesonyou.com</strong></div><aside>{d.contact.areas.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</aside></section><section className="contact-socials">{socials.map(([label, href]) => <SmartLink href={href} key={label}>{label}<Icon name="external"/></SmartLink>)}</section></main>;
}

function PurchasePage() {
  const { d } = useSite();
  const devaneios = works.find((work) => work.slug === 'devaneios');
  const [edition, setEdition] = useState('physical');
  const physical = edition === 'physical';
  const store = physical ? 'https://loja.uiclap.com/titulo/ua184114' : 'https://www.amazon.com.br/dp/B0H4YWKJW4';
  return <main className="purchase-page"><section className="purchase-hero"><div className="purchase-hero__image"><img src="./media/devaneios.webp" alt=""/></div><div className="purchase-hero__shade"/><div className="purchase-hero__copy" data-reveal><small>{d.purchase.eyebrow}</small><ProjectLogo work={devaneios} className="project-logo--purchase" eager/><p>{d.purchase.text}</p><div className="purchase-facts">{d.purchase.facts.map((fact) => <span key={fact}>{fact}</span>)}</div><ButtonLink href={store}>{physical ? d.purchase.physicalButton : d.purchase.digitalButton}</ButtonLink></div><div className="purchase-cover" data-reveal><img src="./media/devaneios.webp" alt="Arcanian: Devaneios"/></div></section><section className="edition-tabs"><button type="button" onClick={() => setEdition('physical')} className={physical ? 'is-active' : ''}><span>01</span><strong>{d.purchase.physical}</strong><small>{d.purchase.physicalMeta}</small></button><button type="button" onClick={() => setEdition('digital')} className={!physical ? 'is-active' : ''}><span>02</span><strong>{d.purchase.digital}</strong><small>{d.purchase.digitalMeta}</small></button></section><section className="section-block purchase-details"><div data-reveal><small>{physical ? d.purchase.physical : d.purchase.digital}</small><h2>{physical ? d.purchase.physicalTitle : d.purchase.digitalTitle}</h2><p>{physical ? d.purchase.physicalText : d.purchase.digitalText}</p><ButtonLink href={store} tone="secondary">{physical ? d.purchase.physicalButton : d.purchase.digitalButton}</ButtonLink></div><aside data-reveal><small>{d.purchase.before}</small>{d.purchase.notices.map((notice, index) => <div key={notice}><span>{String(index + 1).padStart(2, '0')}</span><p>{notice}</p></div>)}</aside></section><section className="section-block purchase-synopsis"><div data-reveal><small>{d.purchase.synopsis}</small><h2>{d.purchase.synopsisTitle}</h2></div><div data-reveal><p>{d.purchase.synopsisP1}</p><p>{d.purchase.synopsisP2}</p><div className="purchase-links"><SmartLink href="#/wiki/ikarius">Ikarius<Icon name="arrow"/></SmartLink><SmartLink href="#/wiki/ciane">C.I.A.N.E.<Icon name="arrow"/></SmartLink><SmartLink href="#/wiki/espiral">Espiral<Icon name="arrow"/></SmartLink></div></div></section><section className="purchase-final"><div><small>{d.purchase.choose}</small><ProjectLogo work={devaneios} className="project-logo--purchase-final"/></div><div><ButtonLink href="https://loja.uiclap.com/titulo/ua184114">{d.purchase.physicalButton}</ButtonLink><ButtonLink href="https://www.amazon.com.br/dp/B0H4YWKJW4" tone="secondary">{d.purchase.digitalButton}</ButtonLink></div></section></main>;
}

function NotFoundPage() {
  const { d } = useSite();
  return <main className="not-found"><span>404</span><h1>{d.notFound.title}</h1><ButtonLink href="#/" tone="secondary">{d.notFound.button}</ButtonLink></main>;
}

function Footer() {
  const { d } = useSite();
  return <footer className="site-footer"><div><img src="./media/logo.webp" alt=""/><div><strong>Two Eyes On You</strong><small>{d.footer.location}</small></div></div><nav><SmartLink href="#/arcanian">{d.nav.projects}</SmartLink><SmartLink href="#/news">{d.nav.news}</SmartLink><SmartLink href="#/wiki">{d.nav.wiki}</SmartLink><SmartLink href="#/about">{d.nav.studio}</SmartLink><SmartLink href="#/documentation">{d.nav.documents}</SmartLink><SmartLink href="#/contact">{d.nav.contact}</SmartLink></nav><span>{d.footer.rights}</span></footer>;
}

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
    if (version !== '12') { localStorage.setItem('teoy-theme-version', '12'); return 'studio'; }
    return themes.some((item) => item.id === saved) ? saved : 'studio';
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

  useReveal(`${route}|${lang}|${theme}`);

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

  const context = useMemo(() => ({ d, lang, setLang, theme, setTheme }), [d, lang, theme]);
  return <SiteContext.Provider value={context}>
    <div className="app-shell">
      <SideRail route={route} onSearch={() => setSearchOpen(true)} onSettings={() => setSettingsOpen(true)}/>
      <div className="app-main">
        <TopBar route={route} onSearch={() => setSearchOpen(true)} onSettings={() => setSettingsOpen(true)}/>
        <div key={route} className="route-stage">{renderRoute()}</div>
        <Footer/>
      </div>
      <CommandPalette open={searchOpen} close={() => setSearchOpen(false)}/>
      <SettingsPanel open={settingsOpen} close={() => setSettingsOpen(false)}/>
    </div>
  </SiteContext.Provider>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
