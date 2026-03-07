import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import crypto from "crypto"
import dotenv from "dotenv"
import { User } from "../users/user.model.js"
import { sendVerificationEmail } from "../../shared/utils/sendVerificationEmail.js"
import { sendResetPasswordEmail } from "../../shared/utils/sendResetPasswordEmail.js"

dotenv.config()

function generateToken() {
    return crypto.randomBytes(32).toString("hex")
  }

function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const code = generateCode()
        const user = await User.create({
            name,
            email,
            password,
            verificationToken: code
        })
        await sendVerificationEmail(email, code)

        res.status(200).json({
            status: 200,
            message: "Verification code sent",
            data: user
        })
    } catch (error) {
        const { code, keyValue } = error
        // console.log(code, keyValue)
        if (String(code) === "11000") {
            const { email } = keyValue
            if (email) {
                return res.status(500).json({
                    status: 500,
                    message: "Cannot register with this email",
                    data: null
                })
            }
        }
        // console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed register a new user",
            data: null
        })
    }
}

export async function verifyEmail(req, res) {
  try {
      const { token } = req.params  
      
      const user = await User.findOne({ verificationToken: token })
      if (!user) {
          return res.status(404).json({ 
              message: "Invalid or expired token" 
          })
      }

      user.isVerified = true
      user.verificationToken = null
      await user.save()
      
      res.status(200).json({ 
          message: "Email verified successfully" 
      })
  } catch (error) {
      res.status(500).json({ 
          error: "Something went wrong" 
      })
  }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
// مششكله!!!!!!!!!!!!!!!!!!!!!!!!!!
        const user = await User.findOne({ email }).select("+password +isVerified")
        if (!user) return res.status(400).json({
            status: 400,
            message: "Invalid credentials",
            data: null
        })

        const match = await bcrypt.compare(password, user.password)
        if (!match) return res.status(400).json({
            status: 400,
            message: "Invalid credentials",
            data: null
        })

        if (!user.isVerified) return res.status(400).json({
            status: 400,
            message: "User is not verified",
            data: null
        })

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "30m" }
        )

        res.status(200).json({
            status: 200,
            message: "Login successfully",
            data: token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed register a new user",
            data: null
        })
    }
}


export const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(200).json({
          status: 200,
          message: "If the email exists, a reset link was sent",// i dont like this 
          data: null,
        })
      }
  
      const token = generateToken()
      const expiry = new Date(Date.now() + 60 * 60 * 1000) // 1h
  
      user.resetPasswordToken = token
      user.resetPasswordExpiry = expiry
      await user.save()
  
      await sendResetPasswordEmail(email, token)
  
      return res.status(200).json({
        status: 200,
        message: "Reset password email sent",
        data: null,
      })
    } catch (error) {
    //   console.log(error)
      return res.status(500).json({
        status: 500,
        message: "Failed to send reset password email",
        data: null,
      })
    }
  }
  

  export const resetPassword = async (req, res) => {
    try {
      const { token } = req.params
      const { password } = req.body
  
      const user = await User.findOne({
        resetPasswordToken: token,
        resetPasswordExpiry: { $gt: new Date() },
      }).select("+password +resetPasswordToken +resetPasswordExpiry")
  
      if (!user) {
        return res.status(400).json({
          status: 400,
          message: "Invalid or expired token",
          data: null,
        })
      }
  
      user.password = password 
      user.resetPasswordToken = null
      user.resetPasswordExpiry = null
      await user.save()
  
      return res.status(200).json({
        status: 200,
        message: "Password reset successfully",
        data: null,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 500,
        message: "Failed to reset password",
        data: null,
      })
    }
  }
  

  export const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findOne({ email }).select("+password +isVerified")
      if (!user) {
        return res.status(400).json({ 
            status: 400, 
            message: "Invalid credentials", 
            data: null 
        })
      }
  
      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        return res.status(400).json({ 
            status: 400, 
            message: "Invalid credentials", 
            data: null 

        })
      }
  
      if (!user.isVerified) {
        return res.status(400).json({ 
            status: 400, 
            message: "User is not verified", 
            data: null 

        })
      }
      const code = generateCode()
      user.twoFactorCode = code
      user.twoFactorExpiry = new Date(Date.now() + 10 * 60 * 1000) // 10m
      await user.save()
  
      await sendVerificationEmail(user.email, code)
  
      return res.status(200).json({
        status: 200,
        message: "2FA code sent",
        data: null,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 500,
        message: "Failed admin login",
        data: null,
      })
    }
  }
  
  export const adminVerify2fa = async (req, res) => {
    try {
      const { email, code } = req.body
  
      const user = await User.findOne({
        email,
        role: "admin",
        twoFactorCode: code,
        twoFactorExpiry: { $gt: new Date() },
      })
  
      if (!user) {
        return res.status(400).json({
          status: 400,
          message: "Invalid or expired 2FA code",
          data: null,
        })
      }
  
      user.twoFactorCode = null
      user.twoFactorExpiry = null
      await user.save()
  
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE || "1d" }
      )
  
      return res.status(200).json({
        status: 200,
        message: "Admin login successfully",
        data: { token },
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        status: 500,
        message: "Failed verify 2FA",
        data: null,
      })
    }
  }
  

  export const logout = async (req, res) => {// i have to ask ben how to to this
    try {
      return res.status(200).json({
        status: 200,
        message: "Logout successfully",
        data: null,
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Failed logout",
        data: null,
      })
    }
  }
  

  export const me = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password")
      if (!user) {
        return res.status(404).json({ status: 404, message: "User not found", data: null })
      }
  
      return res.status(200).json({
        status: 200,
        message: "User fetched successfully",
        data: user,
      })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Failed to fetch user",
        data: null,
      })
    }
}