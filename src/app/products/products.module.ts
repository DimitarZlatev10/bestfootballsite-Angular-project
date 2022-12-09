import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ManCityComponent } from './man-city/man-city.component';

@NgModule({
  declarations: [DetailsComponent, ManCityComponent],
  imports: [CommonModule, RouterModule],
})
export class ProductsModule {}
