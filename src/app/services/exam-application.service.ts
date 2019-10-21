import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ExamApplication } from '../model/ExamApplication';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExamApplicationService {

  path = 'http://localhost:8080/api/examApplications';

  constructor(private http: HttpClient) { }

  saveNewExamApplication(newApplication: ExamApplication): Observable<ExamApplication> {
    return this.http.post<ExamApplication>(`${this.path}`, newApplication, httpOptions);
  }

  getAppliedToExamsForStudent(): Observable<ExamApplication[]> {
    return this.http.get<ExamApplication[]>(`${this.path}/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getAllApplicationsForGrading(): Observable<ExamApplication[]> {
    return this.http.get<ExamApplication[]>(`${this.path}/grading/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getApplicationsForTeacher(): Observable<ExamApplication[]> {
    return this.http.get<ExamApplication[]>(`${this.path}/courseApplications/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }
}
