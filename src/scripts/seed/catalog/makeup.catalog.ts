import { colorProduct, IMAGES, sizeProduct, TOOL_SIZES } from "../helpers.js";

const lips = [
  colorProduct("makeup", "lips", {
    name: "Gloss Bomb Universal Lip Luminizer",
    brand: "Fenty Beauty",
    description:
      "A shimmering lip gloss that delivers explosive shine in a non-sticky formula. Enriched with shea butter for comfortable, cushiony wear that flatters every skin tone.",
    price: 21,
  }, IMAGES.lips[0], [
    { colorName: "Fenty Glow", colorCode: "#C9866E", stock: 48 },
    { colorName: "Fu$$y", colorCode: "#E8A0B5", stock: 52 },
    { colorName: "Hot Chocolit", colorCode: "#6B3A2E", stock: 36 },
  ]),
  colorProduct("makeup", "lips", {
    name: "Matte Revolution Lipstick",
    brand: "Charlotte Tilbury",
    description:
      "Iconic matte lipstick with a soft, buildable pigment and a lasting velvet finish. The antioxidant-rich formula helps keep lips smooth and hydrated throughout the day.",
    price: 35,
  }, IMAGES.lips[1], [
    { colorName: "Pillow Talk", colorCode: "#B87A6F", stock: 60 },
    { colorName: "Red Carpet Red", colorCode: "#9B1B30", stock: 44 },
    { colorName: "Walk of Shame", colorCode: "#8E3B46", stock: 38 },
  ]),
  colorProduct("makeup", "lips", {
    name: "Soft Matte Lip Cream",
    brand: "NARS",
    description:
      "A weightless, liquid lip color that dries to a bold matte finish without cracking. Delivers intense, one-swipe payoff inspired by iconic NARS pigments.",
    price: 28,
  }, IMAGES.lips[2], [
    { colorName: "American Woman", colorCode: "#A65D57", stock: 41 },
    { colorName: "Starwoman", colorCode: "#7A1F28", stock: 55 },
    { colorName: "Get It On", colorCode: "#5C2E35", stock: 33 },
  ]),
  colorProduct("makeup", "lips", {
    name: "Soft Pinch Liquid Blush — Lip Tint Duo",
    brand: "Rare Beauty",
    description:
      "A dual-use tint that blends seamlessly on lips and cheeks for a natural flush. The lightweight, long-wearing formula layers beautifully without feeling dry.",
    price: 23,
  }, IMAGES.lips[3], [
    { colorName: "Hope", colorCode: "#D4847A", stock: 70 },
    { colorName: "Joy", colorCode: "#E07A6A", stock: 62 },
    { colorName: "Encourage", colorCode: "#B85C6B", stock: 47 },
  ]),
  colorProduct("makeup", "lips", {
    name: "Rouge Dior Forever Liquid",
    brand: "Dior",
    description:
      "Luxury liquid lipstick with 16-hour wear and a satin-matte finish. Infused with red peony extract for a comfortable, color-true result from morning to night.",
    price: 42,
  }, IMAGES.lips[4], [
    { colorName: "999 Satin", colorCode: "#B80C1C", stock: 29 },
    { colorName: "100 Nude Look", colorCode: "#C4938A", stock: 34 },
    { colorName: "720 Icône", colorCode: "#9E4F5A", stock: 31 },
  ]),
];

