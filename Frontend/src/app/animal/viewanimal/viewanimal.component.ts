import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Binary } from 'selenium-webdriver/firefox';
import { HttpService } from './../../http.service';

@Component({
  selector: 'app-viewanimal',
  templateUrl: './viewanimal.component.html',
  styleUrls: ['./viewanimal.component.scss']
})
export class ViewanimalComponent implements OnInit {

  constructor(public _router: ActivatedRoute,public sanitizer: DomSanitizer,private _http : HttpService) { }
  id: string;
  userId:string;
  name: string;
  comment:string;
  type:string;
  gender:string;
  age:string;
  description:string;
  breed:string;
  imageUrl: Binary;
  imageDisplay: SafeResourceUrl;
  imageObject: Array<object> = [];
  commentId:string;
  comm: any;
  ngOnInit() {
    this._router.queryParams.subscribe(params => {
      this.id = params["id"];
      this.name=params["name"];
      this.type=params["type"];
      this.gender=params["gender"];
      this.age=params["age"];
      this.description=params["description"];
      this.breed=params["breed"];
      this.imageUrl=params["image"];
      this.userId=params["userId"];
      console.log(this.userId);
      console.log(this.description);
    })
  }

updateComment(comm) {
  console.log('here');

    comm.animalId = this.id;
    comm.userId = this.userId;
    comm.comment = this.comment;
    this._http.addComment(comm).subscribe(data => {

        this.commentId=data._id;
        console.log('??' +this.commentId);
    });
  }
  edit()
  {
    console.log('comment Id ' + this.commentId);
    this._http.updateComment(this.commentId,this.comment).subscribe(data=>{
      console.log('data ' + data);
    });
  }
}
