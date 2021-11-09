import { Component, OnInit } from '@angular/core';

import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public lineChartData: ChartDataSets[]|any = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any })|any = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public pieChartType: ChartType = "pie";
  public lineChartType:any  = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}