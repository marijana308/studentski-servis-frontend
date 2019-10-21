import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../model/Teacher';
import { Teaching } from '../model/Teaching';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  path = 'http://localhost:8080/api/teachers';
  url = 'http://localhost:8080/api/teachings';

  constructor(private http: HttpClient) { }

  getTeacherByUsername(): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.path}/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getTeachingsByUsername(): Observable<Teaching[]> {
    return this.http.get<Teaching[]>(`${this.url}/` + JSON.parse(localStorage.getItem('currentUser')).username);
  }

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.path}`);
  }

}
