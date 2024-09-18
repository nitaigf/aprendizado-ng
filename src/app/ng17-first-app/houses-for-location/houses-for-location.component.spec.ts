import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesForLocationComponent } from './houses-for-location.component';

describe('HousesForLocationComponent', () => {
  let component: HousesForLocationComponent;
  let fixture: ComponentFixture<HousesForLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousesForLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesForLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
