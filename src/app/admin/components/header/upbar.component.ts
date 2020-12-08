import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upbar',
  templateUrl: './upbar.component.html',
  styleUrls: ['./upbar.component.css']
})
export class UpBarComponent implements OnInit {

  @Input() origen: string;
  public upBarCampos: string[] = [];
  public gridTemplateColums: string;
  constructor() { }

  ngOnInit(): void {
    switch (this.origen) {
      case 'comercios':
        this.upBarCampos = ['Nombre', 'Ventas', 'Ganancia', 'Estado', 'Productos', 'Acciones'];
        this.gridTemplateColums = '2fr 1fr 1fr 1fr 1fr 2fr';
      break;
      case 'consumidores':
        this.upBarCampos = ['Nombre', 'Compras', 'Gastado', 'Estado', 'Direcciones', 'Acciones'];
        this.gridTemplateColums = '2fr 1fr 1fr 1fr 1fr 2fr';
      break;
      case 'solicitudes':
        this.upBarCampos = ['Fecha', 'Comercio', 'Solicitud', 'Estado', 'Acciones'];
        this.gridTemplateColums = '2fr 2fr 1fr 1fr 2fr';
      break;
    }
  }

}
