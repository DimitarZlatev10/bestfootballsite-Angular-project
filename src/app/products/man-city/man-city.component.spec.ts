import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManCityComponent } from './man-city.component';

describe('ManCityComponent', () => {
  let component: ManCityComponent;
  let fixture: ComponentFixture<ManCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
