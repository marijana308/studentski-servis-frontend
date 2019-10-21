import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../model/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  path = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient) { }

  getAllPaymentsForStudent(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.path}/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getAllPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.path}`);
  }
}
