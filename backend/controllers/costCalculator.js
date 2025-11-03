import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
import fetch from 'node-fetch';
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const costCalculatorData = async (req, res) => {

    const { name, email, phone, businessType, recaptchaToken } = req.body;

    // Verify reCAPTCHA token
    if (!recaptchaToken) {
        return res.status(400).json({
            success: false,
            message: "reCAPTCHA verification is required"
        });
    }

    try {
        // Verify the reCAPTCHA token with Google
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

        const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${recaptchaSecret}&response=${recaptchaToken}`
        });

        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return res.status(400).json({
                success: false,
                message: "reCAPTCHA verification failed. Please try again."
            });
        }
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return res.status(500).json({
            success: false,
            message: "Error verifying reCAPTCHA"
        });
    }

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
        subject: "Nxt Star Cost Calculator Form",
        text: `Name: ${name}\nNumber: ${formattedPhone} \nEmail: ${email}\nBusiness Type: ${businessType}`,
    };

    try {
        await sgMail.send(msg);
        res.json({ success: true, message: "Email sent successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to send email" });
    }

}


