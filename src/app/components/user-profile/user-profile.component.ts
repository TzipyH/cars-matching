import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    gender: new FormControl(1, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z1-9 ]+$')]),
    city: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    country: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    listOfHobbies: new FormControl('', [Validators.required]),
    favoriteColor: new FormControl('', [Validators.required]),
    numOfSeats: new FormControl('', [Validators.required, Validators.min(2), Validators.max(7)]),
    motorType: new FormControl(1, [Validators.required]),
  });

  hobbiesList: string[];
  matcher = new ErrorStateMatcher();

  sendForm() {
    this.usersService.addUser(this.userProfileForm.value);
    this.dialog.open(SuccessDialogComponent, {
      width: '250px',
    });
    this.userProfileForm.reset({
      genderFormControl: {value:1},
      motorTypeFormControl: {value:1},
    });
  }

  constructor(private usersService : UsersService, public dialog: MatDialog) {
    this.hobbiesList = usersService.hobbiesList;
   }

  ngOnInit(): void {
  }

}
