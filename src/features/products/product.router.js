import express from "express"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import { upload } from "../../config/multer.js"
import {getAllProducts,
        getProductById,
        getProductByCategory,
        createNewProduct,        
        updateProduct,
        deleteProduct,
        addRating
 } from "../products/product.controller.js"
const router = express.Router()



router.get("/", getAllProducts)//done
router.get("/:id", getProductById)//done
router.get("/category/:category", getProductByCategory)//done

router.post("/",authMiddleware, isAdmin, upload.single("image"), createNewProduct) //done

router.put("/:id",authMiddleware, isAdmin, updateProduct )//done

router.delete("/:id",authMiddleware, isAdmin, deleteProduct)//done

router.post("/:id/rating",authMiddleware, addRating)//done

export default router;