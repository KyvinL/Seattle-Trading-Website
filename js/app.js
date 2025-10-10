// =============================================================
// Seattle Trading — app.js
// =============================================================

const API_BASE = 'https://api.seattletrading.org';

// PRODUCT DATA -------------------------------------------------
const PRODUCTS = [
  {
    id: "us-1000-length-12\"-milky-white",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves LENGTH 12\" (Milky White)",
    price: 149.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: ["Chemo Rated", "Medical"],
    powderFree: false,
    brand: "Ultra Stretch",
    images: [
      "assets/Ultra Stretch/Milky White/Length 12/1,000 Pcs Case Nitrile Exam Gloves LENGTH 12'' (Milky White) Box.jpg",
      "assets/Ultra Stretch/Milky White/Length 12/1,000 Pcs Case Nitrile Exam Gloves LENGTH 12'' (Milky White) Front.jpg",
      "assets/Ultra Stretch/Milky White/Length 12/1,000 Pcs Case Nitrile Exam Gloves LENGTH 12'' (Milky White) Vert.jpg"
    ]
  },

  {
    id: "us-2000-pro-3.5-ice-blue",
    name: "Ultra Stretch 2,000 Pcs/Case Nitrile Exam Gloves Pro 3.5 (Ice Blue)",
    price: 144.99,
    bestseller: true,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Ultra Stretch",
    images: "assets/Excel Nitril Medium 2.png"
  },

  {
    id: "us-1000-length-12\"-hot-pink",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves Length 12\" (Hot Pink)",
    price: 149.99,
    bestseller: false,
    size: ["S","M"],
    category: ["Chemo Rated", "Medical"],
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "us-1000-pro-3.5-hot-pink",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves Pro 3.5 (Hot Pink)",
    price: 124.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "us-2,000-pro-3.0-cobalt-blue",
    name: "Ultra Stretch 2,000 Pcs/Case Nitrile Exam Gloves Pro 3.0 (Cobalt Blue)",
    price: 144.99,
    bestseller: true,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "us-1,000-pro-6.0-coal-black",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves Pro 6.0 (Coal Black)",
    price: 164.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "us-1000-pro-5.0-coal-black",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves Pro 5.0 (Coal Black)",
    price: 159.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "us-1000-pro-3.5-coal-black",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves Pro 3.5 (Coal Black)",
    price: 124.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "us-1000-3.5-s",
    name: "Ultra Stretch 1,000 Pcs/Case Nitrile Exam Gloves 3.5 Series",
    price: 149.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Ultra Stretch",
    images: ""
  },

  {
    id: "qube-latex-exam-powder",
    name: "Qube Latex Examination Powdered Gloves",
    price: 54.99,
    bestseller: false,
    size: ["S","M","L"],
    category: "Medical",
    powderFree: false,
    brand: "Qube",
    images: ""
  },

  {
    id: "qube-nitrile-exam-powder-free",
    name: "Qube Nitrile Examination Powder Free Gloves",
    price: 54.99,
    bestseller: true,
    size: ["S","M","L"],
    category: "Medical",
    powderFree: true,
    brand:"Qube",
    images: ""
  },

  {
    id: "qube-latex-exam-powder-free",
    name: "Qube Latex Examination Powder Free Gloves",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: true,
    brand: "Qube",
    images: ""
  },

  {
    id: "polysilk-18000-s",
    name: "Polysilk 18000 Series",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: true,
    brand: "Polysilk",
    images: ""
  },

  {
    id: "action-16000-s",
    name: "ACTION 16000 Series",
    price: 64.99,
    bestseller: false,
    size: ["S","M","L","XL"],
    category: "Medical",
    powderFree: true,
    brand: "Action",
    images: ""
  },

  {
    id: "action-69000-s",
    name: "ACTION 69000 Series",
    price: 64.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Action",
    images: ""
  },

  {
    id: "action-83000-s",
    name: "ACTION 83000 Series",
    price: 57.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Action",
    images: ""
  },

  {
    id: "action-808120-s",
    name: "Action 808120 Series",
    price: 64.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Action",
    images: ""
  },

  {
    id: "action-17700-s",
    name: "ACTION 17700 Series",
    price: 57.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: true,
    brand: "Action",
    images: ""
  },

  {
    id: "shamrock-14000-s",
    name: "Shamrock 14000 Series",
    price: 54.99,
    bestseller: false,
    size: ["S","M","L"],
    category: "Medical",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-15000-s",
    name: "Shamrock 15000 Series",
    price: 54.99,
    bestseller: false,
    size: ["S","M","L"],
    category: "Medical",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-6000-s",
    name: "Shamrock 60000 Series",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-sup-60500-s",
    name: "Shamrock Supreme 60500 Series",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-30000-s",
    name: "Shamrock 30000 Series",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-80000-s",
    name: "Shamrock 80000 Series",
    price: 54.99,
    bestseller: false,
    size: ["S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-sup-50359-s",
    name: "Shamrock Supreme 50359 Series",
    price: 54.99,
    bestseller: false,
    size: ["M"],
    category: "Medical",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-10000-s",
    name: "Shamrock 10000 Series",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-68000-s",
    name: "Shamrock 68000 Series",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Industrial",
    powderFree: true,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "shamrock-86000-s",
    name: "Shamrock 86000 Series Latex Unlined Canners Gloves",
    price: 124.99,
    bestseller: false,
    size: ["S","M","L","XL"],
    colors: [
      { name: "Blue", image: ""},
      { name: "Orange", image: ""},
      { name: "Yellow", image: ""},
    ],
    category: "Industrial",
    powderFree: true,
    brand: "Shamrock",
    images: [
      "",
      "",
    ]
  },

  {
    id: "shamrock-20000-s",
    name: "Shamrock 20000 Series",
    price: 54.99,
    bestseller: false,
    size: ["S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Shamrock",
    images: ""
  },

  {
    id: "excel-nitrile-exam",
    name: "Excel Nitrile Examination Gloves (Per Case)",
    price: 64.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Excel",
    images: ""
  },

  {
    id: "walletz-nitrile-exam",
    name: "Walletz Nitrile Examination Gloves (Per Case)",
    price: 64.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    BRAND: "Walletz",
    images: ""
  },

  {
    id: "icon-nitrile-exam",
    name: "Icon Nitrile Examination Gloves (Per Case)",
    price: 54.99,
    bestseller: false,
    size: ["XS","S","M","L","XL"],
    category: "Medical",
    powderFree: false,
    brand: "Icon",
    images: ""
  },
];

// UTILITIES ----------------------------------------------------
function formatUSD(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}
const getQuery = (sel, root=document) => root.querySelector(sel);
const getAll   = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// HOMEPAGE: Bestsellers ---------------------------------------
function renderBestsellers() {
  const mount = getQuery('#bestsellers');
  if (!mount) return;
  const best = PRODUCTS.filter(p => p.bestseller);
  mount.innerHTML = best.map(p => productCardHTML(p)).join('');
}

// Card template
//<img src="${Array.isArray(product.images) ? product.images[0] : product.image}" alt="${product.name}" loading="lazy">
function cartItemRowHTML(item, product) {
function productCardHTML(p) {
  const imgSrc = p.image || 'assets/placeholder.jpg';
  return `
    <article class="product" data-id="${p.id}">
      <a href="product.html?id=${encodeURIComponent(p.id)}">
        <img src="${imgSrc}" alt="${p.name}">
      </a>
      <div class="meta">
        <div class="title">
          <a href="product.html?id=${encodeURIComponent(p.id)}">${p.name}</a>
        </div>
        <div class="row" style="display:flex;justify-content:space-between;align-items:center;">
          <span class="price">${formatUSD(p.price)}</span>
          ${p.bestseller ? '<span class="badge">Bestseller</span>' : ''}
        </div>
        <button class="cta" onclick="addToCart('${p.id}')">Add to cart</button>
      </div>
    </article>
  `;
}

// CART (localStorage) -----------------------------------------
const CART_KEY = "seattle_trading_cart_v1";
const getCart  = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const saveCart = (items) => localStorage.setItem(CART_KEY, JSON.stringify(items));

function addToCart(id) {
  const item = PRODUCTS.find(p => p.id === id);
  if (!item) return;
  const cart = getCart();
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty += 1; else cart.push({ id, qty: 1 });
  saveCart(cart);
  alert(`Added to cart: ${item.name}`);
  updateFooterMeta();
}

// --- Helpers for dynamic thank-you ---
// --- Helpers for dynamic thank-you (ADD ONCE) ---
function compactCart() {
  try {
    const raw = JSON.parse(localStorage.getItem("seattle_trading_cart_v1") || "[]");
    return raw.map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      const price_cents = Math.round(((p?.price ?? 0) * 100));
      return { id: i.id, qty: i.qty || 1, p: price_cents };
    });
  } catch { return []; }
}

const ORIGIN = window.location.origin;              // e.g., http://127.0.0.1:5500
const THANK_YOU_URL = `${ORIGIN}/thank-you.html`;   // central place to change later

function renderCatalog() {
  const mount = getQuery('#catalog-grid');
  if (!mount) return;

  const qRaw      = (getQuery('#search')?.value || '').trim();
  const q         = qRaw.toLowerCase();
  // material select is currently not present in your HTML; treat as 'all'
  const material  = (getQuery('#material')?.value || 'all').toLowerCase();
  const size      = (getQuery('#size')?.value || 'all').toLowerCase();
  const category  = (getQuery('#category')?.value || 'all').toLowerCase();
  const brand     = (getQuery('#brand')?.value || 'all').toLowerCase();
  const sort      = getQuery('#sort')?.value || 'pop';

  let list = PRODUCTS.filter(p => {
    const name = (p.name || '').toLowerCase();

    // product material/size/category/brand normalized
    const pMaterial = (p.material || '').toString().toLowerCase();
    const pSizes = Array.isArray(p.size) ? p.size.map(s => String(s).toLowerCase()) : [];
    // category can be a string or an array — normalize to array of lowercase strings
    const rawCategory = p.category ?? [];
    const pCategories = Array.isArray(rawCategory)
      ? rawCategory.map(c => String(c || '').toLowerCase())
      : [String(rawCategory || '').toLowerCase()];
    const pBrand = (p.brand || '').toString().toLowerCase();

    const matchesQ        = q === '' || name.includes(q);
    const matchesMat      = material === 'all' || pMaterial === material;
    const matchesSize     = size === 'all' || pSizes.includes(size);
    const matchesCategory = category === 'all' || pCategories.includes(category);
    const matchesBrand    = brand === 'all' || pBrand === brand;

    return matchesQ && matchesMat && matchesSize && matchesCategory && matchesBrand;
  });

  if (sort === 'price-asc')  
    list.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') 
    list.sort((a,b) => b.price - a.price);
  else // 'pop'
    list.sort((a,b) => (b.bestseller|0) - (a.bestseller|0));

  mount.innerHTML = list.map(p => productCardHTML(p)).join('');
}

// CART PAGE RENDERING -----------------------------------------

  const subtotal = product.price * (item.qty || 1);
  return `
    <div class="cart-row" data-id="${item.id}">
      <div class="cart-prod">
        <img src="${product.image || 'assets/placeholder.jpg'}" alt="${product.name}">
        <span>${product.name}</span>
      </div>
      <div class="cart-price">${formatUSD(product.price)}</div>
      <div class="cart-qty">
        <input type="number" class="qty-input" min="1" value="${item.qty || 1}" aria-label="Quantity for ${product.name}">
      </div>
      <div class="cart-sub">${formatUSD(subtotal)}</div>
      <div class="cart-remove">
        <button class="btn-outline btn-remove">Remove</button>
      </div>
    </div>
  `;
}

