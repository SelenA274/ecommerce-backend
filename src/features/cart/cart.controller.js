import { Cart } from "./cart.model.js"
import { Product } from "../products/product.model.js"

export const getCart = async (req, res) => {
    try {
        const userId = req.user.id
        const cart = await Cart.findOne({ userId }).populate("items.product", "name price images stock isActive")
        
        if (!cart) {
            return res.status(200).json({
                status: 200,
                message: "Cart is empty",
                data: { items: [] }
            })
        }

        res.status(200).json({
            status: 200,
            message: "Cart fetched successfully",
            data: cart,
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Error fetching cart",
            data: null,
        })
    }
}

export const addProductToCart = async (req, res) => {
    try {
        const userId = req.user.id
        const { productId, quantity = 1 } = req.body

        if (!productId) {
            return res.status(400).json({
                status: 400,
                message: "productId is required",
                data: null,
            })
        }

        const qty = Number(quantity)
        if (!qty || qty < 1) {
            return res.status(400).json({
                status: 400,
                message: "quantity must be >= 1",
                data: null,
            })
        }

        const product = await Product.findById(productId).select("name price stock isActive")
        if (!product || product.isActive === false) {
            return res.status(404).json({
                status: 404,
                message: "Product not found",
                data: null,
            })
        }

        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = await Cart.create({ userId, items: [] })
        }

        const item = cart.items.find((i) => String(i.product) === String(productId))

        const currentQty = item ? item.quantity : 0
        const totalQty = currentQty + qty

        if (totalQty > product.stock) {
            return res.status(400).json({
                status: 404,
                message: `Not enough stock. Available: ${product.stock}`,
                data: null

            })
        }
//success-------------------------
        if (item) {
            item.quantity = item.quantity + qty
        } else {
            cart.items.push({ product: productId, quantity: qty })
        }
        await cart.save()
        res.status(200).json({
            status: 200,
            message: "Product added successfully",
            data: cart,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status: 500,
            message: "Failed to add product to cart",
            data: null,
        })
    }
}

export const updateProductQty = async (req, res) => {
    try {
        const userId = req.user.id
        const { productId } = req.params
        const { quantity } = req.body

        const cart = await Cart.findOne({ userId })
        if (!cart) {
            return res.status(404).json({
                status: 404,
                message: "Cart not found",
                data: null,
            })
        }

        const item = cart.items.find((i) => String(i.product) === String(productId))
        if (!item) {
            return res.status(404).json({
                status: 404,
                message: "Product not in cart",
                data: null,
            })
        }

        item.quantity = quantity
        await cart.save()

        res.status(200).json({
            status: 200,
            message: "Product quantity updated successfully",
            data: cart,
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to update quantity",
            data: null,
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const userId = req.user.id
        const { productId } = req.params

        const cart = await Cart.findOne({ userId })
        if (!cart) {
            return res.status(404).json({
                status: 404,
                message: "Cart not found",
                data: null,
            })
        }

        cart.items = cart.items.filter((i) => String(i.product) !== String(productId))
        await cart.save()

        res.status(200).json({
            status: 200,
            message: "Product removed from cart",
            data: null,
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to remove product",
            data: null,
        })
    }
}

export const clearCart = async (req, res) => {
    try {
        const userId = req.user.id
        const cart = await Cart.findOne({ userId })

        if (!cart) {
            return res.status(404).json({
                status: 404,
                message: "Cart not found",
                data: null,
            })
        }

        cart.items = []
        await cart.save()

        res.status(200).json({
            status: 200,
            message: "Cart cleared successfully",
            data: null,
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to clear cart",
            data: null,
        })
    }
}

export const syncCart = async (req, res) => {
    try {
        const userId = req.user.id
        const { items } = req.body

        if (!Array.isArray(items)) {
            return res.status(400).json({
                status: 400,
                message: "items must be an array",
                data: null,
            })
        }

        let cart = await Cart.findOne({ userId })
        if (!cart) cart = await Cart.create({ userId, items: [] })

        for (const it of items) {
            const productId = it.product
            const qty = Number(it.quantity)

            if (!productId || !qty || qty < 1) continue

            const exist = cart.items.find((x) => String(x.product) === String(productId))
            if (exist) {
                exist.quantity += qty
            } else {
                cart.items.push({ product: productId, quantity: qty })
            }
        }

        await cart.save()

        return res.status(200).json({
            status: 200,
            message: "Cart synced successfully",
            data: cart,
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Failed to sync cart",
            data: null,
        })
    }
}