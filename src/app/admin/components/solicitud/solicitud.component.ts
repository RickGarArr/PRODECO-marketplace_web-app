import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  public fecha = moment().locale('es').format('MMMM Do YYYY, h:mm:ss a');

  constructor() { }

  ngOnInit(): void {
  }

}