// Cart Page
function renderCartPage() {
  const page = document.getElementById('cart-page');
  if (!page) return;

  const emptyBox = document.getElementById('cart-empty');
  const hasBox   = document.getElementById('cart-has-items');
  const rowsBox  = document.getElementById('cart-rows');
  const sumItems = document.getElementById('sum-items');
  const sumSub   = document.getElementById('sum-subtotal');
  const clearBtn = document.getElementById('clear-cart');
  const goBtn    = document.getElementById('proceed-checkout');

  const cart = getCart();
  if (!cart.length) {
    emptyBox.style.display = '';
    hasBox.style.display = 'none';
    return;
  }

  // Build rows
  rowsBox.innerHTML = cart.map(ci => {
    const p = PRODUCTS.find(pr => pr.id === ci.id);
    return p ? cartItemRowHTML(ci, p) : '';
  }).join('');

  // Totals
  const totals = cart.reduce((acc, ci) => {
    const p = PRODUCTS.find(pr => pr.id === ci.id);
    if (!p) return acc;
    acc.items += (ci.qty || 1);
    acc.subtotal += p.price * (ci.qty || 1);
    return acc;
  }, { items: 0, subtotal: 0 });

  sumItems.textContent = totals.items;
  sumSub.textContent   = formatUSD(totals.subtotal);

  emptyBox.style.display = 'none';
  hasBox.style.display = '';

  // Wire qty changes & remove buttons
  rowsBox.querySelectorAll('.cart-row').forEach(row => {
    const id  = row.getAttribute('data-id');
    const inp = row.querySelector('.qty-input');
    const rm  = row.querySelector('.btn-remove');

    inp.addEventListener('change', () => {
      let qty = parseInt(inp.value, 10);
      if (isNaN(qty) || qty < 1) qty = 1;
      const items = getCart().map(ci => ci.id === id ? { ...ci, qty } : ci);
      saveCart(items);
      updateFooterMeta();
      renderCartPage();
    });

    rm.addEventListener('click', () => {
      const items = getCart().filter(ci => ci.id !== id);
      saveCart(items);
      updateFooterMeta();
      renderCartPage();
    });
  });

  // Clear cart
  if (clearBtn) {
    clearBtn.onclick = () => {
      saveCart([]);
      updateFooterMeta();
      renderCartPage();
    };
  }

  // Proceed to checkout
  if (goBtn) {
    goBtn.onclick = () => {
      window.location.href = 'checkout.html';
    };
  }
}

