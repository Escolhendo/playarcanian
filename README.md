# Two Eyes On You — Arcanian Studio Edition V15

Site institucional em React + Vite, preparado para publicação no GitHub Pages.

## Principais mudanças

- logotipos brancos sobre superfícies **liquid glass**, sem retângulos pretos sólidos;
- barra lateral reduzida aos cinco destinos principais, busca, preferências e compra;
- menu mobile reorganizado, sem repetir todos os projetos e configurações na mesma tela;
- seletor de idiomas preservado: Português, English, Español, Italiano e 日本語;
- nomes de temas substituídos por identidades editoriais profissionais;
- escolha de fonte e tamanho de texto com persistência no navegador;
- painel de acessibilidade com alto contraste, redução de movimento, links sublinhados, foco reforçado e cursor autoral;
- link de salto direto para o conteúdo principal;
- Wiki Arcanian ampliada para **164 verbetes**;
- 33 dossiês adicionais baseados diretamente em *Arcanian: Devaneios — Episódio I*;
- mapa do livro com prólogo e 17 capítulos, conectando cada núcleo aos verbetes correspondentes;
- interface, mapa do livro, perfis, fatos, seções e relações da Wiki disponíveis nos cinco idiomas.

## Identidades visuais

- **Ateliê Arcanian** — identidade principal do estúdio;
- **Arquivo Noturno** — leitura cinematográfica em ambientes escuros;
- **Edição Museográfica** — composição clara e neutra;
- **Códice Editorial** — linguagem literária e textura de papel;
- **Terminal Analítico** — visual técnico para dossiês e sistemas.

## Preferências salvas

O navegador mantém:

- idioma;
- tema;
- fonte;
- tamanho de texto;
- opções de acessibilidade.

O botão **Restaurar padrões** redefine apenas leitura e acessibilidade, sem apagar o idioma escolhido.

## Estrutura principal

```text
src/main.jsx              interface, rotas e preferências
src/styles.css            temas, responsividade, liquid glass e acessibilidade
src/i18n.js               traduções gerais
src/wiki.js               núcleo da Wiki
src/wikiSupplement.js     expansão editorial
src/wikiFinal.js          dossiês baseados no livro
src/wikiLocalization.js   localização integral da Wiki
src/wikiDetails.js        fatos, seções e relações localizadas
src/bookGuide.js          mapa traduzido do prólogo e 17 capítulos
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

A validação confere projetos, mídias, logotipos, rotas, relações da Wiki, duplicações, mapa do livro e documentos.

## Produção

```bash
npm run build
npm run preview
```

O resultado será criado em `dist`.
