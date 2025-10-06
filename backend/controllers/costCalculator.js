import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const costCalculatorData = async (req, res) => {

    const { name, email, phone, businessType } = req.body;

    const msg = {
        to: process.env.SEND_EMAIL_TO,
        from: process.env.SEND_EMAIL_FROM,
        subject: "Nxt Star Cost Calculator Form",
        text: `Name: ${name}\nNumber: ${phone} \nEmail: ${email}\nBusiness Type: ${businessType}`,
    };

    try {
        await sgMail.send(msg);
        res.json({ success: true, message: "Email sent successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }

}


