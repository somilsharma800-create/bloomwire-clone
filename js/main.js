// BloomWire — Main JS
const ICON = {
  flower: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:2px;"><circle cx="12" cy="12" r="3"/><path d="M12 2c-2 2-2 4 0 6 2-2 2-4 0-6zM12 22c-2-2-2-4 0-6 2 2 2 4 0 6zM2 12c2-2 4-2 6 0-2 2-4 2-6 0zM22 12c-2-2-4-2-6 0 2 2 4 2 6 0zM5 5c-1 2 0 4 2 4 1-2 0-4-2-4zM19 19c-1-2 0-4 2-4 1 2 0 4-2 4zM19 5c1 2 0 4-2 4-1-2 0-4 2-4zM5 19c1-2 0-4-2-4-1 2 0 4 2 4z"/></svg>',
  lightning: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="display:inline-block;vertical-align:middle;margin-right:2px;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartFilled: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#c86d51" stroke="#c86d51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  heartLarge: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  search: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  lock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px;"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  receipt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px;"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>',
  hand: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px;"><path d="M18 11V6a2 2 0 0 0-4 0v5M14 10V4a2 2 0 0 0-4 0v6M10 10V6a2 2 0 0 0-4 0v8c0 4 3 8 8 8s8-4 8-8v-4a2 2 0 0 0-4 0v1"/></svg>',
  bagLarge: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  star: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="display:inline-block;vertical-align:middle;margin-right:2px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  gift: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:2px;"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>',
  crown: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M2 4l3 12h14l3-12-6 7-4-5-4 5-6-7z"/><path d="M3 20h18"/></svg>',
  check: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px;"><polyline points="20 6 9 17 4 12"/></svg>',
  party: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px;"><path d="M5.8 11.3 2 22l10.7-3.8z"/><path d="M4 3h.01M9 6h.01M15 2h.01M20 8h.01M17 14h.01M22 19h.01"/></svg>'
};

document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
  updateWishlistCount();
  initStickyHeader();
  initScrollReveal();
  initMobileMenu();
  initAccordions();
  initCartDrawerEvents();
  setActiveNav();
});

function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
}

function initAccordions() {
  document.querySelectorAll('.accordion-header, .faq-question').forEach(header => {
    header.addEventListener('click', function() { this.parentElement.classList.toggle('open'); });
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.product-card, .gift-card, .value-prop, .tier-card, .gallery-item, .faq-item, .section-title, .section-subtitle, .reveal, .review-card, .process-step-card, .occasion-card, .scrapbook-card, .reward-card, .creator-benefit, .partner-card, .countdown-item').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === 'index.html' && href === 'index.html') || (path === '' && href === 'index.html')) a.classList.add('active');
  });
}

function initCartDrawerEvents() {
  document.querySelectorAll('[data-open-cart]')?.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); openCartDrawer(); }));
  document.querySelector('#cart-drawer .cart-drawer-close')?.addEventListener('click', closeCartDrawer);
  document.getElementById('overlay')?.addEventListener('click', closeCartDrawer);
}

// Render product grid
function renderProducts(containerId, filter = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;
  let filtered = PRODUCTS;
  if (filter !== 'all') filtered = PRODUCTS.filter(p => p.category === filter);
  if (filtered.length === 0) { container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted-foreground);">No products found.</div>'; return; }
  container.innerHTML = filtered.map(p => {
    let badges = '';
    if (p.best_seller) badges += '<span class="product-badge trending">TRENDING</span>';
    const discount = Math.round((1 - p.price / p.mrp) * 100);
    badges += `<span class="product-badge discount">−${discount}%</span>`;
    if (p.stock <= 8) badges += `<span class="product-badge stock">${ICON.lightning} Only ${p.stock} left!</span>`;
    const isWished = isInWishlist(p.id);
    const heartIcon = isWished ? ICON.heartFilled : ICON.heart;
    const savings = p.mrp - p.price;
    return `
      <div class="product-card fade-in" onclick="window.location.href='product.html?id=${p.id}'">
        <div class="product-card-img">
          <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${p.id}" onclick="toggleWishlist('${p.id}', event)">${heartIcon}</button>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          ${badges}
        </div>
        <div class="product-card-body">
          <h3>${p.name}</h3>
          <p class="product-tagline">${p.tagline}</p>
          <div class="product-price">
            <span class="current">₹${p.price}</span>
            <span class="original">₹${p.mrp}</span>
          </div>
          <div style="font-size:12px;color:var(--sage);font-weight:600;margin-bottom:8px;">YOU SAVE ₹${savings} (${discount}% OFF)</div>
          ${p.stock <= 8 ? '<div class="product-stock-alert">' + ICON.lightning + ' Only ' + p.stock + ' left!</div>' : ''}
          <div class="product-petals">${ICON.flower} Earn ${p.petals} Petals</div>
          <div class="product-rating"><span class="stars">★★★★★</span> 4.9</div>
          <button class="btn btn-cta btn-small btn-full" style="margin-top:8px;" onclick="event.stopPropagation();addToCart('${p.id}')">Add to Cart</button>
        </div>
      </div>`;
  }).join('');
}

