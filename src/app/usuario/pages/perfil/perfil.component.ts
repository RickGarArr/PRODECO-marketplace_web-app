import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  form: FormGroup;
  disabled = true;
  datosEmpresa: Empresa;

  constructor(
    private data: DataService,
    private formBuilder: FormBuilder) {
      this.crearFormulario();
    }

  ngOnInit(): void {
    this.data.getEmpresa().subscribe( datos => {
      this.datosEmpresa = datos;
      this.cargarFormulario();
    });
  }

  public get texto(): string {
    return this.disabled ? 'Editar' : 'Cancelar';
  }

  crearFormulario(): void {
    this.form = this.formBuilder.group({
      nombreEmpresa: new FormControl({value: '', disabled: true}, [Validators.required]),
      rfc: new FormControl({value: '', disabled: true}, [Validators.required]),
      correo: new FormControl({value: '', disabled: true}, [Validators.required]),
      telefono: new FormControl({value: '', disabled: true}, [Validators.required]),
      domicilio: new FormGroup({
        calle: new FormControl({value: '', disabled: true}, [Validators.required]),
        numero: new FormControl({value: '', disabled: true}, [Validators.required]),
        cp: new FormControl({value: '', disabled: true}, [Validators.required]),
        colonia: new FormControl({value: '', disabled: true}, [Validators.required]),
        ciudad: new FormControl({value: '', disabled: true}, [Validators.required])
      })
    });
  }

  cargarFormulario(): void {
    const {
      nombreEmpresa,
      rfc,
      correoPrincipal,
      telefono,
      domicilio
    } = this.datosEmpresa;

    this.form.reset({
      nombreEmpresa: (nombreEmpresa),
      rfc: (rfc),
      correo: (correoPrincipal),
      telefono: (telefono),
      domicilio: ({
        calle: (domicilio.calle),
        numero: (domicilio.numero),
        cp: (domicilio.cp),
        colonia: (domicilio.colonia),
        ciudad: (domicilio.ciudad)
      }),
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  activarEditar(): void {
    Object.values(this.form.controls).forEach(control => {
      if (control instanceof FormGroup) {
        Object.values( control.controls ).forEach( ctrl => {
          this.disabled ? ctrl.enable() : ctrl.disable();
        });
      } else {
        this.disabled ? control.enable() : control.disable(), this.cargarFormulario();
      }
    });
    this.disabled = !this.disabled;
  }

}
