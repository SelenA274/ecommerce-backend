import { IMAGES, sizeProduct, STANDARD_SIZES } from "../helpers.js";

const morningRoutine = [
  sizeProduct("skincare", "morning-routine", {
    name: "C E Ferulic with 15% L-Ascorbic Acid",
    brand: "SkinCeuticals",
    description:
      "Gold-standard antioxidant serum that neutralizes free radicals and improves signs of aging. Delivers brighter, firmer-looking skin with continued daily use.",
    price: 182,
  }, IMAGES.skincare[0], [
    { sizeLabel: "30ml", stock: 25 },
  ]),
  sizeProduct("skincare", "morning-routine", {
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    description:
      "High-strength vitamin and mineral formula that targets blemishes and balances sebum. Lightweight serum layers easily under moisturizer and SPF.",
    price: 6,
  }, IMAGES.skincare[1], [
    { sizeLabel: "30ml", stock: 200 },
    { sizeLabel: "60ml", stock: 120 },
  ]),
  sizeProduct("skincare", "morning-routine", {
    name: "Toleriane Hydrating Gentle Cleanser",
    brand: "La Roche-Posay",
    description:
      "Creamy cleanser that removes impurities without disrupting the skin barrier. Prebiotic thermal water soothes sensitive and dry skin types.",
    price: 16,
  }, IMAGES.skincare[2], [
    { sizeLabel: "200ml", stock: 88 },
    { sizeLabel: "400ml", stock: 55 },
  ]),
  sizeProduct("skincare", "morning-routine", {
    name: "Watermelon Glow Niacinamide Dew Drops",
    brand: "Glow Recipe",
    description:
      "Hybrid serum-highlighter that hydrates and delivers a glass-skin glow. Niacinamide and watermelon extract help refine pores and boost radiance.",
    price: 35,
  }, IMAGES.skincare[3], [
    { sizeLabel: "40ml", stock: 74 },
  ]),
  sizeProduct("skincare", "morning-routine", {
    name: "Ultra Facial Cream",
    brand: "Kiehl's",
    description:
      "24-hour daily moisturizer with squalane and glacial glycoprotein. Absorbs quickly to leave skin soft, smooth, and comfortably hydrated all day.",
    price: 38,
  }, IMAGES.skincare[4], STANDARD_SIZES),
];

const eveningRoutine = [
  sizeProduct("skincare", "evening-routine", {
    name: "Advanced Night Repair Serum",
    brand: "Estée Lauder",
    description:
      "Nighttime repair serum that supports skin's natural renewal process. Helps reduce the look of fine lines and delivers lasting hydration by morning.",
    price: 82,
  }, IMAGES.skincare[0], [
    { sizeLabel: "30ml", stock: 45 },
    { sizeLabel: "50ml", stock: 38 },
    { sizeLabel: "100ml", stock: 22 },
  ]),
  sizeProduct("skincare", "evening-routine", {
    name: "Retinol Reform",
    brand: "Shani Darden",
    description:
      "Encapsulated retinol serum that smooths texture and fades dark spots with minimal irritation. Lactic acid gently exfoliates for a clearer complexion.",
    price: 88,
  }, IMAGES.skincare[1], [
    { sizeLabel: "30ml", stock: 40 },
  ]),
  sizeProduct("skincare", "evening-routine", {
    name: "Good Genes All-In-One Lactic Acid Treatment",
    brand: "Sunday Riley",
    description:
      "Exfoliating treatment that instantly brightens dull skin and reduces the appearance of fine lines. Licorice and lemongrass soothe while acids refine.",
    price: 85,
  }, IMAGES.skincare[2], [
    { sizeLabel: "30ml", stock: 35 },
    { sizeLabel: "50ml", stock: 28 },
  ]),
  sizeProduct("skincare", "evening-routine", {
    name: "Hydrating Facial Cleanser",
    brand: "CeraVe",
    description:
      "Gentle gel-to-foam cleanser with ceramides and hyaluronic acid. Removes makeup and excess oil while maintaining the skin's protective moisture barrier.",
    price: 17,
  }, IMAGES.skincare[3], [
    { sizeLabel: "236ml", stock: 130 },
    { sizeLabel: "473ml", stock: 90 },
  ]),
  sizeProduct("skincare", "evening-routine", {
    name: "Midnight Recovery Concentrate",
    brand: "Kiehl's",
    description:
      "Luxurious facial oil with botanical squalane and lavender essential oil. Restores moisture overnight so skin looks rested and replenished by dawn.",
    price: 54,
  }, IMAGES.skincare[4], [
    { sizeLabel: "30ml", stock: 52 },
    { sizeLabel: "50ml", stock: 41 },
  ]),
];

