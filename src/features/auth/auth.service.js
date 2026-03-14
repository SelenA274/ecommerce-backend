import { User } from "../users/user.model.js"
import { sendVerificationEmail } from "../../shared/utils/sendVerificationEmail.js"
import { sendResetPasswordEmail } from "../../shared/utils/sendResetPasswordEmail.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import crypto from "crypto"

dotenv.config()


function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function generateToken() {
    return crypto.randomBytes(32).toString("hex")
}

export const registerService = async ({ name, email, password }) => {
    const code = generateCode()
    const user = await User.create({
        name,
        email,
        password,
        verificationToken: code
    })
    await sendVerificationEmail(email, code)
    return user
}

export const loginService = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password +isVerified")
    if (!user) throw {
        status: 400,
        message: "Invalid credentials", 
    }
    const match = await bcrypt.compare(password, user.password)
        if (!match) throw {
            status: 400,
            message: "Invalid credentials"
        }
        if (!user.isVerified) throw {
            status: 400,
            message: "User is not verified"
        }
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE || "30m" }
        )
    return token
}

export const forgotPasswordService = async ({ email }) => {
    const user = await User.findOne({ email })
    if (!user) return null
      
      const token = generateToken()
      const expiry = new Date(Date.now() + 60 * 60 * 1000) // 1h
      
      user.resetPasswordToken = token
      user.resetPasswordExpiry = expiry
      await user.save()

      await sendResetPasswordEmail(email, token)
      return true
}

export const resetPasswordService = async ({ token, password }) => {
    const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiry: { $gt: new Date() },
    }).select("+password +resetPasswordToken +resetPasswordExpiry")

    if (!user) {
       throw {
          status: 400,
          message: "Invalid or expired token", 
        }
      }

    user.password = password
    user.resetPasswordToken = null
    user.resetPasswordExpiry = null
    await user.save()
    return true
}

export const adminLoginService = async ({ email, password }) => {
    const user = await User.findOne({ email }).select("+password +isVerified")
    
    if (!user) throw { 
            status: 400, 
            message: "Invalid credentials",     
        }
    
      const match = await bcrypt.compare(password, user.password)
      if (!match) throw { 
        status: 400, 
        message: "Invalid credentials"   
    }

    if (!user.isVerified) throw { 
            status: 400, 
            message: "User is not verified",
      }

    const code = generateCode()
    user.twoFactorCode = code
    user.twoFactorExpiry = new Date(Date.now() + 10 * 60 * 1000) // 10m
    await user.save()

    await sendVerificationEmail(user.email, code)
    return true 
}

export const adminVerify2faService  = async ({ email, code }) => {
    const user = await User.findOne({
        email,
        role: "admin",
        twoFactorCode: code,
        twoFactorExpiry: { $gt: new Date() },
      })
  
      if (!user) throw {
          status: 400,
          message: "Invalid or expired 2FA code"
      }
  
      user.twoFactorCode = null
      user.twoFactorExpiry = null
      await user.save()
  
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || "1d" }
    )
    return token 
}

export const verifyEmailService   = async ({ token }) => {
    const user = await User.findOne({ verificationToken: token })
    if (!user) throw { 
        status: 404,
        message: "Invalid or expired token" 
    }
    user.isVerified = true
    user.verificationToken = null
    await user.save()
    return true
}


export const meService = async ({ userId }) => {
    const user = await User.findById(userId).select("-password")
    if (!user) throw { 
        status: 404, 
        message: "User not found", 
        data: null 
    }
    return user
}
