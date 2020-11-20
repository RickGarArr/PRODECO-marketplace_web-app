import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  fecha = new Date();
  seleccionado: string;
  tipos: string[] = ['Todos', 'Tiempo', 'Comprador', 'Estado'];

  constructor( formBuilder: FormBuilder ) {
    this.fecha.getDate().toString();
  }

  ngOnInit(): void {
  }

}
