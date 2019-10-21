import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedEnrollmentsComponent } from './completed-enrollments.component';

describe('CompletedEnrollmentsComponent', () => {
  let component: CompletedEnrollmentsComponent;
  let fixture: ComponentFixture<CompletedEnrollmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedEnrollmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
