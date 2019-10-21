import { TestBed } from '@angular/core/testing';

import { ExamDateAndPlaceService } from './exam-date-and-place.service';

describe('ExamDateAndPlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamDateAndPlaceService = TestBed.get(ExamDateAndPlaceService);
    expect(service).toBeTruthy();
  });
});
