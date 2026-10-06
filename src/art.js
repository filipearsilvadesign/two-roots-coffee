const scenes = {
  brazil: `
    <rect x="0" y="0" width="200" height="150" fill="#1f5c3a"/>
    <circle cx="150" cy="38" r="22" fill="#f0c23b"/>
    <path d="M0 95 Q50 60 100 88 T200 80 V150 H0Z" fill="#2f7a4a"/>
    <path d="M0 120 Q60 95 120 115 T200 108 V150 H0Z" fill="#3f9a5c"/>
    <g fill="#245e3a">
      <path d="M22 150 V70" stroke="#5a3a22" stroke-width="4"/>
      <ellipse cx="10" cy="68" rx="18" ry="6" transform="rotate(-25 10 68)"/>
      <ellipse cx="34" cy="66" rx="18" ry="6" transform="rotate(25 34 66)"/>
      <ellipse cx="22" cy="60" rx="5" ry="16"/>
    </g>
    <g fill="#e9a6c8"><circle cx="168" cy="96" r="9"/><circle cx="180" cy="90" r="8"/><circle cx="158" cy="88" r="7"/></g>
    <path d="M170 150 V98" stroke="#5a3a22" stroke-width="3"/>
    <g transform="translate(82 70)">
      <ellipse cx="0" cy="10" rx="13" ry="18" fill="#101010"/>
      <circle cx="0" cy="-6" r="10" fill="#101010"/>
      <circle cx="1" cy="-4" r="6" fill="#fff4cf"/>
      <circle cx="2" cy="-6" r="2" fill="#101010"/>
      <path d="M8 -8 Q34 -6 36 4 Q20 2 8 0Z" fill="#f08a24"/>
      <path d="M8 -8 Q30 -7 36 4" stroke="#c9471b" stroke-width="2" fill="none"/>
    </g>`,
  colombia: `
    <rect x="0" y="0" width="200" height="150" fill="#2c4a7a"/>
    <circle cx="48" cy="40" r="20" fill="#f3b52d"/>
    <path d="M0 110 L45 55 L80 92 L120 40 L165 88 L200 62 V150 H0Z" fill="#3e6aa8"/>
    <path d="M112 50 L120 40 L128 50 L122 47 L120 52 L117 47Z" fill="#eef1f2"/>
    <path d="M0 128 L60 92 L110 120 L160 96 L200 112 V150 H0Z" fill="#2f7a4a"/>
    <g stroke="#d9cdb5" stroke-width="3">
      <path d="M140 150 V70"/><path d="M164 150 V58"/>
    </g>
    <g fill="#3f9a5c">
      <ellipse cx="132" cy="70" rx="12" ry="4" transform="rotate(-20 132 70)"/>
      <ellipse cx="148" cy="70" rx="12" ry="4" transform="rotate(20 148 70)"/>
      <ellipse cx="156" cy="58" rx="12" ry="4" transform="rotate(-20 156 58)"/>
      <ellipse cx="172" cy="58" rx="12" ry="4" transform="rotate(20 172 58)"/>
    </g>
    <path d="M70 30 q8 -6 16 0 q8 -6 16 0" stroke="#101010" stroke-width="2.5" fill="none"/>
    <g><rect x="0" y="142" width="200" height="3" fill="#f3b52d"/><rect x="0" y="145" width="200" height="2.5" fill="#2c4a9e"/><rect x="0" y="147.5" width="200" height="2.5" fill="#c8302e"/></g>`,
  'brazil-colombia': `
    <rect x="0" y="0" width="200" height="150" fill="#1f5c3a"/>
    <path d="M100 0 H200 V150 H70Z" fill="#2c4a7a"/>
    <circle cx="100" cy="42" r="22" fill="#f0c23b"/>
    <path d="M0 105 Q40 80 90 100 L100 150 H0Z" fill="#3f9a5c"/>
    <path d="M100 150 L118 88 L148 112 L172 74 L200 98 V150Z" fill="#3e6aa8"/>
    <path d="M100 128 C 70 100, 60 70, 92 66 C 100 66, 100 74, 100 78 C 100 74, 100 66, 108 66 C 140 70, 130 100, 100 128Z" fill="#c9a04b"/>
    <g fill="#245e3a"><ellipse cx="22" cy="74" rx="16" ry="5" transform="rotate(-25 22 74)"/><ellipse cx="44" cy="72" rx="16" ry="5" transform="rotate(25 44 72)"/></g>
    <path d="M33 150 V76" stroke="#5a3a22" stroke-width="4"/>
    <path d="M182 150 V80" stroke="#d9cdb5" stroke-width="3"/>`,
};

