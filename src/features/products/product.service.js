import { Product } from "./product.model.js"
import { uploadToCloudinary } from "./cloudinary.service.js"

export const getAllProductsService  = async () => {
      return await Product.find({ isActive: true }).sort({ createdAt: -1 }); 
  }


export const getProductByIdService  = async ({ id }) => {
    const product = await Product.findById(id)
    if (!product) throw{
        status:  404,
        message: "Product not found"
    }
    return product
  }

export const getProductByCategoryService  = async ({ category }) => {
    const products = await Product.find({ category: category.toLowerCase() })
    if (!products.length) throw {
        status: 404,
        message: "No products found for this category"
    }
    return products
}

export const createNewProductService = async ({ name, description, price, category, stock, file }) => {
    let imageUrl = null
    let imagePublicId = null

    if (file) {
        const result = await uploadToCloudinary(file.buffer)
        imageUrl = result.secure_url
        imagePublicId = result.public_id
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


export const updateProductService = async({ id, data }) =>{
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


export const deleteProductService = async ({ id }) => {
      await Product.findByIdAndUpdate(id, { isActive: false })
      return true      
}

export const addRatingService  = async ({ id, userId, rating, comment }) => {
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


