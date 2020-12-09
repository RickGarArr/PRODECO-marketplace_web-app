import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'component-comercio',
  templateUrl: './comercio.component.html',
  styleUrls: ['./comercio.component.css']
})
export class ComercioComponent implements OnInit {

  public estado = new FormControl(true);

  constructor() { }

  ngOnInit(): void {
  }

  cambio() {
    console.log(this.estado.value);
  }

}
