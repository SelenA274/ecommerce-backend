import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoConnect from "./src/config/db.js"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import cors from "cors"
import cloudinary from './src/config/cloudinary.js'

dotenv.config()
cloudinary.config()

import authRoute from "./src/features/auth/auth.router.js"
import usersRoute from "./src/features/users/user.router.js"
import ordersRoute from "./src/features/orders/order.router.js"
import productsRoute from "./src/features/products/product.router.js"
import cartRoute from "./src/features/cart/cart.router.js"

const app = express()
const httpServer = createServer(app)

// Security
app.use(helmet())

// Logging
app.use(morgan("dev"))

// CORS
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : ["http://localhost:5173"]

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}))

// Socket.IO
export const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    credentials: true
  }
})

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)

  // لقوم بتشوف صفحة منتج معين
  socket.on("join-product", (productId) => {
    socket.join(productId)
    console.log(`Socket ${socket.id} joined product room: ${productId}`)
  })

  // لما يغادر الصفحة
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
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/order", ordersRoute)
app.use("/product", productsRoute)
app.use("/cart", cartRoute)

app.use("/", (req, res) => {
    res.send("fallback..404 - not found")
})

mongoConnect().then(() => httpServer.listen(process.env.PORT || 3000, () => console.log("Server is running..."))).catch(console.error)