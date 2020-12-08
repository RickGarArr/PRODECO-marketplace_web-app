import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  filtrosForm: FormGroup;
  

  constructor( private formBuilder: FormBuilder ) {
    this.filtrosForm = this.formBuilder.group({
      filtro: new FormControl('todos', [Validators.required])
    });
  }

  ejempo(event: any): void {
    console.log(event);
  }

  
}
