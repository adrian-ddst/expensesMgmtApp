export interface Col {
    colName: string;
    width: string;
    bgColor?: string;
    color?: string;
}

export const COLUMNS: Col[] = [
    {
        colName: "CATEGORY",
        width: "200px"
    },
    {
        colName: "VALUE",
        width: "200px"
    },
    {
        colName: "TIMESTAMP",
        width: "200px"
    }
];

export interface TableColumnsInterface {
    cols: Col[];
    getColumnsList(): string[];
}

export class TableColumns implements TableColumnsInterface {
    cols: Col[];

    constructor() {
        this.cols = COLUMNS;
        this.cols.forEach(col => {
            col.bgColor = "#fff";
            col.color = "#000";
        });
    }

    getColumnsList(): string[] {
        return this.cols.map(col => col.colName);
    }
}
