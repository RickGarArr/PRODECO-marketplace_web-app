import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercioComponent } from './comercio/comercio.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';

@NgModule({
  declarations: [
    ComercioComponent,
    SearchbarComponent,
    ConsumidorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ComercioComponent,
    SearchbarComponent,
    ConsumidorComponent
  ]
})
export class ComponentsModule { }
