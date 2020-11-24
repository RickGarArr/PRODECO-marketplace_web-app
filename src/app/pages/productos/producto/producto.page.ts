import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  icono: boolean;
  icon: string;
  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private navCtrl: NavController) {
    this.icono = false;
    this.icon = 'heart';
  }

  ngOnInit() {
  } 

  navegar(page: string) {
    this.navCtrl.navigateForward(page);
  }

  async agregarAlCarrito() {
    
    const alert = await this.alertCtrl.create({
      id: 'alertAgregarAlCarrito',
      header: 'Agregaste a tu Carrito',
      message: 'Realme 8 Pro Dual SIM, 128 GB, 8GB RAM, Azul Rayo',
      buttons: [
        {
          text: 'Ver Carrito',
          handler: () => {
            console.log('ver carrito');
            this.navegar('carrito');
          }
        },
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('OK');
          }
        }
      ]
    });

    const loading = await this.loadingCtrl.create({
      id: 'AlertCargando',
      message: 'Espere'
    });

    loading.present().then(() => {
      setTimeout(() => {
        loading.dismiss();
        alert.present();
      }, 750);
    }).catch( e => console.log(e));



  }

}
