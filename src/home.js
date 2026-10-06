import './styles.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from './data.js';
import { bag, scene, roots } from './art.js';
import { header, footer } from './layout.js';

gsap.registerPlugin(ScrollTrigger);

document.querySelector('#header').outerHTML = header('header-overlay');
document.querySelector('#footer').outerHTML = footer;
document.querySelector('#hero-art').innerHTML = roots;

document.querySelectorAll('[data-bag]').forEach((el) => {
  el.innerHTML = bag(products.find((p) => p.slug === el.dataset.bag));
});
document.querySelectorAll('[data-scene]').forEach((el) => {
  el.innerHTML = scene(el.dataset.scene);
});

document.querySelector('#explore-items').innerHTML = products
  .map(
    (p) => `
    <li>
      <a href="/product.html?c=${p.slug}">
        <span class="explore-swatch" style="--swatch:${p.color}"></span>
        <span class="explore-name">${p.name}</span>
        <span class="explore-notes">${p.notes.join(', ')}</span>
        <span class="explore-price">$${p.price}</span>
      </a>
    </li>`,
  )
  .join('');

const archOrder = ['colombia', 'brazil-colombia', 'brazil'];
document.querySelector('#arches').innerHTML = archOrder
  .map((slug) => products.find((p) => p.slug === slug))
  .map(
    (p) => `
    <a class="arch" href="/product.html?c=${p.slug}">
      <div class="arch-media">${scene(p.slug)}</div>
      <h3>${p.name}</h3>
      <p>${p.origin}</p>
    </a>`,
  )
  .join('');

const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (motionOk) {
  const rootPaths = gsap.utils.toArray('.hero-art .root');
  rootPaths.forEach((path) => {
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  });
  gsap
    .timeline({ defaults: { ease: 'power2.out' } })
    .to('.hero-art .root-main', { strokeDashoffset: 0, duration: 2.2 })
    .to('.hero-art .root:not(.root-main)', { strokeDashoffset: 0, duration: 1.2, stagger: 0.08 }, '-=1.4')
    .from('.roots-heart', { scale: 0, transformOrigin: '50% 100%', duration: 0.6, ease: 'back.out(2)' }, '-=0.6')
    .from('.hero-copy > *', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, '-=0.5');

  gsap.utils.toArray('.feature-bag .bag').forEach((el) => {
    gsap.to(el, {
      y: -40,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}
