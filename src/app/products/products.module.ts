import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsTemplateComponent } from './products-template/products-template.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailsComponent, ProductsTemplateComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ProductsModule {}
