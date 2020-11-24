import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
})
export class PopOverComponent implements OnInit {

  @Input() type: string;

  constructor( private popoverCtrl: PopoverController ) {
  }
  
  ngOnInit() {
    
  }

  opcion( opcion: string ){
    this.popoverCtrl.dismiss(null, opcion, 'popover');
  } 
}
