import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { guestGuard } from '../shared/guest.guard';
import { userGuard } from '../shared/user.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [guestGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [guestGuard],
      },
      {
        path: 'profileInfo',
        component: ProfileComponent,
        canActivate: [userGuard],
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        canActivate: [userGuard],
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const AuthRouterModule = RouterModule.forChild(routes);

