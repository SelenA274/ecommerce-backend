import { makeupProducts } from "./makeup.catalog.js";
import { skincareProducts } from "./skincare.catalog.js";
import { fragranceProducts } from "./fragrance.catalog.js";
import { hairCareProducts } from "./hair-care.catalog.js";
import { bodyCareProducts } from "./body-care.catalog.js";
import { ProductSeedInput } from "../../../types/product.types.js";

export const productSeedCatalog: ProductSeedInput[] = [
  ...makeupProducts,
  ...skincareProducts,
  ...fragranceProducts,
  ...hairCareProducts,
  ...bodyCareProducts,
];
