import { Component, OnInit, Input } from '@angular/core';
import { ExamApplicationService } from 'src/app/services/exam-application.service';
import { ExamApplication } from 'src/app/model/ExamApplication';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {

  @Input() showMe: boolean;

  grade: number;

  // enrollmentsForGrading: Enrollment[];

  applicationsForGrading: ExamApplication[];

  constructor(private examApplicationService: ExamApplicationService,
              private enrollmentService: EnrollmentService) { }

  ngOnInit() {
    this.examApplicationService.getAllApplicationsForGrading().subscribe(data => this.applicationsForGrading = data);
  }

  // onSubmit() {
  //   if (this.grade > 5) {
  //     this.enrollmentService.gradeEnrollment().subscribe();
  //   }
  // }

}
