import { Component, OnInit } from '@angular/core';
import { Table } from '../table/table.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = [];

  table: Table = {
    paginationConfig: { itemsPerPage: 5, totalItems: 42, maxSize: 6, currentPage: 1 },
    columns: [{ name: "Leilão" }, { name: "Responsável" }, { name: "Edital" }],
    attributeName: ['leilao', 'responsavel', 'edital'],
    data: [
      {
        leilao: '1',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '2',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '3',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '4',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '5',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '6',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '7',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '8',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '9',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '10',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '11',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '12',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '13',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '14',
        responsavel: 'Afonso',
        edital: 'Edital.pdf',
      },
      {
        leilao: '1',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '2',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '3',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '4',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '5',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '6',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '7',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '8',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '9',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '10',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '11',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '12',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '13',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '14',
        responsavel: 'Afonso',
        edital: 'Edital.pdf',
      },
      {
        leilao: '1',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '2',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '3',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '4',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '5',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '6',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '7',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '8',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '9',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '10',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '11',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '12',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '13',
        responsavel: 'Pedro Henrique',
        edital: 'Edital.pdf',
      },
      {
        leilao: '14',
        responsavel: 'Afonso',
        edital: 'Edital.pdf',
      }
    ],
    //statusList: [{ name: "Validação Eddital", class: "danger" }],
    actionsList: [
      {
        class: 'btn btn-sm btn-primary',
        title: 'teste',
        icon: 'teste',
        callback: (data: any,index: any) => { console.log("TESTE")},
        name: "TESTE"
      }
    ],
    onClick(data: any, rowIndex: any) {
      console.log(data);
      console.log(rowIndex);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
