import express from 'express'
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import rateLimit from "express-rate-limit"

import authRoute from "../src/features/auth/auth.router.js"
import usersRoute from "../src/features/users/user.router.js"
import ordersRoute from "../src/features/orders/order.router.js"
import productsRoute from "../src/features/products/product.router.js"
import cartRoute from "../src/features/cart/cart.router.js"

const app = express()

const globalLimiter = rateLimit({ windowMs: 1 * 60 * 1000, limit: 100 })
const authLimiter = rateLimit({ windowMs: 1 * 60 * 1000, limit: 10 })

app.set("trust proxy", 1)
app.use(globalLimiter)
app.use(helmet())
app.use(morgan("dev"))

const allowedOrigins = ["http://localhost:5173"]
if (process.env.CORS_ORIGINS) {
  allowedOrigins.push(...process.env.CORS_ORIGINS.split(","))
}

app.use(cors({ origin: allowedOrigins, credentials: true, methods: ["GET", "POST", "PUT", "DELETE", "PATCH"] }))
app.use(express.json())

app.use("/auth", authLimiter, authRoute)
app.use("/users", usersRoute)
app.use("/order", ordersRoute)
app.use("/product", productsRoute)
app.use("/cart", cartRoute)

app.use("/", (req, res) => res.send("fallback..404 - not found"))

export { allowedOrigins }
export default app