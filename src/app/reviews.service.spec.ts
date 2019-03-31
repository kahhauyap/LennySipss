import { TestBed } from '@angular/core/testing';

import { ReviewService } from './reviews.service';

describe('ReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewService = TestBed.get(ReviewService);
    expect(service).toBeTruthy();
  });
});
