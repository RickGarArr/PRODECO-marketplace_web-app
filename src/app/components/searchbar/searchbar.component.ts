import { Component, Input, OnInit } from '@angular/core';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'component-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  @Input() origen: string;
  public filtros: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    switch (this.origen) {
      case 'solicitudes':
        this.filtros = ['todas', 'rechazadas', 'aprovadas'];
      break;
      case 'consumidores':
      case 'comercios':
        this.filtros = ['todos', 'activos', 'desactivados'];
      break;
      case 'productos': 
      this.filtros = ['todos', 'Activo', 'desactivados', 'sin existencias']
      break;
      case 'ventas': 
      this.filtros = ['todas', 'cliente',]
      break;
      case 'pedidos': 
      this.filtros = ['todos', 'estado']
      break;
    }
  }

}
