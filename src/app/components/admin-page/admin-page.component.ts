import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  showAllTeachers = true;
  showAllCourses = false;
  showAllStudents = false;
  showAllPayments = false;
  showAddStudent = false;

  constructor() { }

  ngOnInit() {
  }

  allTeachers() {
    this.showAllTeachers = true;
    this.showAllCourses = false;
    this.showAllStudents = false;
    this.showAllPayments = false;
    this.showAddStudent = false;
  }

  allStudents() {
    this.showAllTeachers = false;
    this.showAllCourses = false;
    this.showAllStudents = true;
    this.showAllPayments = false;
    this.showAddStudent = false;
  }

  allCourses() {
    this.showAllTeachers = false;
    this.showAllCourses = true;
    this.showAllStudents = false;
    this.showAllPayments = false;
    this.showAddStudent = false;
  }

  allPayments() {
    this.showAllTeachers = false;
    this.showAllCourses = false;
    this.showAllStudents = false;
    this.showAllPayments = true;
    this.showAddStudent = false;
  }

}
