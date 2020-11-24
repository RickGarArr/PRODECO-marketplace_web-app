import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

import { DireccionesPageRoutingModule } from './direcciones-routing.module';

import { DireccionesPage } from './direcciones.page';
import { CuentaComponentesModule } from '../componentes/cuenta-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DireccionesPageRoutingModule,
    CuentaComponentesModule,
    ComponentesModule
  ],
  declarations: [
    DireccionesPage
  ]
})
export class DireccionesPageModule {}
