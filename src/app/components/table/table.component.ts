import { Component } from '@angular/core';
import {TableColumns} from "../../utilityClasses/columns.class";
import {TableRows} from "../../utilityClasses/rows.class";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    tableColumns: TableColumns;
    tableRows: TableRows;

    constructor() {
        this.tableColumns = new TableColumns();
        this.tableRows = new TableRows();
    }

}
