import { BillsServices } from './services';
import { Request, Response } from 'express';

export class BillsController {
    static async getBills(_req: Request, res: Response) {
        const bills = await BillsServices.getBills();
        res.render('index', { title: 'Bills', bills });
    }

    static async getBill(req: Request, res: Response) {
        const { id } = req.params;
        const bill = await BillsServices.getBill(Number(id));
        res.render('bill', { title: 'Bill', bill });
    }
}
