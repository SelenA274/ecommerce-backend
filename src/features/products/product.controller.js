import { 
  getAllProductsService,
  getProductByIdService,
  getProductByCategoryService,
  createNewProductService,
  updateProductService,
  deleteProductService,
  addRatingService
} from "./product.service.js"

export const getAllProducts = async (req, res) => {
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
export const getProductById = async (req, res) => {
    try {
      const product = await getProductByIdService({ id: req.params.id })
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
      const products = await getProductByCategoryService({ category: req.params.category })
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

  export const createNewProduct = async (req, res) => {
    try {
      const { name, description, price, category, stock } = req.body
      const product = await createNewProductService({ name, description, price, category, stock, file: req.file })

        res.status(201).json({
            status: 201,
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        // console.log("error : ", error)
        res.status(500).json({
            status: 500,
            message: "Failed to create product",
            data: null
        })
    }
}


export const updateProduct = async(req,res) =>{
  try {
    const product = await updateProductService({ id: req.params.id, data: req.body })
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


export const deleteProduct = async (req, res) => {
  try {
    await deleteProductService({ id: req.params.id })
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
      const ratings = await addRatingService({ 
        id: req.params.id, 
        userId: req.user.id, 
        rating: req.body.rating, 
        comment: req.body.comment 
    })
      return res.status(200).json({
        status: 200,
        message: "Rating added successfully",
        data: ratings,
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


