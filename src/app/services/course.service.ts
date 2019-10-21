import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/Course';
import { StudyProgramme } from '../model/StudyProgramme';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  path = 'http://localhost:8080/api/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.path}`);
  }

  getAllCoursesForStudyProgramme(studyProgramme: StudyProgramme): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.path}/` + studyProgramme.id);
  }

  getAllStudyProgrammes(): Observable<StudyProgramme[]> {
    console.log('getAllStudyProgrammes CALLED');
    return this.http.get<StudyProgramme[]>(`${this.path}/studyProgrammes`);
  }
}
