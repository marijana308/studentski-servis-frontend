import { Component, OnInit, Input } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';
import { Payment } from 'src/app/model/Payment';
import { Student } from 'src/app/model/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input() showMe: boolean;

  student: Student;

  payments: Payment[];

  constructor(private paymentService: PaymentService, private studentService: StudentsService) { }

  ngOnInit() {
    this.paymentService.getAllPaymentsForStudent().subscribe(data => this.payments = data);
    this.studentService.getStudentByUsername().subscribe(data => this.student = data);
  }

}