// FORMS (non-reloading submit) --------------------------------
function wireForms() {
  const forms = getAll('form[data-enhanced="true"]');
  forms.forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const raw = Object.fromEntries(new FormData(f).entries());
      const first = (raw['first-name'] || '').trim();
      const last  = (raw['last-name']  || '').trim();
      const data  = { ...raw, fullName: [first, last].filter(Boolean).join(' ') };
      console.log('Form submitted:', data);
      f.reset();
      alert('Thanks! We will be in touch shortly.');
    });
  });
}

// FOOTER UTIL (centralized) -----------------------------------
function updateFooterMeta() {
  const yearEl  = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const countEl = document.getElementById('cart-count');
  if (countEl) {
    try {
      const total = getCart().reduce((sum, item) => sum + (item.qty || 0), 0);
      countEl.textContent = total;
    } catch (_) {}
  }
}

// Login Lite (client-only)
const USER_KEY = 'st_user';

function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null'); } catch { return null; }
}
function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}
function clearUser() {
  localStorage.removeItem(USER_KEY);
}

// Orders (client-side history)
const ORDERS_KEY = 'st_orders_v1';
function getOrders() {
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]'); } catch { return []; }
}
function saveOrders(list) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(list));
}
function pushOrder(o) {
  const list = getOrders();
  list.unshift({ ...o, ts: o.ts || Date.now() });
  saveOrders(list);
}

