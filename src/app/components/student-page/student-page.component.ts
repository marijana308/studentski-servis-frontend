import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/app/model/Student';
import { ExamApplication } from 'src/app/model/ExamApplication';
import { ExamApplicationService } from 'src/app/services/exam-application.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  student: Student;

  examApplications: ExamApplication[];

  showProfile = true;
  showUncompleted = false;
  showCompleted = false;
  showApplyToExams = false;
  showApplyedToExams = false;
  showPayments = false;

  constructor(private studentService: StudentsService, private examApplicationService: ExamApplicationService) {
    this.studentService.getStudentByUsername().subscribe(student => {
      this.student = student;
    });
    // console.log('student page: ' + this.student.firstname + ', ' + this.student.lastname);
  }

  ngOnInit() {
    this.examApplicationService.getAppliedToExamsForStudent()
      .subscribe(data => this.examApplications = data);
  }

  // newApplication(application: ExamApplication) {
  //   this.examApplicationService.getAppliedToExamsForStudent()
  //     .subscribe(data => this.examApplications = data);
  // }

  showCompletedEnrollments() {
    this.showCompleted = true;
    this.showUncompleted = false;
    this.showProfile = false;
    this.showApplyToExams = false;
    this.showApplyedToExams = false;
    this.showPayments = false;
  }

  showUncompletedEnrollments() {
    this.showCompleted = false;
    this.showUncompleted = true;
    this.showProfile = false;
    this.showApplyToExams = false;
    this.showApplyedToExams = false;
    this.showPayments = false;
  }

  showUsersProfile() {
    this.showCompleted = false;
    this.showUncompleted = false;
    this.showProfile = true;
    this.showApplyToExams = false;
    this.showApplyedToExams = false;
    this.showPayments = false;
  }

  applyToExams() {
    this.showCompleted = false;
    this.showUncompleted = false;
    this.showProfile = false;
    this.showApplyToExams = true;
    this.showApplyedToExams = false;
    this.showPayments = false;
  }

  appliedToExams() {
    this.examApplicationService.getAppliedToExamsForStudent()
      .subscribe(data => this.examApplications = data);
    this.showCompleted = false;
    this.showUncompleted = false;
    this.showProfile = false;
    this.showApplyToExams = false;
    this.showApplyedToExams = true;
    this.showPayments = false;
  }

  showAllPayments() {
    this.showCompleted = false;
    this.showUncompleted = false;
    this.showProfile = false;
    this.showApplyToExams = false;
    this.showApplyedToExams = false;
    this.showPayments = true;
  }
}
