import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpBarComponent } from './up-bar/up-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VentaComponent } from './venta/venta.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UpBarComponent,
    VentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    UpBarComponent,
    VentaComponent
  ]
})
export class ComponentsModule { }
