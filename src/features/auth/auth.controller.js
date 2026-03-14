import dotenv from "dotenv"
import { 
  registerService, 
  loginService, 
  forgotPasswordService, 
  resetPasswordService, 
  adminLoginService, 
  adminVerify2faService, 
  verifyEmailService, 
  meService 
} from "./auth.service.js"

dotenv.config()

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const user = await registerService({name, email, password})
        res.status(201).json({
            status: 201,
            message: "Verification code sent",
            data: user
        })
    } catch (error) {
        const { code, keyValue } = error
        // console.log(code, keyValue)
        if (String(code) === "11000") {
            const { email } = keyValue
            if (email) {
                return res.status(409).json({
                    status: 409,
                    message: "Email already in use",
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
      await verifyEmailService({ token })
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
        const token = await loginService({email, password})
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
      await forgotPasswordService({email})
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
      await resetPasswordService({token, password})
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
      await adminLoginService({email, password})
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
      const token = await adminVerify2faService({email, code})
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
      const user = await meService({ userId: req.user.id })
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