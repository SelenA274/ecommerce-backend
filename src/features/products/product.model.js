import mongoose from "mongoose"

const RatingSchema = new mongoose.Schema({
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User",
       required: true
    },
    rating: {
       type: Number,
       required: true,
       min: 1,
       max: 5
    },
    comment: {
       type: String
    }
 }, { timestamps: true

  })

 
const productSchema = new mongoose.Schema({
    name: {
         type: String,
          required: true,
          trim: true 
         },
    description: {
        type: String,
        required: true,
        default: " "
    },
    price: {
        type: Number,
        required: true,
        min: 0
      },
    category:{
        type: String,
        required: true,
        enum: {
            values: [
              "electronics",
              "food",
              "beauty",
              "sports",
              "books",
              "toys"
            ],
            message: "{VALUE} is not a valid category"
          }    },
    images:{
        type: [String],
        required: true,
        default: []
    },
    imagePublicId:{ 
      type: String, 
      default: null 
    },
    stock:{
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    sold:{
        type: Number,
        default: 0
    },
    isActive:{
        type: Boolean,
        default: true
    },
    ratings:{
        type: [RatingSchema],
        default: []
    },
    averageRating: {
        type: Number,
        default:0,
        min: 0,
        max: 5
    }
}, { timestamps: true
 })

 productSchema.methods.calculateAverageRating = function () {
    if (this.ratings.length === 0) {
      this.averageRating = 0
      return
    }
    const sum = this.ratings.reduce((acc, item) => acc + item.rating, 0)
    this.averageRating = Number((sum / this.ratings.length).toFixed(2))
  }

  productSchema.pre("save", async function (next) {
    this.calculateAverageRating()
  })
 

 export const Product = mongoose.model("Product", productSchema)

export default Product