import { transporter } from "./mailer.js"

export const sendResetPasswordEmail = async (email: string, token: string): Promise<void> => {
    const resetLink = `${process.env.RESET_PASSWORD_URL}/${token}`
    console.log("RESET_PASSWORD_URL:", process.env.RESET_PASSWORD_URL)
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Reset Your Password",
        html: `
            <h2>Reset Your Password</h2>
            <p>Click the link below to reset your password. This link expires in 1 hour.</p>
            <a href="${resetLink}">Reset Password</a>
            <p>If you did not request this, ignore this email.</p>
        `
    })
}