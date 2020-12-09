import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent implements OnInit {
 estado = 'activo';
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


  desactivarComerciante(){
    Swal.fire({
      title: 'Desactivar',
      text: "¿Desea Desactivar Este Comercio?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
    }).then(data => { if (data.isConfirmed) {
      this.cambioEstado();
      Swal.fire({
        title: 'Comercio Desactivado',
        timer: 500
      });  
    }});
  }

   async borrarComerciante(){
    const data = await Swal.fire({
      title: 'Eliminar',
      text: "¿Desea Eliminar Este Comercio?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
    });
    if (data.isConfirmed) {
      Swal.fire('Deleted!', 'Comerciante Borrado.', 'success' );
    }

  }

}
