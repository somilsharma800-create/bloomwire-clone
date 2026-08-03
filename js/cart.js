// BloomWire — Cart & Wishlist System (localStorage)
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

const CART_KEY = 'bloomwire_cart';
const WISHLIST_KEY = 'bloomwire_wishlist';

function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch { return []; } }
function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); triggerCartBounce(); }
function triggerCartBounce() { document.querySelectorAll('.cart-count, .nav-icons a[href="cart.html"]').forEach(el => { el.classList.remove('cart-bounce'); void el.offsetWidth; el.classList.add('cart-bounce'); }); }

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId) || GIFT_SETS.find(g => g.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) { existing.qty += qty; } else {
    cart.push({ id: productId, name: product.name, price: product.price, image: product.image, qty });
  }
  saveCart(cart);
  showToast(`Added <strong>${product.name}</strong> to your cart ${ICON.flower}`);
  openCartDrawer();
}

function addCustomToCart(customItem) {
  const cart = getCart();
  cart.push({ id: customItem.id || ('custom-' + Date.now()), name: customItem.name, price: customItem.price, image: customItem.image || '', details: customItem.details || '', qty: customItem.qty || 1, isCustom: true });
  saveCart(cart);
  showToast(`Added custom <strong>${customItem.name}</strong> to your cart ${ICON.flower}`);
}

function removeFromCart(productId) { let cart = getCart(); cart = cart.filter(item => item.id !== productId); saveCart(cart); renderCart(); renderCartDrawer(); }
function updateQty(productId, delta) { const cart = getCart(); const item = cart.find(i => i.id === productId); if (!item) return; item.qty = Math.max(1, item.qty + delta); saveCart(cart); renderCart(); renderCartDrawer(); }
function getCartTotal() { return getCart().reduce((sum, item) => sum + (item.price * item.qty), 0); }
function getCartCount() { return getCart().reduce((sum, item) => sum + item.qty, 0); }
function getShippingCost() { const total = getCartTotal(); if (total === 0) return 0; return total >= 499 ? 0 : 49; }
function getGST(total) { return Math.round(total * 0.05 * 100) / 100; }
function getGrandTotal() { const subtotal = getCartTotal(); const shipping = getShippingCost(); const gst = getGST(subtotal + shipping); return { subtotal, shipping, gst, total: subtotal + shipping + gst }; }

function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = count; el.style.display = count > 0 ? 'inline-flex' : 'none'; });
}

// Wishlist
function getWishlist() { try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; } catch { return []; } }
function saveWishlist(wishlist) { localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist)); updateWishlistCount(); }
function isInWishlist(productId) { return getWishlist().includes(productId); }

function toggleWishlist(productId, e) {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  const name = product ? product.name : 'Item';
  if (index >= 0) { wishlist.splice(index, 1); showToast(`Removed <strong>${name}</strong> from your wishlist`); } else { wishlist.push(productId); showToast(`Added <strong>${name}</strong> to your wishlist`); }
  saveWishlist(wishlist);
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    if (isInWishlist(productId)) { btn.classList.add('active'); btn.innerHTML = ICON.heartFilled; } else { btn.classList.remove('active'); btn.innerHTML = ICON.heart; }
  });
  if (typeof renderWishlist === 'function' && document.getElementById('wishlist-container')) { renderWishlist(); }
}

function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el => { el.textContent = count; el.style.display = count > 0 ? 'inline-flex' : 'none'; });
}

// Toast
function showToast(message) {
  const toast = document.getElementById('toast') || createToast();
  toast.querySelector('.text').innerHTML = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
function createToast() { const toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; toast.innerHTML = '<div class="icon">${ICON.flower}</div><div class="text"></div>'; document.body.appendChild(toast); return toast; }

// Cart Drawer
function openCartDrawer() { document.getElementById('cart-drawer')?.classList.add('open'); document.getElementById('overlay')?.classList.add('show'); renderCartDrawer(); }
function closeCartDrawer() { document.getElementById('cart-drawer')?.classList.remove('open'); document.getElementById('overlay')?.classList.remove('show'); }

function renderCartDrawer() {
  const body = document.querySelector('#cart-drawer .cart-drawer-body');
  const footer = document.querySelector('#cart-drawer .cart-drawer-footer');
  if (!body || !footer) return;
  const cart = getCart();
  if (cart.length === 0) { body.innerHTML = '<div style="text-align:center;padding:40px 20px;"><div style="margin-bottom:12px;">${ICON.bagLarge}</div><p style="color:var(--muted-foreground);">Your cart is empty</p></div>'; footer.innerHTML = ''; return; }
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.image || ''}" alt="${item.name}"></div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        ${item.details ? `<p style="font-size:12px;color:var(--terracotta);">${item.details}</p>` : ''}
        <p>₹${item.price} each</p>
        <div class="qty-control" style="margin-top:8px;width:fit-content;">
          <button onclick="updateQty('${item.id}', -1)">−</button>
          <input type="text" value="${item.qty}" readonly>
          <button onclick="updateQty('${item.id}', 1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">
        <div class="cart-item-price">₹${item.price * item.qty}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</button>
      </div>
    </div>`).join('');
  const totals = getGrandTotal();
  footer.innerHTML = `
    <div class="summary-row"><span>Subtotal</span><span>₹${totals.subtotal}</span></div>
    <div class="summary-row"><span>Shipping</span><span>${totals.shipping === 0 ? 'FREE' : '₹' + totals.shipping}</span></div>
    <div class="summary-row total"><span>Total</span><span>₹${totals.total}</span></div>
    <a href="checkout.html" class="btn btn-cta btn-full" style="margin-top:12px;">Checkout</a>`;
}

// Cart Page
function renderCart() {
  const container = document.getElementById('cart-container');
  if (!container) return;
  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><div class="icon">${ICON.bagLarge}</div><h2>Your cart is empty</h2><p>Your blooms are waiting for you.</p><a href="shop.html" class="btn btn-cta">Browse Collection</a></div>`;
    return;
  }
  const totals = getGrandTotal();
  const remaining = 499 - totals.subtotal;
  const shippingMsg = remaining > 0 ? `Add ₹${remaining} more for FREE shipping!` : `${ICON.party} You earned FREE shipping!`;
  let itemsHTML = '<div class="cart-list">';
  cart.forEach(item => {
    itemsHTML += `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.image || ''}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          ${item.details ? `<p style="font-size:12px;color:var(--terracotta);">${item.details}</p>` : ''}
          <p>₹${item.price} each</p>
          <div class="qty-control" style="margin-top:8px;width:fit-content;">
            <button onclick="updateQty('${item.id}', -1)">−</button>
            <input type="text" value="${item.qty}" readonly>
            <button onclick="updateQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</button>
      </div>`;
  });
  itemsHTML += '</div>';
  let summaryHTML = `
    <div class="cart-summary">
      <h3>Order Summary</h3>
      <div class="free-shipping-bar">${shippingMsg}</div>
      <div class="summary-row"><span>Subtotal</span><span>₹${totals.subtotal}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${totals.shipping === 0 ? 'FREE' : '₹' + totals.shipping}</span></div>
      <div class="summary-row"><span>GST (5%)</span><span>₹${totals.gst}</span></div>
      <div class="summary-row total"><span>Total</span><span>₹${totals.total}</span></div>
      <a href="checkout.html" class="btn btn-cta btn-full" style="margin-top:16px;">Proceed to Checkout</a>
    </div>`;
  container.innerHTML = `<div style="display:grid;grid-template-columns:1.5fr 1fr;gap:32px;">${itemsHTML}${summaryHTML}</div>`;
}
