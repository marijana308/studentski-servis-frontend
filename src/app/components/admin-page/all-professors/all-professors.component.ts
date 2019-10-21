import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from 'src/app/model/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-all-professors',
  templateUrl: './all-professors.component.html',
  styleUrls: ['./all-professors.component.css']
})
export class AllProfessorsComponent implements OnInit {

  @Input() showMe: boolean;

  teachers: Teacher[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getAllTeachers().subscribe(data => this.teachers = data);
  }

}
