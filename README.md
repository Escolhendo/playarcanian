# Two Eyes On You — Site V12.1

Site institucional em React + Vite preparado para GitHub Pages.


## Alterações desta versão

- adicionada a obra **Arcanian: A Última Dança** depois de *Menos Um*;
- corrigida a página **Projetos**, que chamava um componente inexistente;
- os nomes visuais das obras foram substituídos por imagens de logo;
- textos continuam apenas em recursos de acessibilidade, busca e títulos do navegador;
- a página de compra usa o mesmo sistema de logo das páginas das obras.

## Arquivos das logos

Substitua os arquivos abaixo pelas logos oficiais, mantendo os mesmos nomes:

```text
public/media/logos/devaneios.png
public/media/logos/menos.png
public/media/logos/ultima-danca.png
public/media/logos/tormenta.png
public/media/logos/arcanian.png
```

`devaneios.png` já contém a logo que estava no projeto. Os outros quatro arquivos são imagens transparentes de espaço reservado; basta sobrescrevê-los. Para **A Última Dança**, também existe uma imagem de fundo temporária em:

```text
public/media/ultima-danca.webp
```

Ela pode ser substituída sem alterar o código.


## O que mudou na V12

A V12 remove textos institucionais vagos e substitui listas como “literatura, jogos, quadrinhos, som” por informações concretas sobre o que a Two Eyes On You está produzindo.

A página inicial agora explica diretamente:

- como **Devaneios** inicia a investigação de Ikarius;
- por que **Menos Um** volta ao casamento de Joel e Elisabeth;
- como **Tormenta** retorna ao período das lendas e ao Projeto L.A.C.H.R.Y.M.A.;
- de que maneira o **Jogo** reorganiza o universo como experiência para uma ou duas pessoas.

Também foram removidas referências visuais genéricas de localização como “Made in Santos” e listas decorativas de áreas. A cidade pode continuar aparecendo em informações formais e biográficas, mas não é usada como slogan para preencher espaço.

## Páginas das obras

As cinco páginas receberam uma nova camada editorial com:

- informações objetivas sobre formato, estrutura, período e núcleo central;
- linhas narrativas explicadas em profundidade;
- mais capítulos temáticos;
- conexões ampliadas com a Wiki;
- quatro pilares por obra, em vez de descrições superficiais.

### Devaneios

A página cobre o prólogo de Joel, o caso Sant’Anna, o método de Ikarius, a família Mountevoir, o retorno de Merius, Beatriz e os Filhos da Meia-Noite, o L.A.C.H.R.Y.M.A., o Grande Dia e Koreth.

### Menos Um

O conteúdo se concentra em Joel e Elisabeth: casamento, apartamento, livros, escrita, pesquisa temporal, gravidez, a demonstração, a promessa feita aos dois e o impacto dessa vida nas decisões posteriores de Joel.

### A Última Dança

A continuação de *Devaneios* acompanha Ikarius, Joel e os Arnins diante de um surto violento, de decisões políticas e do plano de Hiussen. O título também relaciona a memória de Joel e Elisabeth à última oportunidade dos Arnins.

### Tormenta

A página apresenta o recorte anunciado da HQ e o contexto já estabelecido em *Devaneios*: as lendas antes dos títulos, Mark, Nicolle, Vincent, Chinama, a fuga do melhor resultado do L.A.C.H.R.Y.M.A. e o caminho até o Grande Dia.

### Jogo

A página detalha a campanha episódica, Ikarius e Joel como protagonistas, investigação ambiental, exploração lateral, combate, experiência para uma ou duas pessoas e direção 2D/2.5D com sprites desenhados à mão.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Validar rotas, mídias e relações da Wiki

```bash
npm run validate
```

O comando verifica:

- projetos e rotas internas;
- mídias utilizadas;
- documentos legais;
- relações entre os 131 verbetes;
- arquivo `public/404.html` do GitHub Pages.

## Gerar a versão de produção

```bash
npm run build
npm run preview
```

## Publicar no GitHub Pages

1. Envie todos os arquivos para a raiz do repositório.
2. No GitHub, abra **Settings → Pages**.
3. Em **Source**, selecione **GitHub Actions**.
4. Faça um `push` para a branch `main`.
5. Acompanhe o processo em **Actions**.

O workflow está em:

```text
.github/workflows/deploy.yml
```

## Domínio próprio

Renomeie:

```text
public/CNAME.example
```

para:

```text
public/CNAME
```

Depois confirme o domínio no arquivo e em **Settings → Pages → Custom domain**.

## Idiomas e temas

Idiomas:

- português;
- inglês;
- espanhol;
- italiano;
- japonês.

Temas:

- Estúdio colorido;
- escuro;
- claro;
- areia;
- azul editorial.

A troca é aplicada imediatamente e fica salva no navegador. Na primeira abertura da V12, o site migra para o tema Estúdio colorido.

## Observação editorial

As páginas usam informações publicadas em *Arcanian: Devaneios* e detalhes anunciados oficialmente para Menos Um, Tormenta e o Jogo. Informações ainda não confirmadas não devem ser apresentadas como fato.
