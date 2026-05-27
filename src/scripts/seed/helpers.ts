import {
  Department,
  ProductSubcategory,
  resolveVariantKind,
} from "../../features/products/product.constants.js";
import {
  IColorVariant,
  ISizeVariant,
  ProductSeedInput,
} from "../../types/product.types.js";

/** Curated Unsplash beauty imagery (stable direct URLs). */
export const IMAGES = {
  lips: [
    "https://images.unsplash.com/photo-1586495777744-4413f210faa0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  ],
  face: [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd2023?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1612817288484-6f91600611a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  ],
  eyes: [
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596755389378-c31d21fd2023?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586495777744-4413f210faa0?auto=format&fit=crop&w=800&q=80",
  ],
  brows: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1612817288484-6f91600611a2?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  ],
  tools: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586495777744-4413f210faa0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  ],
  skincare: [
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570554886110-e82f457216c0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608248543809-ba3f63fdaf1e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1617897903246-3a0a4c8e7048?auto=format&fit=crop&w=800&q=80",
  ],
  fragrance: [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
  ],
  hair: [
    "https://images.unsplash.com/photo-1527799820374-dcf8d9a5e3a0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1608248543809-ba3f63fdaf1e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1570554886110-e82f457216c0?auto=format&fit=crop&w=800&q=80",
  ],
  body: [
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556229010-aa1bd4d8eb8a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601044898-8f4e6f2f3c0b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1617897903246-3a0a4c8e7048?auto=format&fit=crop&w=800&q=80",
  ],
} as const;

type ColorShade = { colorName: string; colorCode: string; stock: number };
type SizeOption = { sizeLabel: string; stock: number; price?: number };

interface BaseProductDef {
  name: string;
  brand: string;
  description: string;
  price: number;
}

export function colorProduct(
  department: Department,
  subcategory: ProductSubcategory,
  def: BaseProductDef,
  mainImage: string,
  shades: ColorShade[]
): ProductSeedInput {
  const variants: IColorVariant[] = shades.map((shade) => ({ ...shade }));
  return {
    ...def,
    department,
    subcategory,
    mainImage,
    images: [mainImage],
    variantKind: resolveVariantKind(department, subcategory),
    variants,
  };
}

export function sizeProduct(
  department: Department,
  subcategory: ProductSubcategory,
  def: BaseProductDef,
  mainImage: string,
  sizes: SizeOption[]
): ProductSeedInput {
  const variants: ISizeVariant[] = sizes.map((size) => ({ ...size }));
  return {
    ...def,
    department,
    subcategory,
    mainImage,
    images: [mainImage],
    variantKind: resolveVariantKind(department, subcategory),
    variants,
  };
}

export const STANDARD_SIZES: SizeOption[] = [
  { sizeLabel: "30ml", stock: 40 },
  { sizeLabel: "50ml", stock: 65, price: undefined },
  { sizeLabel: "100ml", stock: 50, price: undefined },
];

export const FRAGRANCE_SIZES: SizeOption[] = [
  { sizeLabel: "30ml", stock: 35 },
  { sizeLabel: "50ml", stock: 55 },
  { sizeLabel: "100ml", stock: 40 },
];

export const TOOL_SIZES: SizeOption[] = [
  { sizeLabel: "Single", stock: 80 },
  { sizeLabel: "Pro Set", stock: 45 },
];
