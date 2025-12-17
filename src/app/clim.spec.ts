import { TestBed } from '@angular/core/testing';

import { Clim } from './clim';

describe('Clim', () => {
  let service: Clim;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Clim);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
