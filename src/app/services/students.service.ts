import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/Student';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.studentsUrl}`);
  }

  getStudentByUsername(): Observable<Student> {
    return this.http.get<Student>(`${this.studentsUrl}/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  decreasePaymentSum(): Observable<Student> {
    return this.http.get<Student>(`${this.studentsUrl}/decrease/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getAverageGrade(): Observable<number> {
    return this.http.get<number>(`${this.studentsUrl}/averageGrade/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  saveNewStudent(student: Student) {
    return this.http.post(`${this.studentsUrl}`, student);
  }
}
