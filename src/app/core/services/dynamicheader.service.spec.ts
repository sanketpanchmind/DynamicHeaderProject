import { TestBed } from '@angular/core/testing';

import { DynamicheaderService } from './dynamicheader.service';

describe('DynamicheaderService', () => {
  let service: DynamicheaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicheaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
