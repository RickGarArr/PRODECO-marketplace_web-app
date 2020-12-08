import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFound } from './shared/no-page-found/no-page-found';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { UsuarioRoutingModule } from './usuario/usuario-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuario',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NoPageFound
  }
  // AuthRoutingModule
  // 'login' 'register'

  // UsuarioRoutingModule
  // 'ventas' 'pedidos' 'productos' 'perfil'
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    UsuarioRoutingModule,
    AdminRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
