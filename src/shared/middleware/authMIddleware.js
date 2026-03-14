import { User } from "../../features/users/user.model.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
            status: 401,
            message: "No token provided",
            data: null
        })
    }
 
    const token = authHeader.split(" ")[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {
            id: decoded.userId,
            role: decoded.role
        }
        next()
    } catch (error) {
        const message = error.name === "TokenExpiredError" ? "Token expired" : "Token is invalid"
        res.status(401).json({
            status: 401,
            message,
            data: null
        })
    }
}