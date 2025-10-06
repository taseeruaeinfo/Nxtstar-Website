import express from 'express';
import { costCalculatorData } from '../controllers/costCalculator.js';

const router = express.Router();
router.post("/send-form", costCalculatorData);

export default router;