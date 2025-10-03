import express from 'express';
import bodyParser from 'body-parser';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-form", async (req, res) => {
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
});

app.listen(5000, () => console.log("Server running on port 5000"));
