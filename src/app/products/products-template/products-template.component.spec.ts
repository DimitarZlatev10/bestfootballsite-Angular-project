import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTemplateComponent } from './products-template.component';

describe('ProductsTemplateComponent', () => {
  let component: ProductsTemplateComponent;
  let fixture: ComponentFixture<ProductsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
