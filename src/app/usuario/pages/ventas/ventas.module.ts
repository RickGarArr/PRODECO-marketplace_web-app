import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
    declarations: [
        VentasComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    exports: [
        VentasComponent
    ],
    providers: [],
})
export class VentasModule {}