// Update the header account link across pages
function wireAccountUI() {
  const link = document.getElementById('account-link');
  const user = getUser();
  if (!link) return;

  if (user && user.name) {
    link.textContent = `Hi, ${user.name.split(' ')[0] || 'there'}`;
    link.href = 'account.html';
    link.onclick = null;
  } else {
    link.textContent = 'Login';
    link.href = 'login.html';
    link.onclick = null;
  }
}

// Handle the login form (only when on login.html)
function wireLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name  = (document.getElementById('login-name')?.value || '').trim();
    const email = (document.getElementById('login-email')?.value || '').trim();
    if (!name || !email) {
      alert('Please enter your name and a valid email.');
      return;
    }
    setUser({ name, email, ts: Date.now() });
    alert(`Welcome, ${name}!`);
    window.location.href = 'account.html';
  });
}

// Account page UI (only runs on account.html)
function wireAccountPage() {
  const page = document.getElementById('account-page');
  if (!page) return;

  const u = getUser();
  if (!u) { window.location.href = 'login.html'; return; }

  const nameEl   = document.getElementById('acct-name');
  const emailEl  = document.getElementById('acct-email');
  const saveBtn  = document.getElementById('acct-save');
  const outBtn   = document.getElementById('acct-logout');
  const ordersEl = document.getElementById('orders-list');

  // Prefill
  nameEl.value  = u.name  || '';
  emailEl.value = u.email || '';

  // Save profile
  saveBtn.onclick = () => {
    const name  = nameEl.value.trim();
    const email = emailEl.value.trim();
    if (!name || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      alert('Enter a valid name and email.');
      return;
    }
    setUser({ ...u, name, email, updatedAt: Date.now() });
    wireAccountUI();  // refresh header text
    alert('Account updated.');
  };

  // Logout
  outBtn.onclick = () => {
    if (confirm('Log out?')) {
      clearUser();
      wireAccountUI();
      window.location.href = 'index.html';
    }
  };

  // Render order history (local)
  const orders = getOrders();
  if (!orders.length) {
    ordersEl.innerHTML = `<p class="muted">No orders yet.</p>`;
  } else {
  const rows = orders.map(o => {
    // pick amount in CENTS: total_c → subtotal_c → (subtotal dollars → cents)
    let cents = Number.isFinite(o.total_c) ? o.total_c
             : (Number.isFinite(o.subtotal_c) ? o.subtotal_c
             : (typeof o.subtotal === 'number' ? Math.round(o.subtotal * 100) : 0));

    if (!Number.isFinite(cents) || cents < 0) cents = 0;

    const amountHTML = (typeof formatUSD === 'function')
      ? formatUSD(cents / 100)
      : '$' + (cents / 100).toFixed(2);

    return `
      <tr>
        <td style="padding:8px;">${(o.id || '').slice(-8).toUpperCase() || '—'}</td>
        <td style="padding:8px;">${new Date(o.ts || Date.now()).toLocaleString()}</td>
        <td style="padding:8px; text-align:right;">${o.items ?? '—'}</td>
        <td style="padding:8px; text-align:right;">${amountHTML}</td>
        <td style="padding:8px;">${o.status || 'paid'}</td>
      </tr>
    `;
  }).join('');

  ordersEl.innerHTML = `
    <div class="card" style="overflow:auto;">
      <table style="width:100%; border-collapse:separate; border-spacing:0 6px;">
        <thead>
          <tr class="muted">
            <th style="text-align:left; padding:8px;">Order</th>
            <th style="text-align:left; padding:8px;">Date</th>
            <th style="text-align:right; padding:8px;">Items</th>
            <th style="text-align:right; padding:8px;">Total</th>
            <th style="text-align:left; padding:8px;">Status</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}
}

// BOOT
document.addEventListener('DOMContentLoaded', () => {
  renderBestsellers();
  renderCatalog();
  wireForms();
  updateFooterMeta();
  renderCartPage();   // only runs if you’re on cart.html
  wireCheckoutTax();  // only runs if you’re on checkout.html
  wireLoginForm();    // only runs on login.html
  wireAccountUI();    // runs on all pages, updates header
  wireAccountPage();
});

// THEME TOGGLE
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    btn.textContent = '☀️';
  }

  btn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const light = document.body.classList.contains('light-mode');
    btn.textContent = light ? '☀️' : '🌙';
    localStorage.setItem('theme', light ? 'light' : 'dark');
  });
});

// Simple totals for reuse
function computeCartTotals() {
  const cart = getCart();
  let items = 0, subtotal = 0;
  cart.forEach(ci => {
    const p = PRODUCTS.find(x => x.id === ci.id);
    if (p) { items += (ci.qty || 1); subtotal += p.price * (ci.qty || 1); }
  });
  return { items, subtotal };
}


function wireCheckoutTax() {
  const page = document.getElementById('checkout-page');
  if (!page) return;

  const itemsEl = document.getElementById('co-items');
  const subEl   = document.getElementById('co-subtotal');
  const taxEl   = document.getElementById('co-tax');
  const totEl   = document.getElementById('co-total');
  const payBtn  = document.getElementById('co-pay');
  const msgEl   = document.getElementById('payment-messages');

  // Address inputs
  const nameEl   = document.getElementById('ship-name');
  const addrEl   = document.getElementById('ship-address');
  const cityEl   = document.getElementById('ship-city');
  const stateEl  = document.getElementById('ship-state');
  const zipEl    = document.getElementById('ship-zip');
  const countryEl= document.getElementById('ship-country');

  let latestCalcId = null;

  function currentShipping() {
    return {
      name: (nameEl?.value || '').trim(),
      address: {
        line1: (addrEl?.value || '').trim(),
        city: (cityEl?.value || '').trim(),
        state: (stateEl?.value || '').trim(),
        postal_code: (zipEl?.value || '').trim(),
        country: (countryEl?.value || 'US').trim(),
      }
    };
  }

  // Paint optimistic client totals while we fetch server values
  function optimisticPaint() {
  const { items, subtotal } = computeCartTotals();
  if (itemsEl) itemsEl.textContent = items;
  if (subEl)   subEl.textContent   = formatUSD(subtotal);
  if (taxEl)   taxEl.textContent   = '$0.00';
  if (totEl)   totEl.textContent   = formatUSD(subtotal);
}

  // Call backend to get authoritative tax for the address
   async function recalc() {
  const items = getCart().map(ci => ({ id: ci.id, qty: ci.qty || 1 }));
  if (!items.length) {
    optimisticPaint();
    if (payBtn) payBtn.disabled = true;
    return;
  }
  const shipping = currentShipping();

  try {
    if (payBtn) payBtn.disabled = true;
    if (msgEl)  msgEl.textContent = 'Calculating tax…';

    // Ask server for a tax preview
    // Require a complete address before hitting the server
const s = currentShipping();
const addr = s.address || {};
if (!addr.line1 || !addr.city || !addr.state || !addr.postal_code || !addr.country) {
  optimisticPaint();
  if (msgEl) msgEl.textContent = 'Enter full shipping address to calculate tax.';
  if (payBtn) payBtn.disabled = true;
  return;
}

const resp = await fetch(`${API_BASE}/tax-preview`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    items: getCart().map(ci => ({ id: ci.id, qty: ci.qty || 1 })),
    shipping: currentShipping()
  })
});

const data = await resp.json();
if (!resp.ok) throw new Error(data.error || 'Tax preview failed');

latestCalcId = data.id;                 
const { items: itemsCount } = computeCartTotals();
if (itemsEl) itemsEl.textContent = itemsCount;

const serverSubtotalC = Number(data.subtotal || 0);
const serverTaxC      = Number(data.tax || 0);

// If the server somehow sent subtotal=0 for a non-empty cart, reconstruct from total-tax
let displaySubtotalC = serverSubtotalC;
if (itemsCount > 0 && serverSubtotalC === 0) {
  displaySubtotalC = Math.max(0, (Number(data.total || 0) - serverTaxC));
}

// Paint (cents → dollars)
if (subEl) subEl.textContent = formatUSD(displaySubtotalC / 100);
if (taxEl) taxEl.textContent = formatUSD(serverTaxC / 100);
if (totEl) totEl.textContent = formatUSD((displaySubtotalC + serverTaxC) / 100);

// Save computed total instead of serverTotalC
const computedTotalC = displaySubtotalC + serverTaxC;
sessionStorage.setItem('last_totals', JSON.stringify({
  subtotal_c: displaySubtotalC,
  tax_c:      serverTaxC,
  total_c:    computedTotalC,
  currency:   'usd'
}));

if (msgEl) msgEl.textContent = '';
if (payBtn) payBtn.disabled = false;
  } catch (e) {
    optimisticPaint();
    if (msgEl) msgEl.textContent = e.message || 'Could not calculate tax.';
    if (payBtn) payBtn.disabled = true;
  }
}

// Stripe (client) payment shit
let stripe, elements, paymentElement;
const STRIPE_PK = 'pk_test_51S4pfCPtRDwYgoxeTaTjZHk2bORnbHwkB1iYWW2t0a7SseAUHTQb3yaQ8wroQGtsyaDRThQ8ChGuCdYcNhP5UmZz00qUy42VQt'; // pk_test key

async function startPayment(e) {
  e?.preventDefault?.();

  if (!latestCalcId) {
    if (msgEl) msgEl.textContent = 'Please enter your address so we can calculate tax.';
    return;
  }

  const shipping = currentShipping();
  try {
    payBtn.disabled = true;
    if (msgEl) msgEl.textContent = 'Initializing payment…';

    // 👇 Include calc_id + shipping + customer fields + compact cart
    const user = (typeof getUser === 'function') ? getUser() : null;

const resp = await fetch(`${API_BASE}/create-payment-intent`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    calc_id: latestCalcId,
    shipping,                                  // your current shipping object
    email: user?.email || '',                  // fallback to logged-in user
    name:  shipping?.name || user?.name || '', // shipping name or user name
    cart:  compactCart()                       // compact line items for metadata
  })
});

    const data = await resp.json();
    if (!resp.ok || !data.clientSecret) throw new Error(data.error || 'Init failed');

    if (!stripe) stripe = Stripe(STRIPE_PK);
    if (!elements) {
      elements = stripe.elements({ clientSecret: data.clientSecret });
      paymentElement = elements.create('payment');
      paymentElement.mount('#payment-element');
    } else {
      elements.update({ clientSecret: data.clientSecret });
    }

    // keep your local “what I tried to buy” snapshot (optional)
    sessionStorage.setItem("last_order", JSON.stringify(getCart()));

    // ✅ Confirm payment with smart redirect handling
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: THANK_YOU_URL },
      redirect: 'if_required'
      // redirect: THANK_YOU_URL   // cards won't leave the page; wallets/redirect methods will
    });

    if (result?.error) {
      payBtn.disabled = false;
      if (msgEl) msgEl.textContent = result.error.message || 'Payment failed. Please try again.';
      return;
    }

    const pi = result?.paymentIntent;
    if (pi && (pi.status === 'succeeded' || pi.status === 'processing')) {
      // show dynamic order summary on thank-you page
      window.location.href = `${THANK_YOU_URL}?pi=${encodeURIComponent(pi.id)}`;
      return;
    }

    // If we got here, it likely requires_action (handled by automatic redirect) or is unexpected
    if (msgEl) msgEl.textContent = 'Additional authentication required or unexpected status.';
    payBtn.disabled = false;
  } catch (err) {
    payBtn.disabled = false;
    if (msgEl) msgEl.textContent = err.message || 'Error initializing payment.';
  }
}


payBtn?.addEventListener('click', startPayment);

  // Recompute when user edits address
  ['change','keyup','blur'].forEach(evt => {
    nameEl?.addEventListener(evt, recalc);
    addrEl?.addEventListener(evt, recalc);
    cityEl?.addEventListener(evt, recalc);
    stateEl?.addEventListener(evt, recalc);
    zipEl?.addEventListener(evt, recalc);
    countryEl?.addEventListener(evt, recalc);
  });

  // Initial
  optimisticPaint();
  recalc();

  // Getterso payment step can use the latest calc_id
  window.getLatestTaxCalcId = () => latestCalcId;
}

// Rendering Products on product.html
function renderProductPage() {
  const page = document.getElementById('product-page');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    page.innerHTML = '<p>Product not found.</p>';
    return;
  }

  let currentImageIndex = 0;
  let currentColor = product.colors ? product.colors[0].name : null;

  function render() {
    const mainImage =
      product.images?.[currentImageIndex] ||
      (currentColor ? product.colors.find(c => c.name === currentColor)?.image : product.image);

    const colorOptions = product.colors
      ? product.colors
          .map(
            (c) => `
      <button class="color-option ${c.name === currentColor ? 'active' : ''}" data-color="${c.name}">
        ${c.name}
      </button>`
          )
          .join('')
      : '';

    const sizeOptions = product.size
      ? product.size.map((s) => `<option value="${s}">${s}</option>`).join('')
      : '';

    page.innerHTML = `
      <div class="product-detail">
        <div class="image-gallery">
          <button class="arrow prev">‹</button>
          <img src="${mainImage}" alt="${product.name}" class="main-image" id="main-image">
          <button class="arrow next">›</button>
        </div>

        <div class="info">
          <h1>${product.name}</h1>
          <p><strong>Price:</strong> ${formatUSD(product.price)}</p>
          <p><strong>Material:</strong> ${product.material || 'N/A'}</p>

          ${
            colorOptions
              ? `<div class="colors"><strong>Color:</strong> ${colorOptions}</div>`
              : ''
          }
          ${
            sizeOptions
              ? `<div class="sizes"><strong>Size:</strong> 
                <select id="size-select">${sizeOptions}</select></div>`
              : ''
          }

          <button class="cta" id="add-to-cart">Add to cart</button>
        </div>
      </div>
    `;

    // Navigation arrows
    const prev = page.querySelector('.arrow.prev');
    const next = page.querySelector('.arrow.next');
    prev.addEventListener('click', showPrevImage);
    next.addEventListener('click', showNextImage);

    // Color options
    const colors = page.querySelectorAll('.color-option');
    colors.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentColor = btn.dataset.color;
        render();
      });
    });

    // Add to cart
    const addBtn = page.querySelector('#add-to-cart');
    addBtn.addEventListener('click', () => addToCart(product.id));

    // Swipe handling
    const imageEl = page.querySelector('#main-image');
    addSwipeListeners(imageEl);
  }

  function showPrevImage() {
    if (!product.images) return;
    currentImageIndex =
      (currentImageIndex - 1 + product.images.length) % product.images.length;
    render();
  }

  function showNextImage() {
    if (!product.images) return;
    currentImageIndex = (currentImageIndex + 1) % product.images.length;
    render();
  }

  // 👉 Touch swipe events
  function addSwipeListeners(el) {
    let startX = 0;
    let endX = 0;

    el.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    el.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    });

    el.addEventListener('touchend', () => {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        // Swipe threshold
        if (diff > 0) showNextImage();
        else showPrevImage();
      }
    });
  }

  render();
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductPage();
});
  

