# Dev Movies

Catálogo de filmes e séries com dados da API do [TMDB](https://www.themoviedb.org/): destaques, listas com paginação, página de detalhes com elenco e trailers. Feito com React, Vite e styled-components.

**[Ver o projeto online](https://dev-movies-opal.vercel.app)**

<table>
  <tr>
    <td width="33%"><img src="https://github.com/user-attachments/assets/3c8e14a3-5fb2-4716-b172-ad3e9ba18729" alt="Página inicial"></td>
    <td width="33%"><img src="https://github.com/user-attachments/assets/6d29386f-ee71-48d4-b25d-a7e5a18cbe9f" alt="Lista de filmes"></td>
    <td width="33%"><img src="https://github.com/user-attachments/assets/0a92154a-521a-48d8-ab81-65343718e558" alt="Detalhes do filme"></td>
  </tr>
</table>

<img src="https://github.com/user-attachments/assets/3a84559b-8a06-4aad-b2b3-a28abaafd5f1" alt="Navegação pelo site" width="800">

## Funcionalidades

- **Página inicial** com um filme em destaque e carrosséis de top filmes, top séries, séries populares e artistas
- **Filmes e Séries** com destaque, abas "Populares" e "Mais bem avaliados", grade responsiva e botão "Carregar mais"
- **Detalhes do filme** com pôster, gêneros, sinopse, elenco, vídeos e filmes similares
- **Trailer em modal**, que fecha pelo botão ×, pela tecla Esc ou clicando fora do vídeo
- **Busca de trailer com fallback:** tenta em português e, se não houver, busca em inglês, dando preferência a trailers do YouTube
- **Header** que muda de fundo ao rolar a página e destaca a página atual

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| React 19 | Interface em componentes |
| Vite | Servidor de desenvolvimento e build |
| React Router | Rotas sem recarregar a página |
| styled-components | Um arquivo `styles.js` por componente |
| Axios | Requisições para a API do TMDB |
| Swiper | Carrosséis com arraste |

## Rotas

| URL | Página |
| --- | --- |
| `/` | Página inicial |
| `/filmes` | Filmes |
| `/series` | Séries |
| `/detalhe/:id` | Detalhes de um filme |

Todas as rotas ficam dentro do `DefaultLayout`, que renderiza o header fixo. O `vercel.json` redireciona qualquer URL para o `index.html`, para que recarregar a página em `/filmes` não dê erro 404 no deploy.

## Decisões técnicas

**Camada de serviço separada.** O `services/api.js` cria a instância do Axios com URL base, chave e idioma `pt-BR`. O `services/getData.js` tem uma função por tipo de busca (`getTopMovies`, `getMediaList`, `getMovieCredits`...). Os componentes só chamam essas funções e nunca usam o Axios diretamente. Se a API mudar, a alteração fica concentrada em um único lugar.

**Requisições em paralelo.** A página inicial e a de detalhes buscam todos os dados de uma vez com `Promise.all`, em vez de esperar uma resposta para começar a próxima.

**Um componente para duas páginas.** Filmes e Séries usam o mesmo `MediaPage`, que recebe o tipo como prop:

```jsx
<MediaPage type='movie' title='Filmes' />
<MediaPage type='tv' title='Séries' />
```

O tipo define o endereço da API (`movie/popular` ou `tv/popular`) e se os cards levam para a página de detalhes.

**Paginação acumulada.** "Carregar mais" busca a próxima página e junta o resultado à lista existente com `setItems(prev => [...prev, ...results])`. Trocar de aba volta para a página 1.

**Modal sem vazamento de eventos.** O ouvinte da tecla Esc é registrado em um `useEffect` e removido na função de limpeza quando o modal fecha. O clique dentro do vídeo usa `stopPropagation()` para não chegar ao fundo, que fecha o modal.

**Layout responsivo sem altura fixa.** O vídeo do modal usa `aspect-ratio: 16 / 9`, a grade usa `grid` com `auto-fill` e o logo usa `clamp()`.

## Estrutura

```
src/
├── components/        # Button, Card, Credits, Header, MediaPage, Modal, Slider, SpanGenres
├── layout/            # DefaultLayout (header + conteúdo)
├── pages/             # Home, Movies, Series, Detalhe
├── routes/routes.jsx  # Mapa de URLs para páginas
├── services/          # api.js (Axios) e getData.js (funções de busca)
├── styles/            # Estilos globais
└── utils/getImages.js # Monta a URL das imagens do TMDB
```

Cada componente tem sua pasta com `index.jsx` (estrutura e lógica) e `styles.js` (estilo).

## Como rodar localmente

Pré-requisitos: Node.js 20.19 ou superior e Yarn.

```bash
git clone https://github.com/josealbertodeev/dev-movies.git
cd dev-movies
yarn
yarn dev
```

| Comando | O que faz |
| --- | --- |
| `yarn dev` | Servidor de desenvolvimento |
| `yarn build` | Versão de produção em `dist/` |
| `yarn preview` | Serve a versão de produção localmente |
| `yarn lint` | Verifica o código com ESLint |
| `yarn format` | Formata o código com Prettier |

## Próximos passos

- Página de detalhes para séries
- Busca por título
- Cards dos carrosséis levando à página de detalhes
- Chave da API em variável de ambiente

## Autor

**José Alberto**: [LinkedIn](https://www.linkedin.com/in/josealbertofarias/) · [Portfólio](https://josealbertodeev.github.io/portfolio/)
