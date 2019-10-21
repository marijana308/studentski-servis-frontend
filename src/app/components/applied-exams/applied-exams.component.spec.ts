import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedExamsComponent } from './applied-exams.component';

describe('AppliedExamsComponent', () => {
  let component: AppliedExamsComponent;
  let fixture: ComponentFixture<AppliedExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
