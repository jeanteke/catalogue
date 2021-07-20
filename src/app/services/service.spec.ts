import { TestBed } from '@angular/core/testing';

import { ApiService } from './service';

describe('CitophonyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
