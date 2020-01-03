import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { User } from '../../../../Backend/api/models/userSchema';
import { Comments } from '../../../../Backend/api/models/commentSchema';
import { ConstantPool } from '@angular/compiler';
declare global {
  interface Window { imageUrl: any; sanitizer: any; }
}
window.imageUrl = window.imageUrl || {};
window.sanitizer = window.sanitizer || {};

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {

  animals: Array<object>;
  comments: Array<object>;
  animalIds: string[];
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  count: number;
  animalCommentMap = new Map();
  addComm: Comments;
  inputDisabled: boolean;

  @Input()
  loggedInUser: User;
  comment: string;

  constructor(private _http : HttpService, public sanitizer: DomSanitizer) {
    this.count = 0;
    this.comment = '';
    this.inputDisabled = false;
  }

  ngOnInit() {
    this._http.getAnimals().subscribe(data => {
      this.animals = data;
      this._http.getComments().subscribe(data => {
        this.comments = data;
        // tslint:disable-next-line: prefer-for-of
        for (let anm of Object.keys(this.animals)) {
          this.animalCommentMap.set(this.animals[anm], null);
          for (let comm of Object.keys(this.comments)) {
            if (this.animals[anm]._id == this.comments[comm].animalId && this.comments[comm].userId == this.loggedInUser._id) {
              if(this.comments[comm].comment != null){
                this.animalCommentMap.set(this.animals[anm], this.comments[comm]);
              }
            }
          }
        }
      });
    });
  }

  updateComment(comm, data) {
    comm.animalId = data.key._id;
    comm.userId = this.loggedInUser._id;
    this._http.addComment(comm).subscribe(data => {
      this.inputDisabled = true;
    });
  }
}
