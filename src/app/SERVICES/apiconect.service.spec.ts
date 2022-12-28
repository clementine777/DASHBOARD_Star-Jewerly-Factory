import { TestBed } from '@angular/core/testing';

import { ApiconectService } from './apiconect.service';

describe('ApiconectService', () => {
  let service: ApiconectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiconectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
