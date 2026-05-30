import { transporter } from "./mailer.js"

interface OrderItem {
  name: string
  price: number
  quantity: number
  image?: string
}

interface ShippingAddress {
  fullName: string
  phone: string
  street?: string
  city: string
  country: string
}

export const sendOrderConfirmationEmail = async (
  email: string,
  orderId: string,
  items: OrderItem[],
  shippingAddress: ShippingAddress,
  totalPrice: number
): Promise<void> => {
  const itemsHtml = items.map((item) => `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #f0ebe3;">
        <span style="font-size: 14px; color: #2a1f14;">${item.name}</span>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #f0ebe3; text-align: center;">
        <span style="font-size: 14px; color: #6a5a4a;">x${item.quantity}</span>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #f0ebe3; text-align: right;">
        <span style="font-size: 14px; color: #2a1f14;">$${(item.price * item.quantity).toFixed(2)}</span>
      </td>
    </tr>
  `).join("")

  await transporter.sendMail({
    from: `"VELO Beauty" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Order Confirmed — #${String(orderId).slice(-8).toUpperCase()}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="UTF-8"></head>
      <body style="margin: 0; padding: 0; background-color: #faf7f2; font-family: Georgia, serif;">
        <div style="max-width: 560px; margin: 40px auto; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 24px rgba(180,150,100,0.10);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #faf7f2, #efe7da); padding: 40px 48px; text-align: center; border-bottom: 1px solid rgba(201,169,110,0.2);">
            <p style="font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #c9a96e; margin: 0 0 8px;">Order Confirmed</p>
            <h1 style="font-size: 32px; color: #2a1f14; margin: 0; font-weight: 500; letter-spacing: 2px;">VELO</h1>
            <p style="font-size: 12px; color: #9a8870; margin: 8px 0 0; letter-spacing: 2px; text-transform: uppercase;">Luxury Beauty</p>
          </div>

          <!-- Body -->
          <div style="padding: 40px 48px;">
            <p style="font-size: 15px; color: #2a1f14; margin: 0 0 8px;">Dear ${shippingAddress.fullName},</p>
            <p style="font-size: 14px; color: #6a5a4a; line-height: 1.7; margin: 0 0 32px;">
              Thank you for your order. We're preparing your items with care and will notify you when they're on their way.
            </p>

            <!-- Order ID -->
            <div style="background: #faf7f2; border-radius: 14px; padding: 16px 20px; margin-bottom: 28px; border: 1px solid rgba(201,169,110,0.2);">
              <span style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #c9a96e;">Order Reference</span>
              <p style="font-size: 16px; color: #2a1f14; margin: 4px 0 0; font-weight: 600;">#${String(orderId).slice(-8).toUpperCase()}</p>
            </div>

            <!-- Items -->
            <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #c9a96e; margin-bottom: 12px;">Your Items</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              ${itemsHtml}
              <tr>
                <td colspan="2" style="padding: 16px 0 0; font-size: 13px; color: #9a8870; text-transform: uppercase; letter-spacing: 2px;">Total</td>
                <td style="padding: 16px 0 0; text-align: right; font-size: 18px; color: #c9a96e; font-weight: 600;">$${totalPrice.toFixed(2)}</td>
              </tr>
            </table>

            <!-- Shipping -->
            <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #c9a96e; margin-bottom: 12px;">Shipping To</p>
            <div style="background: #faf7f2; border-radius: 14px; padding: 16px 20px; border: 1px solid rgba(201,169,110,0.2);">
              <p style="margin: 0; font-size: 14px; color: #2a1f14; line-height: 1.7;">
                ${shippingAddress.fullName}<br>
                ${shippingAddress.street ? shippingAddress.street + "<br>" : ""}
                ${shippingAddress.city}, ${shippingAddress.country}<br>
                ${shippingAddress.phone}
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 24px 48px; text-align: center; border-top: 1px solid rgba(201,169,110,0.15);">
            <p style="font-size: 11px; color: #b0a090; margin: 0; letter-spacing: 1px;">
              © 2026 VELO BEAUTY. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </body>
      </html>
    `,
  })
}