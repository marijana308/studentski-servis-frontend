import { Component, OnInit, Input } from '@angular/core';
import { ExamApplication } from 'src/app/model/ExamApplication';
import { ExamApplicationService } from 'src/app/services/exam-application.service';

@Component({
  selector: 'app-applied-exams',
  templateUrl: './applied-exams.component.html',
  styleUrls: ['./applied-exams.component.css']
})
export class AppliedExamsComponent implements OnInit {

  @Input() showMe: boolean;

  @Input() examApplications: ExamApplication[];

  constructor(private examApplicationService: ExamApplicationService) { }

  ngOnInit() {
    // this.examApplicationService.getAppliedToExamsForStudent()
    //   .subscribe(data => this.examApplications = data);
  }

}