export const scene = (slug) =>
  `<svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${scenes[slug]}</svg>`;

const twoBeans = (x, y, s = 1) => `
  <g transform="translate(${x} ${y}) scale(${s})" fill="#c9a04b">
    <path d="M0 14 C -14 4, -12 -12, -2 -12 C 2 -12, 3 -8, 0 -4 C -3 2, -1 8, 0 14Z"/>
    <path d="M0 14 C 14 4, 12 -12, 2 -12 C -2 -12, -3 -8, 0 -4 C 3 2, 1 8, 0 14Z" opacity=".75"/>
  </g>`;

export const bag = (product, grind = 'Whole bean') => `
<svg class="bag" viewBox="0 0 240 340" role="img" aria-label="${product.name} coffee bag, ${grind.toLowerCase()}">
  <defs>
    <clipPath id="bag-${product.slug}"><path d="M24 34 H216 L222 318 Q222 330 210 330 H30 Q18 330 18 318Z"/></clipPath>
  </defs>
  <path d="M24 34 H216 L222 318 Q222 330 210 330 H30 Q18 330 18 318Z" fill="#13243f"/>
  <g clip-path="url(#bag-${product.slug})">
    <g transform="translate(18 190) scale(1.02)">${scenes[product.slug]}</g>
    <path d="M18 34 H222 V40 H18Z" fill="#0b1830"/>
  </g>
  <rect x="20" y="10" width="200" height="26" rx="3" fill="#0b1830"/>
  <g stroke="#1d3358" stroke-width="1">${Array.from({ length: 24 }, (_, i) => `<path d="M${26 + i * 8} 14 v18"/>`).join('')}</g>
  <circle cx="120" cy="66" r="8" fill="none" stroke="#2a4470" stroke-width="2"/>
  ${twoBeans(120, 100, 1.3)}
  <text x="120" y="138" text-anchor="middle" fill="#fff" font-family="Bricolage Grotesque Variable, sans-serif" font-weight="700" font-size="21" letter-spacing="3">TWO ROOTS</text>
  <path d="M74 150 H94 M146 150 H166" stroke="#c9a04b" stroke-width="1.2"/>
  <text x="120" y="154" text-anchor="middle" fill="#c9a04b" font-family="Bricolage Grotesque Variable, sans-serif" font-weight="600" font-size="11" letter-spacing="4">COFFEE</text>
  <text x="120" y="180" text-anchor="middle" fill="#fff" font-family="Newsreader Variable, serif" font-style="italic" font-size="15">${product.name}</text>
  <rect x="78" y="296" width="84" height="20" rx="10" fill="#13243f" opacity=".85"/>
  <text x="120" y="310" text-anchor="middle" fill="#fff" font-family="Bricolage Grotesque Variable, sans-serif" font-size="9" letter-spacing=".5">${grind} | 12 oz</text>
</svg>`;

export const logo = `
<span class="logo">
  <svg viewBox="-16 -14 32 30" aria-hidden="true">${twoBeans(0, 0, 1)}</svg>
  <span class="logo-word">Two Roots</span>
  <span class="logo-coffee">Coffee</span>
</span>`;

export const roots = `
<svg class="roots" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
  <g fill="none" stroke="#c9a04b" stroke-linecap="round">
    <path class="root root-main" stroke-width="3" d="M-20 700 C 160 690, 300 640, 440 610 C 540 590, 580 580, 600 560"/>
    <path class="root root-main" stroke-width="3" d="M1220 700 C 1040 690, 900 640, 760 610 C 660 590, 620 580, 600 560"/>
    <path class="root" stroke-width="1.5" d="M250 655 C 270 630, 260 600, 300 585"/>
    <path class="root" stroke-width="1.5" d="M400 618 C 400 595, 430 580, 420 555"/>
    <path class="root" stroke-width="1.5" d="M950 655 C 930 630, 940 600, 900 585"/>
    <path class="root" stroke-width="1.5" d="M800 618 C 800 595, 770 580, 780 555"/>
    <path class="root" stroke-width="1" d="M120 690 C 140 670, 130 650, 160 640"/>
    <path class="root" stroke-width="1" d="M1080 690 C 1060 670, 1070 650, 1040 640"/>
  </g>
  <g class="roots-heart" fill="#c9a04b">
    <path d="M600 560 C 570 538, 570 500, 592 500 C 599 500, 600 509, 600 515 C 600 509, 601 500, 608 500 C 630 500, 630 538, 600 560Z"/>
  </g>
</svg>`;
