import { IMAGES, sizeProduct, STANDARD_SIZES } from "../helpers.js";

const moisturizers = [
  sizeProduct("body-care", "moisturizers", {
    name: "Brazilian Bum Bum Cream",
    brand: "Sol de Janeiro",
    description:
      "Fast-absorbing body cream with guaraná extract and cupuaçu butter. Delivers all-day hydration with the brand's signature pistachio-caramel scent.",
    price: 48,
  }, IMAGES.body[0], [
    { sizeLabel: "75ml", stock: 90 },
    { sizeLabel: "240ml", stock: 75 },
  ]),
  sizeProduct("body-care", "moisturizers", {
    name: "Daily Moisturizing Lotion",
    brand: "CeraVe",
    description:
      "Lightweight body lotion with ceramides and hyaluronic acid. Restores the skin barrier and provides 24-hour moisture for normal to dry skin.",
    price: 16,
  }, IMAGES.body[1], [
    { sizeLabel: "236ml", stock: 140 },
    { sizeLabel: "473ml", stock: 100 },
  ]),
  sizeProduct("body-care", "moisturizers", {
    name: "La Mer The Body Crème",
    brand: "La Mer",
    description:
      "Luxurious body cream infused with Miracle Broth™ for silky, nourished skin. Transforms dry, dull skin with a rich, pampering texture.",
    price: 195,
  }, IMAGES.body[2], [
    { sizeLabel: "200ml", stock: 20 },
  ]),
  sizeProduct("body-care", "moisturizers", {
    name: "Hemp Seed Body Moisturizer",
    brand: "Kiehl's",
    description:
      "Non-greasy body lotion with hemp seed oil and oat extract. Soothes and conditions dry skin while absorbing quickly without residue.",
    price: 32,
  }, IMAGES.body[3], STANDARD_SIZES),
  sizeProduct("body-care", "moisturizers", {
    name: "Nécessaire The Body Lotion",
    brand: "Nécessaire",
    description:
      "Clean, fragrance-free body lotion with niacinamide and marula oil. Firms, smooths, and deeply hydrates for healthy-looking skin.",
    price: 45,
  }, IMAGES.body[4], [
    { sizeLabel: "200ml", stock: 68 },
    { sizeLabel: "500ml", stock: 42 },
  ]),
];

const scrubs = [
  sizeProduct("body-care", "scrubs", {
    name: "Coconut Body Scrub",
    brand: "Tree Hut",
    description:
      "Sugar scrub blended with shea butter and coconut oil for smooth, glowing skin. Exfoliates dead cells while leaving a tropical, nourishing finish.",
    price: 10,
  }, IMAGES.body[0], [
    { sizeLabel: "510g", stock: 120 },
  ]),
  sizeProduct("body-care", "scrubs", {
    name: "KP Bump Eraser Body Scrub",
    brand: "First Aid Beauty",
    description:
      "10% AHA body scrub that exfoliates keratosis pilaris and rough patches. Glycolic and lactic acids smooth bumpy skin with regular use.",
    price: 22,
  }, IMAGES.body[1], [
    { sizeLabel: "226g", stock: 85 },
  ]),
  sizeProduct("body-care", "scrubs", {
    name: "Moisture Rich Body Scrub",
    brand: "Dior",
    description:
      "Fine apricot seed scrub enriched with iris extract and argan oil. Polishes skin gently while maintaining a luxurious, spa-like feel.",
    price: 58,
  }, IMAGES.body[2], [
    { sizeLabel: "200ml", stock: 35 },
  ]),
  sizeProduct("body-care", "scrubs", {
    name: "Exfolikate Body Scrub",
    brand: "Kate Somerville",
    description:
      "Dual-action scrub with pomegranate enzymes and lactic acid. Resurfaces dull body skin for a brighter, more even tone.",
    price: 48,
  }, IMAGES.body[3], [
    { sizeLabel: "150ml", stock: 44 },
  ]),
  sizeProduct("body-care", "scrubs", {
    name: "Amethyst Exfoliating Body Scrub",
    brand: "Herbivore",
    description:
      "Natural scrub with amethyst powder, virgin coconut oil, and sugar. Buffs away dryness while calming the senses with a subtle floral aroma.",
    price: 38,
  }, IMAGES.body[4], [
    { sizeLabel: "236ml", stock: 52 },
  ]),
];

const bathShower = [
  sizeProduct("body-care", "bath-shower", {
    name: "Warm Vanilla Sugar Body Wash",
    brand: "Bath & Body Works",
    description:
      "Rich, bubbly body wash with aloe and vitamin E. Cleanses gently while leaving skin soft and delicately scented with warm vanilla.",
    price: 16,
  }, IMAGES.body[0], [
    { sizeLabel: "295ml", stock: 130 },
    { sizeLabel: "1L", stock: 80 },
  ]),
  sizeProduct("body-care", "bath-shower", {
    name: "Softening Shower Oil",
    brand: "L'Occitane",
    description:
      "Almond oil shower oil that transforms into a silky lather on contact with water. Cleanses while preventing moisture loss on dry skin.",
    price: 28,
  }, IMAGES.body[1], [
    { sizeLabel: "250ml", stock: 60 },
    { sizeLabel: "500ml", stock: 40 },
  ]),
  sizeProduct("body-care", "bath-shower", {
    name: "Mega-Rich Body Wash",
    brand: "Peter Thomas Roth",
    description:
      "Foaming body wash with vitamins A, C, and E for antioxidant protection. Gently cleanses without stripping, leaving skin refreshed.",
    price: 24,
  }, IMAGES.body[2], [
    { sizeLabel: "250ml", stock: 70 },
  ]),
  sizeProduct("body-care", "bath-shower", {
    name: "Eucalyptus Spearmint Body Wash",
    brand: "Bath & Body Works",
    description:
      "Aromatherapy body wash with eucalyptus and spearmint essential oils. Creates a spa-like shower experience that invigorates body and mind.",
    price: 16,
  }, IMAGES.body[3], [
    { sizeLabel: "295ml", stock: 115 },
    { sizeLabel: "1L", stock: 72 },
  ]),
  sizeProduct("body-care", "bath-shower", {
    name: "Sensual Jasmine Bath & Shower Gel",
    brand: "Jo Malone London",
    description:
      "Luxurious gel cleanser with jasmine, honeysuckle, and musk. Lathers into a fine foam that perfumes the skin with an elegant floral trail.",
    price: 48,
  }, IMAGES.body[4], [
    { sizeLabel: "250ml", stock: 38 },
    { sizeLabel: "500ml", stock: 25 },
  ]),
];

export const bodyCareProducts = [
  ...moisturizers,
  ...scrubs,
  ...bathShower,
];
