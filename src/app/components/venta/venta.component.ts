import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'component-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  public fecha = moment().locale('es').format('h:mm:ss a, MMMM D YYYY');

  constructor() { }

  ngOnInit(): void {    
  }

}
