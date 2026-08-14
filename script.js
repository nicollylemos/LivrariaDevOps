/* ==========================================================================
   Livraria Elegance — Aurelian Folio
   Catálogo de livros, autenticação local, estante "Meus Livros" e Leitor em Tela Cheia.
   ========================================================================== */

/* ==========================================================================
   1) CATÁLOGO DE LIVROS
   ========================================================================== */
const BOOKS = [
  {
    id: "dorian-gray",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 42.0,
    category: "novels",
    tags: ["Romance", "Clássico", "Gótico"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVLaVc11v0JSIOLF4hZs5LlaO6kCSyRQR2WLnIGEO5I3tF4EvoOwGmCDZQ11vDlbfUh47kPaKbIOV4b3ta2btO7XcDWxgu5Jo7cXStO8KAj1ygxw83HNfEtkpZHd4BtnzjHK-bnwWDoMM0h59v9dY2gZQhaywwUphPUsaHHDU97w0GDOwxUMXbwq7DKte0lM7xf6S3FCJPF4a2NUOi43xFzzqyjn9YlJrUHrWXEOSwYI_woe7Cy55a9g",
    description: "Uma deslumbrante edição encadernada em tecido do único romance de Wilde, com detalhes dourados debossados e papel de qualidade arquival. Dorian Gray troca sua alma pela juventude eterna, enquanto seu retrato carrega as marcas de cada pecado — uma meditação inquietante sobre beleza, vaidade e corrupção.",
    pages: [
      [
        "O estúdio estava cheio do cheiro intenso de rosas, e quando a suave brisa de verão agitava as árvores do jardim, vinha através da porta aberta o perfume pesado do lilás, ou a fragrância mais delicada da flor de espinheiro-alvar.",
        "Deitado no canto do divã de sacos persas, fumando, como era seu hábito, inúmeros cigarros, Lorde Henry Wotton conseguia apenas vislumbrar o brilho das flores doces e douradas de um laburno.",
        "No centro da sala, sobre um cavalete vertical, erguia-se o retrato de corpo inteiro de um jovem de extraordinária beleza pessoal, e à sua frente estava sentado o próprio artista, Basil Hallward."
      ],
      [
        "Quando o artista olhou para a forma graciosa e fascinante que com tanta perícia havia espelhado em sua arte, um sorriso de prazer atravessou seu rosto e pareceu demorar-se ali.",
        "— É o seu melhor trabalho, Basil, a melhor coisa que você já fez — disse Lorde Henry languidamente. — Você deve enviá-lo no próximo ano para a Grosvenor. A Academia é muito grande e vulgar.",
        "— Eu não vou enviá-lo a lugar nenhum — respondeu ele, jogando a cabeça para trás naquele modo estranho que fazia seus amigos rirem dele em Oxford. — Não, eu não vou expor este quadro em lugar algum."
      ]
    ],
    featured: true
  },
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    price: 45.0,
    category: "philosophy",
    tags: ["Filosofia", "Estoicismo", "Clássico"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1dhMF2ez2Nd7dKTL-xynDrqOBhQKjSLTkZZEnpq5vN6aZ0jY1N-tKliqyeL5Xe5r9D18wToM6mZaxYZapzGdgCVGwoAhd6fVXaCX0jzN-gnnx3HCRuZu2_886imvCz5k8qo39FzkUDJlkk5frsD2QVB5y48elKywpcPU36s9ssYdg6hOsn7fjMgUf31CWDbcQSxO7RxtMfTiB7jUphSK7FG6g7J2uKCIA6H0LYFZSjSWFMBIbKZAaGg",
    description: "O diário particular de um imperador romano, Meditações continua sendo uma das obras de filosofia mais duradouras já escritas — um guia para a virtude, a resiliência e o pensamento claro.",
    pages: [
      [
        "Logo pela manhã, diga a si mesmo: hoje encontrarei pessoas intrometidas, ingratas, arrogantes, desonestas, ciumentas e antipáticas.",
        "Elas são assim porque não conseguem distinguir o bem do mal. Mas eu vi a beleza do bem e a feiura do mal, e reconheci que o malfeitor tem uma natureza semelhante à minha.",
        "Nenhum deles pode me machucar. Ninguém pode me envolver no que é degradante. Nem posso ficar zangado com meu irmão ou odiá-lo."
      ],
      [
        "Lembre-se de há quanto tempo você adia essas coisas e quantas vezes recebeu oportunidades dos deuses sem utilizá-las.",
        "Você precisa agora finalmente perceber de que cosmos você é parte, e qual regente do cosmos gerou sua existência.",
        "Existe um limite circunscrito para o seu tempo; se você não o usar para clarear sua mente, ele se esgotará, você se esgotará, e nunca mais a chance retornará."
      ]
    ],
    featured: false
  },
  {
    id: "leaves-of-grass",
    title: "Leaves of Grass",
    author: "Walt Whitman",
    price: 32.0,
    category: "poetry",
    tags: ["Poesia", "Clássico", "1ª Edição"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBriXUr4NZ-vrTKVMv5IL3t-gAZYbDVKhTj3ltC5TN838BxM1IXon_IIBUkBPPt-GjLKmAj5IfwBRc2toXAOrSLC8UfwFXfd4-ZVn2Kx-71GFaPOt0Z9Wa_OLTS9Y2C2jsckPd2ujQwV-5rjaRrke9ubz4fi2--mNyqiLKiGfv2RuzsiQgY4chx72WGsMwstci9QlztwAN6o0HM2KSE9y_yfXcFw1lZH2fCRvtnfy37sX281OH0sDXyCA",
    description: "Um marco da literatura americana, Folhas de Relva, de Walt Whitman, é uma celebração profunda do eu, do espírito humano e da vasta paisagem democrática da América.",
    pages: [
      [
        "Eu celebro a mim mesmo e canto a mim mesmo, e o que eu assumo você assumirá, pois cada átomo pertencente a mim pertence a você.",
        "Vagueio e convido minha alma, inclino-me e repouso à vontade observando uma haste de capim de verão.",
        "Minha língua, cada átomo de meu sangue, formados a partir deste solo, deste ar; nascido aqui de pais nascidos aqui, de pais os mesmos e seus pais os mesmos."
      ]
    ],
    featured: false
  },
  {
    id: "silent-woods",
    title: "The Silent Woods",
    author: "Clara Vance",
    price: 36.0,
    category: "novels",
    tags: ["Romance", "Lançamento"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0BZwi8rK64cuPg8PW4Zm5u2DxBvclhLjNVsowmWlxyGbG8jMrP2SxYJf5j2Yf6TFmPwWrnPQT4j2otUhJiBtPWMFdsn0YPFQzYWqCx0kTGXhBQvgq6gWpokWdoVzN4BF1sfejXQceG9M3MRvtyS2vSZWAiQ1PpQIfZk81yCXanSmYPeIz6dNlaBKeZwyP0e1oT3ji_NO4hXJiHtEcFth66qaWEQmUsYXpoeElM2GNdwl9fQggTLPohA",
    description: "Um romance de estreia silenciosamente devastador sobre memória, luto e os bosques que guardam nossos segredos.",
    pages: [
      [
        "As árvores não guardavam silêncio por falta de palavras, mas pela solenidade de tudo o que testemunharam.",
        "Caminhar por entre as faias era reabrir capítulos que o tempo tentara sepultar sob o musgo úmido da floresta do norte."
      ]
    ],
    featured: false
  },
  {
    id: "beyond-good-evil",
    title: "Beyond Good & Evil",
    author: "Friedrich Nietzsche",
    price: 55.0,
    category: "philosophy",
    tags: ["Filosofia", "Clássico"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBySoewLocrubi5g9G1SH4piqRT4AfNhpLdsd1QLGAg1bbhtkjxTMQLjCk3NiERXRzRbneqi0ux53wMjM4W6rgZfhRCo9YKY3vMWqZTSEC6lDQTKRCB3KEgJ1d_3aPfvzLHO6k1M0o_q1iRRKz-ht_TFbTjoA5V3NEx-1YMeH75d5qliCHoxCH_vGvj724GygxyE1r-5gYr2H543Xy6FB1dsPltw69KIaKUf6jJkDC0AzpA4QIldsAdPg",
    description: "O prelúdio de Nietzsche a uma filosofia do futuro — uma crítica ousada aos filósofos do passado e um chamado para ir além da moralidade convencional.",
    pages: [
      [
        "A vontade de verdade, que ainda nos tentará a muitos empreendimentos perigosos, essa famosa veracidade de que todos os filósofos falaram até hoje com reverência: que perguntas essa vontade de verdade já não nos colocou!",
        "Que mistérios estranhos, perversos, problemáticos! Foi a vontade de verdade que nos levou até aqui, ou fomos nós que a interrogamos?"
      ]
    ],
    featured: false
  },
  {
    id: "walden",
    title: "Walden",
    author: "Henry David Thoreau",
    price: 28.0,
    category: "philosophy",
    tags: ["Filosofia", "Natureza"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD9byzQBrzc7CedwKJOkTjOgvCUzDnuw8tNUedSZACM2ZLJbCd16LJ8VmPL_gb68k_6qZcfDx9ktLSO6MLSlxgeEyjjx63ceD7mxw2OVdRnLs5LaBwA_YAw3-8Z7L0ejZeLOboPMKH7XHJ56ePOcaWqLgRhXOGZeyf2MJA2ikQh6RRaWPGjkT8N-lZCr0Hk3E-_6nAnHj68wZWp9q90Z6FUrQMrc-0UkZYpMJ-VxVYlWmGBwCGba3iVA",
    description: "As reflexões de Thoreau sobre a vida simples em contato com a natureza — um texto fundamental da tradição americana.",
    pages: [
      [
        "Fui para os bosques porque desejava viver deliberadamente, defrontar apenas com os fatos essenciais da vida e ver se não poderia aprender o que ela tinha a ensinar.",
        "Não queria viver o que não era vida, a vida é tão preciosa; nem desejava praticar a resignação, a menos que fosse totalmente necessária.",
        "Queria viver profundamente e sugar toda a medula da vida, viver de maneira tão vigorosa e espartana a ponto de pôr em debandada tudo o que não fosse vida."
      ]
    ],
    featured: false
  },
  {
    id: "moby-dick",
    title: "Moby-Dick",
    author: "Herman Melville",
    price: 35.0,
    category: "novels",
    tags: ["Romance", "Clássico"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAmu9N__4qcqloaGCs7FzSxvEQzjPHbhyomLFxfx4Kny4laHitYS23bKUWVmgIiogKd7rZ_zmf0XzclZGi0QoutwJIOsfQHgm1AoRsRQLg8w6-jpSkZdNoj2PBu7epxBCJqZuCL5b3Va797wXOUuY8qA3mtdpyKVdUaRLW0_AFV0jDGxOxHr1rKbJ1HKEBJZDQwriEeqENglqWR0cxxiMtgqC0YJm3JnzcfdSHkKlhyvtpNTo8hLEdzQ",
    description: "A saga épica de Melville sobre obsessão e o mar — a perseguição do Capitão Ahab à grande baleia branca.",
    pages: [
      [
        "Chamem-me Ishmael. Há alguns anos — não importa quantos exatamente —, com pouco ou nenhum dinheiro na carteira e nada de particular para me interessar em terra firme, achei que navegaria um pouco e veria a parte aquática do mundo.",
        "É uma maneira que tenho de espantar a melancolia e regular a circulação sanguínea."
      ]
    ],
    featured: false
  },
  {
    id: "great-gatsby",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 45.0,
    category: "novels",
    tags: ["Romance", "Réplica de 1ª Edição"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIuQ-74RuxVm03I17rT8gLlD1XoQnRq6Da3zAbqUlhFcB7MbP7pd-CJfzpFd6YOw22U--sez1NVN-ZY2GW3qQhva54mOyc3QNhETuZbfpOP3QmPpWJaELv6E3gEf3kRSe3GHhPVIPZjsNczhcJcW-WPujkgzop1pGum18xLv90iARfxM__YW5Edvoys8EeorkAr-MYAbh83t3dCVZeffH93ZepC8mcpkQfQkb70TLiqi7_KWDm3fqbXg",
    description: "Uma réplica da primeira edição da obra-prima de Fitzgerald sobre a Era do Jazz.",
    pages: [
      [
        "Nos meus anos mais jovens e vulneráveis, meu pai me deu um conselho que guardo na cabeça desde então.",
        "— Sempre que você tiver vontade de criticar alguém — ele me disse —, lembre-se de que nem todas as pessoas deste mundo tiveram as mesmas oportunidades que você teve."
      ]
    ],
    featured: false
  },
  {
    id: "brass-bookmark",
    title: "Brass Bookmark",
    author: "Feather Motif",
    price: 15.0,
    category: "accessories",
    tags: ["Acessório", "Feito à Mão"],
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&q=80",
    description: "Um marcador de páginas em latão, delicadamente moldado em formato de pena.",
    pages: [
      ["Acessório físico para leitura. Não possui conteúdo digital."]
    ],
    featured: false
  }
];

function getBookById(id){ return BOOKS.find(b => b.id === id); }
function getFeaturedBook(){ return BOOKS.find(b => b.featured) || BOOKS[0]; }
function formatPrice(n){ return "$" + n.toFixed(2); }

/* ==========================================================================
   2) BANCO LOCAL DE CONTAS & SESSÃO (localStorage)
   ========================================================================== */
const USERS_STORAGE_KEY = "aurelian_folio_users_v2";
const SESSION_KEY = "aurelian_folio_session_email_v2";
const ANNOTATIONS_KEY = "aurelian_folio_annotations_v2";

const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80";

function getAllUsers(){
  try {
    const data = localStorage.getItem(USERS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch(e) {
    return [];
  }
}

function saveAllUsers(users){
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function getCurrentUserEmail(){
  return localStorage.getItem(SESSION_KEY);
}

function setCurrentUserEmail(email){
  if(email){
    localStorage.setItem(SESSION_KEY, email);
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

function getActiveUserProfile(){
  const email = getCurrentUserEmail();
  if(!email) return null;
  const users = getAllUsers();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
}

function saveActiveUserProfile(profile){
  const users = getAllUsers();
  const index = users.findIndex(u => u.email.toLowerCase() === profile.email.toLowerCase());
  if(index !== -1){
    users[index] = profile;
    saveAllUsers(users);
  }
  updateHeaderAvatar();
}

function updateHeaderAvatar(){
  const profile = getActiveUserProfile();
  const headerAvatar = document.getElementById("header-avatar");
  const avatarStatus = document.getElementById("avatar-status");
  if(headerAvatar){
    headerAvatar.src = (profile && profile.avatar) ? profile.avatar : defaultAvatar;
  }
  if(avatarStatus){
    avatarStatus.className = `avatar-status ${profile ? 'online' : 'offline'}`;
  }
}

/* ==========================================================================
   3) MARCAÇÕES / CITAÇÕES (COM PÁGINA E PARÁGRAFO)
   ========================================================================== */
function getAnnotations(userEmail, bookId){
  try{
    const raw = localStorage.getItem(`${ANNOTATIONS_KEY}_${userEmail}_${bookId}`);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}

function saveAnnotation(userEmail, bookId, text, pageNum, paragraphNum){
  const list = getAnnotations(userEmail, bookId);
  const now = new Date().toLocaleDateString("pt-BR", { hour: '2-digit', minute: '2-digit' });
  list.unshift({
    id: Date.now(),
    text,
    page: pageNum || 1,
    paragraph: paragraphNum || 1,
    date: now
  });
  localStorage.setItem(`${ANNOTATIONS_KEY}_${userEmail}_${bookId}`, JSON.stringify(list));
}

function removeAnnotation(userEmail, bookId, annId){
  let list = getAnnotations(userEmail, bookId);
  list = list.filter(a => a.id !== annId);
  localStorage.setItem(`${ANNOTATIONS_KEY}_${userEmail}_${bookId}`, JSON.stringify(list));
}

/* ==========================================================================
   4) CARRINHO (localStorage)
   ========================================================================== */
const CART_KEY = "aurelian_folio_cart_v2";

function getCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
}

function addToCart(bookId, qty = 1){
  const cart = getCart();
  const existing = cart.find(i => i.id === bookId);
  if(existing){
    existing.qty += qty;
  }else{
    cart.push({ id: bookId, qty });
  }
  saveCart(cart);
}

function updateQty(bookId, delta){
  const cart = getCart();
  const item = cart.find(i => i.id === bookId);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0){
    removeFromCart(bookId);
    return;
  }
  saveCart(cart);
  renderCartIfPresent();
}

function removeFromCart(bookId){
  let cart = getCart();
  cart = cart.filter(i => i.id !== bookId);
  saveCart(cart);
  renderCartIfPresent();
}

function cartCount(){
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartBadges(){
  const count = cartCount();
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    if(count > 0){
      el.textContent = count;
      el.style.display = "flex";
    }else{
      el.style.display = "none";
    }
  });
}

let toastTimer = null;
function showToast(message){
  let toast = document.querySelector(".toast");
  if(!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  requestAnimationFrame(() => toast.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9.5a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/></svg>`,
  shop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h1.5l1.7 9.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h1.5l1.7 9.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 6-6 6 6 6"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  logo: `<svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M10 9h12M10 16h12M10 23h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6L22 9.3l-5 4.9 1.2 7.1L12 17.9l-6.2 3.4L7 14.2 2 9.3l7.1-.7z"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>`,
  bookmark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`,
  openBook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  chevronLeft: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,
  chevronRight: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`
};

/* ==========================================================================
   5) COMPONENTES DA INTERFACE (HEADER COM BOTÃO DE ENTRAR OU AVATAR)
   ========================================================================== */
function buildHeader(pageTitle, opts = {}){
  const profile = getActiveUserProfile();
  const header = document.createElement("header");
  header.className = "site-header";

  const backBtn = opts.showBack
    ? `<button class="back-btn" onclick="history.back()" aria-label="Voltar">${ICONS.back}</button>`
    : "";

  const profileAction = profile
    ? `
      <a href="#/profile" class="avatar-link" title="Meu Perfil">
        <img class="avatar" id="header-avatar" alt="Perfil" src="${profile.avatar || defaultAvatar}"/>
        <span id="avatar-status" class="avatar-status online"></span>
      </a>
    `
    : `
      <a href="#/profile" class="header-signin-btn">
        Entrar
      </a>
    `;

  header.innerHTML = `
    <div class="container">
      <div class="flex items-center" style="gap:4px;">
        ${backBtn}
        <a href="#/" class="brand" style="${opts.showBack ? 'margin-left:4px;' : ''}">
          <span class="brand-mark">${ICONS.logo}</span>
          <span class="brand-title">${opts.hideTitle ? "Livraria Elegance" : pageTitle}</span>
        </a>
      </div>
      <nav class="header-nav">
        <a href="#/" data-nav="home">Início</a>
        <a href="#/shop" data-nav="shop">Loja</a>
        <a href="#/my-books" data-nav="my-books">Meus Livros</a>
        <a href="#/cart" data-nav="cart">Carrinho</a>
      </nav>
      <div class="header-right">
        <a class="icon-btn" href="#/cart" aria-label="Carrinho">
          ${ICONS.cart}
          <span class="cart-badge" data-cart-count style="display:none;"></span>
        </a>
        ${profileAction}
      </div>
    </div>
  `;
  return header;
}

function buildBottomNav(active){
  const profile = getActiveUserProfile();
  const nav = document.createElement("nav");
  nav.className = "bottom-nav";
  const items = [
    { key: "home", href: "#/", label: "Início", icon: ICONS.home },
    { key: "shop", href: "#/shop", label: "Loja", icon: ICONS.shop },
    { key: "my-books", href: "#/my-books", label: "Meus Livros", icon: ICONS.book },
    { key: "cart", href: "#/cart", label: "Carrinho", icon: ICONS.cart, badge: true },
    { key: "profile", href: "#/profile", label: profile ? "Perfil" : "Entrar", icon: ICONS.user },
  ];
  nav.innerHTML = items.map(it => `
    <a href="${it.href}" class="${active === it.key ? 'active' : ''}">
      ${it.icon}
      <span>${it.label}</span>
      ${it.badge ? `<span class="nav-badge" data-cart-count style="display:none;"></span>` : ""}
    </a>
  `).join("");
  return nav;
}

function mountShell({ title, active, showBack = false, hideTitle = false }){
  document.querySelectorAll("header.site-header, nav.bottom-nav").forEach(el => el.remove());

  const header = buildHeader(title, { showBack, hideTitle });
  document.body.prepend(header);

  const nav = document.querySelectorAll("header.site-header .header-nav a");
  nav.forEach(a => { if(a.dataset.nav === active) a.classList.add("active"); });

  const bottomNav = buildBottomNav(active);
  document.body.appendChild(bottomNav);

  updateCartBadges();
}

function renderCartIfPresent(){
  if(document.querySelector('[data-view="cart"]:not([hidden])')){
    renderCartView();
  }
}

/* ==========================================================================
   6) ROTEADOR SPA
   ========================================================================== */
function parseHash(){
  const hash = location.hash.replace(/^#/, "") || "/";
  const [path, queryString] = hash.split("?");
  const params = new URLSearchParams(queryString || "");
  return { path: path || "/", params };
}

function showView(name){
  document.querySelectorAll("[data-view]").forEach(el => {
    el.hidden = el.dataset.view !== name;
  });
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function router(){
  const { path, params } = parseHash();
  hideFloatingQuoteBtn();

  if(path === "/" || path === ""){
    showView("home");
    renderHomeView();
    mountShell({ title: "Início", active: "home" });

  }else if(path === "/shop"){
    showView("shop");
    renderShopView(params.get("category"));
    mountShell({ title: "Loja", active: "shop" });

  }else if(path === "/product"){
    showView("product");
    renderProductView(params.get("id"));
    mountShell({ title: "Detalhes do Livro", active: "shop", showBack: true });

  }else if(path === "/my-books"){
    showView("my-books");
    renderMyBooksView();
    mountShell({ title: "Meus Livros", active: "my-books" });

  }else if(path === "/book-detail"){
    showView("book-detail");
    renderBookDetailView(params.get("id"));
    mountShell({ title: "Detalhes da Edição", active: "my-books", showBack: true });

  }else if(path === "/reader"){
    showView("reader");
    renderFullReaderView(params.get("id"), parseInt(params.get("page") || "1", 10));
    mountShell({ title: "Leitura Digital", active: "my-books", showBack: true });

  }else if(path === "/book-annotations"){
    showView("book-annotations");
    renderBookAnnotationsView(params.get("id"));
    mountShell({ title: "Marcações da Obra", active: "my-books", showBack: true });

  }else if(path === "/cart"){
    showView("cart");
    renderCartView();
    mountShell({ title: "Carrinho", active: "cart" });

  }else if(path === "/profile"){
    showView("profile");
    renderProfileView(params.get("tab") || "personal");
    mountShell({ title: "Perfil", active: "profile" });

  }else{
    location.hash = "#/";
  }
}

/* ---------------- View: Início ---------------- */
function renderHomeView(){
  const featured = getFeaturedBook();
  document.getElementById("featured-img").src = featured.cover;
  document.getElementById("featured-img").alt = featured.title;
  document.getElementById("featured-title").textContent = featured.title;
  document.getElementById("featured-author").textContent = featured.author;
  document.getElementById("featured-desc").textContent = featured.description.split("\n")[0];
  document.getElementById("featured-card").href = `#/product?id=${featured.id}`;

  const arrivals = BOOKS.filter(b => b.id !== featured.id).slice(0, 8);
  const arrivalsEl = document.getElementById("new-arrivals");
  arrivalsEl.innerHTML = arrivals.map(b => `
    <a class="book-card" href="#/product?id=${b.id}">
      <div class="book-cover">
        <img src="${b.cover}" alt="${b.title}" loading="lazy"/>
      </div>
      <h4>${b.title}</h4>
      <p class="author">${b.author}</p>
      <p class="price">${formatPrice(b.price)}</p>
    </a>
  `).join("");
}

/* ---------------- View: Loja ---------------- */
function renderShopView(preselectCategory){
  const grid = document.getElementById("book-grid");
  const chips = document.querySelectorAll("#filters .chip");

  function renderGrid(category){
    const list = category === "all" ? BOOKS : BOOKS.filter(b => b.category === category);
    grid.innerHTML = list.map(b => `
      <a class="book-card" href="#/product?id=${b.id}">
        <div class="book-cover">
          <img src="${b.cover}" alt="${b.title}" loading="lazy"/>
          <div class="frame"></div>
        </div>
        <div class="meta">
          <h3 class="headline-sm" style="font-size:18px;">${b.title}</h3>
          <p class="label-caps text-muted" style="margin:4px 0;">${b.author}</p>
          <span class="price">${formatPrice(b.price)}</span>
        </div>
      </a>
    `).join("") || `<p class="text-muted" style="grid-column:1/-1;text-align:center;padding:40px 0;">Nenhum título nesta coleção ainda.</p>`;
  }

  chips.forEach(chip => {
    chip.onclick = () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      renderGrid(chip.dataset.cat);
    };
  });

  if(preselectCategory && [...chips].some(c => c.dataset.cat === preselectCategory)){
    chips.forEach(c => c.classList.remove("active"));
    document.querySelector(`.chip[data-cat="${preselectCategory}"]`).classList.add("active");
    renderGrid(preselectCategory);
  }else{
    chips.forEach(c => c.classList.remove("active"));
    document.querySelector('.chip[data-cat="all"]').classList.add("active");
    renderGrid("all");
  }
}

/* ---------------- View: Detalhes da Loja ---------------- */
function renderProductView(id){
  const book = getBookById(id) || BOOKS[0];

  document.title = `Livraria Elegance — ${book.title}`;
  document.getElementById("product-img").src = book.cover;
  document.getElementById("product-img").alt = book.title;
  document.getElementById("product-title").textContent = book.title;
  document.getElementById("product-author").textContent = book.author;
  document.getElementById("product-price").textContent = formatPrice(book.price);
  document.getElementById("product-desc").innerHTML = book.description
    .split("\n\n")
    .map(p => `<span style="display:block;margin-bottom:16px;">${p}</span>`)
    .join("");
  document.getElementById("product-tags").innerHTML = book.tags
    .map(t => `<span class="tag">${t}</span>`).join("");

  document.getElementById("add-to-cart-btn").onclick = () => {
    addToCart(book.id, 1);
    showToast(`"${book.title}" foi adicionado à sua sacola`);
  };

  const related = BOOKS.filter(b => b.category === book.category && b.id !== book.id).slice(0, 4);
  const fallback = related.length ? related : BOOKS.filter(b => b.id !== book.id).slice(0, 4);
  document.getElementById("cross-sell").innerHTML = fallback.map(b => `
    <a class="book-card" href="#/product?id=${b.id}">
      <div class="book-cover">
        <img src="${b.cover}" alt="${b.title}" loading="lazy"/>
      </div>
      <h4>${b.title}</h4>
      <p class="author">${b.author}</p>
      <p class="price">${formatPrice(b.price)}</p>
    </a>
  `).join("");
}

/* ---------------- View: Carrinho ---------------- */
const SHIPPING = 8.00;
const TAX_RATE = 0.08;

function renderCartView(){
  const cart = getCart();
  const content = document.getElementById("cart-content");
  const heading = document.getElementById("cart-heading");
  const subheading = document.getElementById("cart-subheading");

  if(cart.length === 0){
    heading.textContent = "Sua Sacola";
    subheading.textContent = "Sua sacola está vazia.";
    content.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 16px;"><path d="M6 7h12l1 13H5z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>
        <p class="body-md">Nenhum livro por aqui ainda. Comece a explorar nossa coleção selecionada.</p>
        <a href="#/shop" class="btn btn-primary" style="margin-top:20px;">Ver a Loja</a>
      </div>`;
    return;
  }

  const items = cart.map(ci => ({ ...ci, book: getBookById(ci.id) })).filter(ci => ci.book);
  const totalItems = items.reduce((s, i) => s + i.qty, 0);
  subheading.textContent = `${totalItems} ${totalItems !== 1 ? "itens" : "item"} pronto${totalItems !== 1 ? "s" : ""} para o checkout.`;

  const itemsHtml = items.map((item, idx) => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.book.cover}" alt="${item.book.title}"/>
      <div class="cart-item-body">
        <div>
          <h2>${item.book.title}</h2>
          <p class="variant">${item.book.tags[0] || item.book.author}</p>
        </div>
        <div class="cart-item-row">
          <span class="price">${formatPrice(item.book.price)}</span>
          <div class="qty-control">
            <button class="qty-btn" aria-label="Diminuir quantidade" data-action="dec" data-id="${item.id}">${ICONS.minus}</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" aria-label="Aumentar quantidade" data-action="inc" data-id="${item.id}">${ICONS.plus}</button>
          </div>
        </div>
        <button class="remove-btn" data-action="rm" data-id="${item.id}">Remover</button>
      </div>
    </div>
    ${idx < items.length - 1 ? '<div class="rule"></div>' : ""}
  `).join("");

  const subtotal = items.reduce((s, i) => s + i.book.price * i.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING + tax;

  content.innerHTML = `
    <div class="cart-list">${itemsHtml}</div>
    <div class="order-summary">
      <h2 class="headline-sm text-primary">Resumo do Pedido</h2>
      <div class="summary-row"><span>Subtotal</span><span class="amt">${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Frete</span><span class="amt">${formatPrice(SHIPPING)}</span></div>
      <div class="summary-row"><span>Imposto</span><span class="amt">${formatPrice(tax)}</span></div>
      <div class="summary-total"><span>Total</span><span class="amt">${formatPrice(total)}</span></div>
      <button class="btn btn-primary btn-block" id="checkout-btn">
        Finalizar Compra
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
      <p class="secure-note">Checkout seguro fornecido pela Elegance.</p>
    </div>
  `;

  content.querySelectorAll("[data-action]").forEach(btn => {
    const id = btn.dataset.id;
    const action = btn.dataset.action;
    btn.onclick = () => {
      if(action === "inc") updateQty(id, 1);
      else if(action === "dec") updateQty(id, -1);
      else if(action === "rm") removeFromCart(id);
    };
  });

  document.getElementById("checkout-btn").addEventListener("click", () => {
    const profile = getActiveUserProfile();
    if(profile){
      if(!profile.purchasedBookIds) profile.purchasedBookIds = [];
      items.forEach(i => {
        if(!profile.purchasedBookIds.includes(i.id)){
          profile.purchasedBookIds.push(i.id);
        }
      });
      saveActiveUserProfile(profile);
    }
    showToast("Compra finalizada com sucesso!");
    saveCart([]);
    setTimeout(renderCartView, 600);
  });
}

/* ==========================================================================
   7) VIEW: MEUS LIVROS (BIBLIOTECA PESSOAL & PÓDIO TOP 3)
   ========================================================================== */
function renderMyBooksView(){
  const container = document.getElementById("my-books-content");
  const profile = getActiveUserProfile();

  if(!profile){
    container.innerHTML = `
      <div class="auth-box">
        <div style="width:56px; height:56px; background:var(--surface-container); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; color:var(--primary);">
          ${ICONS.book}
        </div>
        <h2 class="headline-md text-primary" style="margin-bottom:8px;">Acesse sua Biblioteca</h2>
        <p class="body-md text-muted" style="margin-bottom:24px;">Conecte ou crie sua conta para visualizar seus livros adquiridos, ler obras e consultar suas marcações.</p>
        <a href="#/profile" class="btn btn-primary btn-block">Conectar ou Criar Conta</a>
      </div>
    `;
    return;
  }

  const purchasedIds = profile.purchasedBookIds || [];
  const purchasedBooks = BOOKS.filter(b => purchasedIds.includes(b.id));

  // Render Top 3 Pódio
  const ranked = profile.top3Ranked || {};
  const firstBook = getBookById(ranked.first);
  const secondBook = getBookById(ranked.second);
  const thirdBook = getBookById(ranked.third);

  const top3Html = `
    <div class="profile-card" style="margin-bottom:32px;">
      <h3 class="profile-section-title">Meu Pódio Literário (Top 3 Favoritos)</h3>
      <p class="profile-section-desc">Seus livros eleitos em 1º, 2º e 3º lugar na sua estante pessoal.</p>
      
      <div class="top3-showcase">
        <div class="top3-card">
          <span class="top3-rank">1º LUGAR</span>
          ${firstBook ? `
            <img src="${firstBook.cover}" alt="${firstBook.title}"/>
            <h5>${firstBook.title}</h5>
            <p>${firstBook.author}</p>
          ` : `<div style="padding:32px 0; font-size:12px; color:var(--outline);">Não definido</div>`}
        </div>
        
        <div class="top3-card">
          <span class="top3-rank">2º LUGAR</span>
          ${secondBook ? `
            <img src="${secondBook.cover}" alt="${secondBook.title}"/>
            <h5>${secondBook.title}</h5>
            <p>${secondBook.author}</p>
          ` : `<div style="padding:32px 0; font-size:12px; color:var(--outline);">Não definido</div>`}
        </div>

        <div class="top3-card">
          <span class="top3-rank">3º LUGAR</span>
          ${thirdBook ? `
            <img src="${thirdBook.cover}" alt="${thirdBook.title}"/>
            <h5>${thirdBook.title}</h5>
            <p>${thirdBook.author}</p>
          ` : `<div style="padding:32px 0; font-size:12px; color:var(--outline);">Não definido</div>`}
        </div>
      </div>
      <div style="text-align:right;">
        <a href="#/profile?tab=top3" class="btn btn-ghost" style="font-size:11px;">Alterar Ordem do Top 3 no Perfil &rarr;</a>
      </div>
    </div>
  `;

  let booksGridHtml = "";
  if(purchasedBooks.length === 0){
    booksGridHtml = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 16px;"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/></svg>
        <p class="body-md">Você ainda não adquiriu nenhum livro em sua conta.</p>
        <a href="#/shop" class="btn btn-primary" style="margin-top:16px;">Explorar Livraria</a>
      </div>
    `;
  } else {
    booksGridHtml = `
      <h3 class="headline-sm text-primary" style="margin-bottom:16px;">Coleção Pessoal (${purchasedBooks.length})</h3>
      <div class="my-library-grid">
        ${purchasedBooks.map(b => `
          <div class="my-book-card" onclick="location.hash='#/book-detail?id=${b.id}'">
            <img src="${b.cover}" alt="${b.title}" class="my-book-cover"/>
            <h4 style="font-family:var(--font-serif); font-size:16px; margin:0 0 4px; color:var(--primary);">${b.title}</h4>
            <p style="font-size:12px; color:var(--on-surface-variant); margin:0 0 12px;">${b.author}</p>
            <button class="btn btn-outline btn-block" style="padding:8px 12px; font-size:11px; margin-top:auto;">Acessar Obra</button>
          </div>
        `).join("")}
      </div>
    `;
  }

  container.innerHTML = top3Html + booksGridHtml;
}

/* ==========================================================================
   8) VIEW: DETALHES DO LIVRO ADQUIRIDO (BOTÕES COMPACTOS)
   ========================================================================== */
function renderBookDetailView(bookId){
  const book = getBookById(bookId);
  const container = document.getElementById("book-detail-content");
  if(!book){
    location.hash = "#/my-books";
    return;
  }

  container.innerHTML = `
    <div class="profile-card" style="padding:40px;">
      <div class="product-layout" style="padding-top:0;">
        <div class="product-hero" style="max-width:320px; margin:0 auto;">
          <img src="${book.cover}" alt="${book.title}"/>
        </div>
        <div class="product-info" style="display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div class="label-caps text-secondary" style="margin-bottom:8px;">Edição Adquirida</div>
            <h1 class="headline-md text-primary" style="margin:0 0 6px;">${book.title}</h1>
            <p class="author" style="font-style:italic; font-size:20px; color:var(--on-surface-variant); margin:0 0 20px;">${book.author}</p>
            
            <div class="rule-gold" style="margin:0 0 20px 0;"></div>
            
            <h4 class="label-caps text-primary" style="margin-bottom:8px;">Sinopse</h4>
            <p class="body-md text-muted" style="line-height:1.7;">${book.description}</p>
          </div>

          <!-- Botões Menores e Mais Elegantes -->
          <div class="book-detail-actions">
            <a href="#/reader?id=${book.id}&page=1" class="book-action-btn book-action-btn-primary">
              ${ICONS.openBook}
              <span>Ler Livro</span>
            </a>
            <a href="#/book-annotations?id=${book.id}" class="book-action-btn book-action-btn-outline">
              ${ICONS.bookmark}
              <span>Marcações</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   9) VIEW: LEITOR COMPLETO EM TELA COM BOTÕES FLUTUANTES LATERAIS
   ========================================================================== */
let activeReaderContext = null;

function renderFullReaderView(bookId, pageNum = 1){
  const book = getBookById(bookId);
  const container = document.getElementById("reader-page-content");
  const profile = getActiveUserProfile();

  if(!book || !profile){
    location.hash = "#/my-books";
    return;
  }

  const pages = book.pages || [["Texto não disponível para esta edição."]];
  const totalPages = pages.length;
  const currentPage = Math.max(1, Math.min(pageNum, totalPages));
  const paragraphs = pages[currentPage - 1] || [];

  activeReaderContext = {
    bookId: book.id,
    page: currentPage
  };

  container.innerHTML = `
    <!-- Botão Flutuante Esquerdo: Página Anterior -->
    <button class="floating-nav-btn left" id="floating-prev-btn" title="Página Anterior" ${currentPage === 1 ? 'disabled' : ''}>
      ${ICONS.chevronLeft}
    </button>

    <!-- Botão Flutuante Direito: Próxima Página -->
    <button class="floating-nav-btn right" id="floating-next-btn" title="Próxima Página" ${currentPage === totalPages ? 'disabled' : ''}>
      ${ICONS.chevronRight}
    </button>

    <div class="reader-toolbar">
      <a href="#/book-detail?id=${book.id}" class="btn btn-ghost" style="font-size:12px;">&larr; Voltar aos Detalhes</a>
      <div style="text-align:center;">
        <span class="headline-sm" style="font-size:18px; display:block;">${book.title}</span>
        <span class="label-caps text-secondary" style="font-size:11px;">Página ${currentPage} de ${totalPages}</span>
      </div>
      <a href="#/book-annotations?id=${book.id}" class="btn btn-outline" style="font-size:11px; padding:8px 16px;">
        ${ICONS.bookmark} Ver Marcações
      </a>
    </div>

    <div class="reader-page-paper" id="reader-paper">
      <div class="reader-text-body" id="reader-selectable-text">
        ${paragraphs.map((p, idx) => `
          <p data-paragraph="${idx + 1}">
            <span class="paragraph-marker">§${idx + 1}</span>${p}
          </p>
        `).join("")}
      </div>
    </div>

    <div class="reader-bottom-info">
      Selecione trechos com o cursor para salvar citações com página e parágrafo
    </div>
  `;

  document.getElementById("floating-prev-btn").onclick = () => {
    if(currentPage > 1) location.hash = `#/reader?id=${book.id}&page=${currentPage - 1}`;
  };
  document.getElementById("floating-next-btn").onclick = () => {
    if(currentPage < totalPages) location.hash = `#/reader?id=${book.id}&page=${currentPage + 1}`;
  };

  setupSelectionQuoteListener();
}

/* Gerenciamento do Botão Flutuante de Citação na Seleção de Texto */
function hideFloatingQuoteBtn(){
  const btn = document.getElementById("floating-quote-btn");
  if(btn) btn.style.display = "none";
}

function setupSelectionQuoteListener(){
  const paper = document.getElementById("reader-selectable-text");
  const floatingBtn = document.getElementById("floating-quote-btn");
  if(!paper || !floatingBtn) return;

  document.onselectionchange = () => {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString().trim() : "";

    if(!selectedText || selection.isCollapsed){
      hideFloatingQuoteBtn();
      return;
    }

    const anchorNode = selection.anchorNode;
    if(!paper.contains(anchorNode)){
      hideFloatingQuoteBtn();
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    floatingBtn.style.top = `${rect.top + window.scrollY - 8}px`;
    floatingBtn.style.left = `${rect.left + window.scrollX + (rect.width / 2)}px`;
    floatingBtn.style.display = "flex";

    let paragraphElement = anchorNode.nodeType === 1 ? anchorNode : anchorNode.parentElement;
    while(paragraphElement && !paragraphElement.dataset.paragraph && paragraphElement !== paper){
      paragraphElement = paragraphElement.parentElement;
    }
    const paragraphNum = paragraphElement && paragraphElement.dataset.paragraph ? parseInt(paragraphElement.dataset.paragraph, 10) : 1;

    floatingBtn.onclick = () => {
      const profile = getActiveUserProfile();
      if(profile && activeReaderContext){
        saveAnnotation(
          profile.email,
          activeReaderContext.bookId,
          selectedText,
          activeReaderContext.page,
          paragraphNum
        );
        showToast(`Citação salva! (Pág. ${activeReaderContext.page}, §${paragraphNum})`);
        hideFloatingQuoteBtn();
        window.getSelection().removeAllRanges();
      }
    };
  };
}

/* ==========================================================================
   10) VIEW: MARCAÇÕES / CITAÇÕES DO LIVRO
   ========================================================================== */
function renderBookAnnotationsView(bookId){
  const book = getBookById(bookId);
  const profile = getActiveUserProfile();
  const container = document.getElementById("book-annotations-content");

  if(!book || !profile){
    location.hash = "#/my-books";
    return;
  }

  const list = getAnnotations(profile.email, book.id);

  container.innerHTML = `
    <div class="profile-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px; flex-wrap:wrap; gap:12px;">
        <div>
          <a href="#/book-detail?id=${book.id}" class="btn btn-ghost" style="font-size:12px; padding:0 0 6px 0;">&larr; Voltar à Obra</a>
          <h2 class="headline-md text-primary" style="margin:0;">Marcações & Citações</h2>
          <p class="body-sm text-muted" style="margin:4px 0 0;">${book.title} — ${book.author}</p>
        </div>
        <a href="#/reader?id=${book.id}&page=1" class="btn btn-primary">
          ${ICONS.openBook} Continuar Lendo
        </a>
      </div>

      <div class="rule" style="margin-bottom:24px;"></div>

      ${list.length === 0 ? `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin:0 auto 16px;"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          <p class="body-md">Nenhuma citação marcada nesta obra ainda.</p>
          <p class="body-sm text-muted">Para adicionar, basta selecionar qualquer texto durante a leitura e clicar em "Adicionar Citação".</p>
        </div>
      ` : `
        <div class="annotations-list">
          ${list.map(a => `
            <div class="annotation-item">
              <div style="flex:1;">
                <span class="annotation-meta-badge">Página ${a.page || 1} • Parágrafo §${a.paragraph || 1}</span>
                <p style="font-family:var(--font-serif); font-size:16px; font-style:italic; color:var(--primary); margin:0 0 8px; line-height:1.7;">
                  "${a.text}"
                </p>
                <small style="color:var(--outline); font-size:11px;">Salvo em ${a.date}</small>
              </div>
              <button class="remove-btn" onclick="deleteQuoteHandler('${book.id}', ${a.id})">Remover</button>
            </div>
          `).join("")}
        </div>
      `}
    </div>
  `;

  window.deleteQuoteHandler = (bId, annId) => {
    removeAnnotation(profile.email, bId, annId);
    showToast("Citação removida.");
    renderBookAnnotationsView(bId);
  };
}

/* ==========================================================================
   11) VIEW: MEU PERFIL (FOTO CLICÁVEL & ABAS)
   ========================================================================== */
function renderProfileView(activeTab = "personal"){
  const container = document.getElementById("profile-content");
  const currentProfile = getActiveUserProfile();

  // ----------------------------------------------------
  // ESTADO 1: DESCONECTADO (CONECTAR OU CRIAR CONTA)
  // ----------------------------------------------------
  if(!currentProfile){
    container.innerHTML = `
      <div class="auth-box">
        <div class="auth-nav-tabs">
          <button class="auth-tab-btn active" id="tab-login-btn">Conectar Conta</button>
          <button class="auth-tab-btn" id="tab-register-btn">Criar Conta</button>
        </div>

        <!-- FORMULÁRIO: CONECTAR CONTA -->
        <form id="form-login">
          <h2 class="headline-sm text-primary" style="margin-bottom:6px;">Bem-vindo de Volta</h2>
          <p class="body-sm text-muted" style="margin-bottom:20px;">Entre com seu e-mail e senha cadastrados no navegador.</p>
          
          <div class="form-group" style="margin-bottom:14px;">
            <label class="form-label">Seu E-mail</label>
            <input type="email" class="form-control" id="login-email" required placeholder="exemplo@email.com"/>
          </div>
          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label">Sua Senha</label>
            <input type="password" class="form-control" id="login-password" required placeholder="••••••••"/>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Entrar na Conta</button>
        </form>

        <!-- FORMULÁRIO: CRIAR CONTA -->
        <form id="form-register" style="display:none;">
          <h2 class="headline-sm text-primary" style="margin-bottom:6px;">Criar Nova Conta</h2>
          <p class="body-sm text-muted" style="margin-bottom:20px;">Crie seu acesso exclusivo armazenado com segurança no seu navegador.</p>
          
          <div class="form-grid two-col" style="margin-bottom:14px;">
            <div class="form-group">
              <label class="form-label">Nome</label>
              <input type="text" class="form-control" id="reg-firstname" required placeholder="Seu nome"/>
            </div>
            <div class="form-group">
              <label class="form-label">Sobrenome</label>
              <input type="text" class="form-control" id="reg-lastname" required placeholder="Seu sobrenome"/>
            </div>
          </div>

          <div class="form-group" style="margin-bottom:14px;">
            <label class="form-label">E-mail</label>
            <input type="email" class="form-control" id="reg-email" required placeholder="seu.email@dominio.com"/>
          </div>
          <div class="form-group" style="margin-bottom:20px;">
            <label class="form-label">Senha</label>
            <input type="password" class="form-control" id="reg-password" required placeholder="Mínimo 4 caracteres"/>
          </div>

          <button type="submit" class="btn btn-primary btn-block">Criar Minha Conta</button>
        </form>
      </div>
    `;

    const tabLogin = document.getElementById("tab-login-btn");
    const tabRegister = document.getElementById("tab-register-btn");
    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");

    tabLogin.onclick = () => {
      tabLogin.classList.add("active");
      tabRegister.classList.remove("active");
      formLogin.style.display = "block";
      formRegister.style.display = "none";
    };

    tabRegister.onclick = () => {
      tabRegister.classList.add("active");
      tabLogin.classList.remove("active");
      formRegister.style.display = "block";
      formLogin.style.display = "none";
    };

    formLogin.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const pass = document.getElementById("login-password").value;
      const users = getAllUsers();
      const match = users.find(u => u.email.toLowerCase() === email.toLowerCase());

      if(!match){
        showToast("Esta conta não existe no navegador. Crie uma conta!");
        return;
      }
      if(match.password !== pass){
        showToast("Senha incorreta. Tente novamente.");
        return;
      }

      setCurrentUserEmail(match.email);
      showToast(`Bem-vindo de volta, ${match.firstName}!`);
      renderProfileView("personal");
      mountShell({ title: "Perfil", active: "profile" });
    };

    formRegister.onsubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById("reg-email").value.trim();
      const pass = document.getElementById("reg-password").value;
      const firstName = document.getElementById("reg-firstname").value.trim();
      const lastName = document.getElementById("reg-lastname").value.trim();

      const users = getAllUsers();
      const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());

      if(exists){
        showToast("Este e-mail já está cadastrado. Conecte sua conta!");
        return;
      }

      const newUser = {
        firstName,
        lastName,
        email,
        password: pass,
        avatar: defaultAvatar,
        address: "",
        paymentMethod: "pix",
        cardDetails: { number: "", name: "", expiry: "", cvv: "" },
        purchasedBookIds: [],
        top3Ranked: { first: "", second: "", third: "" }
      };

      users.push(newUser);
      saveAllUsers(users);
      setCurrentUserEmail(newUser.email);
      showToast("Conta criada com sucesso!");
      renderProfileView("personal");
      mountShell({ title: "Perfil", active: "profile" });
    };

    return;
  }

  // ----------------------------------------------------
  // ESTADO 2: CONECTADO (FOTO CLICÁVEL & ABAS SEPARADAS)
  // ----------------------------------------------------
  const purchasedBooks = BOOKS.filter(b => (currentProfile.purchasedBookIds || []).includes(b.id));
  const ranked = currentProfile.top3Ranked || { first: "", second: "", third: "" };

  function buildRankSelectOptions(selectedId){
    return `
      <option value="">-- Selecione uma obra adquirida --</option>
      ${purchasedBooks.map(b => `
        <option value="${b.id}" ${b.id === selectedId ? 'selected' : ''}>${b.title} (${b.author})</option>
      `).join("")}
    `;
  }

  container.innerHTML = `
    <div class="profile-card">
      <div class="profile-header-banner">
        <!-- Foto Clicável que Abre Seletor de Arquivos -->
        <label for="device-avatar-input" class="avatar-clickable-wrapper" title="Clique para alterar sua foto de perfil">
          <img class="profile-avatar-large" id="avatar-preview-img" src="${currentProfile.avatar || defaultAvatar}" alt="Avatar"/>
          <div class="avatar-hover-overlay">
            ${ICONS.camera}
          </div>
          <input type="file" id="device-avatar-input" class="avatar-file-input" accept="image/*"/>
        </label>
        
        <div class="profile-user-info">
          <h2 class="headline-md text-primary" style="margin:0 0 4px;">${currentProfile.firstName} ${currentProfile.lastName}</h2>
          <p class="body-sm text-muted" style="margin:0 0 4px;">${currentProfile.email}</p>
          <span class="avatar-hint-text">Toque na foto acima para alterar</span>
        </div>
      </div>

      <!-- NAVEGAÇÃO ENTRE AS SEÇÕES DO PERFIL -->
      <div class="profile-subnav">
        <button class="profile-subnav-btn ${activeTab === 'personal' ? 'active' : ''}" data-tab="personal">Dados Pessoais</button>
        <button class="profile-subnav-btn ${activeTab === 'top3' ? 'active' : ''}" data-tab="top3">Top 3 Livros</button>
        <button class="profile-subnav-btn ${activeTab === 'payment' ? 'active' : ''}" data-tab="payment">Forma de Pagamento</button>
        <button class="profile-subnav-btn ${activeTab === 'security' ? 'active' : ''}" data-tab="security">Segurança da Conta</button>
      </div>

      <!-- CONTEÚDO DA ABA 1: DADOS PESSOAIS -->
      <div id="tab-content-personal" style="display: ${activeTab === 'personal' ? 'block' : 'none'};">
        <h3 class="profile-section-title">Dados do Perfil</h3>
        <p class="profile-section-desc">Gerencie seus dados de contato e endereço de entrega.</p>
        
        <form id="form-personal-data">
          <div class="form-grid two-col" style="margin-bottom:16px;">
            <div class="form-group">
              <label class="form-label">Nome</label>
              <input type="text" class="form-control" id="prof-firstname" value="${currentProfile.firstName}" required/>
            </div>
            <div class="form-group">
              <label class="form-label">Sobrenome</label>
              <input type="text" class="form-control" id="prof-lastname" value="${currentProfile.lastName}" required/>
            </div>
          </div>

          <div class="form-group" style="margin-bottom:16px;">
            <label class="form-label">E-mail</label>
            <input type="email" class="form-control" id="prof-email" value="${currentProfile.email}" required/>
          </div>

          <div class="form-group" style="margin-bottom:24px;">
            <label class="form-label">Endereço de Entrega</label>
            <input type="text" class="form-control" id="prof-address" value="${currentProfile.address || ''}" placeholder="Rua, Número, Bairro, Cidade - UF"/>
          </div>

          <button type="submit" class="btn btn-primary">Salvar Alterações</button>
        </form>
      </div>

      <!-- CONTEÚDO DA ABA 2: ELEIÇÃO DO TOP 3 -->
      <div id="tab-content-top3" style="display: ${activeTab === 'top3' ? 'block' : 'none'};">
        <h3 class="profile-section-title">Eleição do seu Top 3 Livros</h3>
        <p class="profile-section-desc">Selecione a ordem exata do 1º, 2º e 3º colocado entre os livros adquiridos.</p>

        ${purchasedBooks.length === 0 ? `
          <div class="empty-state" style="padding:32px 0;">
            <p class="body-md">Você não possui livros em sua conta ainda.</p>
            <p class="body-sm text-muted">Compre livros na loja para elegê-los em seu pódio literário.</p>
            <a href="#/shop" class="btn btn-primary" style="margin-top:16px;">Ir para a Loja</a>
          </div>
        ` : `
          <form id="form-top3-ranking">
            <div class="form-group" style="margin-bottom:16px;">
              <label class="form-label">🥇 1º Lugar (O Favorito Supremo)</label>
              <select class="form-control" id="rank-first">${buildRankSelectOptions(ranked.first)}</select>
            </div>
            
            <div class="form-group" style="margin-bottom:16px;">
              <label class="form-label">🥈 2º Lugar</label>
              <select class="form-control" id="rank-second">${buildRankSelectOptions(ranked.second)}</select>
            </div>

            <div class="form-group" style="margin-bottom:24px;">
              <label class="form-label">🥉 3º Lugar</label>
              <select class="form-control" id="rank-third">${buildRankSelectOptions(ranked.third)}</select>
            </div>

            <button type="submit" class="btn btn-gold">Atualizar Meu Top 3</button>
          </form>
        `}
      </div>

      <!-- CONTEÚDO DA ABA 3: FORMA DE PAGAMENTO -->
      <div id="tab-content-payment" style="display: ${activeTab === 'payment' ? 'block' : 'none'};">
        <h3 class="profile-section-title">Forma de Pagamento Preferencial</h3>
        <p class="profile-section-desc">Selecione seu método principal e cadastre os dados de cartão se preferir.</p>

        <form id="form-payment-data">
          <div class="radio-group" style="margin-bottom:16px;">
            <label class="radio-card ${currentProfile.paymentMethod === 'pix' ? 'active' : ''}" id="lbl-pix">
              <input type="radio" name="paymentMethod" value="pix" ${currentProfile.paymentMethod === 'pix' ? 'checked' : ''}/>
              PIX
            </label>
            <label class="radio-card ${currentProfile.paymentMethod === 'card' ? 'active' : ''}" id="lbl-card">
              <input type="radio" name="paymentMethod" value="card" ${currentProfile.paymentMethod === 'card' ? 'checked' : ''}/>
              Cartão de Crédito
            </label>
          </div>

          <div class="card-fields-box" id="card-fields-box" style="display:${currentProfile.paymentMethod === 'card' ? 'block' : 'none'};">
            <div class="form-group" style="margin-bottom:12px;">
              <label class="form-label">Número do Cartão</label>
              <input type="text" class="form-control" id="card-number" value="${currentProfile.cardDetails?.number || ''}" placeholder="0000 0000 0000 0000"/>
            </div>
            <div class="form-group" style="margin-bottom:12px;">
              <label class="form-label">Nome Impresso no Cartão</label>
              <input type="text" class="form-control" id="card-name" value="${currentProfile.cardDetails?.name || ''}" placeholder="NOME COMO NO CARTÃO"/>
            </div>
            <div class="form-grid two-col">
              <div class="form-group">
                <label class="form-label">Validade</label>
                <input type="text" class="form-control" id="card-expiry" value="${currentProfile.cardDetails?.expiry || ''}" placeholder="MM/AA"/>
              </div>
              <div class="form-group">
                <label class="form-label">CVV</label>
                <input type="password" maxlength="4" class="form-control" id="card-cvv" value="${currentProfile.cardDetails?.cvv || ''}" placeholder="123"/>
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="margin-top:20px;">Salvar Dados de Pagamento</button>
        </form>
      </div>

      <!-- CONTEÚDO DA ABA 4: SEGURANÇA E CONTA -->
      <div id="tab-content-security" style="display: ${activeTab === 'security' ? 'block' : 'none'};">
        <h3 class="profile-section-title">Segurança & Acesso</h3>
        <p class="profile-section-desc">Altere sua senha de acesso à conta ou encerre sua sessão.</p>

        <form id="form-change-password" style="margin-bottom:32px;">
          <div class="form-grid two-col" style="margin-bottom:16px;">
            <div class="form-group">
              <label class="form-label">Senha Atual</label>
              <input type="password" class="form-control" id="curr-pass" required placeholder="••••••••"/>
            </div>
            <div class="form-group">
              <label class="form-label">Nova Senha</label>
              <input type="password" class="form-control" id="new-pass" required placeholder="Nova senha"/>
            </div>
          </div>
          <button type="submit" class="btn btn-outline">Atualizar Senha</button>
        </form>

        <div class="rule" style="margin-bottom:24px;"></div>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <div>
            <h4 style="margin:0 0 4px; color:var(--error); font-size:15px;">Encerrar Sessão ou Excluir</h4>
            <p class="body-sm text-muted" style="margin:0;">Desconecte da conta ou apague todos os seus dados deste navegador.</p>
          </div>
          <div style="display:flex; gap:12px;">
            <button type="button" class="btn btn-outline" id="btn-logout">Desconectar</button>
            <button type="button" class="btn btn-danger" id="btn-delete-account">Excluir Conta</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Gerenciamento de Troca de Abas do Perfil
  document.querySelectorAll(".profile-subnav-btn").forEach(btn => {
    btn.onclick = () => {
      const tab = btn.dataset.tab;
      renderProfileView(tab);
    };
  });

  // Upload de Foto de Perfil ao Clicar na Imagem
  const fileInput = document.getElementById("device-avatar-input");
  if(fileInput){
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if(file){
        const reader = new FileReader();
        reader.onload = (evt) => {
          const base64Img = evt.target.result;
          currentProfile.avatar = base64Img;
          saveActiveUserProfile(currentProfile);
          document.getElementById("avatar-preview-img").src = base64Img;
          showToast("Foto de perfil atualizada com sucesso!");
        };
        reader.readAsDataURL(file);
      }
    };
  }

  // Salvar Aba 1 (Dados Pessoais)
  const formPersonal = document.getElementById("form-personal-data");
  if(formPersonal){
    formPersonal.onsubmit = (e) => {
      e.preventDefault();
      const newEmail = document.getElementById("prof-email").value.trim();
      const oldEmail = currentProfile.email;

      if(newEmail.toLowerCase() !== oldEmail.toLowerCase()){
        const users = getAllUsers();
        if(users.some(u => u.email.toLowerCase() === newEmail.toLowerCase())){
          showToast("Já existe uma conta cadastrada com esse e-mail.");
          return;
        }
      }

      currentProfile.firstName = document.getElementById("prof-firstname").value.trim();
      currentProfile.lastName = document.getElementById("prof-lastname").value.trim();
      currentProfile.email = newEmail;
      currentProfile.address = document.getElementById("prof-address").value.trim();

      const users = getAllUsers();
      const idx = users.findIndex(u => u.email.toLowerCase() === oldEmail.toLowerCase());
      if(idx !== -1){
        users[idx] = currentProfile;
        saveAllUsers(users);
        setCurrentUserEmail(newEmail);
      }

      showToast("Dados do perfil atualizados!");
      renderProfileView("personal");
      mountShell({ title: "Perfil", active: "profile" });
    };
  }

  // Salvar Aba 2 (Top 3)
  const top3Form = document.getElementById("form-top3-ranking");
  if(top3Form){
    top3Form.onsubmit = (e) => {
      e.preventDefault();
      const first = document.getElementById("rank-first").value;
      const second = document.getElementById("rank-second").value;
      const third = document.getElementById("rank-third").value;

      currentProfile.top3Ranked = { first, second, third };
      saveActiveUserProfile(currentProfile);
      showToast("Top 3 atualizado com sucesso!");
    };
  }

  // Alternância do método de pagamento na Aba 3
  const radPix = document.querySelector('input[name="paymentMethod"][value="pix"]');
  const radCard = document.querySelector('input[name="paymentMethod"][value="card"]');
  const cardBox = document.getElementById("card-fields-box");

  if(radPix && radCard && cardBox){
    radPix.onchange = () => {
      document.getElementById("lbl-pix").classList.add("active");
      document.getElementById("lbl-card").classList.remove("active");
      cardBox.style.display = "none";
    };
    radCard.onchange = () => {
      document.getElementById("lbl-card").classList.add("active");
      document.getElementById("lbl-pix").classList.remove("active");
      cardBox.style.display = "block";
    };
  }

  // Salvar Aba 3 (Pagamento)
  const formPayment = document.getElementById("form-payment-data");
  if(formPayment){
    formPayment.onsubmit = (e) => {
      e.preventDefault();
      currentProfile.paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
      currentProfile.cardDetails = {
        number: document.getElementById("card-number").value.trim(),
        name: document.getElementById("card-name").value.trim(),
        expiry: document.getElementById("card-expiry").value.trim(),
        cvv: document.getElementById("card-cvv").value.trim()
      };
      saveActiveUserProfile(currentProfile);
      showToast("Forma de pagamento salva com sucesso!");
    };
  }

  // Salvar Aba 4 (Alterar Senha)
  const formPass = document.getElementById("form-change-password");
  if(formPass){
    formPass.onsubmit = (e) => {
      e.preventDefault();
      const currPass = document.getElementById("curr-pass").value;
      const newPass = document.getElementById("new-pass").value;

      if(currentProfile.password !== currPass){
        showToast("A senha atual está incorreta.");
        return;
      }
      if(newPass.length < 3){
        showToast("A nova senha deve ter no mínimo 3 caracteres.");
        return;
      }

      currentProfile.password = newPass;
      saveActiveUserProfile(currentProfile);
      showToast("Senha alterada com sucesso!");
      document.getElementById("curr-pass").value = "";
      document.getElementById("new-pass").value = "";
    };
  }

  // Desconectar
  const btnLogout = document.getElementById("btn-logout");
  if(btnLogout){
    btnLogout.onclick = () => {
      setCurrentUserEmail(null);
      showToast("Você foi desconectado.");
      renderProfileView("personal");
      mountShell({ title: "Perfil", active: "profile" });
    };
  }

  // Excluir Conta
  const btnDelete = document.getElementById("btn-delete-account");
  if(btnDelete){
    btnDelete.onclick = () => {
      if(confirm("Tem certeza que deseja excluir sua conta permanentemente deste navegador?")){
        let users = getAllUsers();
        users = users.filter(u => u.email.toLowerCase() !== currentProfile.email.toLowerCase());
        saveAllUsers(users);
        setCurrentUserEmail(null);
        showToast("Conta excluída com sucesso.");
        renderProfileView("personal");
        mountShell({ title: "Perfil", active: "profile" });
      }
    };
  }
}

/* ==========================================================================
   12) INICIALIZAÇÃO
   ========================================================================== */
window.addEventListener("hashchange", router);
document.addEventListener("DOMContentLoaded", () => {
  router();
  updateCartBadges();
});