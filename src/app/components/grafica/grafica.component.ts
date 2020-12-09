import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import * as moment from 'moment'; 

@Component({
  selector: 'component-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ventas en el ultimo Mes' },
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];
  public lineChartOptions: (ChartOptions) = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#2f2f2f',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: { text: 'Categorias mas vendidas', display: true}
  };
  public pieChartLabels: Label[] = ['Electronica', 'Celulares', 'Cerveza'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() {
    
  }

  ngOnInit(): void {    
  }

}
