import {Component, OnInit} from '@angular/core';
import {TableColumns} from "../../utilityClasses/columns.class";
import {TableRows} from "../../utilityClasses/rows.class";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    tableColumns: TableColumns;
    tableRows: TableRows;

    constructor() {
        this.tableColumns = new TableColumns();
        this.tableRows = new TableRows();
    }

    ngOnInit() {
        this.selectTableHeadColumn(this.tableColumns.cols[0]);
    }

    selectTableHeadColumn($col: any): void {
        /** Clear the rest of the cols */
        this.tableColumns.cols.forEach(col => {
            col.bgColor = "#fff";
            col.color = "#000";
        });
        /** Highlight selected col */
        $col.bgColor = "#000";
        $col.color = "#fff";
    }
}
