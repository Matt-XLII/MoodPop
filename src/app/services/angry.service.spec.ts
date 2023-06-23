import { TestBed } from '@angular/core/testing';

import { AngryService } from './angry.service';

describe('AngryService', () => {
  let service: AngryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
