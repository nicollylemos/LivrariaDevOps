/* ==========================================================================
   Livraria Elegance — Aurelian Folio
   Arquivo único de JavaScript: dados do catálogo, lógica compartilhada
   (header/rodapé, carrinho via localStorage, toasts) e roteador SPA
   que alterna entre as telas Início / Loja / Produto / Carrinho.
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
    description: "O diário particular de um imperador romano, Meditações continua sendo uma das obras de filosofia mais duradouras já escritas — um guia para a virtude, a resiliência e o pensamento claro. Esta edição anotada inclui uma introdução acadêmica e encadernação de qualidade arquival.",
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
    coverAlt: "https://lh3.googleusercontent.com/aida-public/AB6AXuA62ZpNL8Bpe5ks3WxxKku3bWUQfIX8I6sLfkQMOH6d9iA3984u5jh_g5r_kTHQhH5roDG-JdOSB1GdsEt79wzRqeQEBTm4b0s-7FixLNzolkGo5vr3FACHHum6dDg6j7Yy9xRJeYFmZTa32kE6cbhfCXaw_KDm09jA8nsSYJeHZhrL9DSz_Wzorb7llX9pc2MtKHKLJUmfpR0UitB0OLRyggtsMl2gcwMn3TGYz0aa68Gy29tWWq7fzQ",
    description: "Um marco da literatura americana, Folhas de Relva, de Walt Whitman, é uma celebração profunda do eu, do espírito humano e da vasta paisagem democrática da América. Publicada pela primeira vez em 1855, esta coletânea rompeu com as formas poéticas tradicionais, oferecendo uma exploração extensa, em verso livre, da vida, da natureza e da sexualidade.\n\nEsta edição especial apresenta uma tipografia cuidadosa e uma capa de tecido tátil, pensada para o colecionador exigente. Experimente a energia bruta e a beleza duradoura da visão de Whitman em um volume que honra a natureza atemporal de suas palavras.",
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
    description: "Um romance de estreia silenciosamente devastador sobre memória, luto e os bosques que guardam nossos segredos. A prosa de Clara Vance é enxuta e luminosa — uma história à qual você vai voltar muito depois da última página.",
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
    description: "O prelúdio de Nietzsche a uma filosofia do futuro — uma crítica ousada aos filósofos do passado e um chamado para ir além da moralidade convencional. Encadernado em couro debossado com páginas douradas.",
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
    description: "As reflexões de Thoreau sobre a vida simples em contato com a natureza — um texto fundamental da tradição americana de escrita sobre a natureza, reeditado com uma capa de tecido minimalista.",
    featured: false
  },
  {
    id: "moby-dick",
    title: "Moby-Dick",
    author: "Herman Melville",
    price: 35.0,
    category: "novels",
    tags: ["Novel", "Classic"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAmu9N__4qcqloaGCs7FzSxvEQzjPHbhyomLFxfx4Kny4laHitYS23bKUWVmgIiogKd7rZ_zmf0XzclZGi0QoutwJIOsfQHgm1AoRsRQLg8w6-jpSkZdNoj2PBu7epxBCJqZuCL5b3Va797wXOUuY8qA3mtdpyKVdUaRLW0_AFV0jDGxOxHr1rKbJ1HKEBJZDQwriEeqENglqWR0cxxiMtgqC0YJm3JnzcfdSHkKlhyvtpNTo8hLEdzQ",
    description: "A saga épica de Melville sobre obsessão e o mar — a perseguição do Capitão Ahab à grande baleia branca, em uma edição feita para durar gerações.",
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
    description: "Uma réplica da primeira edição da obra-prima de Fitzgerald sobre a Era do Jazz — a tragédia de Jay Gatsby, contada em uma prosa tão brilhante quanto as festas que ele promove.",
    featured: false
  },
  {
    id: "meditations-annotated",
    title: "Meditations — Annotated Edition",
    author: "Marcus Aurelius",
    price: 28.5,
    category: "philosophy",
    tags: ["Filosofia", "Edição Anotada"],
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTzdxJ9ts4s0VRRyGTfBZxj29xBCLDLkhb_rofQj79J5PYOy7X54H1wuzMsvkc3TJNgHrSHXWk6n8bEetvsrRV3tHzRrb5bSnnwmLaa3gxh4ofNhl8U1QKL4f13bnZxQF0xMTlx6MKI9XXL2IjNEw1QLnhElAB6nQcSxfuN8UmnyN04DofTi9NKlkqpA3BvKjcr5tIrDMFU8LZBZj5T12Z_hiQdgF0G-78FhTIag575A7LwwJ_Z4fkmg",
    description: "A edição anotada de Meditações, com notas acadêmicas e um guia de discussão — ideal para leitores que estão conhecendo a filosofia estoica pela primeira vez.",
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
    description: "Um marcador de páginas em latão, delicadamente moldado em formato de pena — a companhia perfeita para qualquer volume da sua coleção.",
    featured: false
  }
];

function getBookById(id){
  return BOOKS.find(b => b.id === id);
}

function getFeaturedBook(){
  return BOOKS.find(b => b.featured) || BOOKS[0];
}

function formatPrice(n){
  return "$" + n.toFixed(2);
}

/* ==========================================================================
   2) LÓGICA COMPARTILHADA — carrinho (localStorage), toasts, header/rodapé
   ========================================================================== */
