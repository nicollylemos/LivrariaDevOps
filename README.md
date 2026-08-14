# Livraria

E-commerce de livros focado em edições de colecionador e curadoria literária. O design foi concebido para transmitir sofisticação, tradição e exclusividade, criando uma experiência de compra que remete ao ambiente acolhedor de uma biblioteca clássica.

**Site em produção:** https://livraria-dev-ops.vercel.app/  
**Repositório:** https://github.com/nicollylemos/LivrariaDevOps

---

## 1. Visão Geral do Projeto

O projeto **Livraria** é uma plataforma de e-commerce e biblioteca digital desenvolvida em **HTML, CSS e JavaScript puros** (sem frameworks ou build step), estruturada como uma SPA (*Single Page Application*) com roteamento por hash. 

Além da vitrine digital e fluxo de compras de edições especiais, a plataforma conta com:
- **Sistema de Autenticação Local:** Criação e conexão de contas diretamente no navegador (`localStorage`), sem necessidade de banco de dados externo.
- **Biblioteca Pessoal ("Meus Livros"):** Área dedicada para gerenciar as edições adquiridas e eleger um Pódio Literário (Top 3 Favoritos).
- **Leitor Digital Imersivo:** Experiência de leitura em tela cheia com navegação lateral por botões flutuantes.
- **Sistema Inteligente de Citações & Marcações:** Captura de trechos selecionados com o cursor, registrando automaticamente o número da página, o parágrafo (§) e a data da anotação.
- **Painel de Perfil Modular:** Gerenciamento dividido em abas elegantes (Dados Pessoais, Top 3 Livros, Pagamento e Segurança).

---

## 2. Identidade Visual (Design System)

### Paleta de Cores

| Cor | Hex | Uso |
|---|---|---|
| Off-White / Marfim | `#FAF9F6` | Cor predominante de fundo, proporcionando um visual limpo e editorial que reduz o cansaço visual. |
| Marrom Profundo | `#322214` / `#4A3728` | Utilizado para tipografia principal, botões e elementos estruturais, trazendo sobriedade e contraste clássico. |
| Ouro Envelhecido / Dourado | `#E9C349` / `#FED65B` | Cor de destaque para preços, ícones, pódios, marcações e linhas divisórias, simbolizando o valor das edições. |

### Tipografia

- **Playfair Display** — fonte serifada clássica utilizada em títulos, cabeçalhos e texto do leitor digital, reforçando o tom literário e elegante.
- **DM Sans** — tipografia auxiliar utilizada em textos de apoio, botões e controles de interface, garantindo legibilidade moderna.

### Logotipo

Monograma minimalista com o contorno de um livro em estilo *line art* dourado, posicionado no cabeçalho.

---

## 3. Arquitetura de Telas e Funcionalidades

### 3.1 Início (Home)
- **Banner de destaque:** Apresentação da principal obra em evidência com capa, sinopse poética e acesso rápido aos detalhes[cite: 1].
- **Novidades:** Carrossel com rolagem horizontal contendo os lançamentos recentes[cite: 1].
- **Coleções Curadas:** Blocos visuais temáticos que segmentam o acervo em Romances/Clássicos, Poesia e Filosofia[cite: 1].

### 3.2 Catálogo (Loja)
- **Filtros por categoria:** Seleção dinâmica por chips (*Todos*, *Romances*, *Poesia*, *Filosofia*, *Acessórios*)[cite: 1].
- **Grid de produtos:** Layout adaptável focado nas capas com detalhes dourados, autores e valores[cite: 1].
- **Botão de exploração:** Navegação direta por todo o catálogo[cite: 1].

### 3.3 Detalhes da Obra (Loja)
- **Visualização de capa:** Imagem em alta resolução com acabamento visual requintado[cite: 1].
- **Ficha e sinopse:** Detalhamento da edição e tags literárias[cite: 1].
- **Ação de compra:** Adição do item à sacola com toast de confirmação[cite: 1].
- **Cross-sell:** Seção "Selecionado Para Você" com sugestões baseadas na categoria da obra[cite: 1].

### 3.4 Carrinho de Compras
- **Listagem de itens:** Miniatura, título, edição e controles dinâmicos de quantidade (`+` / `-` / `Remover`)[cite: 1].
- **Resumo financeiro:** Cálculo em tempo real de subtotal, frete fixo, impostos e total[cite: 1].
- **Checkout integrado:** Ao finalizar o pedido, as obras compradas são automaticamente liberadas na seção **"Meus Livros"** do usuário conectado[cite: 1].

### 3.5 Meus Livros (Biblioteca Pessoal)
- **Pódio Literário (Top 3):** Mostruário de destaque visual apresentando o 1º, 2º e 3º colocado entre as obras adquiridas[cite: 1].
- **Grade da Coleção Pessoal:** Apenas os livros comprados pelo usuário ficam disponíveis para acesso e leitura[cite: 1].

### 3.6 Detalhes da Edição Adquirida
- **Capa e Sinopse da Obra Adquirida:** Visão completa do livro pertencente ao usuário[cite: 1].
- **Ações Compactas:** Botões dimensionados de forma elegante[cite: 1]:
  - **"Ler Livro":** Inicia o modo de leitura digital[cite: 1].
  - **"Marcações":** Abre o caderno de anotações e citações daquela obra[cite: 1].

