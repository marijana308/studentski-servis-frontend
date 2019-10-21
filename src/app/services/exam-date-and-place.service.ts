import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExamDateAndPlace } from '../model/ExamDateAndPlace';
import { Enrollment } from '../model/Enrollment';

@Injectable({
  providedIn: 'root'
})
export class ExamDateAndPlaceService {

  path = 'http://localhost:8080/api/examDatesAndPlaces';

  constructor(private http: HttpClient) { }

  getExamDatesForEnrollment(enrollment: Enrollment): Observable<ExamDateAndPlace[]> {
    return this.http.get<ExamDateAndPlace[]>(`${this.path}/` + enrollment.id);
  }
}
