import { Product } from "../products/product.model.js"
import { uploadToCloudinary } from "./cloudinary.service.js"

export const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });
      res.status(200).json({
        status: 200,
        message: "products fetched successfully",
        data: products,
      })
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Error fetching products",
        data: null,
      })
    }
  }
export const getProductById = async (req, res) => {
    try {
       const { id } = req.params
       const product = await Product.findById(id)
        res.status(200).json({
        status: 200,
        message: "product fetched successfully",
        data: product,
      })
    } catch (error) {
      // console.log("error : ",error)
      res.status(500).json({
        status: 500,
        message: "Error fetching product",
        data: null,
      })
    }
  }
export const getProductByCategory = async (req, res) => {
    try {
      const category = String(req.params.category || "").toLowerCase()
      // console.log("category: ",category)
      const products = await Product.find({ category })
        // console.log("products: ",products)

        if (!products.length) {
          return res.status(404).json({
            status: 404,
            message: "No products found for this category",
            data: [],
          })
        }
        res.status(200).json({
        status: 200,
        message: `product by Category ${category} fetched successfully`,
        data: products,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Error fetching product",
        data: null,
      })
    }
  }

  export const createNewProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body

        let imageUrl = null
        let imagePublicId = null

        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer)
            imageUrl = result.secure_url
            imagePublicId = result.public_id
        }

        const product = await Product.create({ 
            name, 
            description, 
            price, 
            category, 
            stock,
            images: imageUrl ? [imageUrl] : [],
            imagePublicId
        })

        res.status(201).json({
            status: 201,
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        console.log("error : ", error)
        res.status(500).json({
            status: 500,
            message: "Failed to create product",
            data: null
        })
    }
}


export const updateProduct = async(req,res) =>{
  try {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    )
       res.status(200).json({
          status: 200,
          message: "Product updated successfully",
          data: updatedProduct,
        })
  } catch (error) {
    console.log(error)
      res.status(500).json({
           status: 500,
          message: "Error updating product",
          data: null,
        })
  }
}


export const deleteProduct = async (req, res) => {
  try {
      await Product.findByIdAndUpdate(req.params.id, { isActive: false })
      res.status(200).json({
        status: 200,
        message: `Product with id: ${req.params.id} deactivated successfully`,
        data: null
      })
  } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Failed deleting product",
        data: null
    })
  }
}

  export const addRating = async (req, res) => {
    try {
      const { id } = req.params
      const product = await Product.findById(id)
      if (!product) {
        return res.status(404).json({
          status: 404,
          message: "Product not found",
          data: null,
        })
      }
  
      const ratingData = {
        user: req.user.id,          
        rating: req.body.rating,     
        comment: req.body.comment || ""
      }
  
      product.ratings.push(ratingData);
      await product.save()
  
      return res.status(200).json({
        status: 200,
        message: "Rating added successfully",
        data: product.ratings,
      })
    } catch (error) {
      // console.log("error:", error);
      return res.status(500).json({
        status: 500,
        message: "Error adding rating",
        data: null,
      })
    }
  }


