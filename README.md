# Dev Movies

Site de filmes e séries feito com **React + Vite**, que consome a API do [TMDB](https://www.themoviedb.org/). Projeto de estudo: o README explica o que cada parte faz e como ela foi construída.

## Tecnologias

| Tecnologia | Para que serve |
| --- | --- |
| React 19 | Criar a interface com componentes |
| Vite | Servidor de desenvolvimento e build |
| react-router-dom | Navegação entre páginas sem recarregar |
| styled-components | CSS escrito dentro do JavaScript, um arquivo `styles.js` por componente |
| axios | Chamadas HTTP para a API |
| swiper | Carrossel (slider) de cards |

## Como rodar

```bash
yarn            # instala as dependências
yarn dev        # inicia em modo desenvolvimento
yarn build      # gera a versão de produção em /dist
yarn preview    # testa a versão de produção
```

## Estrutura de pastas

```
public/
  favicon.svg            # ícone da aba do navegador
src/
  assets/                # imagens (logo)
  components/            # peças reutilizáveis da interface
    Button/  Card/  Credits/  Header/
    MediaPage/  Modal/  Slider/  SpanGenres/
  layout/DefaultLayout   # estrutura comum às páginas (Header + conteúdo)
  pages/                 # uma pasta por página
    Home/  Movies/  Series/  Detalhe/
  routes/routes.jsx      # define qual URL abre qual página
  services/              # comunicação com a API
    api.js  getData.js
  styles/globalStyles.js # estilos globais (reset e fundo preto)
  utils/getImages.js     # monta a URL completa das imagens do TMDB
```

Cada componente fica em sua própria pasta com `index.jsx` (lógica e HTML) e `styles.js` (CSS).

## Como o site funciona

### Rotas
Definidas em [src/routes/routes.jsx](src/routes/routes.jsx):

| URL | Página |
| --- | --- |
| `/` | Home |
| `/filmes` | Filmes |
| `/series` | Séries |
| `/detalhe/:id` | Detalhe de um filme |

Todas ficam dentro do `DefaultLayout`, que mostra o `Header` fixo no topo.

### Acesso à API
- [src/services/api.js](src/services/api.js) cria a instância do axios com a URL base, a chave e o idioma `pt-BR`.
- [src/services/getData.js](src/services/getData.js) reúne uma função por tipo de busca (`getTopMovies`, `getMovieCredits`, `getMediaList` etc.). As páginas só chamam essas funções e nunca usam o axios direto.

### Home
Mostra um filme em destaque (fundo, título, sinopse e pôster) e depois sliders: Top Filmes, Top Séries, Séries Populares e Top Artistas. Os dados são buscados todos juntos com `Promise.all`.

### Detalhe
Mostra pôster, gêneros, sinopse, elenco, todos os vídeos do filme e um slider de filmes similares.

## O que foi adicionado nesta etapa

### 1. Botão de fechar no modal do trailer
O modal ([Modal](src/components/Modal/index.jsx)) agora fecha de três formas:
- clicando no **×** no canto;
- apertando **Esc** (um `useEffect` escuta o teclado e remove o ouvinte ao sair);
- clicando no fundo escuro.

Clicar dentro do vídeo não fecha, porque o container usa `stopPropagation()` para o clique não "subir" até o fundo.

Além disso:
- o fundo agora é `position: fixed; inset: 0`, cobrindo toda a tela;
- o vídeo usa `aspect-ratio: 16 / 9` em vez de altura fixa, o que ajuda no celular;
- se não houver trailer, aparece "Trailer indisponível." em vez de uma caixa vazia.

### 2. Trailer de séries
O modal agora recebe a prop `type` (`'movie'` ou `'tv'`), pois a API usa endereços diferentes (`movie/ID/videos` e `tv/ID/videos`).

Muitos títulos não têm vídeo em português. Por isso `getIdMovie` tenta primeiro `pt-BR` e, se vier vazio, busca em inglês, preferindo um vídeo do tipo *Trailer* do YouTube.

### 3. Páginas Filmes e Séries
As duas páginas eram só um título. Agora usam o mesmo componente, [MediaPage](src/components/MediaPage/index.jsx), que recebe `type` e `title`:

```jsx
<MediaPage type='movie' title='Filmes' />
<MediaPage type='tv' title='Séries' />
```

Isso evita escrever o código duas vezes. A página tem:
- **destaque** no topo, usando o primeiro item de "mais bem avaliados" para ser diferente do destaque da Home;
- **abas** Populares / Mais bem avaliados;
- **grade** de cards que se adapta à largura da tela (`grid` com `auto-fill`);
- botão **Carregar mais**, que pede a próxima `page` da API e junta o resultado à lista.

Em filmes, destaque e cards levam ao detalhe. Séries ainda não têm página de detalhe.

### 4. Favicon
Criado [public/favicon.svg](public/favicon.svg), um play vermelho sobre fundo escuro. O `index.html` já apontava para esse arquivo.

### 5. Responsividade
Adicionados breakpoints com `@media (max-width: 768px)` nos `styles.js`:
- **Header:** logo com `clamp()` (tamanho mínimo, ideal e máximo), menu menor;
- **Home:** o destaque vira coluna, o título e o pôster diminuem, a sinopse é cortada em 6 linhas e os botões quebram de linha;
- **Detalhe:** removido o `min-width: 1200px`, que causava rolagem horizontal; no celular vira coluna;
- **Slider:** margens e títulos menores;
- **Modal:** ocupa 92% da largura.


