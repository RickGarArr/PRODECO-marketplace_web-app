import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'producto-component',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  precio = new FormControl('250');
  stock = new FormControl('25');

  constructor() { }

  ngOnInit(): void {
    this.precio.disable();
    this.stock.disable();
  }

  editarPrecio() {
    this.precio.enabled ? this.precio.disable() : this.precio.enable();
  }

  editarStock() {
    this.stock.enabled ? this.stock.disable() : this.stock.enable();
  }


  desactivarProucto() {
    Swal.fire({
      title: 'Desactivar',
      text: "¿Desea Desactivar Este Producto?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
    }).then(data => { if (data.isConfirmed) {
      Swal.fire({
        title: 'Producto Desactivado',
        timer: 500
      });  
    }});
  }

  async borrarProducto() {
   const data = await Swal.fire({
    title: 'Eliminar',
    text: "¿Desea Eliminar Este Producto?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Continuar'
  });
  if (data.isConfirmed) {
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success' );
  }
  }

}
