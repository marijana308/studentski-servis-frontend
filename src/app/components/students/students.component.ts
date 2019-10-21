import { Component, OnInit } from '@angular/core';
import { Student } from '../../model/Student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentService: StudentsService) {
    this.studentService.getAllStudents().subscribe(students => {
      this.students = students;
      });
  }

  ngOnInit() {
  }

}
