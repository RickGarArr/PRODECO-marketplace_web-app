import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public fecha = moment().locale('es').format('h:mm:ss a, MMMM D YYYY');
  public img;
  public formPerfil: FormGroup;
  
  constructor( private formBuilder: FormBuilder ) {
    this.formPerfil = this.formBuilder.group({
      nombre: new FormControl('Prodeco S.A. de C.V.', [Validators.required]),
      telefono: new FormControl('677-106-6402', [Validators.required]),
      rfc: new FormControl('GAAR9702071532', [Validators.required]),
      email: new FormControl('prodeco@prodeco.com', [Validators.required, Validators.email]),
      calle: new FormControl('Pereyra', [Validators.required]),
      numeroInt: new FormControl('317', [Validators.required]),
      numeroExt: new FormControl('S/N', [Validators.required]),
      cp: new FormControl('34000', [Validators.required]),
      colonia: new FormControl('Zona Centro', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.formPerfil.disable();
  }

  guardar() {
    console.log(this.formPerfil.value);
    this.formPerfil.disable();
  }

  editar() {
    if (this.formPerfil.enabled) {
      this.formPerfil.disable();
    } else {
      this.formPerfil.enable();
      this.formPerfil.controls['nombre'].disable();
      this.formPerfil.controls['rfc'].disable();
    }
  }

  cambioImagen(event) {
    this.img = event.addedFiles[0];
  }

  eliminarImg() {
    this.img = undefined;
  }
}
