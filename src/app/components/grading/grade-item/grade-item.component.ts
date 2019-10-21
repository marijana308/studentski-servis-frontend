import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExamApplication } from 'src/app/model/ExamApplication';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { Enrollment } from 'src/app/model/Enrollment';

@Component({
  selector: 'app-grade-item',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.css']
})
export class GradeItemComponent implements OnInit {

  @Input() application: ExamApplication;

  grade: number;

  gradedEnrollment: Enrollment;

  active = true;

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (confirm('Da li ste sigurni?')) {
      this.gradedEnrollment = {
        id: this.application.enrollment.id,
        completed: true,
        grade: this.grade,
        course: this.application.enrollment.course,
        student: this.application.enrollment.student
      };
      this.enrollmentService.gradeEnrollment(this.gradedEnrollment).subscribe(data => {
        this.active = false;
      });
    }
  }

}
