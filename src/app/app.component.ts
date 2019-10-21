import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tseo19client';

  constructor(private authService: AuthenticationService,
              private router: Router){
  }

  loggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  login(): void {
    this.router.navigate(['main']);
  }

}
