import { RouterModule, Routes } from '@angular/router';
import { guestGuard } from '../shared/guest.guard';
import { userGuard } from '../shared/user.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

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
        path: 'profile',
        component: ProfileComponent,
        canActivate: [userGuard],
      },
    ],
  },
];

export const AuthRouterModule = RouterModule.forChild(routes);
