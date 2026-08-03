// BloomWire — Main JS
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
    if (p.stock <= 8) badges += `<span class="product-badge stock">⚡ Only ${p.stock} left!</span>`;
    const isWished = isInWishlist(p.id);
    const heartIcon = isWished ? '❤️' : '🤍';
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
          ${p.stock <= 8 ? '<div class="product-stock-alert">⚡ Only ' + p.stock + ' left!</div>' : ''}
          <div class="product-petals">🌸 Earn ${p.petals} Petals</div>
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
    container.innerHTML = '<div class="cart-empty"><div class="icon">🔍</div><h2>Product not found</h2><a href="shop.html" class="btn btn-cta">Back to Shop</a></div>';
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
        <button class="wishlist-btn ${isWished ? 'active' : ''}" data-id="${product.id}" onclick="toggleWishlist('${product.id}', event)" style="position:absolute;top:16px;right:16px;z-index:2;font-size:22px;background:rgba(255,255,255,.9);border-radius:50%;width:44px;height:44px;">${isWished ? '❤️' : '🤍'}</button>
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="pdp-info">
        ${product.sale_tag ? '<span class="pdp-badge" style="display:inline-block;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600;background:#f3e8e4;color:#8b5a4a;margin-bottom:8px;">' + product.sale_tag + '</span>' : ''}
        ${product.best_seller ? '<span class="pdp-badge" style="display:inline-block;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:600;background:#333;color:white;margin-bottom:8px;margin-left:8px;">Best Seller</span>' : ''}
        <h1>${product.name}</h1>
        <p class="pdp-tagline">${product.tagline}</p>
        <div class="pdp-rating"><span class="pdp-stars">★★★★★</span> <span>5.0 (8 reviews)</span></div>
        <div class="pdp-price"><span class="current">₹${product.price}</span><span class="original">₹${product.mrp}</span><span class="badge">Save ₹${savings} (${discount}% off)</span><div style="font-size:12px;color:var(--sage);margin-top:4px;">Incl. GST · Origin: ${product.origin}</div></div>
        <div class="pdp-petals">🌸 Earn <strong>${product.petals} Petals</strong> with this purchase</div>
        <p style="font-size:15px;color:hsl(var(--muted-foreground));margin-bottom:24px;line-height:1.7;">${product.description}</p>
        <div class="pdp-qty"><span>Quantity:</span><div class="qty-control"><button onclick="changeQty(-1)">−</button><input type="text" id="pdp-qty" value="1" readonly><button onclick="changeQty(1)">+</button></div></div>
        <div class="pdp-actions"><button class="btn btn-cta" style="flex:1;" onclick="addToCart('${product.id}', getPdpQty())">Add to Cart</button><button class="btn btn-outline" style="flex:1;" onclick="buyNow('${product.id}', getPdpQty())">Buy Now</button></div>
        <div class="pdp-trust"><div>🔒 Secure Payment</div><div>🧾 GST Invoiced</div><div>✋ Handcrafted in Jaipur</div></div>
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
    container.innerHTML = `<div class="wishlist-empty"><div class="icon">🤍</div><h2>Your wishlist is empty</h2><p>Explore our handcrafted stems and tap the heart to save your favourites.</p><a href="shop.html" class="btn btn-cta">Browse Collection</a></div>`;
    return;
  }
  container.innerHTML = `<div class="product-grid">${wishedProducts.map(p => {
    const isWished = true;
    return `
      <div class="product-card fade-in">
        <div class="product-card-img" onclick="window.location.href='product.html?id=${p.id}'">
          <button class="wishlist-btn active" data-id="${p.id}" onclick="toggleWishlist('${p.id}', event)">❤️</button>
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
    container.innerHTML = '<div class="cart-empty"><div class="icon">🛒</div><h2>Your cart is empty</h2><a href="shop.html" class="btn btn-cta">Browse Collection</a></div>';
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
    const icon = a.type === 'earn' ? '🌸' : a.type === 'tier' ? '⭐' : '🎁';
    return `<div class="petals-activity-item">${icon} ${a.user_name} ${a.action} ${a.product_name}</div>`;
  }).join('');
}

// Leaderboard
function renderLeaderboard(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = LEADERBOARD.map(l => `
    <div class="leaderboard-item">
      <div class="leaderboard-rank ${l.rank === 1 ? 'crown' : ''}">${l.rank === 1 ? '👑' : '#' + l.rank}</div>
      <div class="leaderboard-name">${l.name}</div>
      <div class="leaderboard-tier">${l.tier}</div>
      <div class="leaderboard-petals">${l.petals} 🌸</div>
    </div>`).join('');
}
