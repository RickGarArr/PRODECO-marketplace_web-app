import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'component-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public fecha = moment().locale('es').format('D/MM/YYYY, h:mm:ss a');
  public estado = new FormControl('pendiente');  
  constructor() { }

  ngOnInit(): void {
  }

}
