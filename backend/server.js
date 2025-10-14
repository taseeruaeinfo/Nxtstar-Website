import express from 'express';
import bodyParser from 'body-parser';
import sgMail from '@sendgrid/mail';
import cors from 'cors';
import send_cost_calc_data from './Routes/costCalc.js';
import contact_route from './Routes/contactRoute.js';
import refer_route from './Routes/referRoute.js';
import dotenv from 'dotenv';
dotenv.config();

const frontendURL = process.env.FRONTEND_URL;
const app = express();
app.use(bodyParser.json());

// Configure CORS to allow requests from your frontend domain
const allowedOrigins = ['https://www.nxtstar.ae', 'https://nxtstar.ae', 'http://localhost:5173'];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 204 // Some legacy browsers (IE11) choke on 204
}));


app.use(express.json());
app.use("/api", send_cost_calc_data);
app.use("/api", contact_route);
app.use("/api", refer_route);

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
