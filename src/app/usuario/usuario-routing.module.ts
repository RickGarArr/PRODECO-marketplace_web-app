import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';

import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [{
    path: 'usuario',
    component: UsuarioComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'perfil', component: PerfilComponent },
        { path: 'productos', component: ProductosComponent },
        { path: 'ventas', component: VentasComponent },
        { path: 'pedidos', component: PedidosComponent }
    ]
}
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class UsuarioRoutingModule { }

