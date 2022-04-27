import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export default class UserProfileComponent implements OnInit {

  userProfileForm = new FormGroup({
  fullNameFormControl: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
  genderFormControl: new FormControl(1, [Validators.required]),
  emailFormControl: new FormControl('', [Validators.required, Validators.email]),
  birthDateFormControl: new FormControl('', [Validators.required]),
  addressFormControl: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z1-9 ]+$')]),
  cityFormControl: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
  countryFormControl: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
  listOfHobbiesFormControl: new FormControl('', [Validators.required]),
  favoriteColorFormControl: new FormControl('', [Validators.required]),
  amountOfSeatsFormControl: new FormControl('', [Validators.required, Validators.min(2), Validators.max(7)]),
  motorTypeFormControl: new FormControl(1, [Validators.required]),
});
  
  hobbiesList: string[] = ['Read', 'Play', 'Ride', 'Run', 'Walk', 'Sing'];
  matcher = new ErrorStateMatcher();

  sendForm(){
    const form = this.userProfileForm.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
