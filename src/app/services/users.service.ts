import { Injectable } from '@angular/core';
import { HobbiesByGenderViewModel } from '../model/hobbies-by-gender-view-model';
import { NumOfSeatsByCityAndMotorTypeViewModel } from '../model/num-of-seats-by-city-and-motor-type-view-model';
import { SummaryTableItem } from '../model/summary-table-item';
import { User } from '../model/user';
import { VisitorsByCountryViewModel } from '../model/visitors-by-country-view-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  hobbiesList: string[] = ['Read', 'Play', 'Ride', 'Run', 'Walk', 'Sing'];

  addUser(user: User) {
    const storage = localStorage.getItem('users');
    const users = (storage === null) ? { usersList: [] } : JSON.parse(storage);
    users.usersList.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getHobbiesByGender(): HobbiesByGenderViewModel {
    const users = localStorage.getItem('users');
    if (users) {
      const usersList: User[] = JSON.parse(users).usersList;
      const hobbiesByGenderData = {
        labels: this.hobbiesList,
        data: [{
          data: this.getHobbiesCount(usersList, 1),
          label: 'Male'
        },
        {
          data: this.getHobbiesCount(usersList, 2),
          label: 'Female'
        }]
      }
      return hobbiesByGenderData;
    }
    return {
      labels: this.hobbiesList,
      data: [{ data: [], label: 'Male' }, { data: [], label: 'Female' }]
    }
  }

  getVisitorsByCountry(): VisitorsByCountryViewModel {
    const users = localStorage.getItem('users');
    if (users) {
      const usersList: User[] = JSON.parse(users).usersList;
      const countriesList = this.getCountriesList(usersList);
      const visitorsByCountryData = {
        labels: countriesList,
        data: this.getCountriesCount(usersList, countriesList)
      }
      return visitorsByCountryData;
    }
    return {
      labels: [],
      data: []
    }
  }

  getNumOfSeatsByCityAndMotorType(): NumOfSeatsByCityAndMotorTypeViewModel {
    const users = localStorage.getItem('users');
    if (users) {
      const usersList: User[] = JSON.parse(users).usersList;
      const citiesList = this.getCitiesList(usersList);
      const numOfSeatsByCityAndMotorType = {
        labels: citiesList,
        data: [{
          data: this.getNumOfSeats(usersList, citiesList, 1),
          label: 'Electric'
        },
        {
          data: this.getNumOfSeats(usersList, citiesList, 2),
          label: 'Fuel'
        }]
      }
      return numOfSeatsByCityAndMotorType;
    }
    return {
      labels: this.hobbiesList,
      data: [{ data: [], label: 'Electric' }, { data: [], label: 'Fuel' }]
    }
  }

  getTableData(): SummaryTableItem[] {
    const users = localStorage.getItem('users');
    if (users) {
      const usersList: User[] = JSON.parse(users).usersList;
      return [
        { header: 'Average Num Of Seats', male: this.getAvgNumOfSeats(usersList, 1) + '', female: this.getAvgNumOfSeats(usersList, 2) + '' },
        { header: 'Most Popular Country', male: this.getMostPopularCountry(usersList, 1), female: this.getMostPopularCountry(usersList, 2) },
        { header: 'Most Popular City', male: this.getMostPopularCity(usersList, 1), female: this.getMostPopularCity(usersList, 2) },
        { header: 'Popular Motor Type', male: this.getPopularMotorType(usersList, 1), female: this.getPopularMotorType(usersList, 2) },
      ]
    }
    return [];
  }

  private getHobbiesCount(usersList: User[], gender: number): number[] {
    const usersByGender = usersList.filter(user => user.gender == gender);
    return this.hobbiesList.map(hobby =>
      usersByGender.filter(user => user.listOfHobbies.includes(hobby)).length
    );
  }

  private getCountriesList(usersList: User[]): string[] {
    return [... new Set(usersList.map(user => user.country))];
  }

  private getCountriesCount(usersList: User[], countriesList: string[]): number[] {
    return countriesList.map(country =>
      usersList.filter(user => user.country === country).length);
  }

  private getCitiesList(usersList: User[]): string[] {
    return [... new Set(usersList.map(user => user.city))];
  }

  private getCitiesCount(usersList: User[], citiesList: string[]): number[] {
    return citiesList.map(city =>
      usersList.filter(user => user.city === city).length);
  }

  private getNumOfSeats(usersList: User[], citiesList: string[], motorType: number): number[] {
    const usersByMotorType = usersList.filter(user => user.motorType == motorType);
    return citiesList.map(city => {
      const users = usersByMotorType.filter(user => user.city === city);
      const sum = users.reduce((acc, user) => acc + user.numOfSeats, 0);
      return sum / users.length;
    });
  }

  private getAvgNumOfSeats(usersList: User[], gender: number): number {
    const usersByGender = usersList.filter(user => user.gender == gender);
    const sum = usersByGender.reduce((acc, user) => acc + user.numOfSeats, 0);
    return sum / usersByGender.length;
  }

  private getMostPopularCountry(usersList: User[], gender: number) {
    const usersByGender = usersList.filter(user => user.gender == gender);
    const countriesList = this.getCountriesList(usersByGender);
    const countriesCount = this.getCountriesCount(usersByGender, countriesList);
    const max = Math.max(...countriesCount);
    const index = countriesCount.indexOf(max);
    return countriesList[index];
  }

  private getMostPopularCity(usersList: User[], gender: number) {
    const usersByGender = usersList.filter(user => user.gender == gender);
    const citiesList = this.getCitiesList(usersByGender);
    const citiesCount = this.getCitiesCount(usersByGender, citiesList);
    const max = Math.max(...citiesCount);
    const index = citiesCount.indexOf(max);
    return citiesList[index];
  }

  private getPopularMotorType(usersList: User[], gender: number): string {
    const usersByGender = usersList.filter(user => user.gender == gender);
    const motorTypeCount = [0, 0];
    usersByGender.forEach(user => motorTypeCount[user.motorType]++);
    return motorTypeCount[0] > motorTypeCount[1] ? 'Electric' : 'Fuel';
  }
  
  constructor() { }
}
