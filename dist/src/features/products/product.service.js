import { Product } from "./product.model.js";
import { uploadToCloudinary } from "./cloudinary.service.js";
export const getAllProductsService = async () => {
    return await Product.find({ isActive: true }).sort({ createdAt: -1 });
};
export const getProductByIdService = async ({ id }) => {
    const product = await Product.findById(id)
        .populate("ratings.user", "name avatar") // ← أضيفي هاد
        .lean();
    if (!product)
        throw {
            status: 404,
            message: "Product not found"
        };
    return product;
};
export const getProductByCategoryService = async ({ category, }) => {
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
export const createNewProductService = async ({ name, brand, description, price, department, subcategory, mainImage, images, variantKind, variants, file, files, }) => {
    const directImageUrls = images ?? [];
    const uploadedUrls = [];
    let mainImageUrl = mainImage;
    let imagePublicId = null;
    if (files?.length) {
        for (const uploadedFile of files) {
            const result = (await uploadToCloudinary(uploadedFile.buffer));
            uploadedUrls.push(result.secure_url);
        }
    }
    if (file) {
        const result = (await uploadToCloudinary(file.buffer));
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
export const updateProductService = async ({ id, data }) => {
    const updatedProduct = await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    if (!updatedProduct)
        throw {
            status: 404,
            message: "Product not found"
        };
    return updatedProduct;
};
export const deleteProductService = async ({ id }) => {
    await Product.findByIdAndUpdate(id, { isActive: false });
    return true;
};
export const addRatingService = async ({ id, userId, rating, comment }) => {
    const product = await Product.findById(id);
    if (!product)
        throw {
            status: 404,
            message: "Product not found"
        };
    product.ratings.push({
        user: userId,
        rating,
        comment: comment || ""
    });
    await product.save();
    await product.populate("ratings.user", "name avatar");
    return product.ratings;
};
//# sourceMappingURL=product.service.js.map