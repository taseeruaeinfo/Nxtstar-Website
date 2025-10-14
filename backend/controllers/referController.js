import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';
dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const referFormData = async (req, res) => {
    const { name, phone, email, friendName, friendEmail, friendPhone } = req.body;
    
    // Format phone numbers with + prefix and space after country code
    const formatPhoneNumber = (phoneNumber) => {
        let formatted = phoneNumber;
        if (!phoneNumber.startsWith('+')) {
            // Add + prefix if missing
            formatted = `+${phoneNumber}`;
        }
        // Add space after country code (after the first 2-4 digits following the +)
        if (formatted.startsWith('+')) {
            const phoneWithoutPlus = formatted.substring(1);
            // Find the country code (typically 1-4 digits)
            const match = phoneWithoutPlus.match(/^\d{1,3}/);
            if (match) {
                const countryCode = match[0];
                const restOfNumber = phoneWithoutPlus.substring(countryCode.length);
                formatted = `+${countryCode} ${restOfNumber}`;
            }
        }
        return formatted;
    };
    
    const formattedPhone = formatPhoneNumber(phone);
    const formattedFriendPhone = formatPhoneNumber(friendPhone);

    const msg = {
        to: process.env.SEND_EMAIL_TO,
        from: process.env.SEND_EMAIL_FROM,
        subject: "NXTStar Refer & Earn Form Submission",
        text: `Referrer Name: ${name}
Referrer Phone: ${formattedPhone}
Referrer Email: ${email}

Friend's Name: ${friendName}
Friend's Phone: ${formattedFriendPhone}
Friend's Email: ${friendEmail}`,
        html: `
            <h2>New Refer & Earn Form Submission</h2>
            <h3>Referrer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${formattedPhone}</p>
            <p><strong>Email:</strong> ${email}</p>
            
            <h3>Friend's Details:</h3>
            <p><strong>Name:</strong> ${friendName}</p>
            <p><strong>Phone:</strong> ${formattedFriendPhone}</p>
            <p><strong>Email:</strong> ${friendEmail}</p>
        `,
    };

    try {
        await sgMail.send(msg);
        res.json({ success: true, message: "Referral submitted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to submit referral" });
    }
}