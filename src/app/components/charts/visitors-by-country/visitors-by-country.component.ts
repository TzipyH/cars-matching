import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-visitors-by-country',
  templateUrl: './visitors-by-country.component.html',
  styleUrls: ['./visitors-by-country.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorsByCountryComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  
  @Input() pieChartLabels: Label[] = [];
  @Input() pieChartData: SingleDataSet = [];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
