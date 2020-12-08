import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDropzoneModule } from 'ngx-dropzone';

import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { UsuarioComponent } from './usuario.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        NgxDropzoneModule,
        PagesModule
    ],
    declarations: [
        UsuarioComponent,
    ],
    exports: [
        
    ]
})
export class UsuarioModule {}