import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  @Input() showMe: boolean;

  students: Student[];

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(data => this.students = data);
  }

}
