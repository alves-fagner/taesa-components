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


  collection: any = { count: 60, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 42, // Quantidade total de itens da tabela
  };

  public maxSize: number = 6;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };




  constructor() { }

  onPageChange(event: any){
    this.config.currentPage = event;
  }

  ngOnInit(): void {
  }

  getDataByAtributeName(data: any, atribute: any) {
    if (typeof data[atribute] === "object") {
      return `${"<span class='badge bg-"}${data[atribute].color}${"'>"}${data[atribute].name}${"</span>"}`
    } else {
      return "<div>" + data[atribute] + "<div/>"
    }
  }
}
