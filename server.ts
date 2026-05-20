import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoConnect from "./src/config/db.js"
import dotenv from "dotenv"
import cloudinary from './src/config/cloudinary.js'
import app, { allowedOrigins } from './src/app.js'

dotenv.config()
cloudinary.config()

const httpServer = createServer(app)

export const io = new Server(httpServer, {
  cors: { origin: allowedOrigins, credentials: true }
})

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id)
  socket.on("join-product", (productId) => socket.join(productId))
  socket.on("leave-product", (productId) => socket.leave(productId))
  socket.on("disconnect", () => console.log("Client disconnected:", socket.id))
})

mongoConnect()
  .then(() => httpServer.listen(process.env.PORT || 3000, () => console.log("Server is running...")))
  .catch(console.error)