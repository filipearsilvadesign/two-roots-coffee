import { logo } from './art.js';

export const header = (variant = '') => `
<header class="site-header ${variant}">
  <nav class="nav nav-left" aria-label="Shop">
    <a href="./#coffee">Coffee</a>
    <a href="./#origins">Origins</a>
    <a href="./#about">About us</a>
  </nav>
  <a class="brand" href="./" aria-label="Two Roots Coffee, home">${logo}</a>
  <nav class="nav nav-right" aria-label="Account">
    <a class="nav-subscribe" href="./#subscribe">Subscribe</a>
    <button class="cart-button" type="button" aria-label="Cart, 0 items">Cart <span class="cart-count">0</span></button>
  </nav>
</header>`;

export const footer = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      ${logo}
      <p>Coffee from Brazil and Colombia, roasted for mornings in the United States.</p>
    </div>
    <form class="newsletter" onsubmit="event.preventDefault(); this.querySelector('output').textContent = 'You are on the list. Check your inbox to confirm.';">
      <label for="email">Get new origins and subscriber offers by email</label>
      <div class="newsletter-row">
        <input id="email" type="email" required placeholder="you@example.com" autocomplete="email">
        <button type="submit">Sign up</button>
      </div>
      <output aria-live="polite"></output>
    </form>
  </div>
  <div class="footer-links">
    <div><h3>Shop</h3><a href="product.html?c=brazil">Brazil</a><a href="product.html?c=colombia">Colombia</a><a href="product.html?c=brazil-colombia">Brazil &amp; Colombia</a><a href="./#subscribe">Subscription</a></div>
    <div><h3>About</h3><a href="./#about">Our story</a><a href="./#origins">Origins</a></div>
    <div><h3>Help</h3><a href="mailto:hello@tworootscoffee.com">hello@tworootscoffee.com</a><a href="./#subscribe">Manage subscription</a></div>
  </div>
  <p class="footer-legal">Two Roots Coffee LLC, 300 Village Square Blvd, Honeoye Falls, NY 14472</p>
</footer>`;

export function mountCart() {
  const count = document.querySelector('.cart-count');
  const button = document.querySelector('.cart-button');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  document.body.append(toast);
  let timer;
  return (label) => {
    const n = Number(count.textContent) + 1;
    count.textContent = n;
    button.setAttribute('aria-label', `Cart, ${n} item${n > 1 ? 's' : ''}`);
    toast.textContent = `Added to cart: ${label}`;
    toast.classList.add('is-visible');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };
}
