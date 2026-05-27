import { FRAGRANCE_SIZES, IMAGES, sizeProduct } from "../helpers.js";

const floral = [
  sizeProduct("fragrance", "floral", {
    name: "Miss Dior Eau de Parfum",
    brand: "Dior",
    description:
      "Romantic floral bouquet centered on Centifolia rose with fresh peony notes. A modern classic that feels elegant, feminine, and effortlessly Parisian.",
    price: 108,
  }, IMAGES.fragrance[0], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "floral", {
    name: "Flowerbomb Eau de Parfum",
    brand: "Viktor&Rolf",
    description:
      "Explosive floral fragrance with jasmine, rose, and patchouli at its heart. An opulent scent that leaves a warm, addictive trail.",
    price: 98,
  }, IMAGES.fragrance[1], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "floral", {
    name: "English Pear & Freesia Cologne",
    brand: "Jo Malone London",
    description:
      "Luscious pear wrapped in white freesia with a base of patchouli and amber. A crisp, floral cologne perfect for layering or wearing alone.",
    price: 78,
  }, IMAGES.fragrance[2], [
    { sizeLabel: "30ml", stock: 45 },
    { sizeLabel: "100ml", stock: 38 },
  ]),
  sizeProduct("fragrance", "floral", {
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    description:
      "Bold lavender and orange blossom contrasted with sensual vanilla and musk. A statement floral that balances freshness with warmth.",
    price: 105,
  }, IMAGES.fragrance[3], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "floral", {
    name: "Peony & Blush Suede Cologne",
    brand: "Jo Malone London",
    description:
      "Red apple and peony petals softened by suede and rose. A delicate, luxurious floral reminiscent of a bouquet wrapped in velvet.",
    price: 78,
  }, IMAGES.fragrance[4], [
    { sizeLabel: "30ml", stock: 50 },
    { sizeLabel: "100ml", stock: 42 },
  ]),
];

const woody = [
  sizeProduct("fragrance", "woody", {
    name: "Santal 33 Eau de Parfum",
    brand: "Le Labo",
    description:
      "Iconic sandalwood scent with cedar, cardamom, and leather accords. A unisex woody fragrance that has become a modern cult favorite.",
    price: 215,
  }, IMAGES.fragrance[0], [
    { sizeLabel: "50ml", stock: 20 },
    { sizeLabel: "100ml", stock: 15 },
  ]),
  sizeProduct("fragrance", "woody", {
    name: "Oud Wood Eau de Parfum",
    brand: "Tom Ford",
    description:
      "Rare oud blended with rosewood, cardamom, and amber. A sophisticated woody scent that feels warm, smoky, and unmistakably luxurious.",
    price: 295,
  }, IMAGES.fragrance[1], [
    { sizeLabel: "50ml", stock: 18 },
    { sizeLabel: "100ml", stock: 12 },
  ]),
  sizeProduct("fragrance", "woody", {
    name: "Tam Dao Eau de Toilette",
    brand: "Diptyque",
    description:
      "Creamy sandalwood with cypress and myrtle inspired by the mountains of Indochina. A serene, meditative woody fragrance for everyday wear.",
    price: 145,
  }, IMAGES.fragrance[2], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "woody", {
    name: "Bleu de Chanel Eau de Parfum",
    brand: "Chanel",
    description:
      "Aromatic-woody fragrance with citrus top notes and a cedar-sandalwood base. Timeless and versatile, bridging fresh and woody character.",
    price: 120,
  }, IMAGES.fragrance[3], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "woody", {
    name: "Another 13 Eau de Parfum",
    brand: "Le Labo",
    description:
      "Minimalist woody musk built around ambroxan and moss. Clean, skin-like, and intimate — a second-skin scent for understated sophistication.",
    price: 215,
  }, IMAGES.fragrance[4], [
    { sizeLabel: "50ml", stock: 22 },
    { sizeLabel: "100ml", stock: 16 },
  ]),
];

const fresh = [
  sizeProduct("fragrance", "fresh", {
    name: "Acqua di Gio Eau de Toilette",
    brand: "Giorgio Armani",
    description:
      "Marine-fresh fragrance with bergamot, neroli, and rosemary. Captures the spirit of the Mediterranean with a clean, invigorating trail.",
    price: 92,
  }, IMAGES.fragrance[0], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "fresh", {
    name: "Light Blue Eau de Toilette",
    brand: "Dolce&Gabbana",
    description:
      "Sicilian lemon and apple over cedarwood and musk. A sparkling, sun-drenched scent that evokes the Italian Riviera.",
    price: 86,
  }, IMAGES.fragrance[1], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "fresh", {
    name: "CK One Eau de Toilette",
    brand: "Calvin Klein",
    description:
      "Unisex citrus fragrance with green tea and musk. A youthful, clean scent that defined 90s minimalism and remains effortlessly cool.",
    price: 65,
  }, IMAGES.fragrance[2], [
    { sizeLabel: "50ml", stock: 70 },
    { sizeLabel: "100ml", stock: 55 },
    { sizeLabel: "200ml", stock: 40 },
  ]),
  sizeProduct("fragrance", "fresh", {
    name: "Eau de Citron Noir",
    brand: "Hermès",
    description:
      "Black lime and lemon with tea and woody undertones. A refined citrus fragrance that is sharp, elegant, and distinctly Hermès.",
    price: 135,
  }, IMAGES.fragrance[3], [
    { sizeLabel: "50ml", stock: 28 },
    { sizeLabel: "100ml", stock: 22 },
  ]),
  sizeProduct("fragrance", "fresh", {
    name: "Philosykos Eau de Toilette",
    brand: "Diptyque",
    description:
      "Fig tree in full bloom — green leaves, white sap, and woody bark. A verdant, airy fragrance that smells like a Mediterranean grove.",
    price: 145,
  }, IMAGES.fragrance[4], FRAGRANCE_SIZES),
];

const oriental = [
  sizeProduct("fragrance", "oriental", {
    name: "Black Opium Eau de Parfum",
    brand: "Yves Saint Laurent",
    description:
      "Coffee and vanilla accord with white flowers and pear. A bold, addictive oriental that transitions from day to night with ease.",
    price: 105,
  }, IMAGES.fragrance[0], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "oriental", {
    name: "Good Girl Eau de Parfum",
    brand: "Carolina Herrera",
    description:
      "Jasmine and tuberose wrapped in tonka bean and cocoa. A seductive oriental-floral housed in an iconic stiletto bottle.",
    price: 98,
  }, IMAGES.fragrance[1], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "oriental", {
    name: "La Vie Est Belle Eau de Parfum",
    brand: "Lancôme",
    description:
      "Iris and patchouli softened by praline and vanilla. A gourmand oriental that celebrates joy with a sweet, powdery dry down.",
    price: 102,
  }, IMAGES.fragrance[2], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "oriental", {
    name: "Alien Eau de Parfum",
    brand: "Mugler",
    description:
      "Radiant jasmine sambac over warm amber and cashmeran wood. A mysterious, otherworldly oriental with exceptional longevity.",
    price: 95,
  }, IMAGES.fragrance[3], FRAGRANCE_SIZES),
  sizeProduct("fragrance", "oriental", {
    name: "Nomade Eau de Parfum",
    brand: "Chloé",
    description:
      "Mirabelle plum and freesia grounded by oak moss and patchouli. A warm, chypre-leaning oriental for the modern wanderer.",
    price: 110,
  }, IMAGES.fragrance[4], FRAGRANCE_SIZES),
];

export const fragranceProducts = [...floral, ...woody, ...fresh, ...oriental];
