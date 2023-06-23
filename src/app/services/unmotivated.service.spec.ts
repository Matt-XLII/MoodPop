import { TestBed } from '@angular/core/testing';

import { UnmotivatedService } from './unmotivated.service';

describe('UnmotivatedService', () => {
  let service: UnmotivatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnmotivatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