const CART_KEY = "aurelian_folio_cart";

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
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9.5a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10"/></svg>`,
  shop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h1.5l1.7 9.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h1.5l1.7 9.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 6-6 6 6 6"/></svg>`,
  bag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5z"/><path d="M9 10V6a3 3 0 0 1 6 0v4"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  logo: `<svg viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M10 9h12M10 16h12M10 23h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
};

function buildHeader(pageTitle, opts = {}){
  const header = document.createElement("header");
  header.className = "site-header";

  const backBtn = opts.showBack
    ? `<button class="back-btn" onclick="history.back()" aria-label="Voltar">${ICONS.back}</button>`
    : "";

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
        <a href="#/shop" data-nav="books">Meus Livros</a>
        <a href="#/cart" data-nav="cart">Carrinho</a>
      </nav>
      <div class="header-right">
        <a class="icon-btn" href="#/cart" aria-label="Carrinho">
          ${ICONS.cart}
          <span class="cart-badge" data-cart-count style="display:none;"></span>
        </a>
        <img class="avatar" alt="Perfil" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3JxLmig3CWZMAsS1J4QGDTniwCbuZoCgPbGOMd5zESn_EWl661PugosX6p-0qUwzIiP4Ka29SpVEIaMRblBWrsZqcJl0E5WENZkxYs1Q4O5_UeMmTVT-QdBjxeLh5XWoeH43yJv8db4D1_QH09oxFfwrXvM-3wnxuER6gQ4VWglc55RRnYg3OrT48Z6XjacrsPRzqoPK0xK62EZyYjpdv8T0mev-bHufd3Eo_VNpB3t7H5AF2We26rQ"/>
      </div>
    </div>
  `;
  return header;
}

function buildBottomNav(active){
  const nav = document.createElement("nav");
  nav.className = "bottom-nav";
  const items = [
    { key: "home", href: "#/", label: "Início", icon: ICONS.home },
    { key: "shop", href: "#/shop", label: "Loja", icon: ICONS.shop },
    { key: "books", href: "#/shop", label: "Livros", icon: ICONS.book },
    { key: "cart", href: "#/cart", label: "Carrinho", icon: ICONS.cart, badge: true },
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

/* Remove header/bottom-nav antigos antes de remontar (SPA troca de tela) */
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
   3) ROTEADOR SPA — alterna entre as seções data-view conforme o hash da URL
   Rotas: #/  |  #/shop[?category=x]  |  #/product?id=x  |  #/cart
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

  }else if(path === "/cart"){
    showView("cart");
    renderCartView();
    mountShell({ title: "Carrinho", active: "cart" });

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

/* ---------------- View: Produto ---------------- */
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
    showToast("Compra finalizada — obrigado!");
    saveCart([]);
    setTimeout(renderCartView, 600);
  });
}

/* ==========================================================================
   4) INICIALIZAÇÃO
   ========================================================================== */
window.addEventListener("hashchange", router);
document.addEventListener("DOMContentLoaded", () => {
  router();
  updateCartBadges();
});
