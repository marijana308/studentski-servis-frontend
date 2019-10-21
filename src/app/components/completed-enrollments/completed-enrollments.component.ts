import { Component, OnInit, Input } from '@angular/core';
import { Enrollment } from 'src/app/model/Enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-completed-enrollments',
  templateUrl: './completed-enrollments.component.html',
  styleUrls: ['./completed-enrollments.component.css']
})
export class CompletedEnrollmentsComponent implements OnInit {

  @Input() showMe: boolean;

  completedEnrollments: Enrollment[];

  grades: number[];

  averageGrade: number;

  constructor(private enrollmentService: EnrollmentService, private studentService: StudentsService) { }

  ngOnInit() {
    this.studentService.getAverageGrade().subscribe(data => this.averageGrade = data);
    this.enrollmentService.getAllCompletedForStudent().subscribe(data => {
      this.completedEnrollments = data;
      });
  }

}
