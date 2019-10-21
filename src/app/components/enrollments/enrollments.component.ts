import { Component, OnInit, Input } from '@angular/core';
import { Enrollment } from 'src/app/model/Enrollment';
import { EnrollmentService } from 'src/app/services/enrollment.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {

  @Input() showMe: boolean;

  uncompletedEnrollments: Enrollment[];

  // @Input() completed: boolean;

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit() {
    this.enrollmentService.getAllUncompletedForStudent().subscribe(data => this.uncompletedEnrollments = data);
  }

}
