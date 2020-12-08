import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  public fecha = moment().locale('es').format('MMMM Do YYYY');
  public hora = moment().locale('es').format('h:mm:ss a');

  constructor() { }

  ngOnInit(): void {    
  }

}
