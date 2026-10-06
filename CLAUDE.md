# Two Roots Coffee — contexto para o Claude Code

Site da Two Roots Coffee (tworootscoffee.com), marca americana de café do Brasil e da Colômbia. O dono do projeto é o Filipe (designer); a cliente é a Natalia, que aprova o design, e o Andre, sócio dela. A loja final será na Shopify; este repositório é o site/protótipo navegável que será aprovado antes da migração.

## Stack e comandos

- Vite + HTML/CSS/JS puro, GSAP para animação, fontes self-hosted via @fontsource (Bricolage Grotesque e Newsreader).
- `npm install`, `npm run dev` (localhost:5173), `npm run build` (gera `dist/`).
- Duas páginas: `index.html` (home) e `product.html?c=brazil|colombia|brazil-colombia`.
- `src/data.js` tem os três cafés. Preços (US$ 19 e 21), notas de sabor e textos são EXEMPLOS meus, ainda não aprovados pela cliente.
- `src/art.js` tem logo, pacote em SVG e cenas por origem: ilustrações provisórias até as artes finais das embalagens.
- Links são relativos de propósito: o site roda na raiz (Vercel) e em `/two-roots-coffee/` (GitHub Pages, `BASE_PATH`).

## Publicação

- GitHub Pages já está no ar em https://filipearsilvadesign.github.io/two-roots-coffee/ (workflow `.github/workflows/pages.yml`, roda a cada push na `main`).
- Vercel é o destino oficial: `vercel.json` já configura o build. Falta conectar o repositório à conta da Vercel do Filipe (time `fwebjota-7226s-projects`). Numa sessão local: `npx vercel login`, depois `npx vercel --prod`, e em seguida ligar o Git integration no painel para deploy automático. Quando a Vercel estiver ativa, remover o workflow do Pages.
- Domínio tworootscoffee.com está na HostGator (acesso com o Andre). DNS para Vercel: A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com (confirmar no painel da Vercel).

## O que a cliente pediu (resumo do briefing)

Referência principal: **Onyx Coffee Lab** (https://onyxcoffeelab.com/). A cliente quer CLONAR o layout deles, com muito vídeo de fundo, trocando identidade e conteúdo pelos da Two Roots. Página de produto no modelo https://onyxcoffeelab.com/products/kenya-kamunyaka-aa, copiada só até a seção "the story"; abaixo disso (receitas, "Ready to brew?") não entra por enquanto; incluir a faixa "pairs well with" com painel dinâmico ao clicar em cada café.

Ordem da home, definida por ela:
1. Menu no topo, logo centralizado, vídeo de fundo com frase e botão.
2. Produto em destaque (foto, frase, botão) com o menu ainda visível. O botão abre a página de produto.
3. Blocos com vídeo lado a lado (tema dos vídeos ainda não definido).
4. Outro produto em destaque: banner largo escuro com nome, texto curto, botão e foto da embalagem.
5. About us: foto de um lado, título e texto do outro, com botão.
6. Explore our coffee: todos os cafés + vídeo, dois blocos lado a lado.
7. Destaque por origem: três cards em arco (Colombia / Brazil & Colombia / Brazil).
8. Rodapé com colunas de links.
Mais: uma área de destaque para **subscription** na home. A grade de categorias (Coffee/Tea/Chocolate/Merch) fica para depois.

Referências secundárias: methodicalcoffee.com, vervecoffee.com/collections/all-coffee, bluebottlecoffee.com/us/eng.

Identidade: logo com dois grãos em forma de coração, "TWO ROOTS" branco e "COFFEE" em dourado entre filetes, sobre azul-marinho. Produtos: Brazil, Colombia e Brazil & Colombia (blend 50/50), cada um em whole bean e ground, 12 oz / 340 g, 100% arábica, torra média. Público americano, site em inglês.

## Próximos passos

1. Inspecionar o Onyx de verdade (HTML, CSS, vídeos, medidas) e reconstruir a home e a página de produto seguindo o layout deles.
2. Gerar vídeos de marcação (placeholders) para o hero, os blocos de vídeo e a seção explore; os vídeos finais serão produzidos depois.
3. Conectar a Vercel e apontar o domínio.
4. Trocar textos, preços e ilustrações pelos aprovados pela cliente quando chegarem.

## Regras

- Não commitar dados da cliente (pagamentos, contatos, endereços pessoais): o repositório é público. O briefing completo fica fora do repositório.
- Commits em português, mensagens curtas no imperativo.
