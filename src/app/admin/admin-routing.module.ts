import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './pages/dashboard/dashboard.component';
import { ComerciosComponent } from './pages/comercios/comercios.component';
import { ConsumidoresComponent } from './pages/consumidores/consumidores.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'comercios', component: ComerciosComponent },
            { path: 'consumidores', component: ConsumidoresComponent },
            { path: 'solicitudes', component: SolicitudesComponent }
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

