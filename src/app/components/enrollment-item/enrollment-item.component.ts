import { Component, OnInit, Input } from '@angular/core';
import { Enrollment } from 'src/app/model/Enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { ExamDateAndPlace } from '../../model/ExamDateAndPlace';
import { ExamDateAndPlaceService } from 'src/app/services/exam-date-and-place.service';
import { ExamApplication } from 'src/app/model/ExamApplication';
import { ExamApplicationService } from 'src/app/services/exam-application.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-enrollment-item',
  templateUrl: './enrollment-item.component.html',
  styleUrls: ['./enrollment-item.component.css']
})
export class EnrollmentItemComponent implements OnInit {

  @Input()
  enrollment: Enrollment;

  examDatesAndPlaces: ExamDateAndPlace[];

  selectedDateAndPlace: ExamDateAndPlace;

  newExamApplication: ExamApplication;

  constructor(private examDateAndPlaceService: ExamDateAndPlaceService,
              private examApplicationService: ExamApplicationService,
              private studentService: StudentsService) {}

  ngOnInit() {
    this.examDateAndPlaceService.getExamDatesForEnrollment(this.enrollment).subscribe(data => {
      this.examDatesAndPlaces = data;
    });
  }

  newApplication() {
    if (confirm('Da li ste sigurni?')) {
      this.newExamApplication = { enrollment: this.enrollment, examDateAndPlace: this.selectedDateAndPlace};
      this.examApplicationService.saveNewExamApplication(this.newExamApplication).subscribe();
      this.studentService.decreasePaymentSum().subscribe(data => {
        this.ngOnInit();
      });
    }
  }

}
