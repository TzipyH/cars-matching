import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesByGenderComponent } from './hobbies-by-gender.component';

describe('HobbiesByGenderComponent', () => {
  let component: HobbiesByGenderComponent;
  let fixture: ComponentFixture<HobbiesByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesByGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
