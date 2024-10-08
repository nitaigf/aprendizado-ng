import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson05Component } from './lesson005.component';

describe('Lesson05Component', () => {
  let component: Lesson05Component;
  let fixture: ComponentFixture<Lesson05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lesson05Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Lesson05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
