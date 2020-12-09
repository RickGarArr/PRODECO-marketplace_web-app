import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComerciosComponent } from './comercios/comercios.component';
import { ConsumidoresComponent } from './consumidores/consumidores.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ComponentsModule } from 'src/app/admin/components/components.module';
import { EmpresaComponent } from './empresa/empresa.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ComerciosComponent,
    ConsumidoresComponent,
    SolicitudesComponent,
    EmpresaComponent
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
    EmpresaComponent
  ]
})
export class PagesModule { }
