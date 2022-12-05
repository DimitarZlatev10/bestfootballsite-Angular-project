import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css'],
})
export class ShirtsComponent implements OnInit {
  users: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadUsers().subscribe({
      next: (value) => {
        console.log(value);
        this.users = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
