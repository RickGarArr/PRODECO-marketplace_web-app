import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductosComponentsModule } from './components/productos-components.module';

@NgModule({
    declarations: [
        ProductosComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,

        ProductosComponentsModule
    ],
    exports: [
        ProductosComponent
    ],
})
export class ProductosModule {}