import { Component, OnInit, Input } from '@angular/core';
import { Enrollment } from 'src/app/model/Enrollment';
import { Observable } from 'rxjs';
import { EnrollmentService } from 'src/app/services/enrollment.service';
import { Student } from 'src/app/model/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-apply-to-exams',
  templateUrl: './apply-to-exams.component.html',
  styleUrls: ['./apply-to-exams.component.css']
})
export class ApplyToExamsComponent implements OnInit {

  @Input() showMe: boolean;

  studentEnrollments: Observable<Enrollment[]>;
  student: Student;
  paymentSum: number;

  constructor(private enrollmentService: EnrollmentService, private studentService: StudentsService) { }

  ngOnInit() {
    this.studentEnrollments = this.enrollmentService.getAllUncompletedForStudent();
    this.studentService.getStudentByUsername().subscribe(data => {
      this.student = data;
      this.paymentSum = this.student.paymentSum;
    });
  }

}
