import { IProduct } from "../../types/product.types.js";

export function getTotalStock(product: IProduct): number {
  return product.variants.reduce((sum, variant) => sum + variant.stock, 0);
}

export function deductProductStock(product: IProduct, quantity: number): void {
  let remaining = quantity;

  for (const variant of product.variants) {
    if (remaining <= 0) break;
    const deduction = Math.min(variant.stock, remaining);
    variant.stock -= deduction;
    remaining -= deduction;
  }

  if (remaining > 0) {
    throw {
      status: 400,
      message: "Not enough stock",
    };
  }
}

export function restoreProductStock(product: IProduct, quantity: number): void {
  if (product.variants.length === 0) return;
  product.variants[0].stock += quantity;
}
