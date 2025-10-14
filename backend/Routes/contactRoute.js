import express from 'express';
import { contactFormData } from '../controllers/contactController.js';

const router = express.Router();
router.post("/contact", contactFormData);

export default router;