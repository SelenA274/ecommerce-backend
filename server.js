import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoConnect from "./src/config/db.js"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cloudinary from './src/config/cloudinary.js'
import rateLimit from "express-rate-limit"

dotenv.config()
cloudinary.config()

import authRoute from "./src/features/auth/auth.router.js"
import usersRoute from "./src/features/users/user.router.js"
import ordersRoute from "./src/features/orders/order.router.js"
import productsRoute from "./src/features/products/product.router.js"
import cartRoute from "./src/features/cart/cart.router.js"

const app = express()
const httpServer = createServer(app)

// Global limiter — 100 requests per minute for all routes
const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 100,
  message: "Too many requests, please try again later"
})

// Auth limiter — 10 requests per minute to protect login/register
const authLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  message: "Too many attempts, please try again later"
})
app.set("trust proxy", 1)
app.use(globalLimiter)

// Security | Adds security headers to protect against common attacks
app.use(helmet())

// Logs every incoming request to the terminal (method, path, status, response time)
app.use(morgan("dev"))

// CORS: Only allows requests from trusted origins (our frontend)
// Without this, any website on the internet could call our API
const allowedOrigins = ["http://localhost:5173"];

if (process.env.CORS_ORIGINS) {
  allowedOrigins.push(...process.env.CORS_ORIGINS.split(","));
}

app.use(cors({
  origin: allowedOrigins,  // whitelisted origins
  credentials: true,      // allows Authorization headers and cookies
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))


// Socket.IO: Real-time bidirectional communication between server and clients
// Used for live stock updates when a product is purchased
export const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    credentials: true
  }
})

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)

  // Client joins a specific product room to receive stock updates for that product only
  socket.on("join-product", (productId) => {
    socket.join(productId)
    console.log(`Socket ${socket.id} joined product room: ${productId}`)
  })

  // Client leaves the product room when navigating away
  socket.on("leave-product", (productId) => {
    socket.leave(productId)
    console.log(`Socket ${socket.id} left product room: ${productId}`)
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id)
  })
})

// Body parser
app.use(express.json())

// Routes
app.use("/auth",authLimiter, authRoute)
app.use("/users", usersRoute)
app.use("/order", ordersRoute)
app.use("/product", productsRoute)
app.use("/cart", cartRoute)

app.use("/", (req, res) => {
    res.send("fallback..404 - not found")
})

mongoConnect()
.then(() => httpServer.listen(process.env.PORT || 3000, () => console.log("Server is running...")))
.catch(console.error)