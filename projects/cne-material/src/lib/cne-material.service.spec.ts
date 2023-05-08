import { TestBed } from '@angular/core/testing';

import { CneMaterialService } from './cne-material.service';

describe('CneMaterialService', () => {
  let service: CneMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CneMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
