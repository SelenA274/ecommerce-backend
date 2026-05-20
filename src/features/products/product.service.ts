import { Product } from "./product.model.js"
import { uploadToCloudinary } from "./cloudinary.service.js"
import { IProduct } from "../../types/product.types.js";
export const getAllProductsService  = async () => {
      return await Product.find({ isActive: true }).sort({ createdAt: -1 }); 
  }


export const getProductByIdService  = async ({ id }: {id: string}) => {
    const product = await Product.findById(id)
    if (!product) throw{
        status:  404,
        message: "Product not found"
    }
    return product
  }

export const getProductByCategoryService  = async ({ category }:{category: string}) => {
    const products = await Product.find({ category: category.toLowerCase() })
    if (!products.length) throw {
        status: 404,
        message: "No products found for this category"
    }
    return products
}

export const createNewProductService = async ({ name, description, price, category, stock, file }:{ name: string;description: string; price: number; category: string; stock: number; file?: Express.Multer.File; }) => {
    let imageUrl: string | null = null;
    let imagePublicId: string | null = null;
  
    if (file) {
      const result = await uploadToCloudinary(file.buffer) as { secure_url: string; public_id: string };
      imageUrl = result.secure_url;
      imagePublicId = result.public_id;
    }
    return await Product.create({ 
        name, 
        description, 
        price, 
        category, 
        stock,
        images: imageUrl ? [imageUrl] : [],
        imagePublicId
    })
}


export const updateProductService = async({ id, data }: { id: string; data:Partial<IProduct>; }) =>{
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


export const deleteProductService = async ({ id }: {id: string;}) => {
      await Product.findByIdAndUpdate(id, { isActive: false })
      return true      
}

export const addRatingService  = async ({ id, userId, rating, comment }: { id:string; userId: string; rating:number ; comment:string; }) => {
      const product = await Product.findById(id)
      if (!product) throw {
          status: 404,
          message: "Product not found"
        }

        product.ratings.push({ 
            user: userId, 
            rating, 
            comment: comment || "" })
        await product.save()
        return product.ratings
}


