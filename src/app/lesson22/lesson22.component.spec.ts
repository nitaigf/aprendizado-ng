import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson23Component } from './lesson22.component';

describe('Lesson23Component', () => {
  let component: Lesson23Component;
  let fixture: ComponentFixture<Lesson23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lesson23Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Lesson23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
