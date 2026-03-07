import express from "express"
import { authMiddleware } from "../../shared/middleware/authMIddleware.js"
import { checkPermissions } from "../../shared/middleware/checkPermissions.js"
import { isAdmin } from "../../shared/middleware/isAdmin.js"
import {getProfile,
        updateProfile,
        addAddress,
        updateAddress,
        deleteAddress,
        getAllUsers,
        updateUserRole,
        deleteUser
 } from "../users/user.controller.js"
const router = express.Router()



router.get("/profile", authMiddleware, getProfile) // Done
router.put("/profile/:id",authMiddleware, checkPermissions, updateProfile )//done
router.post("/addresses/:id",authMiddleware, checkPermissions, addAddress)//done 
router.put("/addresses/:addrId",authMiddleware, updateAddress)//done
router.delete("/addresses/:addrId",authMiddleware, deleteAddress)//done
router.get("/",authMiddleware, isAdmin, getAllUsers)//done
router.put("/:id/role",authMiddleware, isAdmin, updateUserRole)//done
router.delete("/:id",authMiddleware, isAdmin, deleteUser)//done
export default router;