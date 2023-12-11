export interface Row {
    category: string;
    value: string;
    timestamp: string;
}

export const DEMO_DATA: Row[] = [
    {
        category: "test",
        value: "test",
        timestamp: "test"
    },
    {
        category: "test",
        value: "test",
        timestamp: "test"
    },
    {
        category: "test",
        value: "test",
        timestamp: "test"
    },
    {
        category: "test",
        value: "test",
        timestamp: "test"
    },
    {
        category: "test",
        value: "test",
        timestamp: "test"
    }
];

export interface TableRowsInterface {
    rows: Row[];
}

export class TableRows implements TableRowsInterface {
    rows: Row[];

    constructor() {
        this.rows = DEMO_DATA;
    }
}
