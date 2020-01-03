import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() loadPayment: EventEmitter<object> = new EventEmitter<object>();
  onlyPayment: boolean;
  constructor() { }

  ngOnInit() {
  }

  loadPaymentComp() {
    console.log('inside home');
    this.loadPayment.emit();
    this.onlyPayment = true;
  }
}
