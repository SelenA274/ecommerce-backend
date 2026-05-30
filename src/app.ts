import express, { Express } from 'express'
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import rateLimit from "express-rate-limit"
import hpp from "hpp"
import authRoute from "./features/auth/auth.router.js"
import usersRoute from "./features/users/user.router.js"
import ordersRoute from "./features/orders/order.router.js"
import productsRoute from "./features/products/product.router.js"
import cartRoute from "./features/cart/cart.router.js"
import { errorHandler } from "./shared/middleware/errorHandler.js"


const app: Express = express()
app.use(hpp())

const FIFTEEN_MINUTES = 15 * 60 * 1000

const globalLimiter = rateLimit({
  windowMs: FIFTEEN_MINUTES,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => res.status(429).json({
    status: 429,
    message: "Too many requests. Please try again in 15 minutes.",
  }),
})

export const authLimiter = rateLimit({
  windowMs: FIFTEEN_MINUTES,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => res.status(429).json({
    status: 429,
    message: "Too many authentication attempts. Please try again in 15 minutes.",
  }),
})

app.set("trust proxy", 1)
app.use(globalLimiter)
app.use(helmet())
app.use(morgan("dev"))

export const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"]

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

app.use(express.json())

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/order", ordersRoute)
app.use("/product", productsRoute)
app.use("/cart", cartRoute)

app.use(errorHandler)
app.use("/", (req, res) => res.send("fallback..404 - not found"))

export default app