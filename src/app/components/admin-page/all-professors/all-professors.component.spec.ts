import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProfessorsComponent } from './all-professors.component';

describe('AllProfessorsComponent', () => {
  let component: AllProfessorsComponent;
  let fixture: ComponentFixture<AllProfessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProfessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
