import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import express from "express"
import {addProductToCart,clearCart,deleteProduct, getCart, syncCart, updateProductQty  } from "./cart.controller.js"


const router = express.Router()

router.get("/", authMiddleware, getCart)// get the cart
router.post("/",authMiddleware, addProductToCart )// add product to the cart or update num
router.put("/:productId", authMiddleware,updateProductQty )// update num
router.delete("/:productId", authMiddleware, deleteProduct)// delete product
router.delete("/", authMiddleware, clearCart)// delete all the products 
router.post("/sync", authMiddleware, syncCart)// Merge the cart stored in localStorage with the user's cart in the database when the user logs in



export default router