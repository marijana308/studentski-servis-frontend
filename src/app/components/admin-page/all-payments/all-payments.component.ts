import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/model/Payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {

  @Input() showMe: boolean;

  payments: Payment[];

  constructor(private paymentSerivce: PaymentService) { }

  ngOnInit() {
    this.paymentSerivce.getAllPayments().subscribe(data => this.payments = data);
  }

}
