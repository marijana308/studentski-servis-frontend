import { TestBed } from '@angular/core/testing';

import { ExamApplicationService } from './exam-application.service';

describe('ExamApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamApplicationService = TestBed.get(ExamApplicationService);
    expect(service).toBeTruthy();
  });
});
