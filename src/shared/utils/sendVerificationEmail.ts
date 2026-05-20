import { transporter } from "./mailer.js"

export async function sendVerificationEmail(toEmail: string, code: string): Promise<void> {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "Verification Code",
    text: `Your verification code is: ${code}`
  })
}