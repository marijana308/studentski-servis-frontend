import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  showMe: boolean;

  student: Student;

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.studentService.getStudentByUsername().subscribe(student => {
      this.student = student;
    });
  }

}
