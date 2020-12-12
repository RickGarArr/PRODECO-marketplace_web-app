import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './pages/dashboard/dashboard.component';
import { ComerciosComponent } from './pages/comercios/comercios.component';
import { ConsumidoresComponent } from './pages/consumidores/consumidores.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';


import { ProductosComponent } from '../usuario/pages/productos/productos.component';
import { VentasComponent } from '../usuario/pages/ventas/ventas.component';
import { VentaComponent } from '../usuario/pages/venta/venta.component';
import { ProductoComponent } from '../usuario/pages/producto/producto.component';
import { PedidosComponent } from '../usuario/pages/pedidos/pedidos.component';
import { PedidoComponent } from '../usuario/pages/pedido/pedido.component';
import { PerfilComponent } from '../usuario/pages/perfil/perfil.component';
import { MensajesComponent } from '../components/mensajes/mensajes.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'comercios', component: ComerciosComponent },
            { path: 'consumidores', component: ConsumidoresComponent },
            { path: 'solicitudes', component: SolicitudesComponent },
            { path: 'solicitudes/solicitud', component: SolicitudComponent },
            { path: 'comercios/comercio/productos', component: ProductosComponent },
            { path: 'comercios/comercio/productos/producto', component: ProductoComponent },
            { path: 'comercios/comercio/ventas', component: VentasComponent },
            { path: 'comercios/comercio/ventas/venta', component: VentaComponent },
            { path: 'comercios/comercio/pedidos', component: PedidosComponent },
            { path: 'comercios/comercio/pedidos/pedido', component: PedidoComponent },
            { path: 'comercios/comercio/perfil', component: PerfilComponent },
            { path: 'mensajes', component: MensajesComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule { }

