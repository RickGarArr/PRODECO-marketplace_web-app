import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        PedidosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    exports: [
        PedidosComponent
    ],
})
export class PedidosModule {}