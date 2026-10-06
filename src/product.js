import './styles.css';
import { gsap } from 'gsap';
import { products, findProduct } from './data.js';
import { bag, scene } from './art.js';
import { header, footer, mountCart } from './layout.js';

document.querySelector('#header').outerHTML = header();
document.querySelector('#footer').outerHTML = footer;
const addToCart = mountCart();

const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s) => document.querySelector(s);
const form = $('#buy-form');
let product;
let qty = 1;

function render(slug, { animate = true } = {}) {
  product = findProduct(slug);
  document.title = `${product.name} | Two Roots Coffee`;
  document.body.style.setProperty('--accent', product.color);

  $('#product-origin').textContent = product.origin;
  $('#product-title').textContent = product.name;
  $('#product-tagline').textContent = product.tagline;
  $('#product-notes').innerHTML = product.notes.map((n) => `<li>${n}</li>`).join('');
  $('#product-details').innerHTML = Object.entries(product.details)
    .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
    .join('');
  $('#story-text').textContent = product.story;
  $('#story-fact').textContent = product.fact;
  $('#story-art').innerHTML = scene(product.slug);

  $('#pairs').innerHTML = products
    .filter((p) => p.slug !== product.slug)
    .map(
      (p) => `
      <a class="pair" href="?c=${p.slug}" data-slug="${p.slug}">
        <div class="pair-bag">${bag(p)}</div>
        <h3>${p.name}</h3>
        <p>${p.notes.join(', ')}</p>
        <span class="pair-price">$${p.price}</span>
      </a>`,
    )
    .join('');

  renderBag();
  updateTotal();

  if (animate && motionOk) {
    gsap.from('.product-panel > *', { y: 16, autoAlpha: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out' });
    gsap.from('.product-bag', { y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out' });
  }
}

function renderBag() {
  const grind = form.grind.value;
  $('#product-bag').innerHTML = bag(product, grind);
  document.querySelectorAll('.product-thumbs [role=tab]').forEach((b) => {
    b.setAttribute('aria-selected', String(b.dataset.view === grind));
  });
}

function updateTotal() {
  const subscribe = form.plan.value === 'subscribe';
  const unit = subscribe ? product.price * 0.9 : product.price;
  $('#total').textContent = `$${(unit * qty).toFixed(2)}`;
  $('#frequency').hidden = !subscribe;
}

form.addEventListener('change', (e) => {
  if (e.target.name === 'grind') renderBag();
  updateTotal();
});

document.querySelectorAll('.product-thumbs [role=tab]').forEach((b) => {
  b.addEventListener('click', () => {
    form.grind.value = b.dataset.view;
    renderBag();
  });
});

document.querySelectorAll('[data-qty]').forEach((b) => {
  b.addEventListener('click', () => {
    qty = Math.max(1, qty + Number(b.dataset.qty));
    $('#qty').textContent = qty;
    updateTotal();
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const plan = form.plan.value === 'subscribe' ? `every ${form.every.value} weeks` : 'one time';
  addToCart(`${qty} × ${product.name}, ${form.grind.value}, ${plan}`);
});

// The "pairs well with" cards swap the page in place, the way the Onyx panel does.
document.addEventListener('click', (e) => {
  const link = e.target.closest('.pair');
  if (!link) return;
  e.preventDefault();
  history.pushState({}, '', `?c=${link.dataset.slug}`);
  render(link.dataset.slug);
  window.scrollTo({ top: 0, behavior: motionOk ? 'smooth' : 'auto' });
});

window.addEventListener('popstate', () => {
  render(new URLSearchParams(location.search).get('c'), { animate: false });
});

render(new URLSearchParams(location.search).get('c'));
