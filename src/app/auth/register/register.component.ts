import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  solicitud: FormGroup;
  
  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.solicitud.invalid) {
      return;
    }

    const formData = new FormData();

    formData.append('nombre', this.solicitud.get('nombre').value);
    formData.append('telefono', this.solicitud.get('telefono').value);
    formData.append('correo', this.solicitud.get('correo').value);
    formData.append('ine', this.solicitud.get('ine').value);
    formData.append('rfc', this.solicitud.get('rfc').value);
    formData.append('domicilio', this.solicitud.get('domicilio').value);

    this.http.post('http://localhost:3003/solicitud/crear', formData).subscribe( (resp) => {
      console.log(resp);
      
      swal.fire({
        icon: 'success',
        title: 'Ok',
        text: 'Gracias por registrarte',
      }).then( resp => {
        if ( resp.isConfirmed ) {
          swal.fire({
            title: 'Trabajamos en tu solicitud',
            text: 'mantengase al pendiente de una respuesta en el correo electronico proporcionado',
            
          }).then( () => this.router.navigateByUrl('/login'));
        }
      });

    }, err => {
      console.log( err );
    })
  }

  crearFormulario() {
    this.solicitud =  this.formBuilder.group({
      nombre: new FormControl(''),
      telefono: new FormControl(),
      correo: new FormControl(),
      ine: new FormControl(),
      rfc: new FormControl(),
      domicilio: new FormControl(),
    });
  }
}

export interface Solicitud {
  nombre: string,
  telefono: string,
  correo: string,
  ine: File,
  rfc: File,
  domicilio: File;
}