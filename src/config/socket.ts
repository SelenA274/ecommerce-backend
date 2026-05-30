import { Server } from "socket.io"
import { Server as HttpServer } from "http"

export let io: Server

export const initSocket = (httpServer: HttpServer, allowedOrigins: string[]) => {
    io = new Server(httpServer, {
        cors: {
            origin: allowedOrigins,
            credentials: true
        }
    })

    io.on("connection", (socket) => {
        socket.on("join-product", (productId: string) => {
            socket.join(productId)
        })
        socket.on("leave-product", (productId: string) => {
            socket.leave(productId)
        })
    })
}