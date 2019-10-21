import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

  public user;

  public wrongUsernameOrPass: boolean;

  public role: any;

  public authority: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) {
    this.user = {};
    this.wrongUsernameOrPass = false;
  }

  ngOnInit() {
  }

  login(): void {
    this.authenticationService.login(this.user.username, this.user.password).subscribe(
      (loggedIn: boolean) => {
        if (loggedIn) {
          this.role = JSON.parse(localStorage.getItem('currentUserRole')).roles[0][0].authority;
          if (this.role.toString() == 'role_admin') {
            this.router.navigate(['/adminpage']);
          }
          if (this.role.toString() == 'role_teacher') {
            this.router.navigate(['/teacherpage']);
          }
          if (this.role.toString() == 'role_student') {
            this.router.navigate(['/studentpage']);
          }
        }
      }
      ,
      (err: Error) => {
        if (err.toString() === 'Ilegal login') {
          this.wrongUsernameOrPass = true;
          console.log(err);
        } else {
          throwError(err);
        }
      });
  }

}
