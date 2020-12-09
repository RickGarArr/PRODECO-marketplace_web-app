import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [
        PerfilComponent,
        DashboardComponent,
        PedidoComponent,
        PedidosComponent,
        ProductoComponent,
        ProductosComponent,
        VentaComponent,
        VentasComponent
    ],
    imports: [
        CommonModule,
        NgxDropzoneModule,
        ReactiveFormsModule,
        NgxDropzoneModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        PerfilComponent,
        DashboardComponent,
        PedidoComponent,
        PedidosComponent,
        ProductoComponent,
        ProductosComponent,
        VentaComponent,
        VentasComponent
    ]
})
export class PagesModule {}