const face = [
  colorProduct("makeup", "face", {
    name: "Pro Filt'r Soft Matte Longwear Foundation",
    brand: "Fenty Beauty",
    description:
      "Medium-to-full coverage foundation with a soft matte finish that resists heat and humidity. The oil-free formula blurs pores while staying comfortable on all skin types.",
    price: 40,
  }, IMAGES.face[0], [
    { colorName: "185", colorCode: "#C68642", stock: 40 },
    { colorName: "290", colorCode: "#8D5524", stock: 38 },
    { colorName: "410", colorCode: "#5C3D2E", stock: 35 },
  ]),
  colorProduct("makeup", "face", {
    name: "Airbrush Flawless Foundation",
    brand: "Charlotte Tilbury",
    description:
      "A breathable, buildable foundation inspired by professional airbrush techniques. Delivers a radiant, poreless-looking finish with skincare-powered hydration.",
    price: 49,
  }, IMAGES.face[1], [
    { colorName: "3 Neutral", colorCode: "#E0B89A", stock: 28 },
    { colorName: "7 Warm", colorCode: "#C99A6F", stock: 32 },
    { colorName: "11 Cool", colorCode: "#A67B5B", stock: 26 },
  ]),
  colorProduct("makeup", "face", {
    name: "Natural Radiant Longwear Foundation",
    brand: "NARS",
    description:
      "Lightweight foundation that evens skin tone while letting your natural glow show through. Controls shine for up to 16 hours without masking skin texture.",
    price: 52,
  }, IMAGES.face[2], [
    { colorName: "Deauville", colorCode: "#E8C9A8", stock: 45 },
    { colorName: "Stromboli", colorCode: "#B8896A", stock: 39 },
    { colorName: "New Caledonia", colorCode: "#8B6348", stock: 37 },
  ]),
  colorProduct("makeup", "face", {
    name: "Born This Way Foundation",
    brand: "Too Faced",
    description:
      "Oil-free foundation infused with coconut water and alpine rose for a naturally luminous finish. Blends effortlessly for medium coverage that never looks cakey.",
    price: 44,
  }, IMAGES.face[3], [
    { colorName: "Ivory", colorCode: "#F3D5C0", stock: 50 },
    { colorName: "Sand", colorCode: "#D4A574", stock: 48 },
    { colorName: "Caramel", colorCode: "#A67C52", stock: 42 },
  ]),
  colorProduct("makeup", "face", {
    name: "Luminous Silk Foundation",
    brand: "Armani Beauty",
    description:
      "Award-winning foundation with Micro–Fil™ technology for a second-skin effect. Creates a lit-from-within glow with buildable, seamless coverage.",
    price: 69,
  }, IMAGES.face[4], [
    { colorName: "3", colorCode: "#E8C4A8", stock: 22 },
    { colorName: "5", colorCode: "#D4A67A", stock: 25 },
    { colorName: "7.5", colorCode: "#B8845C", stock: 20 },
  ]),
];

const eyes = [
  colorProduct("makeup", "eyes", {
    name: "Naked3 Eyeshadow Palette",
    brand: "Urban Decay",
    description:
      "Twelve rose-hued neutrals ranging from shimmering highlights to deep mattes. Highly pigmented, blendable shadows with minimal fallout for effortless eye looks.",
    price: 56,
  }, IMAGES.eyes[0], [
    { colorName: "Standard Palette", colorCode: "#C4A484", stock: 55 },
  ]),
  colorProduct("makeup", "eyes", {
    name: "Better Than Sex Mascara",
    brand: "Too Faced",
    description:
      "Volumizing mascara with an hourglass brush that lifts, curls, and separates lashes. The collagen-infused formula delivers dramatic fullness without clumping.",
    price: 29,
  }, IMAGES.eyes[1], [
    { colorName: "Black", colorCode: "#1A1A1A", stock: 90 },
    { colorName: "Chocolate", colorCode: "#4A3228", stock: 64 },
  ]),
  colorProduct("makeup", "eyes", {
    name: "Tartelette In Bloom Clay Palette",
    brand: "Tarte",
    description:
      "Amazonian clay eyeshadow palette with flattering matte and metallic shades. Helps balance oil on lids while delivering smooth, long-lasting color payoff.",
    price: 42,
  }, IMAGES.eyes[2], [
    { colorName: "Standard Palette", colorCode: "#B8956F", stock: 48 },
  ]),
  colorProduct("makeup", "eyes", {
    name: "Epic Ink Liner",
    brand: "NYX Professional Makeup",
    description:
      "Waterproof liquid eyeliner with a flexible brush tip for precise lines and bold wings. Dries quickly to a smudge-resistant satin-black finish.",
    price: 12,
  }, IMAGES.eyes[3], [
    { colorName: "Blackest Black", colorCode: "#0D0D0D", stock: 120 },
  ]),
  colorProduct("makeup", "eyes", {
    name: "High Impact Mascara",
    brand: "Clinique",
    description:
      "Ophthalmologist-tested mascara that defines and lengthens lashes with a rich, jet-black formula. Suitable for sensitive eyes and contact lens wearers.",
    price: 26,
  }, IMAGES.eyes[4], [
    { colorName: "Black", colorCode: "#111111", stock: 75 },
    { colorName: "Black/Brown", colorCode: "#3D2B1F", stock: 58 },
  ]),
];

