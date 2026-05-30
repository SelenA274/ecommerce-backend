import { Product } from "./product.model.js"
import { uploadToCloudinary } from "./cloudinary.service.js"
import { IColorVariant, IProduct, ISizeVariant } from "../../types/product.types.js";


export const getAllProductsService = async ({
  page = 1,
  limit = 20,
  department,
  subcategory,
  minPrice,
  maxPrice,
  sort = "createdAt",
}: {
  page?: number
  limit?: number
  department?: string
  subcategory?: string
  minPrice?: number
  maxPrice?: number
  sort?: string
} = {}) => {
  const filter: any = { isActive: true }

  if (department) filter.department = department
  if (subcategory) filter.subcategory = subcategory
  if (minPrice !== undefined || maxPrice !== undefined) {
    filter.price = {}
    if (minPrice !== undefined) filter.price.$gte = minPrice
    if (maxPrice !== undefined) filter.price.$lte = maxPrice
  }

  const sortMap: Record<string, any> = {
    createdAt: { createdAt: -1 },
    price_asc: { price: 1 },
    price_desc: { price: -1 },
    rating: { averageRating: -1 },
  }

  const skip = (page - 1) * limit
  const [products, total] = await Promise.all([
    Product.find(filter)
      .sort(sortMap[sort] ?? { createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    Product.countDocuments(filter),
  ])

  return {
    data: products,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
    totalCount: total,
  }
}


export const getProductByIdService = async ({ id }: { id: string }) => {
  const product = await Product.findById(id)
    .populate("ratings.user", "name avatar") // ← أضيفي هاد
    .lean()
  if (!product) throw {
    status: 404,
    message: "Product not found"
  }
  return product
}

export const getProductByCategoryService = async ({
  category,
}: {
  category: string;
}) => {
  const normalized = category.toLowerCase();
  const products = await Product.find({
    isActive: true,
    $or: [{ department: normalized }, { subcategory: normalized }],
  }).sort({ createdAt: -1 });

  if (!products.length) {
    throw {
      status: 404,
      message: "No products found for this category",
    };
  }
  return products;
};

const PLACEHOLDER_IMAGE_URL = "https://placeholder.com";

export const createNewProductService = async ({
  name,
  brand,
  description,
  price,
  department,
  subcategory,
  mainImage,
  images,
  variantKind,
  variants,
  file,
  files,
}: {
  name: string;
  brand: string;
  description: string;
  price: number;
  department: string;
  subcategory: string;
  mainImage?: string;
  images?: string[];
  variantKind: string;
  variants: IColorVariant[] | ISizeVariant[];
  file?: Express.Multer.File;
  files?: Express.Multer.File[];
}) => {
  const directImageUrls = images ?? [];
  const uploadedUrls: string[] = [];
  let mainImageUrl = mainImage;
  let imagePublicId: string | null = null;

  if (files?.length) {
    for (const uploadedFile of files) {
      const result = (await uploadToCloudinary(uploadedFile.buffer)) as {
        secure_url: string;
        public_id: string;
      };
      uploadedUrls.push(result.secure_url);
    }
  }

  if (file) {
    const result = (await uploadToCloudinary(file.buffer)) as {
      secure_url: string;
      public_id: string;
    };
    imagePublicId = result.public_id;
    uploadedUrls.push(result.secure_url);

    if (!mainImageUrl || mainImageUrl === PLACEHOLDER_IMAGE_URL) {
      mainImageUrl = result.secure_url;
    }
  }

  const allImages = [...directImageUrls, ...uploadedUrls];

  if (!mainImageUrl || mainImageUrl === PLACEHOLDER_IMAGE_URL) {
    mainImageUrl = allImages[0] ?? null;
  }

  if (!mainImageUrl) {
    throw {
      status: 400,
      message: "mainImage or product image file is required",
    };
  }

  return await Product.create({
    name,
    brand,
    description,
    price,
    department,
    subcategory,
    mainImage: mainImageUrl,
    images: allImages.length ? allImages : [mainImageUrl],
    imagePublicId,
    variantKind,
    variants,
  });
};


export const updateProductService = async ({ id, data }: { id: string; data: Partial<IProduct>; }) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    data,
    { new: true, runValidators: true })
  if (!updatedProduct) throw {
    status: 404,
    message: "Product not found"
  }
  return updatedProduct


}


export const deleteProductService = async ({ id }: { id: string; }) => {
  await Product.findByIdAndUpdate(id, { isActive: false })
  return true
}

export const addRatingService = async ({ id, userId, rating, comment }: { id: string; userId: string; rating: number; comment: string; }) => {
  const product = await Product.findById(id)
  if (!product) throw {
    status: 404,
    message: "Product not found"
  }

  product.ratings.push({
    user: userId,
    rating,
    comment: comment || ""
  })
  await product.save()
  await product.populate("ratings.user", "name avatar")
  return product.ratings
}


