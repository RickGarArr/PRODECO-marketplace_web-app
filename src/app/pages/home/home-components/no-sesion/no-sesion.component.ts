import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSignComponent } from 'src/app/componentes/modal-sign/modal-sign.component';

@Component({
    selector: 'app-no-sesion',
    templateUrl: './no-sesion.component.html',
    styleUrls: ['./no-sesion.component.css']
})
export class NoSesionComponent {

    constructor( private modalCtrl: ModalController) { }

    async sign() {
    const modal = await this.modalCtrl.create({
      component: ModalSignComponent,
      id: 'sign',
      componentProps: {inicio: false}
    });

    modal.present();
    }
}
