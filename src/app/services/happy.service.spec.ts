import { TestBed } from '@angular/core/testing';

import { HappyService } from './happy.service';

describe('HappyService', () => {
  let service: HappyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HappyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
