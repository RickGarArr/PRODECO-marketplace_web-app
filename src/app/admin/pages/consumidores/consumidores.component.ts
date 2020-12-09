import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumidores',
  templateUrl: './consumidores.component.html',
  styleUrls: ['./consumidores.component.css']
})
export class ConsumidoresComponent implements OnInit {

  public origen: string = 'consumidores';

  constructor() { }

  ngOnInit(): void {
  }

}
