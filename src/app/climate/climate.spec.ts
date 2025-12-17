import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Climate } from './climate';

describe('Climate', () => {
  let component: Climate;
  let fixture: ComponentFixture<Climate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Climate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Climate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
