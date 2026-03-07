import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

async function sendVerificationEmail(to, code) {
    await transporter.sendMail({
        from: `"My App" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: "Your Verification Code",
        text: `Your verification code is: ${code}`,
        html: `<h2>Your verification code is:</h2>
           <h1>${code}</h1>`,
    });
}

export { sendVerificationEmail } 