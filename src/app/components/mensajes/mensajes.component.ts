import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  public fecha = moment().locale('es').format('D/MM/YYYY, h:ss a');

  constructor() { }

  ngOnInit(): void {
  }

  click(event) {
    console.log(event);
    
  }
}
