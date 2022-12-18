import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IShirt } from 'src/app/interfaces/shirt';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-most-wishlisted',
  templateUrl: './most-wishlisted.component.html',
  styleUrls: ['./most-wishlisted.component.css'],
})
export class MostWishlistedComponent implements OnInit {
  shirts: Array<IShirt> | any = [];
  userId: any = '';

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

  addToWishList(id: string) {

    if (!this.userId) {
      this.router.navigate(['auth/login']);
      return;
    }
    this.apiService.addToWishlist(id, this.userId).subscribe({
      next: (value) => {

        this.updateTeamsInfo();
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

        this.updateTeamsInfo();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateTeamsInfo() {
    this.apiService.loadMostWishlistedShirts().subscribe({
      next: (value) => {
        this.shirts = value;

      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private apiService: ApiService,
    private localService: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateTeamsInfo();

    if (localStorage.getItem('token')) {
      const email = this.localService.getData('token');
      this.apiService.getUserId(email).subscribe({
        next: (value) => {
          this.userId = value;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
