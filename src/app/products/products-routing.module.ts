import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ProductsTemplateComponent } from './products-template/products-template.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'teams',
        children: [
          {
            path: 'Manchester City',
            component: ProductsTemplateComponent,
            data: {
              team: 'Manchester City',
            },
          },
          {
            path: 'Manchester United',
            component: ProductsTemplateComponent,
            data: {
              team: 'Manchester United',
            },
          },
        ],
      },
      {
        path: 'spanish-league',
        children: [],
      },
      {
        path: 'german-league',
        children: [],
      },
      {
        path: 'italian-league',
        children: [],
      },
      {
        path: 'french-league',
        children: [],
      },
      {
        path: 'shirts/details/:id',
        component: DetailsComponent,
      },
    ],
  },
];

export const ProductsRoutingModule = RouterModule.forChild(routes);
