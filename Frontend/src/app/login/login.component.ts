// import { ControlMessagesComponent } from './../control-messages/control-messages.component';
// import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
// import { HttpService } from './../http.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import {Inject} from '@angular/core';
// import { User } from '../../../../Backend/api/models/userSchema';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { FormBuilder, Validators } from '@angular/forms';
// import { ValidationService } from '../validation.service';

import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';
import { User } from '../../../../Backend/api/models/userSchema';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userForm: any;
  username: string;
  password: string;
  param: string;
  currentUser: User;
  notFound: boolean = true;
  @Output() outputUser: EventEmitter<object> = new EventEmitter<object>();
  @Input() openDialogSignUp: boolean;

  constructor(private _http: HttpService, @Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router,
   public dialogRef: MatDialogRef<LoginComponent>/*, private formBuilder: FormBuilder*/) {
    this.param = this._activatedroute.snapshot.params['param'];
    // this.userForm = this.formBuilder.group({
    //   username: ['', Validators.required,  Validators.minLength(10)],
    //   password: ['', [Validators.required]]
    // });
  }

  ngOnInit() {

  }
/**
 * Fetch Logged in user if valid
 * @param user
 */
  getUser(user) {
    // if (this.userForm.dirty && this.userForm.valid) {
    //   alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    // }
    // else {

      if(this.username == undefined || this.username == "") {
        alert("Please enter a value in Name.");
        return;
      }
      if(this.password == undefined || this.username == "") {
        alert("Please enter Password.");
        return;
      }

      this._http.getUser().subscribe(data => {
        console.log(data);
        for (let usr of Object.keys(data)){
          if (data[usr].username == this.username || data[usr].password == this.password) {
            this.currentUser = data[usr];
            this.notFound = false;
            // this.outputUser.emit(this.currentUser);
            this.dialogRef.close(this.currentUser);
            //this._router.navigate['/'];
            // this._router.navigate(['/animal', this.currentUser._id]);
            break;
          }
        }
        if(this.notFound) {
          alert("Invalid username and password");
          return;
        }
      });
    // }
  }
  /**
   * Close dialog on cancel
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
