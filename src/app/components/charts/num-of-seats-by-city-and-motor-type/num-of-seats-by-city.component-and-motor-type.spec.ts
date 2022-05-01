import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfSeatsByCityAndMotorTypeComponent } from './num-of-seats-by-city-and-motor-type.component';

describe('NumOfSeatsByCityComponent', () => {
  let component: NumOfSeatsByCityAndMotorTypeComponent;
  let fixture: ComponentFixture<NumOfSeatsByCityAndMotorTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOfSeatsByCityAndMotorTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfSeatsByCityAndMotorTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
