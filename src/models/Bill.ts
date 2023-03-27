export class Bill {
    readonly id: number;
    name: string;
    frequency: string;
    amount: number;
    resident_id: number;
    autopay: boolean;
    url: string;
    due_date: Date;
    created_at: Date;
    updated_at: Date;

    constructor(
        id: number,
        name: string,
        frequency: string,
        amount: number,
        resident_id: number,
        autopay: boolean,
        url: string,
        due_date: Date,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id;
        this.name = name;
        this.frequency = frequency;
        this.amount = amount;
        this.resident_id = resident_id;
        this.autopay = autopay;
        this.url = url;
        this.due_date = due_date;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    static fromSqlRow(sqlRow: Bill): Bill {
        return new Bill(
            sqlRow.id,
            sqlRow.name,
            sqlRow.frequency,
            sqlRow.amount,
            sqlRow.resident_id,
            sqlRow.autopay,
            sqlRow.url,
            sqlRow.due_date,
            sqlRow.created_at,
            sqlRow.updated_at
        );
    }
}
