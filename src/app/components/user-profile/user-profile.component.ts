import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

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

  sendForm() {
    const form = this.userProfileForm.value;
    const storage = localStorage.getItem('users');
    const users = (storage === null) ? { usersList: [] } : JSON.parse(storage);
    // is_user = users.users_list.findIndex(customer => customer.email === new_user.email);
    // // במקרה שהמשתמש כבר קיים במאגר הוא יימחק וייכנס מחדש עם הפרטים המעודכנים
    // if ((sessionStorage.current_user) || (is_user)) {
    //   users.users_list.splice(is_user, 1);
    // }
    users.usersList.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    this.dialog.open(SuccessDialogComponent, {
      width: '250px',
    });
    this.userProfileForm.reset({
      genderFormControl: {value:1},
      motorTypeFormControl: {value:1},
    });
  }
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    
  }


  ngOnInit(): void {
  }

}
