export interface Row {
    category: string;
    value: string;
    timestamp: string;
}

export const DEMO_DATA: Row[] = [
    {
        category: "FOOD",
        value: "1200",
        timestamp: "1702318474"
    },
    {
        category: "GAS",
        value: "900",
        timestamp: "1702318476"
    },
    {
        category: "CLOTHING",
        value: "400",
        timestamp: "1702318479"
    },
    {
        category: "GIFTS",
        value: "500",
        timestamp: "1702318482"
    },
    {
        category: "OTHERS",
        value: "250",
        timestamp: "1702318485"
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
