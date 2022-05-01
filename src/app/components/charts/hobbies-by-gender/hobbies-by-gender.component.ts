import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-hobbies-by-gender',
  templateUrl: './hobbies-by-gender.component.html',
  styleUrls: ['./hobbies-by-gender.component.css']
})
export class HobbiesByGenderComponent implements OnInit {

  public radarChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() radarChartLabels: Label[] = [];
  @Input() radarChartData: ChartDataSets[] = [];
  
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