const brows = [
  colorProduct("makeup", "brows", {
    name: "Precisely, My Brow Pencil",
    brand: "Benefit Cosmetics",
    description:
      "Ultra-fine brow pencil with a custom spoolie for hair-like strokes and natural definition. The waterproof formula stays put for 12 hours without fading.",
    price: 26,
  }, IMAGES.brows[0], [
    { colorName: "Shade 3", colorCode: "#8B6F5C", stock: 66 },
    { colorName: "Shade 4", colorCode: "#6B5344", stock: 72 },
    { colorName: "Shade 5", colorCode: "#4A3728", stock: 58 },
  ]),
  colorProduct("makeup", "brows", {
    name: "Brow Wiz",
    brand: "Anastasia Beverly Hills",
    description:
      "Slim, retractable brow pencil that creates precise, detailed strokes. The velvety formula mimics real brow hairs for a polished, sculpted arch.",
    price: 24,
  }, IMAGES.brows[1], [
    { colorName: "Taupe", colorCode: "#9E8B7A", stock: 54 },
    { colorName: "Soft Brown", colorCode: "#7A5C44", stock: 61 },
    { colorName: "Ebony", colorCode: "#2E2420", stock: 49 },
  ]),
  colorProduct("makeup", "brows", {
    name: "Gimme Brow+ Volumizing Gel",
    brand: "Benefit Cosmetics",
    description:
      "Tinted brow gel that thickens, shapes, and sets brows with a natural finish. Tiny microfibers adhere to hairs for fuller-looking brows in one swipe.",
    price: 28,
  }, IMAGES.brows[2], [
    { colorName: "Shade 3", colorCode: "#8A7058", stock: 80 },
    { colorName: "Shade 4.5", colorCode: "#5E4636", stock: 74 },
  ]),
  colorProduct("makeup", "brows", {
    name: "Boy Brow",
    brand: "Glossier",
    description:
      "Grooming pomade that thickens, shapes, and conditions brows with a flexible hold. The creamy wax formula adds fullness without stiffness or crunch.",
    price: 18,
  }, IMAGES.brows[3], [
    { colorName: "Brown", colorCode: "#6F4E37", stock: 95 },
    { colorName: "Black Brown", colorCode: "#3C2F2F", stock: 88 },
  ]),
  colorProduct("makeup", "brows", {
    name: "Brow Definer",
    brand: "Anastasia Beverly Hills",
    description:
      "Triangular-tip brow pencil designed for outline, fill, and detail in one tool. The spoolie blends product seamlessly for soft, natural-looking brows.",
    price: 25,
  }, IMAGES.brows[4], [
    { colorName: "Blonde", colorCode: "#C4A882", stock: 42 },
    { colorName: "Medium Brown", colorCode: "#7B5E47", stock: 56 },
    { colorName: "Granite", colorCode: "#4D4D4D", stock: 38 },
  ]),
];

const tools = [
  sizeProduct("makeup", "tools", {
    name: "Complete Face Brush Set",
    brand: "Sephora Collection",
    description:
      "Professional synthetic brush set for foundation, powder, blush, and eyes. Dense, cruelty-free bristles pick up product evenly and blend flawlessly.",
    price: 45,
  }, IMAGES.tools[0], TOOL_SIZES),
  sizeProduct("makeup", "tools", {
    name: "Beautyblender Original Sponge",
    brand: "Beautyblender",
    description:
      "Iconic aqua sponge with a unique elliptical shape for streak-free application. Use damp for an airbrushed, skin-like foundation finish.",
    price: 20,
  }, IMAGES.tools[1], [
    { sizeLabel: "Single", stock: 110 },
    { sizeLabel: "2-Pack", stock: 70 },
  ]),
  sizeProduct("makeup", "tools", {
    name: "Pro Palette Spatula & Mixing Plate",
    brand: "Morphe",
    description:
      "Stainless steel spatula and acrylic mixing plate for custom foundation and concealer shades. Essential kit for makeup artists and beauty enthusiasts.",
    price: 16,
  }, IMAGES.tools[2], [{ sizeLabel: "One Size", stock: 85 }]),
  sizeProduct("makeup", "tools", {
    name: "Lash Curler",
    brand: "Shiseido",
    description:
      "Ergonomic lash curler with a curved edge that fits all eye shapes. Creates an eye-opening lift without pinching, prepping lashes for mascara.",
    price: 23,
  }, IMAGES.tools[3], [{ sizeLabel: "One Size", stock: 92 }]),
  sizeProduct("makeup", "tools", {
    name: "Magnetic Lash Applicator Tool",
    brand: "Velour Lashes",
    description:
      "Precision applicator designed for easy placement of magnetic lashes. Angled tip provides control for a salon-quality lash look at home.",
    price: 14,
  }, IMAGES.tools[4], [{ sizeLabel: "One Size", stock: 67 }]),
];

export const makeupProducts = [...lips, ...face, ...eyes, ...brows, ...tools];
