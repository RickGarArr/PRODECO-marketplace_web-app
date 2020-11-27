import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DireccionComponent } from 'src/app/componentes/direccion/direccion.component';
import { Direccion } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { ResumenComponent } from './resumen/resumen.component';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {

  public direccionSelected: Direccion;
  public showComponent = false;

  constructor(
    private direccionesService: DireccionesService,
    private modalCtrl: ModalController) {
    }

  ngOnInit() {
  }

  async registrarDireccion(id: string) {
    const agregar = await this.modalCtrl.create({
      component: DireccionComponent,
      id
    });
    await agregar.present();
  }

  async modalResumen( opcionEntrega: string, direccion?: Direccion) {
    const resumen = await this.modalCtrl.create({
      component: ResumenComponent,
      componentProps: {
        direccion,
        opcionEntrega
      }
    });
  resumen.present();
  }
}
