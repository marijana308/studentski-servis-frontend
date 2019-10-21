import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enrollment } from '../model/Enrollment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  path = 'http://localhost:8080/api/enrollments';
  pathUncompleted = 'http://localhost:8080/api/enrollments/uncompleted/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Enrollment[]> {
    // console.log('ENROLLMENT SERVICE CALLED!!!');
    // console.log('PATH IS: ' + this.path);
    return this.http.get<Enrollment[]>(`${this.path}`);
  }

  getAllUncompletedForStudent(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.pathUncompleted}` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getAllCompletedForStudent(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.path}/completed/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getAllEnrollmentsForGrading(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.path}/grading/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  gradeEnrollment(enrollment: Enrollment): Observable<Enrollment> {
    return this.http.put<Enrollment>(`${this.path}`, enrollment, httpOptions);
  }
}
