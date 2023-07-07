import { TestBed } from '@angular/core/testing';

import { BoredService } from './bored.service';

describe('BoredService', () => {
  let service: BoredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
