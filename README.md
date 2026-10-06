# Two Roots Coffee

Site da Two Roots Coffee (tworootscoffee.com): coffee from Brazil and Colombia.

## Rodar

```
npm install
npm run dev
```

`npm run build` gera a pasta `dist/`, que a Vercel publica.

## Estrutura

- `index.html` e `src/home.js`: home (abertura, Brazil em destaque, assinatura e origens, Colombia em destaque, about us, explore our coffee, três origens, rodapé).
- `product.html` e `src/product.js`: página de produto no modelo do Onyx até a história, com "pairs well with" que troca o produto na mesma página.
- `src/data.js`: os três cafés, com preços e textos de exemplo.
- `src/art.js`: logo, raízes da abertura, pacote em SVG e as cenas de cada origem (ilustrações provisórias até as artes finais das embalagens).
- `src/styles.css`: identidade (azul-marinho, dourado, cores de cada origem).
- `docs/briefing.md`: briefing do projeto, extraído do grupo com o cliente.
- `.claude/skills/`: skills de design (frontend-design, Mobbin) e de animação (GSAP).

A loja final será na Shopify; este site é o protótipo navegável para aprovação do cliente.
