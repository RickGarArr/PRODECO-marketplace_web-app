import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { VentaComponent } from './pages/venta/venta.component';
import { PedidoComponent } from './pages/pedido/pedido.component';

const routes: Routes = [
    {
        path: 'usuario',
        component: UsuarioComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'perfil', component: PerfilComponent },
            { path: 'ventas', component: VentasComponent },
            { path: 'ventas/venta', component: VentaComponent },
            { path: 'pedidos', component: PedidosComponent },
            { path: 'pedidos/pedido', component: PedidoComponent },
            { path: 'productos', component: ProductosComponent},
            { path: 'productos/producto', component: ProductoComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }

