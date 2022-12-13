import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { IShirt } from 'src/app/interfaces/shirt';
import { LocalService } from 'src/app/local.service';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrls: ['./products-template.component.css'],
})
export class ProductsTemplateComponent implements OnInit, OnDestroy {
  shirts: Array<IShirt> | any = [];
  currentTeam: string | null = '';
  userId: string | any = '';
  timeInterval: Subscription;

  details(id: string) {
    this.apiService.loadShirtById(id).subscribe({
      next: (value) => {
        console.log(value);
        this.router.navigate(['products/shirts/details/' + id]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addToWishList(id: string) {
    console.log(id);
    if (!this.userId) {
      this.router.navigate(['auth/login']);
      return;
    }
    this.apiService.addToWishlist(id, this.userId).subscribe({
      next: (value) => {
        console.log(value);
        this.updateTeamsInfo();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  removeFromWishlist(id: string) {
    console.log(id);
    if (!this.userId) {
      this.router.navigate(['auth/login']);
      return;
    }
    this.apiService.removeFromWishlist(id, this.userId).subscribe({
      next: (value) => {
        console.log(value);
        this.updateTeamsInfo();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  updateTeamsInfo() {
    this.currentTeam = this.activatedRoute.snapshot.data['team'];
    // this.apiService.loadShirtByTeamName(this.currentTeam).subscribe({
    //   next: (value) => {
    //     console.log(value);
    //     this.shirts = value;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    // });
    this.timeInterval = interval(50000)
      .pipe(
        startWith(0),
        switchMap(() => this.apiService.loadShirtByTeamName(this.currentTeam))
      )
      .subscribe({
        next: (value) => {
          console.log(value);
          this.shirts = value;
        },
      });
  }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.updateTeamsInfo();

    if (localStorage.getItem('token')) {
      const email = this.localService.getData('token');
      this.apiService.getUserId(email).subscribe({
        next: (value) => {
          this.userId = value;
          console.log(this.userId);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }
}
