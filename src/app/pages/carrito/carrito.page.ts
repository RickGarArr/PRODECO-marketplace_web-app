import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/componentes/pop-over/pop-over.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  productos: boolean;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController) {
      this.productos = false;
    }

  ngOnInit() {
  }

  async popOpciones(event) {
    const pop = await this.popoverCtrl.create({
      component: PopOverComponent,
      componentProps: {
        type: 'opciones-producto'
      },
      id: 'popover',
      event,
    });

    pop.present();
  }

  navegar(ruta: string) {
    this.router.navigateByUrl('comprar');
  }
}
