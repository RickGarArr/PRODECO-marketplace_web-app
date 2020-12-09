import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit {

 estado='activo'

  constructor() { }

  ngOnInit(): void {
  }

  cambioEstado(){

    if(this.estado == 'activo'){
      this.estado = 'desactivado'
    }else {
      if( this.estado == 'desactivado'){
        this.estado = 'activo'
      }
    }
  }

  

  desactivarConsumidor(){
    Swal.fire({
      title: 'Desactivar',
      text: "¿Desea Desactivar Este Consumidor?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
    }).then(data => { if (data.isConfirmed) {
      this.cambioEstado();
      Swal.fire({
        title: 'Consumidor Desactivado',
        timer: 500
      });  
    }});

  }
  async borrarConsumidor(){
    const data = await Swal.fire({
      title: 'Eliminar',
      text: "¿Desea Eliminar Este Consumidor?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
    });
    if (data.isConfirmed) {
      Swal.fire('Deleted!', 'Consumidor Borrado.', 'success' );
    }


  }

}
