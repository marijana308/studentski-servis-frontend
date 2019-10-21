import { Component, OnInit, Input } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/model/Teacher';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  @Input() showMe: boolean;

  teacher: Teacher;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getTeacherByUsername().subscribe(data => this.teacher = data);
  }

}
