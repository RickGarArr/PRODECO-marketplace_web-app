import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { ComercioComponent } from './comercio/comercio.component';
import { ConsumidorComponent } from './consumidor/consumidor.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { UpBarComponent } from './upbar/upbar.component';
import { VentaComponent } from './venta/venta.component';
import { GraficaComponent } from './grafica/grafica.component';
import { MensajesComponent } from './mensajes/mensajes.component';

@NgModule({
  declarations: [
    ComercioComponent,
    ConsumidorComponent,
    PedidoComponent,
    ProductoComponent,
    SearchbarComponent,
    SolicitudComponent,
    UpBarComponent,
    VentaComponent,
    GraficaComponent,
    MensajesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [
    ComercioComponent,
    ConsumidorComponent,
    PedidoComponent,
    ProductoComponent,
    SearchbarComponent,
    SolicitudComponent,
    UpBarComponent,
    VentaComponent,
    GraficaComponent,
    MensajesComponent
  ]
})
export class ComponentsModule { }
