import { transporter } from "./mailer.js"

export const sendOrderStatusUpdateEmail = async (
    email: string,
    orderId: string,
    orderStatus: string,
    trackingNumber?: string
) => {
    await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Order Update — ${orderStatus}`,
        html: `
            <h2>Your order has been updated</h2>
            <p>Order ID: <strong>${orderId}</strong></p>
            <p>New Status: <strong>${orderStatus}</strong></p>
            ${trackingNumber ? `<p>Tracking Number: <strong>${trackingNumber}</strong></p>` : ""}
        `
    })
}