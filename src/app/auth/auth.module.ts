import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRouterModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WishlistComponent,
  ],
  imports: [CommonModule, AuthRouterModule, FormsModule],
})
export class AuthModule {}
