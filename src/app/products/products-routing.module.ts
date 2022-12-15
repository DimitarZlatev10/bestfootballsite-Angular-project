import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
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
          {
            path: 'Real Madrid',
            component: ProductsTemplateComponent,
            data: {
              team: 'Real Madrid',
            },
          },
          {
            path: 'Atletico Madrid',
            component: ProductsTemplateComponent,
            data: {
              team: 'Atletico Madrid',
            },
          },
          {
            path: 'Bayern Munich',
            component: ProductsTemplateComponent,
            data: {
              team: 'Bayern Munich',
            },
          },
          {
            path: 'Borussia Dortmund',
            component: ProductsTemplateComponent,
            data: {
              team: 'Borussia Dortmund',
            },
          },
          {
            path: 'RB Leipzig',
            component: ProductsTemplateComponent,
            data: {
              team: 'RB Leipzig',
            },
          },
          {
            path: 'Juventus',
            component: ProductsTemplateComponent,
            data: {
              team: 'Juventus',
            },
          },
          {
            path: 'Milan',
            component: ProductsTemplateComponent,
            data: {
              team: 'Milan',
            },
          },
          {
            path: 'Inter',
            component: ProductsTemplateComponent,
            data: {
              team: 'Inter',
            },
          },
          {
            path: 'Napoli',
            component: ProductsTemplateComponent,
            data: {
              team: 'Napoli',
            },
          },
          {
            path: 'PSG',
            component: ProductsTemplateComponent,
            data: {
              team: 'PSG',
            },
          },
          {
            path: 'Marseille',
            component: ProductsTemplateComponent,
            data: {
              team: 'Marseille',
            },
          },
          {
            path: 'Olympic Lyon',
            component: ProductsTemplateComponent,
            data: {
              team: 'Olympic Lyon',
            },
          },
        ],
      },
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
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const ProductsRoutingModule = RouterModule.forChild(routes);
