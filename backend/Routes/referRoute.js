import express from 'express';
import { referFormData } from '../controllers/referController.js';

const router = express.Router();
router.post("/refer", referFormData);

export default router;