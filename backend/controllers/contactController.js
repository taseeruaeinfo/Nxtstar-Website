import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const contactFormData = async (req, res) => {
    const { name, phone, email, message } = req.body;
    
    // Format phone number with + prefix and space after country code
    let formattedPhone = phone;
    if (!phone.startsWith('+')) {
        // Add + prefix if missing
        formattedPhone = `+${phone}`;
    }
    // Add space after country code (after the first 2-4 digits following the +)
    if (formattedPhone.startsWith('+')) {
        const phoneWithoutPlus = formattedPhone.substring(1);
        // Find the country code (typically 1-4 digits)
        const match = phoneWithoutPlus.match(/^\d{1,3}/);
        if (match) {
            const countryCode = match[0];
            const restOfNumber = phoneWithoutPlus.substring(countryCode.length);
            formattedPhone = `+${countryCode} ${restOfNumber}`;
        }
    }

    const msg = {
        to: process.env.SEND_EMAIL_TO,
        from: process.env.SEND_EMAIL_FROM,
        subject: "NXTStar Contact Form Submission",
        text: `Name: ${name}\nPhone: ${formattedPhone}\nEmail: ${email}\nMessage: ${message}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${formattedPhone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    };

    try {
        await sgMail.send(msg);
        res.json({ success: true, message: "Message sent successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to send message" });
    }
}