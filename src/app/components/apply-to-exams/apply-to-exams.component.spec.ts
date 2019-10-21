import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToExamsComponent } from './apply-to-exams.component';

describe('ApplyToExamsComponent', () => {
  let component: ApplyToExamsComponent;
  let fixture: ComponentFixture<ApplyToExamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyToExamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyToExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
