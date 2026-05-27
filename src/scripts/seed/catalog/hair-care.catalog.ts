import { IMAGES, sizeProduct } from "../helpers.js";

const shampooConditioner = [
  sizeProduct("hair-care", "shampoo-conditioner", {
    name: "No. 4 Bond Maintenance Shampoo",
    brand: "Olaplex",
    description:
      "Repairs and protects hair bonds while gently cleansing. Ideal for color-treated, damaged, or chemically processed hair seeking strength and shine.",
    price: 30,
  }, IMAGES.hair[0], [
    { sizeLabel: "250ml", stock: 90 },
    { sizeLabel: "1L", stock: 45 },
  ]),
  sizeProduct("hair-care", "shampoo-conditioner", {
    name: "No. 5 Bond Maintenance Conditioner",
    brand: "Olaplex",
    description:
      "Highly moisturizing conditioner that restores hydration and manageability. Leaves hair silky, frizz-free, and noticeably healthier after each wash.",
    price: 30,
  }, IMAGES.hair[1], [
    { sizeLabel: "250ml", stock: 85 },
    { sizeLabel: "1L", stock: 40 },
  ]),
  sizeProduct("hair-care", "shampoo-conditioner", {
    name: "Briogeo Don't Despair, Repair! Shampoo",
    brand: "Briogeo",
    description:
      "Sulfate-free shampoo with rosehip oil and algae extract to strengthen damaged strands. Gently cleanses without stripping natural oils.",
    price: 28,
  }, IMAGES.hair[2], [
    { sizeLabel: "236ml", stock: 70 },
    { sizeLabel: "473ml", stock: 50 },
  ]),
  sizeProduct("hair-care", "shampoo-conditioner", {
    name: "Moroccanoil Hydrating Shampoo",
    brand: "Moroccanoil",
    description:
      "Argan oil-infused shampoo that cleanses while boosting moisture and shine. Color-safe formula suitable for all hair types, especially dry hair.",
    price: 26,
  }, IMAGES.hair[3], [
    { sizeLabel: "250ml", stock: 95 },
    { sizeLabel: "500ml", stock: 60 },
  ]),
  sizeProduct("hair-care", "shampoo-conditioner", {
    name: "Aveda Nutriplenish Shampoo",
    brand: "Aveda",
    description:
      "Plant-powered shampoo with superfood butters that nourish dry, depleted hair. Gently removes buildup while delivering lasting softness.",
    price: 34,
  }, IMAGES.hair[4], [
    { sizeLabel: "250ml", stock: 55 },
    { sizeLabel: "500ml", stock: 38 },
  ]),
];

const hairMasksTreatments = [
  sizeProduct("hair-care", "hair-masks-treatments", {
    name: "No. 3 Hair Perfector",
    brand: "Olaplex",
    description:
      "At-home bond-building treatment that reduces breakage and visibly strengthens hair. Apply weekly before shampooing for salon-level repair.",
    price: 30,
  }, IMAGES.hair[0], [
    { sizeLabel: "100ml", stock: 100 },
    { sizeLabel: "250ml", stock: 65 },
  ]),
  sizeProduct("hair-care", "hair-masks-treatments", {
    name: "Don't Despair, Repair! Deep Conditioning Mask",
    brand: "Briogeo",
    description:
      "Intensive weekly mask with B-vitamins and rosehip oil. Restores moisture, improves elasticity, and protects against future damage.",
    price: 39,
  }, IMAGES.hair[1], [
    { sizeLabel: "236ml", stock: 72 },
  ]),
  sizeProduct("hair-care", "hair-masks-treatments", {
    name: "Moroccanoil Intense Hydrating Mask",
    brand: "Moroccanoil",
    description:
      "Rich cream mask with argan oil and linseed extract for thick, dry hair. Deeply conditions in five minutes for improved texture and shine.",
    price: 46,
  }, IMAGES.hair[2], [
    { sizeLabel: "250ml", stock: 48 },
    { sizeLabel: "500ml", stock: 30 },
  ]),
  sizeProduct("hair-care", "hair-masks-treatments", {
    name: "K18 Leave-In Molecular Repair Mask",
    brand: "K18",
    description:
      "Biomimetic peptide treatment that reverses hair damage in four minutes. No rinse required — apply after washing for transformative repair.",
    price: 75,
  }, IMAGES.hair[3], [
    { sizeLabel: "50ml", stock: 55 },
    { sizeLabel: "150ml", stock: 35 },
  ]),
  sizeProduct("hair-care", "hair-masks-treatments", {
    name: "Amika Soulfood Nourishing Mask",
    brand: "Amika",
    description:
      "Ultra-hydrating mask with jojoba seed oil and vitamin E. Revives dull, thirsty hair with a soft, touchable finish after one use.",
    price: 32,
  }, IMAGES.hair[4], [
    { sizeLabel: "250ml", stock: 80 },
  ]),
];

const styling = [
  sizeProduct("hair-care", "styling", {
    name: "Perfect Hair Day Dry Shampoo",
    brand: "Living Proof",
    description:
      "Advanced dry shampoo that actually cleans hair, absorbing oil and sweat. Leaves no white residue and delivers a freshly washed feel.",
    price: 30,
  }, IMAGES.hair[0], [
    { sizeLabel: "198ml", stock: 110 },
    { sizeLabel: "355ml", stock: 75 },
  ]),
  sizeProduct("hair-care", "styling", {
    name: "Moroccanoil Treatment",
    brand: "Moroccanoil",
    description:
      "Original argan oil styling treatment that conditions, detangles, and boosts shine. Tames frizz and flyaways on damp or dry hair.",
    price: 34,
  }, IMAGES.hair[1], [
    { sizeLabel: "25ml", stock: 90 },
    { sizeLabel: "100ml", stock: 70 },
    { sizeLabel: "200ml", stock: 45 },
  ]),
  sizeProduct("hair-care", "styling", {
    name: "Supernatural Spray",
    brand: "Oribe",
    description:
      "Multi-tasking styling spray that provides heat protection, hold, and shine. Creates effortless texture with a flexible, brushable finish.",
    price: 44,
  }, IMAGES.hair[2], [
    { sizeLabel: "250ml", stock: 58 },
  ]),
  sizeProduct("hair-care", "styling", {
    name: "Bumble and bumble Thickening Dryspun Texture Spray",
    brand: "Bumble and bumble",
    description:
      "Weightless texture spray that adds airy volume and a matte finish. Perfect for tousled, lived-in styles with touchable hold.",
    price: 32,
  }, IMAGES.hair[3], [
    { sizeLabel: "150ml", stock: 82 },
    { sizeLabel: "340ml", stock: 54 },
  ]),
  sizeProduct("hair-care", "styling", {
    name: "Aveda Control Force Firm Hold Hair Spray",
    brand: "Aveda",
    description:
      "Maximum-hold hairspray that resists humidity without flaking. Plant-derived ingredients provide all-day style retention with a natural finish.",
    price: 29,
  }, IMAGES.hair[4], [
    { sizeLabel: "300ml", stock: 66 },
  ]),
];

export const hairCareProducts = [
  ...shampooConditioner,
  ...hairMasksTreatments,
  ...styling,
];
