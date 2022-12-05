import { RouterModule, Routes } from '@angular/router';
import { PanthsComponent } from './panths/panths.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'shirts',
        component: ShirtsComponent,
      },
      {
        path: 'sweatshirts',
        component: SweatshirtsComponent,
      },
      {
        path: 'shorts',
        component: ShirtsComponent,
      },
      {
        path: 'panths',
        component: PanthsComponent,
      },
    ],
  },
];

export const ProductsRoutingModule = RouterModule.forChild(routes);
