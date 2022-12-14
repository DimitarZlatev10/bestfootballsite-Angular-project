import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { IShirt } from 'src/app/interfaces/shirt';
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

  buyButton() {
    if (this.quantity == 0) {
      return;
    }
    console.log(this.quantity);
  }

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private localService: LocalService
  ) {}
  ngOnInit(): void {
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
  }
}
