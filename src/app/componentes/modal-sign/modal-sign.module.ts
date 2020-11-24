import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalLoginComponent } from './modal-login/modal-login.component';
import { ModalRegistroComponent } from './modal-registro/modal-registro.component';
import { VerificarCorreoComponent } from './modal-registro/verificar-correo/verificar-correo.component';
import { ModalSignComponent } from './modal-sign.component';

@NgModule({
    declarations: [
        ModalSignComponent,
        ModalLoginComponent,
        ModalRegistroComponent,
        VerificarCorreoComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ModalSignComponent,
        ModalLoginComponent,
        ModalRegistroComponent,
        VerificarCorreoComponent
    ]
})
export class ModalSignModule {}