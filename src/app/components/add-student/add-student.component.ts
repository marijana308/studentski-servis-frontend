import { Component, OnInit, Input } from '@angular/core';
import { StudyProgramme } from 'src/app/model/StudyProgramme';
import { CourseService } from 'src/app/services/course.service';
import { Student } from 'src/app/model/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Input() showMe: boolean;

  selectedStudyProgramme: StudyProgramme;

  studyProgrammes: StudyProgramme[];

  newStudent: Student;

  constructor(private studentService: StudentsService, private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getAllStudyProgrammes().subscribe(data => this.studyProgrammes = data);
    console.log('smerovi: ' + this.studyProgrammes[0] );
    this.newStudent = {
      firstname : '',
      lastname : '',
      phone : '',
      email : '',
      address : '',
      birthPlace : ''
    };
  }

  saveStudent() {
    this.newStudent.studyProgramme = this.selectedStudyProgramme;
    this.studentService.saveNewStudent(this.newStudent).subscribe();
  }

  // handleChange(evt) {
  //   var target = evt.target;
  //   if (target.checked) {
  //     // this.selectedStudyProgramme = target;
  //     console.log('selected: ' + this.selectedStudyProgramme);
  //     // this.courseService.getAllCoursesForStudyProgramme(this.selectedStudyProgramme).subscribe(data => this.courses = data);
  //   }
  // }

}