### 3.7 Leitor Digital em Tela Inteira
- **Layout de Leitura Imersivo:** Folha de papel digitalizada com paginação e parágrafos estruturados e numerados (§)[cite: 1].
- **Navegação Lateral Flutuante:** Botões flutuantes fixos na esquerda e direita da tela para avançar ou retroceder páginas[cite: 1].
- **Citações Inteligentes ao Selecionar Texto:** Ao destacar qualquer trecho do texto com o mouse ou toque, um botão flutuante **"Adicionar Citação"** surge automaticamente sobre a seleção[cite: 1].
- **Metadados Automáticos:** Cada citação salva registra o trecho exato, o número da página, o parágrafo correspondente e a data/hora[cite: 1].

### 3.8 Marcações da Obra
- **Painel de Citações:** Listagem cronológica de todas as passagens anotadas durante a leitura, com badges informativos de página e parágrafo, além de opção para exclusão de anotações[cite: 1].

### 3.9 Meu Perfil & Autenticação
- **Cabeçalho Dinâmico:**[cite: 1]
  - Quando **desconectado**: Exibe o botão **"Entrar"** no canto superior direito[cite: 1].
  - Quando **conectado**: Exibe a foto de perfil com indicador de status online[cite: 1].
- **Autenticação Local (Navegador):** Abas de **Conectar Conta** e **Criar Conta**, com validação de duplicidade de e-mail e conferência de senha no `localStorage`[cite: 1].
- **Upload de Foto do Dispositivo:** Permite alterar o avatar clicando diretamente em cima da foto de perfil, carregando qualquer imagem do celular ou computador via `FileReader` (Base64)[cite: 1].
- **Abas Modulares no Perfil:**[cite: 1]
  1. **Dados Pessoais:** Edição de nome, sobrenome, e-mail e endereço de entrega[cite: 1].
  2. **Top 3 Livros:** Seleção dos livros adquiridos que ocuparão o 1º, 2º e 3º lugar no pódio[cite: 1].
  3. **Forma de Pagamento:** Preferência entre PIX e Cartão de Crédito com formulário de dados[cite: 1].
  4. **Segurança da Conta:** Alteração de senha, desconexão de sessão e exclusão definitiva da conta no navegador[cite: 1].

---

## 4. Navegação e Roteamento SPA

Todas as telas são executadas dentro do arquivo único `index.html` e gerenciadas via JavaScript pelo roteador por hash[cite: 1]:

| Rota | Descrição |
|---|---|
| `#/` | Página Inicial (Home) |
| `#/shop` | Catálogo Completo da Loja |
| `#/shop?category=<slug>` | Catálogo filtrado por gênero |
| `#/product?id=<slug>` | Detalhes do Produto na Loja |
| `#/cart` | Carrinho de Compras |
| `#/my-books` | Biblioteca Pessoal e Pódio Literário |
| `#/book-detail?id=<slug>` | Detalhes da Obra Adquirida |
| `#/reader?id=<slug>&page=<num>` | Leitor Digital em Tela Inteira |
| `#/book-annotations?id=<slug>` | Caderno de Marcações e Citações |
| `#/profile` | Meu Perfil / Tela de Login e Cadastro |
| `#/profile?tab=<aba>` | Aba específica do Perfil (`personal`, `top3`, `payment`, `security`) |

---

## 5. Estrutura de Arquivos

```
├── index.html   → Estrutura semântica de todas as views da SPA e containers modais
├── style.css    → Design system completo (paleta, tipografia, leitor, botões e responsividade)
├── script.js    → Catálogo, autenticação local, estante de leitura, citações e roteador SPA
└── README.md    → Documentação técnica, arquitetura e histórico de releases
```

Como é uma SPA, todas as telas vivem dentro do mesmo `index.html` e são alternadas via JavaScript, usando rotas por hash:

- `#/` → Home
- `#/shop` → Catálogo
- `#/product?id=<slug>` → Detalhes do livro
- `#/cart` → Carrinho

---

## 6. Como rodar localmente

Basta abrir o arquivo `index.html` em qualquer navegador web moderno, ou iniciar um servidor estático local:

```bash
# Com Python 3
python3 -m http.server 8080

# Ou com Node.js (npx)
npx serve .
Depois acesse http://localhost:8080 no navegador.

# Existe a opção de usar o live server
baixe a extenção "live server"
![alt text](image.png)

depois clique com o botãol direito sobre o index e selecione para rodar com live server
![alt text](image-1.png)

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
| `v0.1.0` | Versão inicial publicada. |
| `v0.1.1` | Ajuste no texto de boas-vindas da Home. |
| `v0.2.0` | Implementação da autenticação local no navegador, criação da estante "Meus Livros", pódio Top 3, leitor em tela cheia com navegação lateral, citações com marcação de página/parágrafo, upload de foto do dispositivo e reformulação modular do perfil em abas. |

Para conferir tags e commits localmente:

```bash
git log --oneline --graph --decorate
git tag
```

---

## 8. Integrantes do Grupo

```
Karina de Moraes Garcia
Mike Willy Franguelli
Nicolly Lemos da Silva
Pedro Henrique Cardozo Dias
Rafaela Mansano Fernandes
```