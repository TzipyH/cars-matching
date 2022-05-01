import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UsersService } from 'src/app/services/users.service';
import { HobbiesByGenderViewModel } from 'src/app/model/hobbies-by-gender-view-model';
import { VisitorsByCountryViewModel } from 'src/app/model/visitors-by-country-view-model';
import { NumOfSeatsByCityAndMotorTypeViewModel } from 'src/app/model/num-of-seats-by-city-and-motor-type-view-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          chart: { cols: 1, rows: 2 },
          longChart: {cols: 1, rows: 2},
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 4,
        chart: { cols: 2, rows: 2 },
        longChart: {cols: 4, rows: 2},
        table: { cols: 4, rows: 4 },
      };
    })
  );

  hobbiesByGenderChartData : HobbiesByGenderViewModel;
  visitorsByCountryChartData : VisitorsByCountryViewModel;
  numOfSeatsByCityAndMotorTypeChartData : NumOfSeatsByCityAndMotorTypeViewModel;

  constructor(private breakpointObserver: BreakpointObserver,
    private usersService: UsersService) {
    this.hobbiesByGenderChartData = usersService.getHobbiesByGender();
    this.visitorsByCountryChartData = usersService.getVisitorsByCountry();
    this.numOfSeatsByCityAndMotorTypeChartData = usersService.getNunOfSeatsByCityAndMotorType();
  }
}
