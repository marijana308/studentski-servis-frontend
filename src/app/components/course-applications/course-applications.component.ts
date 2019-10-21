import { Component, OnInit, Input } from '@angular/core';
import { ExamApplicationService } from 'src/app/services/exam-application.service';
import { ExamApplication } from 'src/app/model/ExamApplication';

@Component({
  selector: 'app-course-applications',
  templateUrl: './course-applications.component.html',
  styleUrls: ['./course-applications.component.css']
})
export class CourseApplicationsComponent implements OnInit {

  @Input() showMe: boolean;

  teachersApplications: ExamApplication[];

  constructor(private examApplicationService: ExamApplicationService) { }

  ngOnInit() {
    this.examApplicationService.getApplicationsForTeacher().subscribe(data => this.teachersApplications = data);
  }

}
