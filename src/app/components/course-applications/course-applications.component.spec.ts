import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseApplicationsComponent } from './course-applications.component';

describe('CourseApplicationsComponent', () => {
  let component: CourseApplicationsComponent;
  let fixture: ComponentFixture<CourseApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