const spfSunCare = [
  sizeProduct("skincare", "spf-sun-care", {
    name: "Unseen Sunscreen SPF 40",
    brand: "Supergoop!",
    description:
      "Totally invisible, weightless sunscreen that doubles as a makeup-gripping primer. Oil-free and scent-free with broad-spectrum UVA/UVB protection.",
    price: 38,
  }, IMAGES.skincare[0], [
    { sizeLabel: "50ml", stock: 95 },
  ]),
  sizeProduct("skincare", "spf-sun-care", {
    name: "Anthelios Melt-In Milk Sunscreen SPF 60",
    brand: "La Roche-Posay",
    description:
      "Fast-absorbing body and face sunscreen with Cell-Ox Shield™ technology. Water-resistant formula suitable for sensitive skin and outdoor activities.",
    price: 36,
  }, IMAGES.skincare[1], [
    { sizeLabel: "150ml", stock: 70 },
    { sizeLabel: "200ml", stock: 58 },
  ]),
  sizeProduct("skincare", "spf-sun-care", {
    name: "Play Everyday Lotion SPF 50",
    brand: "Supergoop!",
    description:
      "Lightweight, hydrating sunscreen lotion for face and body. Infused with sunflower and rosemary extracts to nourish skin during sun exposure.",
    price: 22,
  }, IMAGES.skincare[2], [
    { sizeLabel: "71ml", stock: 110 },
    { sizeLabel: "162ml", stock: 85 },
  ]),
  sizeProduct("skincare", "spf-sun-care", {
    name: "Mineral Sunscreen SPF 30",
    brand: "Drunk Elephant",
    description:
      "Zinc oxide mineral sunscreen that protects without leaving a white cast. Antioxidant-rich formula defends against environmental stressors.",
    price: 20,
  }, IMAGES.skincare[3], [
    { sizeLabel: "60ml", stock: 64 },
  ]),
  sizeProduct("skincare", "spf-sun-care", {
    name: "City Skin Age Defense SPF 50",
    brand: "Murad",
    description:
      "Urban environmental shield with 100% mineral SPF and blue-light protection. Color-correcting tint evens tone while defending against daily pollutants.",
    price: 69,
  }, IMAGES.skincare[4], [
    { sizeLabel: "50ml", stock: 33 },
  ]),
];

const masksTreatments = [
  sizeProduct("skincare", "masks-treatments", {
    name: "Water Sleeping Mask",
    brand: "Laneige",
    description:
      "Overnight gel mask that delivers intense hydration while you sleep. Squalane and evening primrose extract leave skin plump and dewy by morning.",
    price: 25,
  }, IMAGES.skincare[0], [
    { sizeLabel: "70ml", stock: 80 },
  ]),
  sizeProduct("skincare", "masks-treatments", {
    name: "Rare Earth Deep Pore Cleansing Mask",
    brand: "Kiehl's",
    description:
      "Amazonian white clay mask that draws out impurities and minimizes pores. Formulated with aloe to soothe skin during deep purification.",
    price: 42,
  }, IMAGES.skincare[1], [
    { sizeLabel: "125ml", stock: 56 },
  ]),
  sizeProduct("skincare", "masks-treatments", {
    name: "Babyfacial",
    brand: "Drunk Elephant",
    description:
      "Professional-grade at-home facial combining AHA and BHA acids. Resurfaces dull skin in 20 minutes for a smoother, brighter complexion.",
    price: 80,
  }, IMAGES.skincare[2], [
    { sizeLabel: "50ml", stock: 30 },
  ]),
  sizeProduct("skincare", "masks-treatments", {
    name: "Mighty Patch Original",
    brand: "Hero Cosmetics",
    description:
      "Hydrocolloid acne patches that absorb fluid and protect blemishes overnight. Medical-grade adhesive stays put on all skin types.",
    price: 13,
  }, IMAGES.skincare[3], [
    { sizeLabel: "36 patches", stock: 150 },
    { sizeLabel: "72 patches", stock: 100 },
  ]),
  sizeProduct("skincare", "masks-treatments", {
    name: "Facial Treatment Mask",
    brand: "SK-II",
    description:
      "Cult-favorite sheet mask soaked in Pitera™ essence for an instant glow. Delivers spa-level hydration and luminosity in a single treatment.",
    price: 135,
  }, IMAGES.skincare[4], [
    { sizeLabel: "6 sheets", stock: 40 },
    { sizeLabel: "10 sheets", stock: 28 },
  ]),
];

export const skincareProducts = [
  ...morningRoutine,
  ...eveningRoutine,
  ...spfSunCare,
  ...masksTreatments,
];
