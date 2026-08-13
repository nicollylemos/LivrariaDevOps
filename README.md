# Livraria

E-commerce de livros focado em edições de colecionador e curadoria literária. O design foi concebido para transmitir sofisticação, tradição e exclusividade, criando uma experiência de compra que remete ao ambiente acolhedor de uma biblioteca clássica.

**Site em produção:** https://livraria-dev-ops.vercel.app/
**Repositório:** https://github.com/nicollylemos/LivrariaDevOps

---

## 1. Visão Geral do Projeto

O projeto **Livraria** é uma plataforma de e-commerce desenvolvida em **HTML, CSS e JavaScript puros** (sem frameworks ou build step), estruturada como uma SPA (Single Page Application) com roteamento por hash. O objetivo é oferecer uma vitrine digital para livros de edição especial, com navegação fluida entre início, catálogo, detalhes do produto e carrinho.

## 2. Identidade Visual (Design System)

### Paleta de Cores

| Cor | Hex | Uso |
|---|---|---|
| Off-White | `#FAF9F6` | Cor predominante de fundo, proporcionando um visual limpo e editorial que reduz o cansaço visual. |
| Marrom Profundo | `#4A3728` | Utilizado para tipografia principal, botões e elementos estruturais, trazendo sobriedade e contraste. |
| Dourado | `#E5C100` | Cor de destaque para preços, ícones e chamadas de ação importantes, simbolizando o valor e a qualidade das edições. |

### Tipografia

- **Playfair Display** — fonte serifada clássica utilizada em títulos e cabeçalhos, reforçando o tom elegante e literário.
- **Sans-serif auxiliar (DM Sans)** — utilizada em textos de apoio e interface, garantindo legibilidade e modernidade.

### Logotipo

Monograma minimalista com o contorno de um livro em estilo *line art* dourado, usado como marca no cabeçalho.

## 3. Arquitetura de Telas

### Home
- **Banner de destaque:** apresenta edições especiais com fotografia rica e descrições poéticas.
- **Novidades:** seção de rolagem horizontal para os lançamentos mais recentes.
- **Coleções curadas:** blocos visuais que segmentam o acervo por gênero (Poesia, Filosofia, Clássicos).

### Catálogo (Loja)
- **Filtros rápidos:** categorização por gênero literário no topo da tela.
- **Grid de produtos:** layout focado nas capas dos livros, com títulos e preços em destaque.
- **CTA de exploração:** botão "Explorar Mais Títulos" para navegação profunda no acervo.

### Detalhes do Livro
- **Imagem em destaque:** capa em alta resolução.
- **Sinopse e ficha técnica:** texto organizado com hierarquia clara para facilitar a leitura.
- **Sugestões:** seção "Selecionado Para Você", incentivando a descoberta de títulos relacionados.

### Carrinho
- **Resumo visual:** lista de itens com miniaturas, títulos e edições.
- **Resumo do pedido:** detalhamento de subtotal, frete e taxas em um container limpo.
- **Finalização:** botão de ação principal reforçando a segurança da transação.

## 4. Navegação e Experiência

A navegação é estruturada através de uma barra inferior persistente (mobile) e um menu horizontal (desktop), permitindo acesso rápido à Home, Loja, Minha Biblioteca e Carrinho. O fluxo foi otimizado para ser intuitivo, com transições suaves entre a descoberta e o fechamento da compra.

## 5. Estrutura de Arquivos

```
├── index.html   → Estrutura das 4 telas (Home, Loja, Produto, Carrinho)
├── style.css    → Design system completo (cores, tipografia, componentes)
├── script.js    → Catálogo de dados, lógica de carrinho, roteador SPA
└── README.md
```

Como é uma SPA, todas as telas vivem dentro do mesmo `index.html` e são alternadas via JavaScript, usando rotas por hash:

- `#/` → Home
- `#/shop` → Catálogo
- `#/product?id=<slug>` → Detalhes do livro
- `#/cart` → Carrinho

## 6. Como rodar localmente

Basta abrir o `index.html` num navegador, ou servir a pasta com um servidor estático:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

---

## 7. Versionamento e Deploy

Esta seção documenta o processo de versionamento do projeto usando Git/GitHub e sua publicação via Vercel, conforme atividade prática de DevOps.

### 7.1 Publicação inicial no GitHub

1. Repositório criado em [github.com/nicollylemos/LivrariaDevOps](https://github.com/nicollylemos/LivrariaDevOps).
2. Projeto inicializado localmente e conectado ao repositório remoto:

```bash
git init
git add .
git commit -m "Versao inicial: Livraria em HTML, CSS e JS"
git branch -M main
git remote add origin https://github.com/nicollylemos/LivrariaDevOps.git
git push -u origin main
```

### 7.2 Deploy no Vercel

1. Conta Vercel conectada à conta GitHub `nicollylemos`.
2. Projeto importado via **Add New → Project**, selecionando o repositório `LivrariaDevOps`.
3. Configuração usada:
   - **Application Preset:** Other (projeto estático, sem framework)
   - **Root Directory:** `./`
   - Sem Build Command / Output Directory customizados.
4. Deploy publicado em: **https://livraria-dev-ops.vercel.app/**

O Vercel está integrado ao GitHub, então **todo `git push` na branch `main` dispara um novo deploy automaticamente** — não é necessário publicar manualmente a cada alteração.

### 7.3 Alteração do projeto e nova versão (commit + tag)

Após a publicação inicial, foi feita uma alteração no projeto (ajuste do texto de boas-vindas na Home) para simular um ciclo real de atualização:

```bash
git add .
git commit -m "Ajusta texto de boas-vindas da home"
git push origin main
```

Em seguida, a nova versão foi marcada com uma **tag anotada**, prática usada para identificar pontos estáveis do histórico (releases):

```bash
git tag -a v1.1 -m "Versao 1.1: ajuste no texto de boas-vindas"
git push origin v1.1
```

A tag `v1.1` fica visível na aba **Tags** do repositório no GitHub, apontando exatamente para o commit correspondente a essa versão. O push da tag não gera um novo deploy por si só no Vercel, quem dispara o deploy é o push do commit na branch `main`; a tag serve como marcação de versão no histórico do Git/GitHub.

### 7.4 Histórico de versões

| Tag | Descrição |
|---|---|
| `v1.0` *(opcional, retroativa)* | Versão inicial publicada. |
| `v1.1` | Ajuste no texto de boas-vindas da Home. |

Para conferir tags e commits localmente:

```bash
git log --oneline --graph --decorate
git tag
```

---

## 8. Grupo

Karina de Moraes Garcia
Mike Willy Franguelli Rodrigues
Nicolly Lemos da Silva
Pedro Henrique Cardozo Dias
Rafaela Mansano Fernandes
