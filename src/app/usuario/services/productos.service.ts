import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const base_url = environment.bae_url;


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private http: HttpClient ) { }
  
  registrarProducto( formProducto ) {
    let formData = new FormData();
    const { imagenes, imagenPrincipal, ...jsonProducto } = formProducto;

    formData.append('imagenPrincipal', imagenPrincipal);
    imagenes.forEach( img => {
      formData.append('imagenes', img);
    });    
    formData.append('productoInfo', JSON.stringify(jsonProducto));
    console.log(formData);
    
    this.http.post(`${base_url}/comercios/productos/registrar`, formData, { headers: {
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmM5YjZkZTI1MDM1OTJhNDRlZTlkM2IiLCJpYXQiOjE2MDcxNDU0NDIsImV4cCI6MTYwNzMxODI0Mn0.Y6ehXUUNcuGrwQlNb7ttNI1bFzypP0lrfSBPB0Z5G3c'
    }}).subscribe( resp => {
      console.log(resp);
    });
  }
}
