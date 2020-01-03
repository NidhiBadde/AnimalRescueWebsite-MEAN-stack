import { Injectable } from '@angular/core';
import { AnimalSchema } from './../../../Backend/api/models/animalSchema';
import { EventSchema } from './../../../Backend/api/models/eventSchema';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from './../../../Backend/api/models/commentSchema';
import { User } from './../../../Backend/api/models/userSchema';
import { Donation } from './../../../Backend/api/models/userSchema';
import { Question } from './../../../Backend/api/models/askQuestion';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private animalUrl = 'http://localhost:3000/animals';
  private eventUrl = 'http://localhost:3000/events';
  private commentUrl = 'http://localhost:3000/comments';
  private userUrl = 'http://localhost:3000/users';
  private donationUrl= 'http://localhost:3000/donations';
  private mailUrl= 'http://localhost:3000/sendMail';
  private questionUrl='http://localhost:3000/questions';

  //private donationUrl = 'http://localhost:3000/donation';

  constructor(public _http: HttpClient) { }
  // addDonation(donation:Donation):Observable<Donation>
  // {
  //   return this._http.post<Donation>(this.donationUrl,donation);
  // }


  getAnimals() {
    return this._http.get<AnimalSchema[]>(this.animalUrl);
  }

  getEvents() {
    return this._http.get<EventSchema[]>(this.eventUrl);
  }

  getComments() {
    return this._http.get<Comments[]>(this.commentUrl);
  }

  addComment(comments: Comments) {
    return this._http.post<Comments>(this.commentUrl, comments);
  }
  updateComment(comm: string, comments:Comments)
  {
    console.log(comm);
    console.log(comments);
    return this._http.put<Comments>(this.commentUrl + '/' + comm,comments);
  }
  addUser(user: User) {
    return this._http.post<User>(this.userUrl, user);
  }

  putUser(user: User){
    return this._http.put<User>(this.userUrl, user);
  }

  addDonation(donation:Donation){
    return this._http.post<Donation>(this.donationUrl,donation);
  }

  addQuestion(question: Question){
    return this._http.post<Question>(this.questionUrl, question);
  }
  getUser() {
    return this._http.get<User>(this.userUrl);
  }

  sendMail(data){
    console.log('In service ' + data);
    return this._http.post(this.mailUrl, data);
  }
}
