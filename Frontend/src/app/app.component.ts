import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pawfect';
  openDashboardPage: boolean = false;
  loggedInUser: object;
  onlyPayment: boolean;

  constructor() {}

  ngOnInit() {
    this.openDashboardPage = false;
  }

  getDashboard(event) {
    console.log('here');
    this.openDashboardPage = true;
    this.loggedInUser = event;
  }

  openHome(event) {
    console.log('open please');
    this.openDashboardPage = false;
  }

  removeHome(){
    this.onlyPayment = true;
  }

}
