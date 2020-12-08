import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public fecha = moment().locale('es').format('MMMM Do YYYY');
  public hora = moment().locale('es').format('h:mm:ss a');
  
  constructor() { }

  ngOnInit(): void {
  }

}
