import mongoose from "mongoose"
import bcrypt from "bcrypt"

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },

  street: {
    type: String,
    required: true
  }
}, { _id: false })


const CartItemSchema = new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", 
      required: true
    },
    quantity: {
      type: Number,
      required: true,
       min: 1
    }
  }, { _id: false })

const userSchema = new mongoose.Schema({
    name: {
         type: String,
          required: true,
          trim: true, // ניקוי רווחים מיותרים
          minlength: 2
         },
    email: {
        type: String,
        required: [true, "Email is a required field."],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false
      },
    role:{
        type: String,
        enum: ["customer", "admin"],
        default: "customer"
    },
    isVerified:{
        type: Boolean,
        default: false,
        select: false
    },
    verificationToken:{ //טוקן חד-פעמי לאימות חשבון
        type: String, 
        default: null,
        select: false
    },
    verificationTokenExpiry:{ //  תאריך פקיעת טוקן האימות 24 שעות 
        type: Date, 
        default: null,
        select: false
    },
    resetPasswordToken: {  //טוקן לאיפוס סיסמה
        type: String, 
        default: null,
        select: false
    },
    resetPasswordExpiry: {  //תאריך פקיעת טוקן איפוס הסיסמה 1 שעה
        type: Date, 
        default: null,
        select: false
    },
    twoFactorCode:{   //למנהלים זמני 2FA קוד
        type: String, 
        default: null,
        select: false
    },
    twoFactorExpiry:{
        type: Date, 
        default: null,
        select: false
    },
    addresses:{
        type:[addressSchema],
        default:[]
    },
    cart:{
        type:[CartItemSchema],
        default:[]
    }
}, { timestamps: true})

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return
  this.password = await bcrypt.hash(this.password, 10)
})
// فحص  register بعد مره 
export const User = mongoose.model("User", userSchema)

export default User