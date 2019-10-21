import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtUtilsService } from './jwt-utils.service';
import { throwError } from 'rxjs';
import { Student } from 'src/app/model/Student';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginPath = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient, private jwtUtilsService: JwtUtilsService) { }

  login(username: string, password: string): Observable<boolean> {
    var headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.loginPath}`, JSON.stringify({ username, password }), { headers })
      .pipe(map((res: any) => {
        let token = res && res['token'];
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({
            username: username,
            roles: this.jwtUtilsService.getRoles(token),
            //token: token
            token: token.split(' ')[1]
          }));
          localStorage.setItem('currentUserRole', JSON.stringify({
            roles: this.jwtUtilsService.getRoles(token)
          }));
          return true;
        } else {
          return false;
        }
      }))
      .pipe(catchError((error: any) => {
        if (error.status === 400) {
          return throwError('Ilegal login');
        } else {
          return throwError(error.json().error || 'Server error');
        }
      }));
  }

  getToken(): String {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser && currentUser.token;
    return token ? token : "";
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (this.getToken() != '') {
      console.log('is loggenIN = true');
      return true;
    } else {
      console.log('is loggenIN = false');
      return false;
      }
  }

  getCurrentUser() {
    if (localStorage.currentUser) {
      return JSON.parse(localStorage.currentUser);
    } else {
      return undefined;
    }
  }
}
