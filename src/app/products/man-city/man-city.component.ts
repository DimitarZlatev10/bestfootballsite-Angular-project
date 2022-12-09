import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IShirt } from 'src/app/interfaces/shirt';

@Component({
  selector: 'app-man-city',
  templateUrl: './man-city.component.html',
  styleUrls: ['./man-city.component.css'],
})
export class ManCityComponent implements OnInit {
  shirts: IShirt | any = null;
  // currentShirt: any = null;

  details(id: any) {
    this.apiService.loadShirtById(id).subscribe({
      next: (value) => {
        console.log(value);
        // this.currentShirt = value;
        // console.log(this.currentShirt);
        this.router.navigate(['products/shirts/details/' + id]);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiService.loadShirts().subscribe({
      next: (value) => {
        console.log(value);
        this.shirts = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
