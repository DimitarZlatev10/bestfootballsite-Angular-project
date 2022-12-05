import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanthsComponent } from './panths.component';

describe('PanthsComponent', () => {
  let component: PanthsComponent;
  let fixture: ComponentFixture<PanthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
