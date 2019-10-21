import { Component, OnInit, Input } from '@angular/core';
import { Teaching } from 'src/app/model/Teaching';
import { TeacherService } from 'src/app/services/teacher.service';
import { StudyProgramme } from 'src/app/model/StudyProgramme';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() showMe: boolean;

  teachings: Teaching[];

  constructor(private teacherService: TeacherService) { }

  ngOnInit() {
    this.teacherService.getTeachingsByUsername().subscribe(data => this.teachings = data);
  }

}
