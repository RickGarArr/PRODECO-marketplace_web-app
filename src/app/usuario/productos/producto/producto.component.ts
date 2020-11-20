import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Categoria } from 'src/app/interfaces/interfaces';
import { FileItem } from 'src/app/models/file-item';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  sobreDrop = false;
  categorias: Categoria[];
  formProducto: FormGroup;
  archivos: FileItem[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.dataService.getCategorias().subscribe( data => {
      this.categorias = data;
    });
  }

  crearFormulario(): void {
    this.formProducto = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
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

  resetFormulario(): void {
    this.formProducto.reset({
      titulo: '',
      descripcion: '',
      cantidadStock: '',
      precio: '',
      categoria: '',
      imagenes: '',
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
  public get imagenes(): FormArray {
    return this.formProducto.get('imagenes') as FormArray;
  }

  public get principales(): FormArray {
    return this.formProducto.get('principales') as FormArray;
  }

  public get secundarias(): FormArray {
    return this.formProducto.get('secundarias') as FormArray;
  }

  guardar(): void {
    console.log(this.formProducto.value);
  }

  //#endregion

  agregarImagenes(): void {

  }

  agregarCaracteristica(tipo: string): void {

    const caracteristica = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required])
    });

    if (tipo === 'principal'){
      this.principales.push(caracteristica);
    } else {
      this.secundarias.push(caracteristica);
    }
  }


  eliminarCaracteristica(controlName: number, tipo: string): void {
    if (tipo === 'principal') {
      this.principales.removeAt(controlName);
    } else if (tipo === 'secundaria'){
      this.secundarias.removeAt(controlName);
    } else {
      this.archivos.splice(controlName, 1);
      this.imagenes.removeAt(controlName);
    }
  }

  prueba(event): void {
    console.log(event);
  }

}
