import { Injectable } from '@angular/core';
import { HobbiesByGenderViewModel } from '../model/hobbies-by-gender-view-model';
import { NumOfSeatsByCityAndMotorTypeViewModel } from '../model/num-of-seats-by-city-and-motor-type-view-model';
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

  getNunOfSeatsByCityAndMotorType(): NumOfSeatsByCityAndMotorTypeViewModel {
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

  private getHobbiesCount(usersList: User[], gender: number): number[] {
    const usersByGender = usersList.filter(user => user.gender == gender);
     return this.hobbiesList.map(hobby => 
      usersByGender.filter(user => user.listOfHobbies.includes(hobby)).length
    );
  }

  private getCountriesList(usersList: User[]): string[]{
    return [... new Set(usersList.map(user => user.country))];
  }

  private getCountriesCount(usersList: User[], countriesList: string[]): number[] {
     return countriesList.map(country => 
      usersList.filter(user => user.country === country).length);
  }

  private getCitiesList(usersList: User[]): string[]{
    return [... new Set(usersList.map(user => user.city))];
  }

  private getNumOfSeats(usersList: User[], citiesList: string[], motorType: number): number[] {
    const usersByMotorType = usersList.filter(user => user.motorType == motorType);
     return citiesList.map(city => {
      const users = usersByMotorType.filter(user => user.city === city);
      const sum = users.reduce((acc, user) =>  acc + user.numOfSeats, 0);
      return sum / users.length;
     });
  }

  constructor() { }
}
