import dotenv from "dotenv";
import mongoose from "mongoose";
import mongoConnect from "../config/db.js";
import { Product } from "../features/products/product.model.js";
import {
  DEPARTMENTS,
  SUBCATEGORIES_BY_DEPARTMENT,
} from "../features/products/product.constants.js";
import { productSeedCatalog } from "./seed/catalog/index.js";

dotenv.config();

async function seed(): Promise<void> {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  await mongoConnect();

  const existingCount = await Product.countDocuments();
  if (existingCount > 0) {
    console.log(`Clearing ${existingCount} existing product(s)...`);
    await Product.deleteMany({});
  }

  const inserted = await Product.insertMany(productSeedCatalog, {
    ordered: true,
  });

  console.log(`Seeded ${inserted.length} products successfully.`);

  for (const department of DEPARTMENTS) {
    const subcategories = SUBCATEGORIES_BY_DEPARTMENT[department];
    for (const subcategory of subcategories) {
      const count = await Product.countDocuments({ department, subcategory });
      console.log(`  ${department} / ${subcategory}: ${count} products`);
    }
  }

  await mongoose.disconnect();
  console.log("Database connection closed.");
}

seed().catch((error: unknown) => {
  console.error("Seed failed:", error);
  void mongoose.disconnect();
  process.exit(1);
});
