import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { MostWishlistedComponent } from './most-wishlisted/most-wishlisted.component';
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
          {
            path: 'Arsenal',
            component: ProductsTemplateComponent,
            data: {
              team: 'Arsenal',
            },
          },
          {
            path: 'Chelsea',
            component: ProductsTemplateComponent,
            data: {
              team: 'Chelsea',
            },
          },
          {
            path: 'Liverpool',
            component: ProductsTemplateComponent,
            data: {
              team: 'Liverpool',
            },
          },
          {
            path: 'Barcelona',
            component: ProductsTemplateComponent,
            data: {
              team: 'Barcelona',
            },
          },
        ],
      },
      // {
      //   path: 'spanish-league',
      //   children: [],
      // },
      // {
      //   path: 'german-league',
      //   children: [],
      // },
      // {
      //   path: 'italian-league',
      //   children: [],
      // },
      // {
      //   path: 'french-league',
      //   children: [],
      // },
      {
        path: 'shirts/details/:id',
        component: DetailsComponent,
      },
      {
        path: 'shirts/mostWishlisted',
        component: MostWishlistedComponent,
      },
    ],
  },
];

export const ProductsRoutingModule = RouterModule.forChild(routes);
