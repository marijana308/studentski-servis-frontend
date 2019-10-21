import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/Course';
import { CourseService } from 'src/app/services/course.service';
import { StudyProgramme } from 'src/app/model/StudyProgramme';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  @Input() showMe: boolean;

  courses: Course[];

  selectedStudyProgramme: StudyProgramme;

  studyProgrammes: StudyProgramme[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(data => this.courses = data);
    this.courseService.getAllStudyProgrammes().subscribe(data => this.studyProgrammes = data);
  }

  handleChange(evt) {
    var target = evt.target;
    if (target.checked) {
      // this.selectedStudyProgramme = target;
      console.log('selected: ' + this.selectedStudyProgramme);
      this.courseService.getAllCoursesForStudyProgramme(this.selectedStudyProgramme).subscribe(data => this.courses = data);
    }
  }

}
