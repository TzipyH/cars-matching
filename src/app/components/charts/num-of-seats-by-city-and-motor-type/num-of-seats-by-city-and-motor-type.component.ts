import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-num-of-seats-by-city-and-motor-type',
  templateUrl: './num-of-seats-by-city-and-motor-type.component.html',
  styleUrls: ['./num-of-seats-by-city-and-motor-type.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumOfSeatsByCityAndMotorTypeComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
