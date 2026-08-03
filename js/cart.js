// BloomWire — Cart & Wishlist System (localStorage)
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
  showToast(`Added <strong>${product.name}</strong> to your cart 🌸`);
  openCartDrawer();
}

function addCustomToCart(customItem) {
  const cart = getCart();
  cart.push({ id: customItem.id || ('custom-' + Date.now()), name: customItem.name, price: customItem.price, image: customItem.image || '', details: customItem.details || '', qty: customItem.qty || 1, isCustom: true });
  saveCart(cart);
  showToast(`Added custom <strong>${customItem.name}</strong> to your cart 🌸`);
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
  if (index >= 0) { wishlist.splice(index, 1); showToast(`Removed <strong>${name}</strong> from your wishlist`); } else { wishlist.push(productId); showToast(`Added <strong>${name}</strong> to your wishlist ❤️`); }
  saveWishlist(wishlist);
  document.querySelectorAll(`.wishlist-btn[data-id="${productId}"]`).forEach(btn => {
    if (isInWishlist(productId)) { btn.classList.add('active'); btn.innerHTML = '❤️'; } else { btn.classList.remove('active'); btn.innerHTML = '🤍'; }
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
function createToast() { const toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; toast.innerHTML = '<div class="icon">🌸</div><div class="text"></div>'; document.body.appendChild(toast); return toast; }

// Cart Drawer
function openCartDrawer() { document.getElementById('cart-drawer')?.classList.add('open'); document.getElementById('overlay')?.classList.add('show'); renderCartDrawer(); }
function closeCartDrawer() { document.getElementById('cart-drawer')?.classList.remove('open'); document.getElementById('overlay')?.classList.remove('show'); }

function renderCartDrawer() {
  const body = document.querySelector('#cart-drawer .cart-drawer-body');
  const footer = document.querySelector('#cart-drawer .cart-drawer-footer');
  if (!body || !footer) return;
  const cart = getCart();
  if (cart.length === 0) { body.innerHTML = '<div style="text-align:center;padding:40px 20px;"><div style="font-size:48px;margin-bottom:12px;">🛒</div><p style="color:var(--muted-foreground);">Your cart is empty</p></div>'; footer.innerHTML = ''; return; }
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
    container.innerHTML = `<div class="cart-empty"><div class="icon">🛒</div><h2>Your cart is empty</h2><p>Your blooms are waiting for you.</p><a href="shop.html" class="btn btn-cta">Browse Collection</a></div>`;
    return;
  }
  const totals = getGrandTotal();
  const remaining = 499 - totals.subtotal;
  const shippingMsg = remaining > 0 ? `Add ₹${remaining} more for FREE shipping!` : '🎉 You earned FREE shipping!';
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
