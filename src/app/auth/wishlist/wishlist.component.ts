import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  userId: string | any = null;
  wishlist: any = [];
  email: string = '';

  details(id: string) {
    this.apiService.loadShirtById(id).subscribe({
      next: (value) => {
        this.router.navigate(['products/shirts/details/' + id]);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeFromWishlist(id: string) {
    if (!this.userId) {
      this.router.navigate(['auth/login']);
      return;
    }
    this.apiService.removeFromWishlist(id, this.userId).subscribe({
      next: (value) => {
        this.updateInfo();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateInfo() {
    this.apiService.loadUserWishlist(this.email).subscribe({
      next: (value) => {
        this.wishlist = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private localService: LocalService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.email = this.localService.getData('token');
      this.apiService.getUserId(this.email).subscribe({
        next: (value) => {
          this.userId = value;
        },
        error: (err) => {
          console.error(err);
        },
      });

      this.updateInfo();
    }
  }
}
