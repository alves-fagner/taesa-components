import { Component, Input, OnInit } from '@angular/core';
import { Table } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() tableConfig: Table = {
    columns: [],
    attributeName: [],
    data: []
  }

  config: any = {
    id: 'custom',
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 1, // Quantidade total de itens da tabela - OBRIGATÓRIO
  };

  public maxSize: any = 6;
  // Referência: https://www.freakyjolly.com/angular-pagination-example-using-ngx-pagination/

  constructor() { }

  onPageChange(event: any){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
    this.config.itemsPerPage = this.tableConfig.paginationConfig?.itemsPerPage;
    this.config.totalItems = this.tableConfig.paginationConfig?.totalItems;
    this.config.currentPage = this.tableConfig.paginationConfig?.currentPage;
    this.maxSize = this.tableConfig.paginationConfig?.maxSize;
  }

  getDataByAtributeName(data: any, atribute: any) {
    if (typeof data[atribute] === "object") {
      return `${"<span class='badge bg-"}${data[atribute].color}${"'>"}${data[atribute].name}${"</span>"}`
    } else {
      return "<div>" + data[atribute] + "<div/>"
    }
  }
}
