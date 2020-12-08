import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  public columnDropzone = '1 / 6';
  public formProducto: FormGroup;
  public imgPrincipal: File;
  public imgFiles = [];

  constructor(
    private formBuilder: FormBuilder,
    private productosService: ProductosService) {
      this.formProducto = this.formBuilder.group({
        titulo: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        imagenPrincipal: new FormControl(undefined, Validators.required),
        cantidadStock: new FormControl('', [Validators.required, Validators.min(0)]),
        precio: new FormControl('', [Validators.required, Validators.min(0)]),
        categoria: new FormControl('', [Validators.required]),
        imagenes: new FormArray([]),
        principales: new FormArray([
          new FormGroup({
            titulo: new FormControl('', [Validators.required]),
            desc: new FormControl('', [Validators.required])
          })
        ]),
        secundarias: new FormArray([
          new FormGroup({
            titulo: new FormControl('', [Validators.required]),
            desc: new FormControl('', [Validators.required])
          })
        ])
      });
  }

  guardar(): void {
    // this.productosService.registrarProducto(this.formProducto.value);
  }

  resetFormulario(): void {
    this.formProducto.reset({
      titulo: '',
      descripcion: '',
      imagenPrincipal: [],
      cantidadStock: '',
      precio: '',
      categoria: '',
      imagenes: [],
      principales: [
        {
          titulo: '',
          desc: ''
        }
      ],
      secundarias: [
        {
          titulo: '',
          desc: ''
        }
      ]
    });
  }

  //#region Getters
  public get principales(): FormArray {
    return this.formProducto.get('principales') as FormArray;
  }
  public get secundarias(): FormArray {
    return this.formProducto.get('secundarias') as FormArray;
  }
  public get imagenes(): FormArray {
    return this.formProducto.get('imagenes') as FormArray;
  }


  //#endregion

  //#region Catacteristicas
  agregarCaracteristica(tipo: string): void {

    const caracteristica = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required])
    });

    if (tipo === 'principal'){
      if (this.principales.length >= 5) {
        return;
      }
      this.principales.push(caracteristica);
    } else {
      if (this.secundarias.length >= 5) {
        return;
      }
      this.secundarias.push(caracteristica);
    }
  }

  eliminarCaracteristica(controlName: number, tipo: string): void {
    if (tipo === 'principal') {
      this.principales.removeAt(controlName);
    } else if (tipo === 'secundaria'){
      this.secundarias.removeAt(controlName);
    }
  }

  //#endregion
   
onSelectPrincipal(files) {
  this.imgPrincipal = files[0];
  this.formProducto.get('imagenPrincipal').setValue(this.imgPrincipal);
}
 
onRemovePrincipal() {
  this.imgPrincipal = null;
  this.formProducto.get('imagenPrincipal').setValue(null);  
}

onSelect(event) {
  const imagenes = event.addedFiles as File[];
  imagenes.forEach((img) => {
    if (this.imgFiles.length < 5) {
      this.imgFiles.push(img);
      this.imagenes.push(this.formBuilder.control(img));
    }
  });
  this.columnDropzone = `${this.imgFiles.length +1 } / 6`;
}

onRemove(img) {
  this.imgFiles.splice(this.imgFiles.indexOf(img), 1);
  this.imagenes.removeAt(this.imgFiles.indexOf(img));
  this.columnDropzone = `${this.imgFiles.length + 1 } / 6`;
}

}
