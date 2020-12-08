import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-up-bar',
  templateUrl: './up-bar.component.html',
  styleUrls: ['./up-bar.component.css']
})
export class UpBarComponent implements OnInit {

  public filtro = new FormControl('tiempo');

  constructor() { }

  ngOnInit(): void {
  }

}
