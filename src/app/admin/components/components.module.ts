import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ComercioComponent } from './comercio/comercio.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

@NgModule({
  declarations: [
    ComercioComponent,
    SearchbarComponent,
    ConsumidorComponent,
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ComercioComponent,
    SearchbarComponent,
    ConsumidorComponent,
    SolicitudComponent
  ]
})
export class ComponentsModule { }
