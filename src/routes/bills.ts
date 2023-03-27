import express from 'express';
import { BillsController } from '../controllers/bills/controller';
const router = express.Router();

router.get('/', BillsController.getBills);
router.get('/bill/:id', BillsController.getBill);

export default router;
