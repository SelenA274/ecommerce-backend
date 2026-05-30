import { createServer } from 'http'
import { initSocket } from "./src/config/socket.js"
import app, { allowedOrigins } from './src/app.js'
import mongoConnect from "./src/config/db.js"
import dotenv from "dotenv"
import cloudinary from './src/config/cloudinary.js'

dotenv.config()
cloudinary.config()

const httpServer = createServer(app)
initSocket(httpServer, allowedOrigins)

mongoConnect()
  .then(() => httpServer.listen(process.env.PORT || 3000, () => console.log("Server is running...")))
  .catch(console.error)