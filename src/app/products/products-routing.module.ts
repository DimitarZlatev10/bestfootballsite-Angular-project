import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ManCityComponent } from './man-city/man-city.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: 'english-league',
        children: [
          {
            path: 'man-city',
            component: ManCityComponent,
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
