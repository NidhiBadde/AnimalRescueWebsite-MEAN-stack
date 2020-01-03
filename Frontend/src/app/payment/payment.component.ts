import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  amount:number;
  @Input() amountToDonate: number;
  @Output() loadPayment = new EventEmitter<any>();
  constructor(@Inject(ActivatedRoute) private _activatedroute : ActivatedRoute, private _router: Router) { }
  username: string;
  cardnum1:string;
  cardnum2:string;
  cardnum3:string;
  cardnum4:string;
  cvvcode:string;

  ngOnInit() {

    this.amount = this._activatedroute.snapshot.params['donationAmount'];
    console.log(this.amountToDonate);
    this.loadPayment.emit();
  }
   onClickPlaceOrder() {

      if(this.username === "" || this.username === null || this.username === undefined)
      {
        alert("Please Provide a Name.");
        return;
      }

      if(this.cardnum1 === "" || this.cardnum1 === null || this.cardnum1 === undefined)
      {
        alert("Please Enter complete card number.");
        return;
      }

      if(this.cardnum2 === "" || this.cardnum2 === null || this.cardnum2 === undefined)
      {
        alert("Please Enter complete card number.");
        return;
      }

      if(this.cardnum3 === "" || this.cardnum3 === null || this.cardnum3 === undefined)
      {
        alert("Please Enter complete card number.");
        return;
      }
      if(this.cardnum4 === "" || this.cardnum4 === null || this.cardnum4 === undefined)
      {
        alert("Please Enter complete card number.");
        return;
      }

      if(this.cvvcode === "" || this.cvvcode === null || this.cvvcode === undefined)
      {
        alert("Please Enter a card security code.");
        return;
      }

      alert("Payment has been done");
   }
}
