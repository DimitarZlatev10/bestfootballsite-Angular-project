import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { LocalService } from 'src/app/local.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo: any = null;
  email: any = null;

  constructor(
    private apiService: ApiService,
    private localService: LocalService
  ) {}

  ngOnInit(): void {
    this.email = this.localService.getData('token');
    this.apiService.getUserInfo(this.email).subscribe({
      next: (value) => {
        console.log(value);
        this.userInfo = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
