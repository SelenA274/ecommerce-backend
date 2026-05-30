import rateLimit from "express-rate-limit"

export const authLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 10,
    message: { status: 429, message: "Too many requests, try again later" }
})

export const globalLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    message: { status: 429, message: "Too many requests, try again later" }
})