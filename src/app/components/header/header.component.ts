import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // changeDetection: Strategy.OnPush,

})
export class HeaderComponent implements OnInit {

  activeLink: string = 'userProfile';
  constructor() { }

  ngOnInit(): void {
  }

}
