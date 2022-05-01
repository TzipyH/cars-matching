import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsByCountryComponent } from './visitors-by-country.component';

describe('VisitorsByCountryComponent', () => {
  let component: VisitorsByCountryComponent;
  let fixture: ComponentFixture<VisitorsByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
