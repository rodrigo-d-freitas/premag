import { TestBed } from '@angular/core/testing';

import { PremagService } from './premag.service';

describe('PremagService', () => {
  let service: PremagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
