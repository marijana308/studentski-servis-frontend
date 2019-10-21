import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from 'src/app/model/Teacher';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  teacher: Teacher;
  type: string;
  profesor: boolean;

  showProfile = true;
  showCourses = false;
  showGrading = false;
  showCourseApplications = false;

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getTeacherByUsername().subscribe(data => {
      this.teacher = data;
      this.type = this.teacher.type;
      if (this.teacher.type == 'profesor') {
      this.profesor = true;
      console.log('teacher type: ' + this.teacher.type);
      console.log('profesor: ' + this.profesor);
    } else {
      this.profesor = false;
      console.log('teacher type: ' + this.teacher.type);
      console.log('profesor: ' + this.profesor);
    }
    });
  }

  showTeacherProfile() {
    this.showProfile = true;
    this.showCourses = false;
    this.showGrading = false;
    this.showCourseApplications = false;
  }

  showTeacherCourses() {
    this.showProfile = false;
    this.showCourses = true;
    this.showGrading = false;
    this.showCourseApplications = false;
  }

  grading() {
    this.showProfile = false;
    this.showCourses = false;
    this.showGrading = true;
    this.showCourseApplications = false;
  }

  courseApplications() {
    this.showProfile = false;
    this.showCourses = false;
    this.showGrading = false;
    this.showCourseApplications = true;
  }

}
