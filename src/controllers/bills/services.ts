import { Bill } from '../../models/Bill';
import db from '../../config/db';
export class BillsServices {
    static async getBills(): Promise<Bill[]> {
        try {
            const [rows] = await db.query('SELECT * FROM bills');
            return rows.map((row: Bill) => Bill.fromSqlRow(row));
        } catch (error) {
            throw new Error(`Could not get bills. Error: ${error}`);
        }
    }

    static async getBill(id: number): Promise<Bill> {
        try {
            const [rows] = await db.query('SELECT * FROM bills WHERE id = ?', [id]);
            return Bill.fromSqlRow(rows[0]);
        } catch (error) {
            throw new Error(`Could not get bill. Error: ${error}`);
        }
    }

    static async createBill(bill: Bill): Promise<Bill> {
        try {
            const [result] = await db.query('INSERT INTO bills SET ?', bill);
            const createdBill = await this.getBill(result.insertId);
            return createdBill;
        } catch (error) {
            throw new Error(`Could not create bill. Error: ${error}`);
        }
    }
}
