import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShirtsComponent } from './shirts/shirts.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { ShortsComponent } from './shorts/shorts.component';
import { PanthsComponent } from './panths/panths.component';

@NgModule({
  declarations: [
    ShirtsComponent,
    SweatshirtsComponent,
    ShortsComponent,
    PanthsComponent,
  ],
  imports: [CommonModule],
})
export class ProductsModule {}
