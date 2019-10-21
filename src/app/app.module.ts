import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { JwtUtilsService } from './services/auth/jwt-utils.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { HeaderComponent } from './components/layout/header/header.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { TeacherPageComponent } from './components/teacher-page/teacher-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { EnrollmentsComponent } from './components/enrollments/enrollments.component';
import { EnrollmentService } from './services/enrollment.service';
import { CompletedEnrollmentsComponent } from './components/completed-enrollments/completed-enrollments.component';
import { MenuComponent } from './components/layout/menu/menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ApplyToExamsComponent } from './components/apply-to-exams/apply-to-exams.component';
import { EnrollmentItemComponent } from './components/enrollment-item/enrollment-item.component';
import { AppliedExamsComponent } from './components/applied-exams/applied-exams.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TeacherProfileComponent } from './components/profile/teacher-profile/teacher-profile.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GradingComponent } from './components/grading/grading.component';
import { GradeItemComponent } from './components/grading/grade-item/grade-item.component';
import { AllProfessorsComponent } from './components/admin-page/all-professors/all-professors.component';
import { AllStudentsComponent } from './components/admin-page/all-students/all-students.component';
import { AllCoursesComponent } from './components/admin-page/all-courses/all-courses.component';
import { AllPaymentsComponent } from './components/admin-page/all-payments/all-payments.component';
import { AverageGradePipe } from './customPipes/average-grade.pipe';
import { CanActivateAuthGuard } from './services/auth/can-activate-auth.guard';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { CourseApplicationsComponent } from './components/course-applications/course-applications.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

// const appRoutes: Routes = [
//   {path: 'main', component: MainPageComponent},
//   {path: 'login', component: LoginPageComponent},
//   {path: '', redirectTo: 'login', pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    LoginPageComponent,
    MainPageComponent,
    HeaderComponent,
    StudentPageComponent,
    TeacherPageComponent,
    AdminPageComponent,
    EnrollmentsComponent,
    CompletedEnrollmentsComponent,
    MenuComponent,
    ProfileComponent,
    ApplyToExamsComponent,
    EnrollmentItemComponent,
    AppliedExamsComponent,
    PaymentsComponent,
    TeacherProfileComponent,
    CoursesComponent,
    GradingComponent,
    GradeItemComponent,
    AllProfessorsComponent,
    AllStudentsComponent,
    AllCoursesComponent,
    AllPaymentsComponent,
    AverageGradePipe,
    CourseApplicationsComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    JwtUtilsService,
    AuthenticationService,
    CanActivateAuthGuard,
    EnrollmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
