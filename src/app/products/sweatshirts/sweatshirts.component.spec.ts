import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweatshirtsComponent } from './sweatshirts.component';

describe('SweatshirtsComponent', () => {
  let component: SweatshirtsComponent;
  let fixture: ComponentFixture<SweatshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SweatshirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweatshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
