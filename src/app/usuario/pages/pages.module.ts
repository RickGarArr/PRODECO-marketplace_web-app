import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ProductosModule } from './productos/productos.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';
import { VentasModule } from './ventas/ventas.module';
import { PedidosModule } from './pedidos/pedidos.module';

@NgModule({
    declarations: [
        DashboardComponent,
        PedidoComponent,
        PerfilComponent,
        ProductoComponent,
        VentaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxDropzoneModule,
        RouterModule,
        PedidosModule,
        ProductosModule,
        VentasModule
    ],
    exports: [
        DashboardComponent,
        PedidoComponent,
        PerfilComponent,
        ProductoComponent,
        VentaComponent
    ]
})
export class PagesModule {}