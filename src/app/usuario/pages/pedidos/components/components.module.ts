import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpBarComponent } from './up-bar/up-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    UpBarComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    UpBarComponent,
    PedidoComponent
  ]
})
export class ComponentsModule { }
