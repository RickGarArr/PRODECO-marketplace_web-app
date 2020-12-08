import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaComponent } from './grafica/grafica.component';



@NgModule({
  declarations: [
    GraficaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GraficaComponent
  ]
})
export class ComponentsModule { }
