import { TestBed } from '@angular/core/testing';

import { SupplyChain } from './supply-chain';

describe('SupplyChain', () => {
  let service: SupplyChain;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyChain);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
