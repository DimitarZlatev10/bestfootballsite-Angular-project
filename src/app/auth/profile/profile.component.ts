import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IUser } from 'src/app/interfaces/user';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo: Array<IUser> | any = [];
  email: string = '';
  fullName: string = '';
  pin: string = '';
  verifyPin: string = '';
  amount: number;
  errorMessage: string;

  isFullNameValid() {
    return /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/.test(this.fullName);
  }

  isPinValid() {
    return /^[0-9]{4}$/.test(this.pin);
  }

  isVerifyPinValid() {
    return /^[0-9]{4}$/.test(this.verifyPin);
  }

  isAmountValid() {
    return this.amount > 0 ? true : false;
  }

  isAmountTooMuch() {
    return this.amount > 1000 ? true : false;
  }

  addCard() {
    if (!this.isFullNameValid()) {
      return;
    }

    if (!this.isPinValid()) {
      return;
    }

    this.apiService
      .addCardInfo(this.userInfo._id, this.fullName, this.pin)
      .subscribe({
        next: (value) => {
          this.updatePage();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  addAmount() {
    if (!this.isAmountValid()) {
      return;
    }

    if (this.isAmountTooMuch()) {
      return;
    }

    if (this.userInfo.creditCardInfo[0].pin !== this.verifyPin) {
      this.errorMessage = 'Incorrect pin';
      return;
    }

    this.errorMessage = '';

    this.apiService.addAmount(this.userInfo._id, this.amount).subscribe({
      next: (value) => {
        this.updatePage();
      },
    });
  }

  updatePage() {
    this.email = this.localService.getData('token');
    this.apiService.getUserInfo(this.email).subscribe({
      next: (value) => {
        this.userInfo = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  constructor(
    private apiService: ApiService,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.updatePage();
  }
}
