import { TestBed } from '@angular/core/testing';

import { GenderthemesService } from './genderthemes.service';

describe('GenderthemesService', () => {
  let service: GenderthemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderthemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
