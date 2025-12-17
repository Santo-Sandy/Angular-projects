import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDemo } from './post-demo';

describe('PostDemo', () => {
  let component: PostDemo;
  let fixture: ComponentFixture<PostDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
