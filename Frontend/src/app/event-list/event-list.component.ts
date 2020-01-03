import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { EventSchema } from './../../../../Backend/api/models/eventSchema';
import { User } from '../../../../Backend/api/models/userSchema';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PaymentComponent} from '../payment/payment.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  
  events: EventSchema[] = [];
  eventscontent: String;
  eventTitle: EventSchema[] = [];
  eventImage: Binary;
  eventId: String;
  username:String = "Arati";
  currentUser: User;

  panleExpanded: true;

  constructor(private _http : HttpService, public sanitizer: DomSanitizer, public dialog: MatDialog) { }

  ngOnInit() {

    this._http.getEvents().subscribe(data => {
      this.events= data;

      for( let event of Object.keys(data))
      {
        this.events.push(data[event]);
      }
       console.log( this.events[0].text);
  });


  this._http.getUser().subscribe(data => {
      console.log(data);
      for (let usr of Object.keys(data)){
        if(data[usr].username == this.username )
        {
          this.currentUser = data[usr];
          console.log(this.currentUser);
          // this.currentUser.
         
        }
       
      }
  });

}

captureId(event){
  
  this.eventId= event._id;
  console.log(this.eventId);
 
}


openPayment(){
  this.dialog.open(PaymentComponent);
}
  }
