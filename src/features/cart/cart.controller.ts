import { Cart } from "./cart.model.js";
import { Product } from "../products/product.model.js";
import { getTotalStock } from "../products/product.utils.js";
import { Request, Response } from "express";

export const getCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user!.id
        const cart = await Cart.findOne({ userId }).populate("items.product", "name price images mainImage variants isActive")
        
        if (!cart) {
             res.status(200).json({
                status: 200,
                message: "Cart is empty",
                data: { items: [] }
            })
            return
        }
        const totalPrice = (cart.items as any[])
        .filter(item => item.product && item.product.isActive)
        .reduce((sum, item) => sum + item.product.price * item.quantity, 0)

        res.status(200).json({
            status: 200,
            message: "Cart fetched successfully",
            data: {
                ...cart.toObject(),
                totalPrice: parseFloat(totalPrice.toFixed(2)),
                itemCount: cart.items.length
            }
        })
    } catch (error) {
         res.status(500).json({
            status: 500,
            message: "Error fetching cart",
            data: null,
        })
    }
}

export const addProductToCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user!.id
        const { productId, quantity = 1, variantId } = req.body

        if (!productId) {
             res.status(400).json({
                status: 400,
                message: "productId is required",
                data: null,
            })
        }

        const qty = Number(quantity)
        if (!qty || qty < 1) {
             res.status(400).json({
                status: 400,
                message: "quantity must be >= 1",
                data: null,
            })
        }

        const product = await Product.findById(productId).select("name price variants isActive")
        if (!product || product.isActive === false) {
             res.status(404).json({
                status: 404,
                message: "Product not found",
                data: null,
            })
            return
        }

        let cart = await Cart.findOne({ userId })
        if (!cart) {
            cart = await Cart.create({ userId, items: [] })
        }

        const item = cart.items.find(
            (i) =>
                String(i.product) === String(productId) &&
                String(i.variant ?? "") === String(variantId ?? "")
        )

        const currentQty = item ? item.quantity : 0
        const totalQty = currentQty + qty

        let availableStock: number
        if (variantId) {
            const variant = product.variants.find(
                (v) => String(v._id) === String(variantId)
            )
            if (!variant) {
                res.status(404).json({
                    status: 404,
                    message: "Variant not found",
                    data: null,
                })
                return
            }
            availableStock = variant.stock
        } else {
            availableStock = getTotalStock(product)
        }

        if (totalQty > availableStock) {
            res.status(400).json({
                status: 404,
                message: `Not enough stock. Available: ${availableStock}`,
                data: null
            })
            return
        }
//success-------------------------
        if (item) {
            item.quantity = item.quantity + qty
        } else {
            const newItem: { product: string; quantity: number; variant?: string } = {
                product: productId,
                quantity: qty,
            }
            if (variantId) newItem.variant = variantId
            cart.items.push(newItem as any)
        }
        await cart.save()
        res.status(200).json({
            status: 200,
            message: "Product added successfully",
            data: cart,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed to add product to cart",
            data: null,
        })
    }
}

export const updateProductQty = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user!.id
        const { productId } = req.params
        const { quantity } = req.body

        const cart = await Cart.findOne({ userId })
        if (!cart) {
            res.status(404).json({
                status: 404,
                message: "Cart not found",
                data: null,
            })
            return
        }


        const item = cart.items.find((i) => String(i.product) === String(productId))
        if (!item) {
            res.status(404).json({
                status: 404,
                message: "Product not in cart",
                data: null,
            })
            return
        }

        const qty = Number(quantity)
        if (!qty || qty < 1) {
            res.status(400).json({ 
            message: "quantity must be >= 1" 
          })
        }

        const product = await Product.findById(productId).select("variants isActive")
        if (!product) {
            res.status(404).json({ status: 404, message: "Product not found", data: null })
            return
        }

        let availableStock: number
        if (item.variant) {
            const variant = product.variants.find(
                (v) => String(v._id) === String(item.variant)
            )
            if (!variant) {
                res.status(404).json({
                    status: 404,
                    message: "Variant not found",
                    data: null,
                })
                return
            }
            availableStock = variant.stock
        } else {
            availableStock = getTotalStock(product)
        }

        if (qty > availableStock) {
            res.status(400).json({
                status: 400,
                message: `Not enough stock. Available: ${availableStock}`,
                data: null
            })
            return
        }

        item.quantity = quantity
        await cart.save()
        res.status(200).json({
            status: 200,
            message: "Product quantity updated successfully",
            data: cart,
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Failed to update quantity",
            data: null,
        })
    }
}

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user!.id
        const { productId } = req.params

        const cart = await Cart.findOne({ userId })
        if (!cart) {
            res.status(404).json({
                status: 404,
                message: "Cart not found",
                data: null,
            })
            return
        }

        cart.items = cart.items.filter((i) => String(i.product) !== String(productId)) as any
        await cart.save()

        res.status(200).json({
            status: 200,
            message: "Product removed from cart",
            data: null,
        })
    } catch (error) {
         res.status(500).json({
            status: 500,
            message: "Failed to remove product",
            data: null,
        })
    }
}

export const clearCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user!.id
        const cart = await Cart.findOne({ userId })

        if (!cart) {
             res.status(404).json({
                status: 404,
                message: "Cart not found",
                data: null,
            })
            return
        }

        cart.items = [] as any
        await cart.save()

        res.status(200).json({
            status: 200,
            message: "Cart cleared successfully",
            data: null,
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Failed to clear cart",
            data: null,
        })
    }
}

export const syncCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.user!.id
        const { items } = req.body

        if (!Array.isArray(items)) {
            res.status(400).json({
                status: 400,
                message: "items must be an array",
                data: null,
            })
        }

        let cart = await Cart.findOne({ userId })
        if (!cart) cart = await Cart.create({ userId, items: [] })

            for (const it of items) {
                const productId = it.productId ?? it.product
                const variantId = it.variantId
                const qty = Number(it.quantity)
            
                if (!productId || !qty || qty < 1) continue
            
                const product = await Product.findById(productId).select("variants isActive")
                if (!product || !product.isActive) continue
            
                const exist = cart.items.find(
                    (x) =>
                        String(x.product) === String(productId) &&
                        String(x.variant ?? "") === String(variantId ?? "")
                )
                const currentQty = exist ? exist.quantity : 0

                let availableStock: number
                if (variantId) {
                    const variant = product.variants.find(
                        (v) => String(v._id) === String(variantId)
                    )
                    if (!variant) continue
                    availableStock = variant.stock
                } else {
                    availableStock = getTotalStock(product)
                }
            
                if (currentQty + qty > availableStock) continue
            
                if (exist) {
                    exist.quantity += qty
                } else {
                    const newItem: { product: string; quantity: number; variant?: string } = {
                        product: productId,
                        quantity: qty,
                    }
                    if (variantId) newItem.variant = variantId
                    cart.items.push(newItem as any)
                }
            }

        await cart.save()
        res.status(200).json({
            status: 200,
            message: "Cart synced successfully",
            data: cart,
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "Failed to sync cart",
            data: null,
        })
    }
}