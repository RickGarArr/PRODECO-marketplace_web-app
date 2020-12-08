import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto/producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpBarComponent } from './up-bar/up-bar.component';

@NgModule({
    declarations: [
        ProductoComponent,
        UpBarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ProductoComponent,
        UpBarComponent
    ],
    providers: [],
})
export class ProductosComponentsModule {}