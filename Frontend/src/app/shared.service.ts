import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs';
// import { ModalDirective } from 'ng-uikit-pro-standard';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  setModal() {

  console.log('here');

  }

  showModal() {

    console.log('here1');

  }
  // constructor() { }
  // show: Subject<boolean> = new Subject();
}
