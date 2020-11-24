import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalBuscarComponent } from '../componentes/modal-buscar/modal-buscar.component';
import { HeaderComponent } from './header/header.component';

import { ModalSignModule } from './modal-sign/modal-sign.module';
import { PopOverComponent } from './pop-over/pop-over.component';
import { DireccionComponent } from './direccion/direccion.component';

@NgModule({
  declarations: [
    MenuComponent,
    ModalBuscarComponent,
    HeaderComponent,
    PopOverComponent,
    DireccionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ModalSignModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
  ]
})
export class ComponentesModule { }
