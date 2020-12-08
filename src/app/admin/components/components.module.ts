import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComercioComponent } from './comercio/comercio.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    ComercioComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ComercioComponent,
    SearchbarComponent
  ]
})
export class ComponentsModule { }
