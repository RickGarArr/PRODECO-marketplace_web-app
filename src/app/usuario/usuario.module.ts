import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { UsuarioComponent } from './usuario.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        PagesModule
    ],
    declarations: [
        UsuarioComponent,
    ]
})
export class UsuarioModule {}