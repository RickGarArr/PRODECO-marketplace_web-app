import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Direccion } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.scss'],
})
export class ResumenComponent implements OnInit {

  @Input() direccion: Direccion = null;
  public contacto;
  public domicilio;

  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    const { nombre, apellido, email } = this.authService.registrado;
    if (this.direccion){
      this.contacto = this.direccion.contacto;
    } else {
      this.contacto = {
        nombre,
        apellido,
        telefono: email
      }
    }
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  
}
