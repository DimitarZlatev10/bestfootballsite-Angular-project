import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IShirt } from 'src/app/interfaces/shirt';
import { IUser } from 'src/app/interfaces/user';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  id: string | null = '';
  item: IShirt[] | any = [];
  quantity: number;
  isLogged: string | null = null;
  userInfo: IUser | any = [];
  errorMessage: string;

  buyButton() {
    if (this.quantity == 0 || this.quantity == undefined) {
      this.errorMessage = 'Quantity must be highter than 0';
      return;
      // return console.log('Quantity must be highter than 0');
    }

    if (this.quantity > this.item.inStock) {
      this.errorMessage = 'There are not so many items in stock!';
      return;

      // return console.log('There are not so many items in stock!');
    }

    if (this.item.price * this.quantity > this.userInfo.balance) {
      this.errorMessage =
        'You dont have enough balance to buy this product';
      return;

      // return console.log(
      //   'You dont have enough balance to buy this many products'
      // );
    }

    this.apiService
      .buyProduct(this.userInfo._id, this.item._id, this.quantity)
      .subscribe({
        next: (value) => {
          console.log(value);
          this.updatePage();
        },
        error: (err) => {
          console.error(err);
        },
      });

    this.errorMessage = '';

    console.log('Success!');
  }

  updatePage() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.isLogged = this.localService.getData('token');
    console.log(this.isLogged);

    this.apiService.loadShirtById(this.id).subscribe({
      next: (value) => {
        console.log(value);
        this.item = value;
      },
      error: (err) => {
        console.error(err);
      },
    });

    const email = this.localService.getData('token');
    this.apiService.getUserInfo(email).subscribe({
      next: (value) => {
        this.userInfo = value;
        console.log(this.userInfo);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private localService: LocalService
  ) {}
  ngOnInit(): void {
    this.updatePage();
    // this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);

    // this.isLogged = this.localService.getData('token');
    // console.log(this.isLogged);

    // this.apiService.loadShirtById(this.id).subscribe({
    //   next: (value) => {
    //     console.log(value);
    //     this.item = value;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    // });

    // const email = this.localService.getData('token');
    // this.apiService.getUserInfo(email).subscribe({
    //   next: (value) => {
    //     this.userInfo = value;
    //     console.log(this.userInfo);
    //   },
    //   error: (err) => {
    //     console.error(err);
    //   },
    // });
  }
}
