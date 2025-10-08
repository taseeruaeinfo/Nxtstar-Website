import express from 'express';
import bodyParser from 'body-parser';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import send_cost_calc_data from './Routes/costCalc.js';
import dotenv from 'dotenv';
dotenv.config();

const frontendURL = process.env.FRONTEND_URL;
const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: frontendURL
}));


app.use(express.json());
app.use("/api", send_cost_calc_data);

// app.post("/send-form", async (req, res) => {
//   const { name, email, phone, businessType } = req.body;

//   const msg = {
//     to: process.env.SEND_EMAIL_TO,
//     from: process.env.SEND_EMAIL_FROM,
//     subject: "Nxt Star Cost Calculator Form",
//     text: `Name: ${name}\nNumber: ${phone} \nEmail: ${email}\nBusiness Type: ${businessType}`,
//   };

//   try {
//     await sgMail.send(msg);
//     res.json({ success: true, message: "Email sent successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

app.listen(5000, () => console.log("Server running on port 5000"));
