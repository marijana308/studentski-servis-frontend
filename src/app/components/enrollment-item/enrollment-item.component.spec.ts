import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentItemComponent } from './enrollment-item.component';

describe('EnrollmentItemComponent', () => {
  let component: EnrollmentItemComponent;
  let fixture: ComponentFixture<EnrollmentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