// Product detail page
function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = PRODUCTS.find(p => p.id === id);
  const container = document.getElementById('pdp-container');
  if (!container) return;
  if (!product) {
    container.innerHTML = '<div class="cart-empty"><div class="icon">${ICON.search}</div><h2>Product not found</h2><a href="shop.html" class="btn btn-cta">Back to Shop</a></div>';
    return;
  }
  document.title = `${product.name} — BloomWire`;
  const savings = product.mrp - product.price;
  const discount = Math.round((1 - product.price / product.mrp) * 100);
  const isWished = isInWishlist(product.id);
  container.innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a> <span>/</span> <a href="shop.html">Shop</a> <span>/</span> <a href="shop.html?category=${product.category}">${product.category.replace('_', ' ').replace(/^\w/, c => c.toUpperCase())}</a> <span>/</span> ${product.name}</div>
    <div class="pdp">
      <div class="pdp-image">
        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}', event)" style="position:absolute;top:16px;right:16px;z-index:2;font-size:22px;background:rgba(255,255,255,.9);border-radius:50%;width:44px;height:44px;">${isWished ? ICON.heartFilled : ICON.heart}</button>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="pdp-info">
        ${product.sale_tag ? '<span class="pdp-badge" style="display:inline-block;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600;background:#f3e8e4;color:#8b5a4a;margin-bottom:8px;">' + product.sale_tag + '</span>' : ''}
        ${product.best_seller ? '<span class="pdp-badge" style="display:inline-block;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600;background:#333;color:white;margin-bottom:8px;margin-left:8px;">Best Seller</span>' : ''}
        <h1>${product.name}</h1>
        <p class="pdp-tagline">${product.tagline}</p>
        <div class="pdp-rating"><span class="pdp-stars">★★★★★</span> <span>5.0 (8 reviews)</span></div>
        <div class="pdp-price"><span class="current">₹${product.price}</span><span class="original">₹${product.mrp}</span><span class="badge">Save ₹${savings} (${discount}% off)</span><div style="font-size:12px;color:var(--sage);margin-top:4px;">Incl. GST · Origin: ${product.origin}</div></div>
        <div class="pdp-petals">${ICON.flower} Earn <strong>${product.petals} Petals</strong> with this purchase</div>
        <p style="font-size:15px;color:hsl(var(--muted-foreground));margin-bottom:24px;line-height:1.7;">${product.description}</p>
        <div class="pdp-qty"><span>Quantity:</span><div class="qty-control"><button onclick="changeQty(-1)">−</button><input type="text" id="pdp-qty" value="1" readonly><button onclick="changeQty(1)">+</button></div></div>
        <div class="pdp-actions"><button class="btn btn-cta" style="flex:1;" onclick="addToCart('${product.id}', getPdpQty())">Add to Cart</button><button class="btn btn-outline" style="flex:1;" onclick="buyNow('${product.id}', getPdpQty())">Buy Now</button></div>
        <div class="pdp-trust"><div>${ICON.lock} Secure Payment</div><div>${ICON.receipt} GST Invoiced</div><div>${ICON.hand} Handcrafted in Jaipur</div></div>
        <div class="pdp-accordion">
          <div class="accordion-item open"><div class="accordion-header">Description</div><div class="accordion-body"><div class="accordion-body-inner">${product.description}</div></div></div>
          <div class="accordion-item"><div class="accordion-header">Details & Materials</div><div class="accordion-body"><div class="accordion-body-inner"><strong>Colour:</strong> ${product.color_name}<br><strong>Stem Length:</strong> ${product.stem_length}<br>${product.wire_gauge ? '<strong>Wire Gauge:</strong> ' + product.wire_gauge + '<br>' : ''}<strong>SKU:</strong> ${product.sku}<br><strong>Origin:</strong> ${product.origin}</div></div></div>
          <div class="accordion-item"><div class="accordion-header">Care & Delivery</div><div class="accordion-body"><div class="accordion-body-inner"><strong>Care:</strong> ${product.care}<br><strong>Delivery:</strong> ${product.deliveryTime}</div></div></div>
        </div>
      </div>
    </div>
    <div class="section"><h2 class="section-heading">You May Also Like</h2><div class="product-grid" id="related-products"></div></div>`;
  initAccordions();
  const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  const relatedContainer = document.getElementById('related-products');
  if (relatedContainer) relatedContainer.innerHTML = related.map(p => `
    <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="product-card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-card-body"><h3>${p.name}</h3><p class="product-tagline">${p.tagline}</p><div class="product-price"><span class="current">₹${p.price}</span></div></div>
    </div>`).join('');
}

function getPdpQty() { return parseInt(document.getElementById('pdp-qty')?.value || '1'); }
function changeQty(delta) { const input = document.getElementById('pdp-qty'); if (!input) return; input.value = Math.max(1, parseInt(input.value) + delta); }
function buyNow(productId, qty) { addToCart(productId, qty); window.location.href = 'checkout.html'; }

// Render gift sets
function renderGiftSets(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = GIFT_SETS.map(g => {
    const savings = Math.round((1 - g.price / g.mrp) * 100);
    return `
    <div class="gift-card fade-in">
      <div class="gift-card-img"><img src="${g.image}" alt="${g.name}" loading="lazy"></div>
      <div class="gift-card-body">
        <h3>${g.name}</h3>
        <p>${g.description}</p>
        <ul class="gift-card-includes">${g.includes.map(i => `<li>· ${i}</li>`).join('')}</ul>
        <div class="gift-card-price"><span class="current">₹${g.price}</span><span class="original">₹${g.mrp}</span><span class="save">Save ${savings}%</span></div>
        <p style="font-size:13px;color:hsl(var(--muted-foreground));margin-bottom:12px;">Incl. GST · Origin: India</p>
        <button class="btn btn-cta btn-small btn-full" onclick="addToCart('${g.id}')">Add Set to Cart</button>
      </div>
    </div>`;
  }).join('');
}

// Render wishlist
function renderWishlist() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;
  const wishedIds = getWishlist();
  const wishedProducts = PRODUCTS.filter(p => wishedIds.includes(p.id));
  if (wishedProducts.length === 0) {
    container.innerHTML = `<div class="wishlist-empty"><div class="icon">${ICON.heartLarge}</div><h2>Your wishlist is empty</h2><p>Explore our handcrafted stems and tap the heart to save your favourites.</p><a href="shop.html" class="btn btn-cta">Browse Collection</a></div>`;
    return;
  }
  container.innerHTML = `<div class="product-grid">${wishedProducts.map(p => {
    const isWished = true;
    return `
      <div class="product-card fade-in">
        <div class="product-card-img" onclick="window.location.href='product.html?id=${p.id}'">
          <button class="wishlist-btn active" data-id="${p.id}" onclick="toggleWishlist('${p.id}', event)">${ICON.heartFilled}</button>
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="product-card-body"><h3>${p.name}</h3><p class="product-tagline">${p.tagline}</p><div class="product-price"><span class="current">₹${p.price}</span><span class="original">₹${p.mrp}</span></div>
        <div style="display:flex;gap:8px;margin-top:12px;"><button class="btn btn-cta btn-small" style="flex:1;" onclick="addToCart('${p.id}')">Add to Cart</button><button class="btn btn-outline btn-small" onclick="toggleWishlist('${p.id}', event)">Remove</button></div></div>
      </div>`;
  }).join('')}</div>`;
}

// Checkout
function renderCheckout() {
  const container = document.getElementById('checkout-container');
  if (!container) return;
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = '<div class="cart-empty"><div class="icon">${ICON.bagLarge}</div><h2>Your cart is empty</h2><a href="shop.html" class="btn btn-cta">Browse Collection</a></div>';
    return;
  }
  const totals = getGrandTotal();
  container.innerHTML = `
    <div class="breadcrumbs"><a href="index.html">Home</a> <span>/</span> <a href="cart.html">Cart</a> <span>/</span> Checkout</div>
    <div class="checkout-grid">
      <div>
        <h3 style="font-family:var(--font-heading);font-size:22px;margin-bottom:24px;">Shipping Details</h3>
        <form onsubmit="placeOrder(event)">
          <div class="form-group"><label>Full Name *</label><input type="text" required placeholder="Your name"></div>
          <div class="form-row"><div class="form-group"><label>Phone *</label><input type="tel" required placeholder="+91 6367532123"></div><div class="form-group"><label>Email *</label><input type="email" required placeholder="you@example.com"></div></div>
          <div class="form-group"><label>Address Line 1 *</label><textarea required placeholder="House no, street, area"></textarea></div>
          <div class="form-row"><div class="form-group"><label>City *</label><input type="text" required placeholder="Jaipur"></div><div class="form-group"><label>State *</label><input type="text" required placeholder="Rajasthan"></div></div>
          <div class="form-row"><div class="form-group"><label>PIN Code *</label><input type="text" required pattern="[0-9]{6}" maxlength="6" placeholder="302001"></div><div class="form-group"><label>Country</label><input type="text" value="India" readonly></div></div>
          <h3 style="font-family:var(--font-heading);font-size:22px;margin:24px 0 16px;">Payment Method</h3>
          <div class="payment-options">
            <div class="payment-option selected"><input type="radio" name="payment" value="upi" checked id="pay-upi"><label for="pay-upi">UPI (GPay / PhonePe / Paytm)</label></div>
            <div class="payment-option"><input type="radio" name="payment" value="card" id="pay-card"><label for="pay-card">Card (Visa / Mastercard / RuPay)</label></div>
            <div class="payment-option"><input type="radio" name="payment" value="cod" id="pay-cod"><label for="pay-cod">Cash on Delivery (+₹49 fee)</label></div>
          </div>
          <button type="submit" class="btn btn-cta btn-full" style="margin-top:24px;">Place Order — ₹${totals.total}</button>
        </form>
      </div>
      <div class="cart-summary">
        <h3>Order Summary</h3>
        ${cart.map(item => `<div class="summary-row"><span>${item.name} x ${item.qty}</span><span>₹${item.price * item.qty}</span></div>`).join('')}
        <hr style="margin:16px 0;border:none;border-top:1px solid hsl(var(--border));">
        <div class="summary-row"><span>Subtotal</span><span>₹${totals.subtotal}</span></div>
        <div class="summary-row"><span>Shipping</span><span>${totals.shipping === 0 ? 'FREE' : '₹' + totals.shipping}</span></div>
        <div class="summary-row"><span>GST (5%)</span><span>₹${totals.gst}</span></div>
        <div class="summary-row total"><span>Total</span><span>₹${totals.total}</span></div>
      </div>
    </div>`;
}

function placeOrder(e) {
  e.preventDefault();
  const orderId = 'BW-' + Math.floor(10000 + Math.random() * 90000);
  localStorage.removeItem('bloomwire_cart');
  window.location.href = `order-confirmation.html?orderId=${orderId}`;
}

// Petals Activity Feed
function renderPetalsActivity(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = PETALS_ACTIVITIES.map(a => {
    const icon = a.type === 'earn' ? ICON.flower : a.type === 'tier' ? ICON.star : ICON.gift;
    return `<div class="petals-activity-item">${icon} ${a.user_name} ${a.action} ${a.product_name}</div>`;
  }).join('');
}

// Leaderboard
function renderLeaderboard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = LEADERBOARD.map(l => `
    <div class="leaderboard-item">
      <div class="leaderboard-rank ${l.rank === 1 ? 'crown' : ''}">${l.rank === 1 ? ICON.crown : '#' + l.rank}</div>
      <div class="leaderboard-name">${l.name}</div>
      <div class="leaderboard-tier">${l.tier}</div>
      <div class="leaderboard-petals">${l.petals} ${ICON.flower}</div>
    </div>`).join('');
}
