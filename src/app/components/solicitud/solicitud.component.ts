import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'component-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  public fecha = moment().locale('es').format('h:mm:ss a, MMMM D YYYY');

  constructor() { }

  ngOnInit(): void {
  }

}
