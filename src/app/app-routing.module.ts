import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { TeacherPageComponent } from './components/teacher-page/teacher-page.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CanActivateAuthGuard } from './services/auth/can-activate-auth.guard';


const routes: Routes = [
  {path: 'adminpage', component: AdminPageComponent},
  {path: 'teacherpage', component: TeacherPageComponent},
  {path: 'studentpage', component: StudentPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
