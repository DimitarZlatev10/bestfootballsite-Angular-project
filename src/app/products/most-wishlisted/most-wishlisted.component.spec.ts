import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWishlistedComponent } from './most-wishlisted.component';

describe('MostWishlistedComponent', () => {
  let component: MostWishlistedComponent;
  let fixture: ComponentFixture<MostWishlistedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostWishlistedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostWishlistedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
