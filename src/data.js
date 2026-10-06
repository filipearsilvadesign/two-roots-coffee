export const products = [
  {
    slug: 'brazil',
    name: 'Brazil',
    origin: '100% Brazil',
    color: 'var(--brazil)',
    price: 19,
    tagline: 'Toucans, ipê trees and the Atlantic forest, on the bag and in the cup.',
    notes: ['Milk chocolate', 'Roasted hazelnut', 'Brown sugar'],
    details: { Origin: 'Brazil', Roast: 'Medium', Bean: '100% Arabica', Size: '12 oz / 340 g' },
    story:
      'Brazil grows more coffee than any other country, much of it on rolling hills where the forest still meets the farm. This one is sweet, round and easy to love before breakfast.',
    fact: 'Did you know? The ipê tree blooms yellow, pink or white in the dry season, before its leaves grow back.',
  },
  {
    slug: 'colombia',
    name: 'Colombia',
    origin: '100% Colombia',
    color: 'var(--colombia)',
    price: 19,
    tagline: 'Wax palms and the Andes, on the bag and in the cup.',
    notes: ['Caramel', 'Red apple', 'Orange zest'],
    details: { Origin: 'Colombia', Roast: 'Medium', Bean: '100% Arabica', Size: '12 oz / 340 g' },
    story:
      'In Colombia, coffee grows on steep Andean slopes and is still picked by hand, cherry by cherry. This one is bright and clean, with the kind of fruit you notice on the second sip.',
    fact: 'Did you know? The Quindío wax palm, Colombia’s national tree, can grow taller than a 15-story building.',
  },
  {
    slug: 'brazil-colombia',
    name: 'Brazil & Colombia',
    origin: '50% Brazil, 50% Colombia',
    color: 'var(--gold)',
    price: 21,
    tagline: 'Our signature blend: two roots, one cup.',
    notes: ['Dark chocolate', 'Caramel', 'Ripe cherry'],
    details: { Origin: 'Brazil and Colombia', Roast: 'Medium', Bean: '100% Arabica', Size: '12 oz / 340 g' },
    story:
      'Half Brazil, half Colombia. Brazil brings the body and the chocolate, Colombia brings the brightness, and together they make the cup we come back to every morning.',
    fact: 'Did you know? Brazil grows more coffee than any other country, and Colombia grows only Arabica.',
  },
];

export const findProduct = (slug) => products.find((p) => p.slug === slug) ?? products[0];
