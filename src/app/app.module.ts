import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { CardComponent } from './components/card/card.component';
import { HobbiesByGenderComponent } from './components/charts/hobbies-by-gender/hobbies-by-gender.component';
import { VisitorsByCountryComponent } from './components/charts/visitors-by-country/visitors-by-country.component';
import { NumOfSeatsByCityAndMotorTypeComponent } from './components/charts/num-of-seats-by-city-and-motor-type/num-of-seats-by-city-and-motor-type.component';
import { SummaryTableComponent } from './components/summary-table/summary-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserProfileComponent,
    SuccessDialogComponent,
    DashboardComponent,
    CardComponent,
    HobbiesByGenderComponent,
    VisitorsByCountryComponent,
    NumOfSeatsByCityAndMotorTypeComponent,
    SummaryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    ChartsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' }, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
