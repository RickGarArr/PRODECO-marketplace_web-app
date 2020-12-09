import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComerciosComponent } from './comercios/comercios.component';
import { ConsumidoresComponent } from './consumidores/consumidores.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { SolicitudComponent } from './solicitud/solicitud.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ComerciosComponent,
    ConsumidoresComponent,
    SolicitudesComponent,
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    AdminDashboardComponent,
    ComerciosComponent,
    ConsumidoresComponent,
    SolicitudesComponent,
    SolicitudComponent
  ]
})
export class PagesModule { }
