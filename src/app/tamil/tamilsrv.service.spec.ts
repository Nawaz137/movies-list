import { TestBed } from '@angular/core/testing';

import { TamilsrvService } from './tamilsrv.service';

describe('TamilsrvService', () => {
  let service: TamilsrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamilsrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
