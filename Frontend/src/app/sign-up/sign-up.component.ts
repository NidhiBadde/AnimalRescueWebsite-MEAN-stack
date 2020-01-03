import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';
import { User } from '../../../../Backend/api/models/userSchema';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  name: string;
  username: string;
  password: string;
  address: string;
  param: string;
  currentUser: User;
  dateOfBirth: Date;
  email: string;
  @Output() outputUser: EventEmitter<object> = new EventEmitter<object>();
  @Input() openDialogSignUp: boolean;

  constructor(private _http: HttpService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router,
  public dialogRef: MatDialogRef<SignUpComponent>) {
    this.param = this._activatedroute.snapshot.params['param'];
  }

  ngOnInit() {

  }

  /**
   * Save User who just signed Up
   * @param user
   */
  saveUser(user) {
    user.type = 'User';
    user.name = this.name;
    user.username = this.username;
    user.password = this.password;
    user.dob = this.dateOfBirth;
    user.address = this.address;
    user.email = this.email;
    if(this.name == undefined || this.name == "") {
      alert("Please enter a value in Name.");
        return;
    }
    if(this.username == undefined || this.username == "") {
      alert("Please enter a value in username.");
        return;
    }
    if(this.password == undefined || this.password == "") {
      alert("Please enter password.");
        return;
    }
    if(this.address == undefined || this.address == "") {
      alert("Please enter a value in address.");
        return;
    }
    if(this.email == undefined || this.email == "") {
      alert("Please enter a value in password.");
      return;
    }
    else{
      let check = this.isEmail(this.email);
      if(!check){
        alert("Please enter valid Email");
      }
    }
    if(this.dateOfBirth == undefined) {
      alert("Please enter a date.");
        return;
    }

    if(user.name != undefined){
      this._http.addUser(user).subscribe(data => {
        this._http.sendMail(user).subscribe(data => {
          console.log(data);
        });
        this.currentUser = data;
        this.dialogRef.close(this.currentUser);
      });
    }
  }

  /**
   * Check Email validation with regex
   * @param search
   */
  isEmail(search:string):boolean
    {
        let serchfind:boolean;
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        serchfind = regexp.test(search);
        console.log(serchfind);
        return serchfind;
    }

    /**
     * Close dialog on cross
     */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
