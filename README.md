# Two Eyes On You — Arcanian Studio Edition V20

Site institucional em React + Vite, preparado para publicação no GitHub Pages e no domínio `twoeyesonyou.com`.

## Revisão V20

- substitui o símbolo plano da página de Devaneios por uma espiral tridimensional renderizada em Canvas, com profundidade, iluminação, rotação contínua e resposta ao cursor;
- respeita a preferência de movimento reduzido do sistema;
- remove as faixas de metadados e comandos cenográficos que deixavam a Home e a página do jogo com aparência de template;
- usa versões recortadas e transparentes das cinco logos, sem caixas de vidro ou margens internas excessivas;
- amplia as marcas nos cards e nas páginas de cada obra;
- apresenta **A Última Dança** explicitamente como sequência direta de **Devaneios**;
- apresenta o jogo como uma adaptação própria de **Devaneios**, **Menos Um** e **Tormenta**;
- adiciona Steam e Xbox às áreas de plataformas do jogo e de mídias;
- conecta o card de Bravara ao arquivo dedicado `public/media/bravara2.webp`;
- mantém os vídeos de *Devaneios* em reprodução automática, contínua, silenciosa e sem controles;
- preserva as experiências visuais independentes de cada projeto e mantém o conteúdo extenso concentrado na Wiki;
- preserva a Wiki Arcanian com **164 verbetes** e suporte aos cinco idiomas.

## Estrutura principal

```text
src/main.jsx              interface, rotas, projetos e interações
src/redesign.css          identidade V20 e páginas autorais
src/styles.css            base, temas, responsividade e acessibilidade
src/data.js               obras, fatos e recortes narrativos
src/i18n.js               traduções gerais
src/wiki*.js              Wiki, relações e expansões editoriais
public/media              imagens, vídeos, logotipos e olho interativo
```

## Executar

```bash
npm install
npm run dev
```

## Validar

```bash
npm run validate
```

## Produção

```bash
npm run build
npm run preview
```

O resultado será criado em `dist`.
