import { LoginComponent } from './../login/login.component';
import { SignUpComponent } from './../sign-up/sign-up.component';
import { SharedService } from '../shared.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from './../http.service';
import { Router } from '@angular/router';
import { Donation } from '../models/Donation';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSignUpPage: boolean;
  signIn: boolean;
  username: string;
  donations:Donation[];
  showMe: boolean;
  isLoggedIn: string = '';
  @Output() goodToload: EventEmitter<object> = new EventEmitter<object>();
  @Output() openHome: EventEmitter<object> = new EventEmitter<object>();

  constructor(private popup: SharedService, private _router: Router,  public dialog: MatDialog) {
    this.showMe = true;
    this.username = "";
    this.signIn = true;
   }

  ngOnInit() {
  }

  openSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '30%',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.username = "Welcome " + result.name;
        this.signIn = false;
        this.isLoggedIn = result._id;
      }
    });
  }

  openLogin() {

    const dialogRef = this.dialog.open(LoginComponent, {
      width: '30%',
      height: '260px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.username = "Welcome " + result.name;
        this.isLoggedIn = result._id;
        this.signIn = false;
        this.openHome.emit(event);
        this.showMe = false;
      }
    });
  }

  openDashboard(event){
    this.goodToload.emit(event);
    this.showMe = false;
  }

  getOutputUser(event) {
    this.openSignUpPage = false;
    this.signIn = false;
    this.goodToload.emit(event);
    this.username = "Welcome " + event.username;
  }

  onSignOut() {
    //this._router.navigate(['/signUpOrLogin' + '/SignUp']);
    this.signIn = true;
    this.showMe = true;
    this._router.navigate(['/']);
    this.openHome.emit(event);
    this.isLoggedIn = "";
  }
  // addDonation(donation:Donation)
  // {
  //   this._http.addDonation(donation).subscribe(donation=>{
  //     this.donations.push(donation);
  //   })
  // }
  setShowMe() {
    this.goodToload.emit(event);
  }

  openMain() {
    this.openHome.emit(event);
  }
}
