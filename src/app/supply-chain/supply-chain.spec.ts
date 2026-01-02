import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChain } from './supply-chain';

describe('SupplyChain', () => {
  let component: SupplyChain;
  let fixture: ComponentFixture<SupplyChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplyChain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyChain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
