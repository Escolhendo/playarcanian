# Two Eyes On You — Final V26 · Gold / Arcanian Database

Versão final do site institucional da Two Eyes On You, redesenhada para combinar uma apresentação cinematográfica de publisher com uma navegação de produto mais clara. A interface usa **Arcanian como identidade**, não como decoração: preto, branco, superfícies editoriais e dourado como cor de destaque.

## Direção desta versão

- **dourado Arcanian** no lugar do azul como cor de interação e destaque;
- heroes mais limpos: a **logo oficial da obra ocupa o papel de título**, sem repetir um grande nome ou um parágrafo em cima da arte;
- página do **jogo da Arcanian** com Xbox e Steam / PC claramente informados;
- páginas de projeto com estrutura de produto e navegação contextual, mas linguagem própria para cada obra;
- nenhuma área de avaliação, nota ou review;
- mega menus, busca global, navegação contextual, scrollspy, breadcrumbs, atalhos internos, índice A–Z e menu mobile reorganizado;
- acessibilidade com foco visível, navegação por teclado, skip-link e respeito a `prefers-reduced-motion`.

## Identidade por projeto

- **Arcanian** — composição preta, branca e dourada, com tratamento de página de jogo;
- **Devaneios** — tons de papel, investigação, Espiral e raízes, com áreas escuras de arquivo;
- **Menos Um** — composição editorial mais íntima e quente;
- **A Última Dança** — vinho profundo, preto e dourado;
- **Tormenta** — superfície mais áspera, escura e dessaturada, adequada à HQ e ao período das lendas.

Cada página possui hero com logo, barra de metadados, navegação sticky, visão geral, destaques, mídia, personagens/mundo quando aplicável, conexões com a Wiki e projetos relacionados.

## Arcanian Database / Wiki

A Wiki foi ampliada para **215 verbetes**, com **52 dossiês aprofundados**. A estrutura inclui:

- personagens;
- organizações;
- lugares;
- conceitos;
- eventos;
- anomalias;
- objetos;
- **poderes**;
- **armas**;
- **tecnologia**;
- diretório dedicado a Fragmentos;
- índice A–Z;
- busca e filtros;
- proteção de spoilers;
- ficha rápida e ficha completa;
- poderes, armas, técnicas, regras, ocorrências e eventos relacionados;
- ligações entre pessoas, lugares, organizações, artefatos e acontecimentos.

A base não inventa medidas para preencher fichas. Quando altura, idade exata ou outra especificação não foi divulgada no material usado como cânone, a entrada informa que o dado **não foi divulgado**.

## Fragmentos e lore

A Wiki separa Fragmentos por manifestação, compatibilidade, implantes, adaptação, ressonância, regeneração e relação com âncoras. Também aprofunda conceitos e eventos como Espirais, Codéx, Arnins, C.I.A.N.E., L.A.C.H.R.Y.M.A., Barney’s Company, Flor da Vida, Nina, Realidade −1, Grande Dia, Grande Roubo e a rede de âncoras.

A cronologia também foi revisada; **O Grande Dia está registrado em 16 de maio de 1954**.

## FAQ e privacidade

A FAQ possui **28 perguntas** sobre:

- o universo e as obras;
- o jogo da Arcanian;
- Xbox e Steam / PC;
- campanha e cooperação;
- relação entre jogo, livros e HQ;
- spoilers e critérios da Wiki;
- classificação indicativa;
- compra de Devaneios;
- contato e suporte;
- dados técnicos processados pela hospedagem;
- armazenamento local de preferências;
- ausência de analytics, login e publicidade próprios nesta versão;
- políticas de privacidade, cookies e serviços externos.

## Conteúdo

- 5 projetos;
- 215 verbetes da Wiki;
- 52 dossiês aprofundados;
- cronologia Arcanian expandida;
- 6 documentos oficiais;
- mídias, logos, imagens, vídeo e animação de introdução preservados.

## Estrutura

```text
index.html
src/
  main.js
  styles.css
  data.js
  projectExperience.js
  wiki.js
  wikiExpansion.js
  wikiDeepProfiles.js
  wikiDetails.js
  wikiSupplement.js
  wikiFinal.js
  legal.js
  i18n.js
  fullTranslations.js
public/
  media/
scripts/
  validate.mjs
  build.mjs
  dev.mjs
```

## Executar

```bash
npm run dev
```

Abra `http://localhost:4173`.

## Validar e gerar produção

```bash
npm run validate
npm run build
```

A versão pronta para deploy é gerada em `dist/`.


## V26 — Cinematic Landing

A home abre como uma landing full-bleed, com navegação sobre a imagem, hero editorial, controles compactos e faixa de destaques abaixo da dobra.
