import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UsuarioComponent,
        HomeComponent,
        PerfilComponent,
        ProductosComponent,
        VentasComponent,
        PedidosComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    exports: [
        UsuarioComponent,
        HomeComponent,
        PerfilComponent,
        ProductosComponent,
        VentasComponent,
        PedidosComponent
    ]
})
export class UsuarioModule {}