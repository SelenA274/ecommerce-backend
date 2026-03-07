import { User } from "../../features/users/user.model.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
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
        const user = await User.findById(decoded.userId)
        if (!user) {
            return res.status(401).json({
              status: 401,
              message: "User not found",
              data: null
            })
          }

          req.user = {
            id: user._id,
            role: user.role
          }
        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            status: 401,
            message: "Token is invalid",
            data: null
        })
    }
}