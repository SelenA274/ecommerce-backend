import { Request, Response } from "express";
import { 
  getAllProductsService,
  getProductByIdService,
  getProductByCategoryService,
  createNewProductService,
  updateProductService,
  deleteProductService,
  addRatingService
} from "./product.service.js"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await getAllProductsService()
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
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
      const product = await getProductByIdService({ id: String(req.params.id) })
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
export const getProductByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
      const products = await getProductByCategoryService({ category: String(req.params.category) })
        res.status(200).json({
        status: 200,
        message: `product by Category ${req.params.category} fetched successfully`,
        data: products,
      })
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "Error fetching product",
        data: null,
      })
    }
  }

  export const createNewProduct = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
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
      } = req.body
      const uploadedFiles = req.files as Record<string, Express.Multer.File[]> | undefined
      const product = await createNewProductService({
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
        file: req.file ?? uploadedFiles?.image?.[0],
        files: uploadedFiles?.images,
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


export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await updateProductService({ id: String(req.params.id), data: req.body })
       res.status(200).json({
          status: 200,
          message: "Product updated successfully",
          data: product,
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


export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    await deleteProductService({ id: String(req.params.id) })
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

  export const addRating = async (req: Request, res: Response): Promise<void> => {
    try {
      const ratings = await addRatingService({ 
        id: String(req.params.id), 
        userId: req.user!.id, 
        rating: req.body.rating, 
        comment: req.body.comment 
    })
       res.status(200).json({
        status: 200,
        message: "Rating added successfully",
        data: ratings,
      })
    } catch (error) {
      // console.log("error:", error);
       res.status(500).json({
        status: 500,
        message: "Error adding rating",
        data: null,
      })
    }
  }


