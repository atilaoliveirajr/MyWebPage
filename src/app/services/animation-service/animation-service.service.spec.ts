import { TestBed } from '@angular/core/testing';

import { AnimationServiceService } from './animation-service.service';

describe('AnimationServiceService', () => {
  let service: AnimationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
